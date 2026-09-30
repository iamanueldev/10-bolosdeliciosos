'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  ChefHat, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

const REASONS = [
  {
    icon: ChefHat,
    title: "Receitas 100% Testadas e Aprovadas",
    description: "Cada uma das 10 receitas foi ajustada para dar certo de primeira, evitando bolos solados, secos ou pesados."
  },
  {
    icon: ShoppingBag,
    title: "Ingredientes Simples e Acessíveis",
    description: "Você não precisa de farinhas importadas ou ingredientes caros. Tudo pode ser comprado na quitanda ou supermercado local."
  },
  {
    icon: Clock,
    title: "Medidas Práticas no Dia a Dia",
    description: "Instruções claras usando xícaras e colheres comuns. Sem complicação com balanças difíceis de operar."
  },
  {
    icon: Sparkles,
    title: "Variedade para Todas as Ocasiões",
    description: "Desde o café da manhã com bolo de milho e laranja até aniversários em família com bolo de chocolate e baunilha."
  },
  {
    icon: HeartHandshake,
    title: "Perfeito para Fazer em Casa ou Vender",
    description: "Estrutura profissional de preparo para quem quer agradar os filhos ou iniciar uma renda extra vendendo bolos caseiros."
  },
  {
    icon: CheckCircle2,
    title: "Acesso Imediato no Celular",
    description: "Ebook digital leve e prático. Consulte os ingredientes na cozinha ou na ida ao mercado diretamente na palma da mão."
  }
];

export default function WhyChooseSection() {
  return (
    <section id="por-que-escolher" className="py-16 sm:py-24 bg-[#F5EFE6]/70 border-b border-[#E8DEC9]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Diferenciais Exclusivos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight mb-4" style={{ textWrap: 'balance' }}>
            Por que escolher o Bolos Caseiros para Vender?
          </h2>
          <p className="text-base text-[#5E4C45] max-w-xl mx-auto">
            20 receitas fáceis, económicas e lucrativas para começar em casa com segurança de que o bolo vai crescer fofinho e macio.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DEC9] hover:border-[#D6BEA4] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF3EA] text-[#C2652B] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#301B14] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#66544D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA strip */}
        <div className="text-center">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#301B14] hover:bg-[#C2652B] transition-colors shadow-md"
          >
            <span>Quero minhas receitas testadas por 3.000 Kz</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
