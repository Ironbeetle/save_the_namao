import { useEffect, useState } from 'react';

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Only enable counting when running in a production build on a real host
  // and when the Vite flag `VITE_ENABLE_VISITOR_COUNT` is explicitly set to 'true'.
  const flagEnabled = String(import.meta.env.VITE_ENABLE_VISITOR_COUNT) === 'true';
  const shouldCount =
    import.meta.env.PROD &&
    flagEnabled &&
    typeof window !== 'undefined' &&
    !['localhost', '127.0.0.1'].includes(window.location.hostname);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setCount(0);
      setLoading(false);
      return;
    }

    if (!shouldCount) {
      // Keep a zero count in development/local previews until deployed.
      setCount(0);
      setLoading(false);
      return;
    }

    let cancelled = false;

    const namespace = encodeURIComponent(window.location.hostname || 'save-the-namao');
    const key = 'visits';
    const sessionFlag = `visitor_count_session_${namespace}_${key}_v1`;

    async function fetchCount() {
      try {
        // Debug: log the URLs we'll call so browser consoles can show DNS/CORS errors
        const hitUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;
        const getUrl = `https://api.countapi.xyz/get/${namespace}/${key}`;
        // eslint-disable-next-line no-console
        console.debug('[VisitorCount] namespace=', namespace, 'hitUrl=', hitUrl, 'getUrl=', getUrl, 'shouldCount=', shouldCount);
        const didIncrement = sessionStorage.getItem(sessionFlag);

        if (!didIncrement) {
          // Increment on first visit in this session and use returned value.
          const hitRes = await fetch(hitUrl);
          if (!cancelled && hitRes.ok) {
            const data = await hitRes.json();
            if (typeof data?.value === 'number') {
              setCount(data.value);
              sessionStorage.setItem(sessionFlag, '1');
              setLoading(false);
              return;
            }
          }
        }

        // Otherwise, just GET the current value (no increment)
        const getRes = await fetch(getUrl);
        if (!cancelled && getRes.ok) {
          const data = await getRes.json();
          if (typeof data?.value === 'number') {
            setCount(data.value);
            setLoading(false);
            return;
          }
        }

        if (!cancelled) {
          setCount(0);
          setLoading(false);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('[VisitorCount] fetch error', e);
        if (!cancelled) {
          setCount(null);
          setLoading(false);
        }
      }
    }

    fetchCount();

    return () => {
      cancelled = true;
    };
  }, [shouldCount]);

  return (
    <div className="inline-flex items-center gap-2 text-sm text-white/85">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-300/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
      <div className="flex flex-col">
        <span className="text-xs text-white/60">Visitors</span>
        <span className="font-semibold text-sm">{loading ? '—' : count ?? 0}</span>
      </div>
    </div>
  );
}

