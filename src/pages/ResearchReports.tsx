import { motion } from 'framer-motion';

const researchItems = [
  {
    id: 1,
    title: 'Churchill River Adult Movement Study Summary Report',
    authors: 'AAE Tech',
    year: '2025',
    description: 'Summary report on adult Lake Sturgeon movement patterns in the Churchill River system.',
    type: 'Scientific Study',
    pdfUrl: '/reports/25 11 05 AAE Tech Churchill River Adult Movement Study Summary Report - FINAL.pdf',
  },
  {
    id: 2,
    title: 'Impact of the CRD on Lake Sturgeon',
    authors: 'Halket, AAE Tech',
    year: '2025',
    description: 'Analysis of the impact of the Churchill River Diversion (CRD) on Lake Sturgeon populations.',
    type: 'Environmental Report',
    pdfUrl: '/reports/25 11 06 Halket AAE Tech Impact of the CRD on Lake Sturgeon - Final.pdf',
  },
  {
    id: 3,
    title: 'Churchill River Lake Sturgeon Population Assessment Report',
    authors: 'AAE Tech',
    year: '2025',
    description: 'Comprehensive population assessment of Lake Sturgeon in the Churchill River.',
    type: 'Scientific Study',
    pdfUrl: '/reports/25 11 07 AAE Tech Churchill River Lake Sturgeon Population Assessment Report - FINAL.pdf',
  },
];

export default function ResearchReports() {
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
            Research & Studies
          </h1>
          <p className="text-body-lg text-dark-strong mt-4 max-w-3xl">
            Scientific research, environmental studies,supporting the protection of Namao and our waterways.
          </p>
        </div>
        {/* Research List */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="space-y-4">
            {researchItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 text-xs rounded bg-amber-500/20 text-amber-200">
                        {item.type}
                      </span>
                      <span className="text-white/50 text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-xl text-amber-200 font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-2">
                      By: {item.authors}
                    </p>
                    <p className="text-white/70">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 rounded-lg transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Download PDF
                    </a>
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
