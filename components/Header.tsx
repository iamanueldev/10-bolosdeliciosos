'use client';

import React from 'react';
import { ArrowRight, ChefHat } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';

export default function Header() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerEl = document.getElementById('ofertas');
    if (offerEl) {
      offerEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = CHECKOUT_URL;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DEC9]/70 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Zone with Enhanced Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2652B]"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#301B14] to-[#4A281E] flex items-center justify-center text-[#F2C994] shadow-sm border border-[#5E3628] group-hover:from-[#C2652B] group-hover:to-[#9C4B18] transition-all">
            <ChefHat className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-wide text-[#301B14] group-hover:text-[#C2652B] transition-colors leading-none">
              COZINHA LIVRE
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#8C746B] tracking-wider uppercase mt-1">
              Receitas Caseiras
            </span>
          </div>
        </a>

        {/* Clean Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#65524B]">
          <a href="#receber" className="hover:text-[#301B14] transition-colors">
            O que você vai receber
          </a>
          <a href="#por-que-escolher" className="hover:text-[#301B14] transition-colors">
            Por que escolher
          </a>
          <a href="#ofertas" className="hover:text-[#301B14] transition-colors">
            Ofertas
          </a>
          <a href="#depoimentos" className="hover:text-[#301B14] transition-colors">
            Depoimentos
          </a>
          <a href="#garantia" className="hover:text-[#301B14] transition-colors">
            Garantia
          </a>
          <a href="#faq" className="hover:text-[#301B14] transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3">
          <a
            href="#ofertas"
            onClick={scrollToOffer}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#301B14] hover:bg-[#C2652B] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2652B]"
          >
            <span>Quero meu ebook</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
