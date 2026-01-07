import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/story', label: 'The Story' },
  { path: '/gallery', label: 'Picture Gallery' },
  { path: '/videos', label: 'Video Gallery' },
  { path: '/research', label: 'Research & Studies' },
  { path: '/letters', label: 'Letters Library' },
  { path: '/senator-message', label: 'Senator McCallum' },
  { path: '/satellite', label: 'Satellite Views' },
  { path: '/links', label: 'Links of Interest' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Top Navigation Bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 h-16 bg-neutral-950/95 backdrop-blur-sm border-b border-amber-500/20 flex items-center justify-between px-4 z-50"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/tcnlogosm.png" 
            alt="TCN Logo" 
            className="w-8 h-8 rounded"
          />
          <span className="text-amber-200/90 font-semibold text-sm">Save The Namao</span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="p-2 text-amber-200/80 hover:text-amber-200 transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 right-0 bottom-0 w-72 bg-neutral-950/98 backdrop-blur-md border-l border-amber-500/20 z-50 overflow-y-auto"
            >
              <ul className="py-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-6 py-3 text-base transition-all duration-200 ${
                          isActive
                            ? 'bg-amber-500/20 text-amber-200 border-r-2 border-amber-400'
                            : 'text-white/70 hover:bg-amber-500/10 hover:text-amber-200/90'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Footer in mobile menu */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-amber-500/20">
                <p className="text-white/40 text-xs text-center">
                  Tataskweyak Cree Nation
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to push content below fixed header */}
      <div className="h-16" />
    </div>
  );
}
