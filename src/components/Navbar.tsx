import { ArrowRight, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navbar({ className = "" }: { className?: string }) {
  const location = useLocation();

  const navItems = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Về Chúng Tôi', path: '/about' },
    { name: 'Dịch Vụ', path: '/services' },
    { name: 'Giải Pháp', path: '/solutions' },
    { name: 'Khách Hàng', path: '/clients' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`flex items-center justify-between w-full ${className}`}>
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <img
          src="/logo-new.png"
          alt="Latio Logo"
          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl tracking-tight leading-none group-hover:text-blue-400 transition-colors">LATIO</span>
          <span className="text-gray-400 text-[9px] uppercase tracking-[0.3em] mt-1 font-medium">Creative & Tech Agency</span>
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
              
              {/* Sliding Background Indicator - Premium Upgrade */}
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                >
                  {/* Main Pill Background with Glass effect */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.5)]" />
                  
                  {/* Subtle Blue Glow underneath */}
                  <div className="absolute inset-2 bg-blue-500/20 blur-md rounded-full" />
                  
                  {/* Top Edge Light Detail */}
                  <div className="absolute top-0 inset-x-4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                  
                  {/* Bottom Edge Reflection */}
                  <div className="absolute bottom-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </motion.div>
              )}

              {/* Subtle hover effect for non-active items */}
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

      {/* Mobile Menu Icon */}
      <div className="lg:hidden text-white cursor-pointer">
        <Menu className="w-6 h-6" />
      </div>
    </nav>
  );
}
