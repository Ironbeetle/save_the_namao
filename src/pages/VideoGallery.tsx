import { motion } from 'framer-motion';
import VideoEmbed from '../components/VideoEmbed';

// Placeholder video data - replace with your actual video URLs
const videos = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER',
    title: 'The Story of Namao',
    description: 'An introduction to the Lake Sturgeon and its cultural significance to Tataskweyak Cree Nation.',
    platform: 'youtube' as const,
    category: 'Documentary',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=PLACEHOLDER',
    title: 'Churchill River Diversion Impact',
    description: 'Understanding the environmental effects of Manitoba Hydro\'s Churchill River Diversion.',
    platform: 'youtube' as const,
    category: 'Environmental',
  },
  {
    id: 3,
    url: 'https://vimeo.com/PLACEHOLDER',
    title: 'Traditional Knowledge and Namao',
    description: 'Elders share traditional knowledge about the Lake Sturgeon.',
    platform: 'vimeo' as const,
    category: 'Cultural',
  },
  // Add more videos as needed
];

const categories = ['All', 'Documentary', 'Environmental', 'Cultural', 'News'];

export default function VideoGallery() {
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
            Video Gallery
          </h1>
          <p className="text-body-lg text-dark-strong mt-4 max-w-3xl">
            Watch documentaries, news segments, and community voices sharing the story of 
            Namao and the fight for environmental justice.
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

        {/* Video Grid */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {videos.map((video) => (
              <VideoEmbed
                key={video.id}
                url={video.url}
                title={video.title}
                description={video.description}
                platform={video.platform}
              />
            ))}
          </div>
        </div>

        {/* Placeholder Notice */}
        <div className="px-4 lg:px-8 pb-12">
          <div className="bg-neutral-900/60 rounded-lg p-6 border border-amber-500/20 text-center">
            <p className="text-white/60">
              🎬 Replace the placeholder URLs in the <code className="text-amber-200/80 bg-neutral-800 px-2 py-1 rounded">videos</code> array 
              with actual YouTube or Vimeo video URLs.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
