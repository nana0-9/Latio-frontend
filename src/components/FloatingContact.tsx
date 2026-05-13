import { motion } from 'framer-motion';
import { Phone, Activity } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { ShinyText } from './ShinyText';

// Custom Brand Icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ZaloIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M20.5 11.2c-.3 0-.5.2-.5.5v1.6c0 .3.2.5.5.5s.5-.2.5-.5v-1.6c0-.3-.2-.5-.5-.5zm-3.1 0c-.3 0-.5.2-.5.5v1.6c0 .3.2.5.5.5s.5-.2.5-.5v-1.6c0-.3-.2-.5-.5-.5zm-6.1.5c0-.3-.2-.5-.5-.5h-1.6c-.3 0-.5.2-.5.5s.2.5.5.5h1.6c.3 0 .5-.2.5-.5zm1.5-3.3c-.3 0-.5.2-.5.5v1.6c0 .3.2.5.5.5s.5-.2.5-.5v-1.6c0-.3-.2-.5-.5-.5zm-1.5 5.9c0-.3-.2-.5-.5-.5h-1.6c-.3 0-.5.2-.5.5s.2.5.5.5h1.6c.3 0 .5-.2.5-.5zm6.1-2.6c0-.3-.2-.5-.5-.5h-1.6c-.3 0-.5.2-.5.5s.2.5.5.5h1.6c.3 0 .5-.2.5-.5zm-3.1 0c0-.3-.2-.5-.5-.5h-1.6c-.3 0-.5.2-.5.5s.2.5.5.5h1.6c.3 0 .5-.2.5-.5zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3l-1.4 4.8 4.9-1.4c1.5.9 3.3 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

export function FloatingContact() {
  const location = useLocation();
  if (location.pathname === '/admin') return null;

  const contacts = [
    {
      icon: FacebookIcon,
      label: 'Facebook',
      href: 'https://facebook.com/latiodigital',
      color: 'bg-[#1877F2]',
      shadow: 'shadow-[#1877F2]/40',
      glow: 'rgba(24, 119, 242, 0.4)'
    },
    {
      icon: ZaloIcon,
      label: 'Zalo',
      href: 'https://zalo.me/0899180086',
      color: 'bg-[#0068FF]',
      shadow: 'shadow-[#0068FF]/40',
      glow: 'rgba(0, 104, 255, 0.4)'
    },
    {
      icon: Phone,
      label: 'Gọi ngay',
      href: 'tel:0899180086',
      color: 'bg-[#22C55E]',
      shadow: 'shadow-[#22C55E]/40',
      glow: 'rgba(34, 197, 94, 0.4)',
      isRinging: true
    }
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-[9999] flex flex-col items-end gap-3 sm:gap-5"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* Bubble - hidden on small screens to save space */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
        transition={{
          opacity: { delay: 1, duration: 0.8 },
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          scale: { delay: 1, duration: 0.8 }
        }}
        className="hidden sm:block relative group/bubble"
      >
        {/* Ambient Glow behind bubble */}
        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-2xl animate-pulse" />

        <div className="relative bg-black/90 backdrop-blur-xl px-5 py-2.5 rounded-2xl rounded-br-none shadow-[0_0_30px_rgba(0,242,255,0.2)] border border-cyan-500/50 flex items-center gap-3 min-w-[220px]">
          {/* Live Indicator */}
          <div className="relative flex items-center justify-center">
            <Activity size={14} className="text-cyan-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
          </div>

          <ShinyText
            text="Tư vấn MIỄN PHÍ ngay!"
            className="text-[16px] font-black whitespace-nowrap tracking-tight"
          />

          <div className="absolute top-full right-0 w-3 h-3 bg-black/90 [clip-path:polygon(0_0,100%_0,100%_100%)] border-r border-cyan-500/30" />
        </div>
      </motion.div>

      {contacts.map((contact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="relative group flex items-center"
        >
          {/* Elegant Sonar Rings (Clear & Distinct) */}
          {contact.isRinging && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ scale: [0.8, 2], opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-14 h-14 bg-[#22C55E] rounded-full border border-[#22C55E]/50"
              />
              <motion.div
                animate={{ scale: [0.8, 2.8], opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute w-14 h-14 bg-[#22C55E] rounded-full border border-[#22C55E]/30"
              />
              <motion.div
                animate={{ scale: [0.8, 3.5], opacity: [0, 0.2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 2 }}
                className="absolute w-14 h-14 bg-[#22C55E] rounded-full border border-[#22C55E]/20"
              />
            </div>
          )}

          <motion.a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }
            }}
            className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${contact.color} text-white rounded-full shadow-2xl ${contact.shadow} transition-all duration-300 border border-white/20 z-10 overflow-hidden`}
            style={{
              boxShadow: `0 10px 30px -5px ${contact.glow}`
            }}
          >
            {/* Smooth Shine Sweep Effect (Stays inside) */}
            <motion.div
              animate={{
                left: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "linear",
                delay: index * 1
              }}
              className="absolute top-0 bottom-0 w-8 bg-white/20 -skew-x-[45deg] z-0 pointer-events-none"
            />

            <motion.div
              animate={contact.isRinging ? {
                rotate: [0, -15, 15, -15, 15, 0],
              } : {}}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              className="relative z-10"
            >
              <contact.icon />
            </motion.div>
          </motion.a>

          {/* Minimalist Label */}
          <span className="absolute right-full mr-6 px-4 py-2 rounded-xl bg-black/90 backdrop-blur-xl text-white text-[11px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 border border-white/10 shadow-2xl">
            {contact.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
