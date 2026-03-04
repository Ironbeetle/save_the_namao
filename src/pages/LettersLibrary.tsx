import { motion } from 'framer-motion';

const letters = [
  {
    id: 1,
    title: 'Re: Fisheries Authorization Missi Falls Control Structure 2025',
    recipient: 'Department of Fisheries and Oceans (DFO)',
    date: '2025-04-22',
    summary: 'Letter -- TCN Chief Doreen Spence requests meeting with DFO to discuss CRD',
    pdfUrl: '/documents/25 04 22 SENT TCN lt DFO Re_Fisheries Authorization Missi Falls Control Structure 2025.pdf',
    status: 'Sent',
  },
  {
    id: 2,
    title: 'Re: CEC LWR Process',
    recipient: 'Minister Moyes',
    date: '2025-05-13',
    summary: 'Letter -- TCN Chief Doreen Spence calls on MB government to Clean Environment Commission review of CRD',
    pdfUrl: '/documents/25 05 13 TCN LT Minister Moyes re CEC LWR Process - to send.pdf',
    status: 'Sent',
  },
  {
    id: 3,
    title: 'Re: Sharing Reports',
    recipient: 'Department of Fisheries and Oceans (DFO)',
    date: '2025-11-19',
    summary: 'Letter -- TCN Chief Doreen Spence calls on DFO to protect namao on lower Churchill River',
    pdfUrl: '/documents/25 11 19 LT DFO re sharing reports - to send.pdf',
    status: 'Sent',
  },
  {
    id: 4,
    title: 'Re: Lower Churchill River Sturgeon',
    recipient: 'Department of Fisheries and Oceans (DFO)',
    date: '2025-11-19',
    summary: 'Letter -- Chief Spence letter to DFO concerning Lake Sturgeon in the Lower Churchill River.',
    pdfUrl: '/documents/25 11 19 TCN Chief Spence LT DFO re Lower Churchill River Sturgeon - to send.pdf',
    status: 'Sent',
  },
  {
    id: 5,
    title: 'Re: Increase Missi Flows',
    recipient: 'MBH Sala',
    date: '2025-12-03',
    summary: 'Letter -- TCN Chief Doreen Spence responds to 2025 Notice of Operating Plan Forecast- Missi Falls',
    pdfUrl: '/documents/25 12 03 LT MBH Sala re increase Missi flows - to send.pdf',
    status: 'Sent',
  },
  {
    id: 6,
    title: 'Re: STEL',
    recipient: 'Moyes Sala',
    date: '2025-12-04',
    summary: 'Letter -- TCN Chief Doreen Spence responds to Short Term Extension Licence Request',
    pdfUrl: '/documents/25 12 04 LT Moyes Sala re STEL - to send.pdf',
    status: 'Sent',
  },
  {
    id: 7,
    title: 'Re: Op Ed Tataskweyak Cree Nation',
    recipient: 'Open Letter',
    date: '2026-02-17',
    summary: 'Letter -- TCN Chief Doreen Spence commentary on Churchill River Diversion project liscence renewal.',
    pdfUrl: '/documents/26 02 17 Op Ed Tataskweyak Cree Nation final clean.pdf',
    status: 'Sent',
  },
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
      </motion.div>
    </>
  );
}
