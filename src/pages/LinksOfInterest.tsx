import { motion } from 'framer-motion';

// Links data - add your actual links here
const linkCategories = [
  {
    category: 'Tataskweyak Cree Nation',
    links: [
      {
        title: 'TCN Lands Stewardship',
        url: 'https://tcntrsc.ca',
        description: 'Tataskweyak Cree Nation Traditional Resource Stewardship Council - Land and resource stewardship initiatives.',
      },
      {
        title: 'Tataskweyak Cree Nation Official Site',
        url: 'https://www.tataskweyak.ca',
        description: 'Official website of Tataskweyak Cree Nation.',
      },
    ],
  },
  {
    category: 'Lake Sturgeon Conservation',
    links: [
      {
        title: 'Lake Sturgeon - Species at Risk',
        url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry.html',
        description: 'Government of Canada Species at Risk Public Registry.',
      },
      {
        title: 'Manitoba Lake Sturgeon Management',
        url: 'https://www.gov.mb.ca/fish-wildlife/',
        description: 'Manitoba Fish and Wildlife - Lake Sturgeon information.',
      },
    ],
  },
  {
    category: 'Environmental & Treaty Rights',
    links: [
      {
        title: 'Assembly of First Nations',
        url: 'https://www.afn.ca',
        description: 'National advocacy organization representing First Nation citizens in Canada.',
      },
      {
        title: 'Manitoba Keewatinowi Okimakanak',
        url: 'https://www.mkonation.com',
        description: 'Political advocacy organization for northern Manitoba First Nations.',
      },
    ],
  },
  {
    category: 'Hydroelectric Development',
    links: [
      {
        title: 'Manitoba Hydro',
        url: 'https://www.hydro.mb.ca',
        description: 'Manitoba\'s Crown corporation responsible for hydroelectric generation.',
      },
      {
        title: 'Manitoba Clean Environment Commission',
        url: 'https://www.cecmanitoba.ca',
        description: 'Independent body that reviews environmental matters in Manitoba.',
      },
    ],
  },
  {
    category: 'Government Resources',
    links: [
      {
        title: 'Crown-Indigenous Relations',
        url: 'https://www.rcaanc-cirnac.gc.ca',
        description: 'Federal department responsible for Crown-Indigenous relations and Northern affairs.',
      },
      {
        title: 'Senate of Canada',
        url: 'https://sencanada.ca',
        description: 'The Senate of Canada - Find your senators and follow legislative proceedings.',
      },
    ],
  },
];

export default function LinksOfInterest() {
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
            Links of Interest
          </h1>
          <p className="text-body-lg text-dark-strong mt-4 max-w-3xl">
            Explore resources from Tataskweyak Cree Nation, conservation organizations, 
            government bodies, and other relevant organizations.
          </p>
        </div>

        {/* Links by Category */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="space-y-8">
            {linkCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-heading text-dark mb-4">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-neutral-900/60 rounded-lg p-5 border border-amber-500/20 hover:border-amber-500/50 hover:bg-neutral-900/80 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg text-amber-200 font-semibold group-hover:text-amber-100 transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-white/60 text-sm mt-2">
                            {link.description}
                          </p>
                          <p className="text-white/40 text-xs mt-3 truncate">
                            {link.url}
                          </p>
                        </div>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-5 h-5 text-amber-500/50 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 flex-shrink-0"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TCN Highlight Card */}
        <div className="px-4 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src="/tcnlogosm.png" 
                alt="TCN Logo" 
                className="w-20 h-20 rounded-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl text-amber-200 font-semibold mb-2">
                  Tataskweyak Cree Nation Land Stewardship
                </h3>
                <p className="text-white/70 mb-4">
                  Learn more about TCN's land stewardship initiatives and their ongoing work 
                  to protect traditional territories and resources.
                </p>
                <a
                  href="https://tcntrsc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 rounded-lg transition-colors duration-200"
                >
                  Visit tcntrsc.ca
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Add More Links Notice */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20 text-center">
            <p className="text-white/60">
              🔗 Add more links by updating the <code className="text-amber-200/80 bg-neutral-800 px-2 py-1 rounded">linkCategories</code> array 
              in this component.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
