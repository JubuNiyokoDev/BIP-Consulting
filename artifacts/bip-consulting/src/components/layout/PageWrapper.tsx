import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function PageWrapper({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`min-h-[100dvh] flex flex-col pt-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Section({ children, className = '', id }: { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6,     ease: [0.22, 1, 0.36, 1] as const }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
