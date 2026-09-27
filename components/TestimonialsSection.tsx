'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, Heart, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Mariana Silva",
    city: "Luanda",
    avatar: "/images/testimonial_mariana.jpg",
    highlight: "Bolo de Cenoura Perfeito",
    comment: "Sempre tive problema com bolo ficando pesado e solado. Fiz a receita do ebook no sábado e ficou incrivelmente macio e fofinho! Meus filhos adoraram.",
    recipe: "Bolo de Cenoura",
    verified: true
  },
  {
    name: "Carla Mendes",
    city: "Benguela",
    avatar: "/images/testimonial_carla.jpg",
    highlight: "Passo a passo simples de entender",
    comment: "O que mais me chamou atenção foi a clareza das receitas. Não tem enrolação, os ingredientes são fáceis de achar e as medidas em xícaras facilitam muito.",
    recipe: "Bolo de Laranja & Baunilha",
    verified: true
  },
  {
    name: "Teresa Neto",
    city: "Huambo",
    avatar: "/images/testimonial_teresa.jpg",
    highlight: "O bolo de chocolate é maravilhoso!",
    comment: "Fiz o bolo de chocolate para o aniversário do meu afilhado e todos pensaram que comprei numa confeitaria fina. A massa é úmida e fofinha.",
    recipe: "Bolo de Chocolate",
    verified: true
  },
  {
    name: "Sandra Lopes",
    city: "Luanda",
    avatar: "/images/testimonial_sandra.jpg",
    highlight: "Comecei a vender fatias no trabalho",
    comment: "Queria uma fonte de renda e decidi testar o bolo de milho e o de coco. As pessoas adoraram a textura úmida e o cheiro bom logo ao fatiar.",
    recipe: "Bolo de Milho Cremoso",
    verified: true
  }
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E8DEC9]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D3] text-[#301B14] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Heart className="w-3.5 h-3.5 text-[#C2652B] fill-[#C2652B]" />
            <span>Depoimentos & Experiências</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            Quem já preparou as receitas da Cozinha Livre
          </h2>
        </div>

        {/* Compact Testimonials Cards Grid (30% more compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8DEC9] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* User Header with Avatar & Rating */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#E8DEC9] bg-[#EFE3D3] shrink-0">
                      <Image
                        src={item.avatar}
                        alt={`Foto de ${item.name}`}
                        fill
                        sizes="44px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#301B14] leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-[#8C766C]">
                        {item.city}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#E6A05A] fill-[#E6A05A]" />
                    ))}
                  </div>
                </div>

                <h5 className="text-xs sm:text-sm font-bold text-[#301B14] mb-1.5 leading-snug">
                  “{item.highlight}”
                </h5>

                <p className="text-xs sm:text-[13px] text-[#5C4942] leading-relaxed mb-3">
                  {item.comment}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between text-[11px]">
                <span className="font-semibold text-[#C2652B] bg-[#FFF8EE] px-2 py-0.5 rounded border border-[#F0DFCD]">
                  {item.recipe}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#2D6A4F]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Receita testada</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
