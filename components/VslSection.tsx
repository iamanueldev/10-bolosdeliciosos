'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Volume2, Sparkles, Video } from 'lucide-react';
import Image from 'next/image';

interface VslSectionProps {
  videoEmbedUrl?: string; // Futuro link de embed (VTurb, YouTube Shorts, Panda, etc.)
}

export default function VslSection({ videoEmbedUrl }: VslSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#F2ECE3] border-b border-[#E8DEC9]/70 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-white/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C2652B] mb-2">
            Apresentação Especial
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#301B14] leading-tight" style={{ textWrap: 'balance' }}>
            Veja Como é Simples Fazer Bolos Perfeitos
          </h2>
        </div>

        {/* Vertical VSL Container - EXACT 9:16 PROPORTION */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[420px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#23150F] border-2 border-[#D8C7B0] flex flex-col justify-between"
            >
              {videoEmbedUrl ? (
                /* Embed real de vídeo vertical */
                <iframe
                  src={videoEmbedUrl}
                  title="Vídeo de Apresentação"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Container com Placeholder vertical 9:16 e visual profissional */
                <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 text-white select-none">
                  {/* Background cover image with dim overlay */}
                  <Image
                    src="/images/hero_cakes.jpg"
                    alt="Cozinha Livre - Bolos Caseiros"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover opacity-35 filter brightness-75 contrast-125"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F100B] via-transparent to-[#1F100B]/80 pointer-events-none" />

                  {/* Top Bar inside Player */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs tracking-wider uppercase font-semibold text-[#E6C280] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      Cozinha Livre
                    </span>
                    <span className="text-xs text-white/70 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                      <Volume2 className="w-3.5 h-3.5" />
                      Áudio ativo
                    </span>
                  </div>

                  {/* Center Play & Prompt Action */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C2652B] hover:bg-[#D47738] active:scale-95 transition-all shadow-2xl shadow-[#C2652B]/40 focus:outline-none focus:ring-4 focus:ring-white/40 cursor-pointer"
                      aria-label="Reproduzir vídeo de apresentação"
                    >
                      <span className="absolute inset-0 rounded-full bg-[#C2652B] animate-ping opacity-25" />
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1 transition-transform group-hover:scale-110" />
                    </button>

                    <div className="mt-6 px-4 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 max-w-[280px]">
                      <p className="text-xs sm:text-sm font-bold tracking-wide text-white uppercase mb-1">
                        VSL — COLOQUE SEU VÍDEO AQUI
                      </p>
                      <p className="text-[11px] text-white/75 leading-tight">
                        Container otimizado na proporção 9:16 para celulares e desktop
                      </p>
                    </div>
                  </div>

                  {/* Bottom Text inside Player */}
                  <div className="relative z-10 text-center">
                    <p className="text-xs text-white/80 font-medium bg-black/50 backdrop-blur-sm py-2 px-3 rounded-lg border border-white/10">
                      Aprenda os segredos dos bolos caseiros mais pedidos
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Text Below Video */}
        <div className="text-center mt-6">
          <p className="text-sm sm:text-base text-[#57443D] font-medium">
            Assista e veja como o ebook pode ajudar você a começar.
          </p>
        </div>

      </div>
    </section>
  );
}
