import { motion } from 'framer-motion';

// Placeholder image data - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: '/placeholder-gallery-1.jpg',
    alt: 'Namao - Lake Sturgeon',
    caption: 'The majestic Namao (Lake Sturgeon)',
    category: 'Namao',
  },
  {
    id: 2,
    src: '/placeholder-gallery-2.jpg',
    alt: 'Churchill River',
    caption: 'Churchill River - Before the Diversion',
    category: 'Waterways',
  },
  {
    id: 3,
    src: '/placeholder-gallery-3.jpg',
    alt: 'Tataskweyak Community',
    caption: 'Tataskweyak Cree Nation community',
    category: 'Community',
  },
  // Add more images as needed
];

const categories = ['All', 'Namao', 'Waterways', 'Community', 'Traditional'];

export default function PictureGallery() {
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
            Picture Gallery
          </h1>
          <p className="text-body-lg text-dark-strong mt-4 max-w-3xl">
            A visual journey through the lands, waters, and culture of Tataskweyak Cree Nation 
            and the majestic Namao (Lake Sturgeon).
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

        {/* Gallery Grid */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-neutral-900/60 border border-amber-500/20 cursor-pointer"
              >
                {/* Placeholder for image */}
                <div className="aspect-[4/3] bg-neutral-800/60 flex items-center justify-center">
                  <div className="text-white/40 text-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 mx-auto mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p className="text-sm">Add image: {image.src}</p>
                  </div>
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950/90 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-amber-200 font-medium">{image.caption}</p>
                  <span className="text-white/50 text-sm">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add More Images Notice */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20 text-center">
            <p className="text-white/60">
              📸 Add your images to the <code className="text-amber-200/80 bg-neutral-800 px-2 py-1 rounded">public/</code> folder 
              and update the <code className="text-amber-200/80 bg-neutral-800 px-2 py-1 rounded">galleryImages</code> array in this component.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
