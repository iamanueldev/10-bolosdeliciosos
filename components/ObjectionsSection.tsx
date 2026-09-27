'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

const OBJECTIONS = [
  {
    q: "Preciso ser profissional?",
    a: "Não. O material foi pensado para ser simples e fácil de acompanhar.",
  },
  {
    q: "Preciso ter muitos ingredientes?",
    a: "As receitas priorizam ingredientes simples e acessíveis.",
  },
  {
    q: "Posso usar as receitas para vender?",
    a: "Sim. Você pode preparar os bolos para venda e adaptar as receitas ao seu negócio.",
  },
  {
    q: "Consigo acessar pelo celular?",
    a: "Sim. O material digital pode ser consultado no celular.",
  },
  {
    q: "Tenho pouca experiência. Consigo acompanhar?",
    a: "As receitas possuem instruções organizadas para facilitar o preparo.",
  },
];

export default function ObjectionsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F2ECE3] border-b border-[#E8DEC9]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Dúvidas frequentes resolvidas
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            Talvez você esteja pensando...
          </h2>
        </div>

        {/* Objections List */}
        <div className="space-y-4">
          {OBJECTIONS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E0D3C1] shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#FAF4EC] text-[#C2652B] flex items-center justify-center shrink-0 mt-0.5">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#301B14] mb-1.5">
                    {item.q}
                  </h3>
                  <div className="flex items-start gap-2 text-sm sm:text-base text-[#57443D]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-1" />
                    <p className="leading-relaxed font-medium">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
