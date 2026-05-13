import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar({ className = "" }: { className?: string }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Về Chúng Tôi', path: '/about' },
    { name: 'Dịch Vụ', path: '/services' },
    { name: 'Giải Pháp', path: '/solutions' },
    { name: 'Blog', path: '/blog' },
  ];

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <nav className={`flex items-center justify-between w-full ${className}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={handleNavClick}>
          <img
            src="/logo-new.png"
            alt="Latio Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight leading-none group-hover:text-blue-400 transition-colors">LATIO</span>
            <span className="text-gray-400 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] mt-1 font-medium">Creative & Tech Agency</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md relative">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-1.5 text-sm font-bold transition-all duration-300 rounded-full group ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.5)]" />
                    <div className="absolute inset-2 bg-blue-500/20 blur-md rounded-full" />
                    <div className="absolute top-0 inset-x-4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                    <div className="absolute bottom-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </motion.div>
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-full transition-colors duration-300" />
                )}
              </Link>
            );
          })}
          <div className="w-px h-4 bg-white/10 mx-2"></div>
          <Link
            to="/contact"
            className={`group flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-300 ${
              location.pathname === '/contact' ? 'text-white bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'text-white/80 hover:text-white'
            }`}
          >
            <span className="text-sm font-bold">Liên Hệ</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${location.pathname === '/contact' ? '' : 'group-hover:translate-x-1'}`} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-transform"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-black/95 border-l border-white/10 z-[9999] flex flex-col pt-6 px-6 pb-10 shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-10">
                <Link to="/" onClick={handleNavClick} className="flex items-center gap-3">
                  <img src="/logo-new.png" alt="Latio Logo" className="w-10 h-10 object-contain" />
                  <span className="text-white font-bold text-lg tracking-tight">LATIO</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navItems.map((item, i) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        to={item.path}
                        onClick={handleNavClick}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-base transition-all duration-200 ${
                          isActive
                            ? 'bg-blue-600/20 border border-blue-500/30 text-white'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA */}
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Liên Hệ Ngay
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
