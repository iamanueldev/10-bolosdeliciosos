'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Check, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

export default function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#28150D] text-white relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#C2652B]/20 via-[#E6A05A]/15 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Top Tagline */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E6C280] mb-3">
          Pronta para transformar suas receitas?
        </p>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ textWrap: 'balance' }}>
          Está na hora de colocar a mão na massa
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#E0D2C7] max-w-2xl mx-auto leading-relaxed mb-10">
          Tenha receitas simples para preparar bolos deliciosos e ainda descubra dezenas de maneiras de variar recheios, coberturas e sabores.
        </p>

        {/* Product Reminder Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto mb-10 text-left">
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#C2652B] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm sm:text-base font-bold text-white">
                10 BOLOS CASEIROS FÁCEIS E DELICIOSOS
              </span>
            </div>
            
            <div className="flex items-center justify-center py-0.5 text-xs text-[#E6C280] font-bold">
              +
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#C2652B] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm sm:text-base font-bold text-white">
                BÔNUS: KIT DE RECHEIOS & COBERTURAS
              </span>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-[#DEC8BD]">Valor promocional</span>
            <span className="text-2xl sm:text-3xl font-bold text-[#FFD382]">
              3.000 Kz
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <motion.a
            href={CHECKOUT_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg sm:text-xl font-bold text-[#301B14] bg-[#FAF7F2] hover:bg-[#FFD382] transition-all shadow-xl shadow-black/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            <span>QUERO MEU EBOOK AGORA</span>
            <ArrowRight className="w-5 h-5 text-[#301B14]" />
          </motion.a>

          {/* Subtext */}
          <p className="mt-4 text-xs sm:text-sm text-[#DEC8BD] flex items-center gap-2">
            <span>Acesso digital</span>
            <span aria-hidden="true" className="text-[#A58F85]">·</span>
            <span>Pagamento único</span>
            <span aria-hidden="true" className="text-[#A58F85]">·</span>
            <span>Entrega imediata</span>
          </p>
        </div>

      </div>
    </section>
  );
}
