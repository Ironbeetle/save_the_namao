import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NamaoHome() {
  return (
    <>
      {/* Fixed background layer desktop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }} 
        className="hidden lg:block md:block fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/sturgeonimage1.jpg")' }}
      />
      {/* Fixed background layer mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }} 
        className="lg:hidden md:hidden block fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/sturgeonmobilebkg.jpg")' }}
      />
      {/* Content layer 1 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.50, ease: 'easeInOut' }} 
        className="relative z-10 w-full min-h-screen"
      >
        <div className="h-[20vh] text-7xl md:text-8xl lg:text-9xl font-bold text-neutral-900/50 rounded flex items-start justify-center p-12">
            Save The Namao
        </div>
        <div className="h-[80vh] flex items-end justify-center p-12">
          <div className='w-full grid grid-cols-1 lg:grid-cols-7 md:grid-cols-2 gap-4 bg-neutral-950/60 p-2'>
            <div className="lg:col-span-3 md:col-span-2 flex flex-row justify-evenly items-center">
              <img 
                src="/tcnlogosm.png" 
                alt="Namao Sturgeon" 
                className="w-[25%] h-auto rounded-lg"
              />
              <div className="text-white/75 text-xl md:text-2xl lg:text-5xl">
                Tataskweyak Cree Nation
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-2 flex flex-col justify-center items-center">
              <Link 
                to="/story" 
                className="text-2xl md:text-3xl lg:text-4xl text-white/75 bg-amber-500/25 hover:bg-amber-500/40 px-8 py-4 rounded-lg transition-all duration-300"
              >
                Discover The Story →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
