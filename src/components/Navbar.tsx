import { ArrowRight, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex items-center justify-between w-full ${className}`}>
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/logo-new.png"
          alt="Latio Logo"
          className="w-15 h-15 object-contain hover:scale-110 transition-transform duration-300"
        />
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl tracking-tight leading-none">LATIO</span>
          <span className="text-gray-400 text-[9px] uppercase tracking-[0.3em] mt-1 font-medium">Creative & Tech Agency</span>
        </div>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-6 px-6 py-2 rounded-full border border-gray-700 bg-white/5 backdrop-blur-sm">
        {['Trang Chủ', 'Về Chúng Tôi', 'Dịch Vụ', 'Giải Pháp', 'Khách Hàng', 'Blog'].map((link) => {
          if (link === 'Trang Chủ') {
            return (
              <Link key={link} to="/" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {link}
              </Link>
            );
          }
          if (link === 'Về Chúng Tôi') {
            return (
              <Link key={link} to="/about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {link}
              </Link>
            );
          }
          if (link === 'Dịch Vụ') {
            return (
              <Link key={link} to="/services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {link}
              </Link>
            );
          }
          if (link === 'Blog') {
            return (
              <Link key={link} to="/blog" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {link}
              </Link>
            );
          }
          return (
            <a
              key={link}
              href={`/#${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link}
            </a>
          );
        })}
        <div className="w-px h-4 bg-gray-700 mx-2"></div>
        <Link to="/contact" className="group flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
          Liên Hệ
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden text-white cursor-pointer">
        <Menu className="w-6 h-6" />
      </div>
    </nav>
  );
}
