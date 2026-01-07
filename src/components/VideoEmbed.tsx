import { motion } from 'framer-motion';

interface VideoEmbedProps {
  url: string;
  title: string;
  description?: string;
  platform?: 'youtube' | 'vimeo' | 'other';
}

// Extract video ID from YouTube or Vimeo URLs
function getEmbedUrl(url: string, platform: 'youtube' | 'vimeo' | 'other'): string {
  if (platform === 'youtube') {
    // Handle various YouTube URL formats
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  } else if (platform === 'vimeo') {
    // Handle Vimeo URL formats
    const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/;
    const match = url.match(vimeoRegex);
    if (match && match[1]) {
      return `https://player.vimeo.com/video/${match[1]}`;
    }
  }
  return url;
}

export default function VideoEmbed({ url, title, description, platform = 'youtube' }: VideoEmbedProps) {
  const embedUrl = getEmbedUrl(url, platform);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900/60 rounded-lg overflow-hidden border border-amber-500/20"
    >
      <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <h3 className="text-amber-200 font-semibold text-lg">{title}</h3>
        {description && (
          <p className="text-white/60 text-sm mt-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
