import { motion } from 'framer-motion';

export default function SenatorMessage() {
  // Replace with actual video URL from Senator McCallum
  // const videoUrl = 'https://www.youtube.com/watch?v=PLACEHOLDER';

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
            Message from Senator McCallum
          </h1>
        </div>

        {/* Senator Info Card */}
        <div className="px-4 lg:px-8 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20 max-w-4xl"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Senator Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/sentatorprofileimg.jpg"
                  alt="Senator Mary Jane McCallum"
                  className="w-32 h-32 rounded-lg object-cover border border-amber-500/20"
                />
              </div>

              {/* Senator Info */}
              <div className="flex-1">
                <h2 className="text-2xl text-amber-200 font-semibold mb-2">
                  The Honourable Mary Jane McCallum
                </h2>
                <p className="text-white/70 text-lg mb-4">
                  Senator for Manitoba, Senate of Canada
                </p>
                <p className="text-white/60">
                  Senator McCallum is a passionate advocate for Indigenous rights and environmental justice. 
                  She has been a strong voice in Parliament for the protection of Namao and the rights of 
                  northern Manitoba First Nations communities affected by hydroelectric development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <div className="px-4 lg:px-8 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl"
          >
            <h2 className="text-heading text-dark mb-4">
              Video Message
            </h2>
            
            {/* Video Embed */}
            <div className="bg-neutral-900/60 rounded-lg overflow-hidden border border-amber-500/20">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src="https://player.vimeo.com/video/1157112087?badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Senator McCallum - Tataskweyak Cree Nation - FINAL"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Message Section */}
        <div className="px-4 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-heading text-dark mb-4">
              Key Message
            </h2>

            <div className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20">
              <blockquote className="text-quote text-white/80 italic border-l-4 border-amber-500 pl-6">
                "I ask that you to remember every
                time you use electricity, the great cost to northern citizens and nonhumans."
              </blockquote>
              {/* <p className="text-white/60 mt-4">
                I ask that you remember every
                time you use electricity the great cost to northern citizens and nonhumans.
              </p> */}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="px-4 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-amber-500/10 rounded-lg p-6 border border-amber-500/30 max-w-4xl"
          >
            <h3 className="text-xl text-amber-200 font-semibold mb-3">
              Take Action
            </h3>
            <p className="text-white/70 mb-4">
              Contact your Member of Parliament and Senators to voice your support for 
              Namao protection and Treaty rights before the September 2026 deadline.
            </p>
            <a
              href="https://www.parl.ca/Members"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 rounded-lg transition-colors duration-200"
            >
              Find Your Representatives
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
