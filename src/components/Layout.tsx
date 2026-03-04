import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

export default function Layout() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Mobile Navigation - visible on small screens */}
      <MobileNav />
      
      {/* Desktop Sidebar - visible on large screens */}
      {/* <Sidebar /> */}
      
      {/* Main content area */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:pr-64 min-h-screen"
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
