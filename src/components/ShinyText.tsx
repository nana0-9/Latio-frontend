import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  className?: string;
}

export function ShinyText({ text, className = '' }: ShinyTextProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ backgroundPosition: '200% 0' }}
      animate={{ backgroundPosition: '-200% 0' }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: 'linear',
      }}
      style={{
        backgroundImage: 'linear-gradient(100deg, #64CEFB 20%, #ffffff 50%, #64CEFB 80%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {text}
    </motion.div>
  );
}
