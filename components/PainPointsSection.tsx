'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertCircle, 
  HelpCircle, 
  ShoppingBag, 
  UtensilsCrossed, 
  Users, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

const PAIN_POINTS = [
  {
    icon: HelpCircle,
    title: "Receitas complicadas e difíceis de seguir",
    desc: "Passos confusos, medidas imprecisas e termos técnicos que geram dúvidas na hora de preparar."
  },
  {
    icon: ShoppingBag,
    title: "Ingredientes que você não encontra facilmente",
    desc: "Receitas da internet que exigem itens caros ou raros nos mercados tradicionais."
  },
  {
    icon: UtensilsCrossed,
    title: "Bolos que ficam secos ou pesados",
    desc: "A massa solar, não crescer ou ficar ressecada no dia seguinte, causando frustração."
  },
  {
    icon: AlertCircle,
    title: "Você sabe fazer o básico, mas não sabe variar os sabores",
    desc: "Ficar sempre preso ao mesmo bolo de sempre por medo de errar novas combinações."
  },
  {
    icon: Users,
    title: "Queria fazer bolos para a família, mas não sabe por onde começar",
    desc: "Vontade de preparar lanches caseiros para os filhos e visitas sem complicação."
  },
  {
    icon: TrendingUp,
    title: "Gostaria de começar a vender, mas precisa de receitas simples",
    desc: "Desejo de criar uma fonte de renda extra com bolos clássicos e de alta procura."
  }
];

export default function PainPointsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F5EFE6]/60 border-b border-[#E8DEC9]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Dificuldades comuns na cozinha
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            Você já tentou fazer um bolo e o resultado não saiu como esperava?
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {PAIN_POINTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-[#E8DEC9] hover:border-[#D1BA9F] transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF4EC] text-[#C2652B] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#301B14] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#66544D] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Transition Text Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white border-2 border-[#E4D5BE] rounded-2xl p-6 sm:p-8 text-center shadow-md shadow-[#301B14]/5"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#301B14] text-[#FAF7F2] mb-3">
            <CheckCircle2 className="w-5 h-5 text-[#E6A05A]" />
          </div>
          <p className="font-serif text-lg sm:text-2xl font-bold text-[#301B14] leading-snug mb-2" style={{ textWrap: 'balance' }}>
            Você não precisa complicar. Precisa de receitas claras e fáceis de colocar em prática.
          </p>
          <p className="text-sm sm:text-base text-[#614E47] max-w-xl mx-auto">
            Com as proporções certas e um método descomplicado, qualquer pessoa consegue assar bolos fofos, cheirosos e macios logo na primeira tentativa.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
