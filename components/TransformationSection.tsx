'use client';

import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const BEFORE_ITEMS = [
  "Quero fazer um bolo, mas não sei qual receita usar.",
  "Tenho dificuldade para variar os sabores.",
  "Não sei quais recheios e coberturas combinar.",
];

const AFTER_ITEMS = [
  "Tenho receitas organizadas.",
  "Tenho várias opções de recheios e coberturas.",
  "Consigo criar diferentes combinações.",
  "Posso preparar bolos para minha família ou começar a testar vendas.",
];

export default function TransformationSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F2ECE3] border-b border-[#E8DEC9]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Sua nova rotina na cozinha
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            Imagine ter tudo isso em um único lugar
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* Card ANTES */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E0D3C1] shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#F0E6D8]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B85042]" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#8C3A2E] uppercase tracking-wider">
                Antes do Ebook
              </h3>
            </div>

            <div className="space-y-4">
              {BEFORE_ITEMS.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FCE8E6] text-[#B85042] flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-[#6E5950] font-normal leading-relaxed">
                    “{item}”
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card DEPOIS */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#C2652B] shadow-lg relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#F0E6D8]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A4F]" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#301B14] uppercase tracking-wider">
                Depois do Cozinha Livre
              </h3>
            </div>

            <div className="space-y-4">
              {AFTER_ITEMS.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#2D6A4F] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-[#301B14] font-medium leading-relaxed">
                    “{item}”
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
