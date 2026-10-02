'use client';

import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [modalType, setModalType] = useState<'termos' | 'privacidade' | 'contato' | null>(null);

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8DEC9] py-10 pb-24 md:pb-12 text-[#63514A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Brand & Legal Links Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#E8DEC9]/70 text-center md:text-left">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#301B14] to-[#4A281E] flex items-center justify-center text-[#F2C994] shadow-sm border border-[#5E3628]">
              <ChefHat className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide text-[#301B14] leading-none">
                COZINHA LIVRE
              </span>
              <span className="text-[10px] font-semibold text-[#8C746B] tracking-wider uppercase mt-1">
                Receitas Caseiras
              </span>
            </div>
          </div>

          {/* Legal / Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            <button
              type="button"
              onClick={() => setModalType('termos')}
              className="text-[#5C4942] hover:text-[#301B14] transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span aria-hidden="true" className="text-[#D8CAB8]">·</span>
            <button
              type="button"
              onClick={() => setModalType('privacidade')}
              className="text-[#5C4942] hover:text-[#301B14] transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span aria-hidden="true" className="text-[#D8CAB8]">·</span>
            <button
              type="button"
              onClick={() => setModalType('contato')}
              className="text-[#5C4942] hover:text-[#301B14] transition-colors cursor-pointer"
            >
              Central de Atendimento
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-[#8A7972] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Cozinha Livre Produções Digitais. Todos os direitos reservados.</p>
          <div className="text-xs text-[#806E66]">
            Valor único: <strong className="text-[#301B14]">2.500 Kz</strong> (Sem mensalidades)
          </div>
        </div>

      </div>

      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </footer>
  );
}
