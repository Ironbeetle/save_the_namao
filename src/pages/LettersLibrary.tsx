import { motion } from 'framer-motion';

// Placeholder letters data - replace with your actual letters
const letters = [
  {
    id: 1,
    title: 'Request for Environmental Assessment',
    recipient: 'Minister of Environment and Climate Change',
    date: '2024-06-15',
    summary: 'Formal request for a comprehensive environmental assessment before granting permanent operating licence to Manitoba Hydro.',
    pdfUrl: '/letters/placeholder-letter-1.pdf',
    status: 'Sent',
  },
  {
    id: 2,
    title: 'Treaty Rights and Namao Protection',
    recipient: 'Minister of Crown-Indigenous Relations',
    date: '2024-05-20',
    summary: 'Letter highlighting the violation of Treaty rights through the destruction of traditional fisheries.',
    pdfUrl: '/letters/placeholder-letter-2.pdf',
    status: 'Response Received',
  },
  {
    id: 3,
    title: 'Appeal for Species Protection',
    recipient: 'Province of Manitoba - Minister of Natural Resources',
    date: '2024-04-10',
    summary: 'Urgent appeal for provincial action to protect Lake Sturgeon populations.',
    pdfUrl: '/letters/placeholder-letter-3.pdf',
    status: 'Pending Response',
  },
  // Add more letters as needed
];

const statusColors: Record<string, string> = {
  'Sent': 'bg-blue-500/20 text-blue-300',
  'Response Received': 'bg-green-500/20 text-green-300',
  'Pending Response': 'bg-yellow-500/20 text-yellow-300',
  'No Response': 'bg-red-500/20 text-red-300',
};

export default function LettersLibrary() {
  return (
    <>
      {/* Fixed background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/sturgeonimgblur2.jpg")' }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 min-h-screen"
      >
        {/* Header */}
        <div className="pt-8 pb-6 px-4 lg:px-8">
          <h1 className="text-display text-dark text-center lg:text-left">
            Letters Library
          </h1>
          <p className="text-body-lg text-dark-strong mt-4 max-w-3xl">
            Archive of official correspondence with federal and provincial governments 
            regarding Namao protection and Treaty rights.
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="px-4 lg:px-8 pb-6">
          <div className="bg-red-900/40 border border-red-500/40 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              <p className="text-red-200">
                <strong>Deadline Alert:</strong> Manitoba Hydro's permanent operating licence decision is expected by September 2026. 
                Time is critical for government action.
              </p>
            </div>
          </div>
        </div>

        {/* Letters Timeline */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="space-y-4">
            {letters.map((letter, index) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-900/60 rounded-lg overflow-hidden border border-amber-500/20"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      {/* Status and Date */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-2 py-1 text-xs rounded ${statusColors[letter.status] || 'bg-gray-500/20 text-gray-300'}`}>
                          {letter.status}
                        </span>
                        <span className="text-white/50 text-sm">
                          {new Date(letter.date).toLocaleDateString('en-CA', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl text-amber-200 font-semibold mb-2">
                        {letter.title}
                      </h3>

                      {/* Recipient */}
                      <p className="text-white/50 text-sm mb-3">
                        <span className="text-white/70">To:</span> {letter.recipient}
                      </p>

                      {/* Summary */}
                      <p className="text-white/70">
                        {letter.summary}
                      </p>
                    </div>

                    {/* Download Button */}
                    <div className="flex-shrink-0">
                      <a
                        href={letter.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 rounded-lg transition-colors duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        View Letter
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Placeholder Notice */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20 text-center">
            <p className="text-white/60">
              ✉️ Add your letter PDFs to the <code className="text-amber-200/80 bg-neutral-800 px-2 py-1 rounded">public/letters/</code> folder 
              and update the <code className="text-amber-200/80 bg-neutral-800 px-2 py-1 rounded">letters</code> array with actual correspondence data.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
