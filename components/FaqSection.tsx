'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "O produto é físico?",
    a: "Não. É um ebook digital oficial, pronto para leitura imediata em qualquer celular, computador ou tablet.",
  },
  {
    q: "Como recebo o produto?",
    a: "O acesso é disponibilizado digitalmente logo após a confirmação da compra. Você receberá as instruções e link de acesso de forma instantânea no seu e-mail e WhatsApp.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. O ebook foi desenvolvido especialmente com leitura adaptada e confortável para a tela do seu telefone.",
  },
  {
    q: "Vou conseguir fazer mesmo sem experiência?",
    a: "Sim. Todas as 10 receitas foram elaboradas em linguagem simples, com modo de preparo passo a passo e medidas práticas do cotidiano para que qualquer pessoa consiga acompanhar.",
  },
  {
    q: "Quanto custa?",
    a: "O valor da oferta completa é 3.000 Kz, em pagamento único sem mensalidades.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC9]/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Tire suas dúvidas
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            Perguntas frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E8DEC9] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#F9F5EF] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#301B14]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF3EA] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#EFE3D3]' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-[#C2652B]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#614E47] border-t border-[#F5EFE6] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
