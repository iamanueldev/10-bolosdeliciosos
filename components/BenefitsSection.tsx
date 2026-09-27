'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShoppingBag, 
  Layers, 
  Home, 
  Store, 
  Clock 
} from 'lucide-react';

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Receitas fáceis",
    desc: "Passo a passo simples para acompanhar.",
    detail: "Linguagem direta e didática pensada para quem não tem prática na cozinha."
  },
  {
    icon: ShoppingBag,
    title: "Ingredientes acessíveis",
    desc: "Sem depender de ingredientes difíceis de encontrar.",
    detail: "Itens comuns que você já tem na despensa ou compra no comércio do bairro."
  },
  {
    icon: Layers,
    title: "Mais variedade",
    desc: "Aprenda diferentes sabores e combinações.",
    detail: "Combine massas clássicas com recheios especiais para nunca repetir o mesmo bolo."
  },
  {
    icon: Home,
    title: "Faça em casa",
    desc: "Prepare para sua família ou para ocasiões especiais.",
    detail: "Lanches da tarde inesquecíveis, aniversários em família e momentos de afeto à mesa."
  },
  {
    icon: Store,
    title: "Comece a vender",
    desc: "Use as receitas como ponto de partida para criar seus próprios produtos.",
    detail: "Bolos caseiros em fatias, bolos inteiros ou no pote são itens com alta demanda no mercado."
  },
  {
    icon: Clock,
    title: "Economize tempo",
    desc: "Tudo organizado em um único material digital.",
    detail: "Chega de perder horas procurando receitas soltas e duvidosas na internet."
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC9]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2.5">
            Vantagens exclusivas
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            Mais do que receitas: você terá uma base para criar vários bolos diferentes
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E8DEC9] hover:border-[#D6BEA4] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF3EA] text-[#C2652B] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#301B14] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#483730] mb-2">
                    {item.desc}
                  </p>
                  <p className="text-xs text-[#7A675F] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
