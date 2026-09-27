'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Check, Sparkles, BookOpen, Smartphone, Clock } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

export default function SolutionSection() {
  return (
    <section id="solucao" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC9]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big Product Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-lg">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#F0E8DD]">
                <Image
                  src="/images/ebook_mockup.jpg"
                  alt="Ebook 10 Bolos Caseiros Fáceis e Deliciosos - Cozinha Livre"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float info card */}
              <div className="mt-4 bg-white/95 backdrop-blur-sm border border-[#E8DEC9] rounded-xl p-4 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF4EC] text-[#C2652B] flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#301B14]">Acesso Imediato ao Ebook</h4>
                    <p className="text-[11px] sm:text-xs text-[#7A675F]">Acesse no celular, computador ou tablet</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#2D6A4F] bg-[#E8F5E9] px-2.5 py-1 rounded-md">
                  Pronto para uso
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Solution Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
              A solução definitiva
            </p>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight mb-4" style={{ textWrap: 'balance' }}>
              Conheça o 10 Bolos Caseiros Fáceis e Deliciosos
            </h2>

            <p className="text-base sm:text-lg text-[#55433C] leading-relaxed mb-6">
              Um ebook criado para quem quer preparar bolos saborosos sem precisar dominar técnicas complicadas de confeitaria.
            </p>

            <div className="w-full bg-[#F4EFE6] border-l-4 border-[#C2652B] rounded-r-xl p-4 mb-6">
              <p className="text-sm sm:text-base font-medium text-[#301B14]">
                Você recebe receitas organizadas, ingredientes e modo de preparo passo a passo.
              </p>
            </div>

            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#301B14] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#E6A05A]" />
                </div>
                <span className="text-sm sm:text-base text-[#4D3B34]">Instruções detalhadas com medidas simples (xícaras e colheres).</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#301B14] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#E6A05A]" />
                </div>
                <span className="text-sm sm:text-base text-[#4D3B34]">Ingredientes do dia a dia, fáceis de comprar em qualquer quitanda ou mercado.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#301B14] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#E6A05A]" />
                </div>
                <span className="text-sm sm:text-base text-[#4D3B34]">Dicas de forno e tempo certo de assar para nunca mais errar o ponto.</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={CHECKOUT_URL}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-[#301B14] hover:bg-[#C2652B] transition-all shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C2652B]/30"
            >
              <span>QUERO MEU EBOOK</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
