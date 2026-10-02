'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Play, Pause, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState('00:00');
  const [durationStr, setDurationStr] = useState('00:20');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const currentHour = React.useSyncExternalStore(
    (onStoreChange) => {
      const interval = setInterval(onStoreChange, 1000);
      return () => clearInterval(interval);
    },
    () =>
      new Date().toLocaleTimeString('pt-PT', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    () => ''
  );

  return (
    <section className="relative overflow-hidden border-b border-[#E8DEC9]/50">
      {/* Fita de Urgência no topo da seção Hero */}
      <div className="w-full bg-[#C2652B] text-white py-2 px-4 shadow-sm border-b border-[#A8521F]">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFDF80] shrink-0" />
          <span>
            Oferta válida somente hoje <strong className="font-bold text-[#FFF3D6]">({currentHour || 'agora'})</strong>
          </span>
        </div>
      </div>

      <div className="relative pt-8 pb-16 sm:pt-12 sm:pb-24">
        {/* Subtle warm decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#EFE3D3]/40 via-[#FAF7F2]/20 to-transparent pointer-events-none -z-10 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          
          {/* Kicker */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#301B14] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E0D0BE]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C2652B]" />
            <span>RECEITAS FÁCEIS PARA FAZER EM CASA</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#301B14] leading-[1.18] tracking-tight mb-5 max-w-3xl" 
            style={{ textWrap: 'balance' }}
          >
            Aprenda a fazer bolos caseiros fáceis, deliciosos e que todo mundo vai querer repetir
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-base sm:text-lg text-[#55433C] leading-relaxed mb-8 max-w-2xl"
          >
            Tenha receitas simples, ingredientes acessíveis e um passo a passo fácil para preparar bolos deliciosos em casa — mesmo que você não tenha experiência.
          </motion.p>

          {/* VSL 9:16 Video Player Container (Centered) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full max-w-[310px] sm:max-w-[340px] mb-8"
          >
            <div 
              onClick={togglePlay}
              className="group relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-black border-4 border-[#301B14] shadow-2xl cursor-pointer select-none transition-transform hover:scale-[1.01]"
            >
              {/* Actual Video Element */}
              <video
                ref={videoRef}
                src="/videos/vsl.mp4"
                poster="/images/vsl_video_poster.jpg"
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false);
                  setProgress(100);
                }}
                onTimeUpdate={() => {
                  if (!videoRef.current) return;
                  const cur = videoRef.current.currentTime;
                  const dur = videoRef.current.duration || 20.5;
                  setProgress((cur / dur) * 100);
                  const mins = Math.floor(cur / 60);
                  const secs = Math.floor(cur % 60);
                  setCurrentTimeStr(`${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
                }}
                onLoadedMetadata={() => {
                  if (!videoRef.current) return;
                  const dur = videoRef.current.duration;
                  if (dur && !isNaN(dur)) {
                    const mins = Math.floor(dur / 60);
                    const secs = Math.floor(dur % 60);
                    setDurationStr(`${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
                  }
                }}
                className="w-full h-full object-cover"
              />

              {/* Gradient Lighting Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-40 group-hover:opacity-75' : 'opacity-80'}`} />

              {/* Top Bar inside VSL */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wide uppercase">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#22C55E]' : 'bg-[#EF4444] animate-ping'}`} />
                  <span>{isPlaying ? 'Em Reprodução' : 'Vídeo Explicativo'}</span>
                </div>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>

              {/* Center Play Button Overlay (shown when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#C2652B] text-white flex items-center justify-center shadow-xl shadow-black/40 border-2 border-white/40 group-hover:bg-[#D67336] transition-colors relative"
                  >
                    <span className="absolute inset-0 rounded-full bg-[#C2652B] animate-ping opacity-30" />
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                  </motion.div>
                  
                  <span className="mt-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-semibold tracking-wide border border-white/10">
                    Toque para assistir ao vídeo
                  </span>
                </div>
              )}

              {/* Center Pause Indicator on Hover (shown when playing) */}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                    <Pause className="w-6 h-6 fill-white" />
                  </div>
                </div>
              )}

              {/* Bottom Bar inside VSL */}
              <div className="absolute bottom-4 inset-x-4 z-10 pointer-events-auto">
                <div className="text-left text-white mb-2">
                  <p className="text-xs font-bold text-[#E6C280] uppercase tracking-wider mb-0.5">
                    Apresentação Oficial
                  </p>
                  <h4 className="text-sm font-bold leading-snug drop-shadow-sm">
                    O segredo para fazer bolos que crescem fofinhos e nunca solam
                  </h4>
                </div>

                {/* Progress Bar (Clickable) */}
                <div 
                  className="w-full bg-white/25 h-1.5 rounded-full overflow-hidden mb-1.5 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!videoRef.current) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const pct = Math.max(0, Math.min(1, clickX / rect.width));
                    const dur = videoRef.current.duration || 20.5;
                    videoRef.current.currentTime = pct * dur;
                  }}
                >
                  <div 
                    className="h-full bg-[#C2652B] rounded-full transition-all duration-150" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
                <div className="flex justify-between text-[10px] text-white/80 font-medium">
                  <span>{currentTimeStr}</span>
                  <span>{durationStr}</span>
                </div>
              </div>
            </div>

            {/* Micro Subtext below VSL */}
            <p className="text-center text-xs text-[#7A675F] mt-2.5 font-medium">
              Vídeo demonstrativo curto (formato 9:16)
            </p>
          </motion.div>

          {/* Big CTA Button with updated 2.500 Kz (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full sm:w-auto"
          >
            <motion.a
              href={CHECKOUT_URL}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl text-base sm:text-lg font-bold text-white bg-[#301B14] hover:bg-[#C2652B] active:bg-[#B34E15] transition-all shadow-lg shadow-[#301B14]/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C2652B]/30 text-center"
            >
              <span>QUERO ACESSAR O EBOOK POR 2.500 Kz</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Small trust text below CTA (Centered) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-[#736058]"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>Acesso digital imediato</span>
            </div>
            <span aria-hidden="true" className="text-[#C5B5A7]">·</span>
            <span>Receitas práticas</span>
            <span aria-hidden="true" className="text-[#C5B5A7]">·</span>
            <span>Acesso no celular</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
