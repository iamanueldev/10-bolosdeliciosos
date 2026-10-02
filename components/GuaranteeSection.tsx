'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Check, ArrowRight, Lock } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-16 sm:py-20 bg-[#F2ECE3] border-b border-[#E8DEC9]/70 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D5E5D8] shadow-sm flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle green ambient light */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-48 h-48 bg-[#16A34A]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Green Shield Icon Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#16A34A] to-[#15803D] text-white flex items-center justify-center shadow-md shadow-[#16A34A]/20 mb-4 border border-[#86EFAC]/40 shrink-0">
            <ShieldCheck className="w-9 h-9 sm:w-11 sm:h-11 stroke-[2.2]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-bold uppercase tracking-wider mb-3 border border-[#BBF7D0]">
            <Lock className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Garantia de Satisfação Cozinha Livre</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#301B14] leading-tight mb-6" style={{ textWrap: 'balance' }}>
            Satisfação com Risco Zero para Você
          </h2>

          {/* Simple Checklist Items */}
          <div className="w-full max-w-md space-y-2.5 mb-8 text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs sm:text-sm text-[#14532D] font-medium">
              <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Receitas minuciosamente testadas e que nunca solam</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs sm:text-sm text-[#14532D] font-medium">
              <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Acesso imediato liberado logo após a confirmação</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs sm:text-sm text-[#14532D] font-medium">
              <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Pagamento 100% protegido e suporte exclusivo</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-[#301B14] hover:bg-[#C2652B] transition-colors shadow-md w-full sm:w-auto"
          >
            <span>Acessar agora por 2.500 Kz</span>
            <ArrowRight className="w-4 h-4" />
          </a>

        </motion.div>

      </div>
    </section>
  );
}
