'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após passar a hero section (~450px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#301B14]/95 backdrop-blur-md border-t border-[#4A2D23] px-4 py-2.5 shadow-2xl"
          style={{ maxHeight: '64px' }}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="truncate">
              <span className="text-[11px] font-medium text-[#E6C280] block truncate">
                10 Bolos Caseiros
              </span>
              <span className="text-sm font-bold text-white tracking-tight">
                3.000 Kz
              </span>
            </div>

            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-lg bg-[#C2652B] hover:bg-[#D47738] active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shrink-0 transition-transform"
            >
              <span>COMPRAR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
