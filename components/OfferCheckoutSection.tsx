'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Smartphone, 
  Lock,
  Check,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

export default function OfferCheckoutSection() {
  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-[#F5EFE6] border-b border-[#E8DEC9]/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            OFERTA ESPECIAL DE LANÇAMENTO
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#301B14] leading-tight mb-3" style={{ textWrap: 'balance' }}>
            Tudo o que você precisa por apenas 3.000 Kz
          </h2>
          <p className="text-sm sm:text-base text-[#614E47]">
            Acesso digital imediato com pagamento único. Sem mensalidades, sem taxas extras.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="bg-white rounded-3xl border-2 border-[#D8C2A8] shadow-2xl overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-[#301B14] px-6 py-5 sm:px-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6C280] block mb-0.5">
                Pacote Digital Oficial
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                BOLOS CASEIROS PARA VENDER
              </h3>
              <p className="text-xs text-[#E6C280]/90 mt-0.5">
                20 receitas fáceis, económicas e lucrativas para começar em casa
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-[#DEC8BD] line-through block">De 6.000 Kz</span>
              <div className="flex items-center sm:justify-end gap-1.5">
                <span className="text-xs text-[#E6C280] font-semibold">Por apenas</span>
                <span className="text-xl sm:text-2xl font-bold text-[#E6C280]">3.000 Kz</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            
            {/* Offer Item with Thumbnail Image */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC9] mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                
                {/* Product Cover Showcase - Highly Visible & Prominent */}
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:w-64 lg:w-72 aspect-square rounded-2xl overflow-hidden border-2 border-[#D8C2A8] shadow-lg shrink-0 bg-white group">
                  <Image
                    src="/images/offer_thumbnail.jpg"
                    alt="Capa do Ebook Bolos Caseiros para Vender"
                    fill
                    sizes="(max-width: 768px) 320px, 288px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Offer Details & Value Stack */}
                <div className="flex-1 w-full text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs sm:text-sm font-bold text-[#C2652B] uppercase tracking-wide">
                      Acesso Vitalício & Completo
                    </span>
                    <span className="text-xs font-bold text-[#15803D] bg-[#DCFCE7] border border-[#BBF7D0] px-3 py-1 rounded-full">
                      Liberado Imediatamente
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#301B14] mb-1 leading-snug">
                    Ebook Oficial Bolos Caseiros para Vender
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A675F] mb-3">
                    20 receitas fáceis, económicas e lucrativas para começar em casa
                  </p>

                  {/* Bullet Checklist for High Persuasion */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#E8DEC9] text-xs sm:text-sm text-[#44332D]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium">20 receitas testadas que dão certo</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium">Medidas em xícaras e colheres</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium">Dicas de temperatura e tempo de forno</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium">Acesso no celular a qualquer momento</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Clean Price Callout Box */}
            <div className="text-center py-6 px-4 bg-[#F2ECE3] rounded-2xl border border-[#DECBB4] mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5D7C5] text-[#301B14] text-xs font-bold uppercase tracking-wider mb-2">
                <Zap className="w-3.5 h-3.5 text-[#C2652B] fill-[#C2652B]" />
                <span>Preço Promocional por Tempo Limitado</span>
              </span>

              <div className="text-xs text-[#7A675F] mb-1">
                De <span className="line-through">6.000 Kz</span> por apenas:
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl sm:text-6xl font-bold text-[#301B14] tracking-tight">
                  3.000 Kz
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#C2652B] mt-1.5">
                Pagamento único • Sem mensalidades • Acesso vitalício
              </p>
            </div>

            {/* Big Action Button */}
            <div className="flex flex-col items-center">
              <motion.a
                href={CHECKOUT_URL}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:max-w-md group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl text-lg sm:text-xl font-bold text-white bg-[#301B14] hover:bg-[#C2652B] active:bg-[#B34E15] transition-all shadow-xl shadow-[#301B14]/20 text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C2652B]/30"
              >
                <span>QUERO ACESSAR AGORA</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* Trust markers */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#7A675F]">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Pagamento 100% Seguro</span>
                </div>
                <span aria-hidden="true" className="text-[#C5B5A7]">·</span>
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-[#301B14]" />
                  <span>Acesso direto no celular</span>
                </div>
                <span aria-hidden="true" className="text-[#C5B5A7]">·</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Garantia de Satisfação</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
