import { motion } from 'framer-motion';

// Placeholder research data - replace with your actual reports
const researchItems = [
  {
    id: 1,
    title: 'Lake Sturgeon Population Assessment',
    authors: 'Research Team Name',
    year: '2024',
    description: 'Comprehensive study on the current population status of Lake Sturgeon in the Churchill River system.',
    type: 'Scientific Study',
    pdfUrl: '/reports/placeholder-study-1.pdf',
  },
  {
    id: 2,
    title: 'Impact of Churchill River Diversion on Aquatic Ecosystems',
    authors: 'Environmental Research Institute',
    year: '2023',
    description: 'Analysis of ecological changes following the implementation of the Churchill River Diversion.',
    type: 'Environmental Report',
    pdfUrl: '/reports/placeholder-study-2.pdf',
  },
  {
    id: 3,
    title: 'Traditional Ecological Knowledge of Namao',
    authors: 'Tataskweyak Cree Nation Elders',
    year: '2022',
    description: 'Documentation of traditional knowledge about Lake Sturgeon from community elders.',
    type: 'Traditional Knowledge',
    pdfUrl: '/reports/placeholder-study-3.pdf',
  },
  // Add more research items as needed
];

const categories = ['All', 'Scientific Study', 'Environmental Report', 'Traditional Knowledge', 'Government Report'];

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
            Scientific research, environmental studies, and traditional knowledge documentation 
            supporting the protection of Namao and our waterways.
          </p>
        </div>

        {/* Category Filter */}
        <div className="px-4 lg:px-8 pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-neutral-900/60 text-white/70 hover:bg-amber-500/30 hover:text-amber-200 transition-all duration-200 text-sm"
              >
                {category}
              </button>
            ))}
          </div>
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

        {/* Placeholder Notice */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20 text-center">
            <p className="text-white/60">
              📄 Add your PDF reports to the <code className="text-amber-200/80 bg-neutral-800 px-2 py-1 rounded">public/reports/</code> folder 
              and update the <code className="text-amber-200/80 bg-neutral-800 px-2 py-1 rounded">researchItems</code> array with actual data.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
