import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { path: '/', 
    label: 'Home',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ) 
  },
  { path: '/story', 
    label: 'The Story',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    )
  },
  { path: '/gallery', 
    label: 'Picture Gallery',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
      </svg>
    )
  },
  { path: '/videos', 
    label: 'Video Gallery',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
      </svg>
    )
  },
  { path: '/research', 
    label: 'Research & Studies',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
      </svg>
    )
  },
  { path: '/letters', 
    label: 'Letters Library',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
      </svg>
    )
  },
  { path: '/senator-message', 
    label: 'Senator McCallum',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
      </svg>
    )
  },
  { path: '/satellite', 
    label: 'Satellite Views',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
      </svg>
    )
  },
  { path: '/links', 
    label: 'Links of Interest',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
      </svg>
    )
  },
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

        {/* spacer for alignment */}
        <div className="mr-2" />

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
                      {item.icon}
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
