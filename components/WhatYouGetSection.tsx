'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const RECIPES = [
  {
    name: "Bolo de Chocolate",
    desc: "Massa fofinha, sabor intenso de cacau e textura macia que derrete na boca.",
  },
  {
    name: "Bolo de Baunilha",
    desc: "Aroma suave, massa leve e perfeita para acompanhar uma xícara de café ou chá.",
  },
  {
    name: "Bolo de Cenoura",
    desc: "A receita certeira que nunca sola, com massa bem aerada e cor vibrante.",
  },
  {
    name: "Bolo de Laranja",
    desc: "Cítrico e aromático, feito com suco fresco da fruta e naturalmente úmido.",
  },
  {
    name: "Bolo de Coco",
    desc: "Rico em sabor tropical, com massa macia e molhadinha na medida certa.",
  },
  {
    name: "Bolo de Banana",
    desc: "Aproveite bananas maduras para criar um bolo quentinho com toque de canela.",
  },
  {
    name: "Bolo de Leite",
    desc: "Textura cremosa e aveludada, resgatando o tradicional sabor caseiro da infância.",
  },
  {
    name: "Bolo de Milho Cremoso",
    desc: "Macio e aconchegante, feito no liquidificador de forma simples e rápida.",
  },
  {
    name: "Bolo de Limão Fofinho",
    desc: "Massa leve e fofa com equilíbrio perfeito entre frescor cítrico e suavidade.",
  },
  {
    name: "Bolo Formigueiro Tradicional",
    desc: "Massa branca clássica salpicada com granulados de chocolate crocantes.",
  },
];

export default function WhatYouGetSection() {
  return (
    <section id="receber" className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E8DEC9]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Conteúdo Completo
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight mb-3" style={{ textWrap: 'balance' }}>
            O que você vai receber
          </h2>
          <p className="text-sm sm:text-base text-[#57443D] max-w-xl mx-auto">
            Todas as receitas foram testadas e organizadas para garantir um resultado fofinho e saboroso mesmo para quem está começando agora.
          </p>
        </div>

        {/* Featured Product Banner (Clean without Formato badge) */}
        <div className="bg-[#301B14] text-[#FAF7F2] rounded-2xl p-6 sm:p-8 mb-8 shadow-md border border-[#482A20] text-center sm:text-left">
          <span className="text-xs font-bold tracking-wider uppercase text-[#E6C280] block mb-1">
            CONTEÚDO PRINCIPAL
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            10 BOLOS CASEIROS FÁCEIS E DELICIOSOS
          </h3>
          <p className="text-sm sm:text-base text-[#E5D7CE] max-w-2xl">
            Passo a passo descomplicado com medidas simples em xícaras e ingredientes acessíveis do seu dia a dia.
          </p>
        </div>

        {/* Checklist de Receitas (Clean & Organized) */}
        <div className="bg-white rounded-3xl border border-[#E8DEC9] p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {RECIPES.map((recipe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAF7F2] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#301B14] leading-snug">
                    {recipe.name}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#66544D] leading-relaxed mt-0.5">
                    {recipe.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
