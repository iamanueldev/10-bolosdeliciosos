'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, DownloadCloud, Cake } from 'lucide-react';

const STEPS = [
  {
    step: "01",
    icon: ShoppingCart,
    title: "Faça seu pedido",
    desc: "Clique no botão de compra, preencha seus dados de forma rápida e confirme seu pagamento único de 3.000 Kz.",
  },
  {
    step: "02",
    icon: DownloadCloud,
    title: "Receba o acesso ao material digital",
    desc: "Você recebe o link para acessar o seu ebook imediatamente no seu dispositivo.",
  },
  {
    step: "03",
    icon: Cake,
    title: "Comece a preparar suas receitas",
    desc: "Abra o material no celular, siga o passo a passo ilustrado e encante toda a sua família na cozinha.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC9]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Passo a passo rápido
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            É simples começar
          </h2>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DEC9] relative shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#DECBB4]">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF3EA] text-[#C2652B] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#301B14] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#66544D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6]">
                  <span className="text-[11px] font-semibold text-[#8C766C] uppercase tracking-wider">
                    {index === 0 && "Sem burocracia"}
                    {index === 1 && "Entrega automática"}
                    {index === 2 && "Prático & Direto"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
