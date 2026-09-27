'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const AUDIENCE_CHECKLIST = [
  "Gosta de fazer bolos em casa",
  "Quer aprender receitas simples",
  "Está começando na confeitaria",
  "Quer preparar bolos para família e amigos",
  "Quer variar os sabores dos seus bolos",
  "Pensa em começar a vender bolos",
  "Quer ter receitas práticas sempre à mão",
];

export default function TargetAudienceSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC9]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Perfil ideal
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            Este ebook é para você se...
          </h2>
        </div>

        {/* Checklist Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DEC9] shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {AUDIENCE_CHECKLIST.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EDE4D6] hover:border-[#DECBB4] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#301B14] text-[#E6C280] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-medium text-[#301B14]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#F0E6D8] text-center">
            <p className="text-xs sm:text-sm text-[#736058]">
              Se você se identificou com pelo menos dois pontos acima, esse material foi feito exatamente para sua necessidade.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
