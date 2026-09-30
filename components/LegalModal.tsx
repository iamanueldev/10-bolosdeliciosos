'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'termos' | 'privacidade' | 'contato' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E8DEC9]"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#736058] hover:text-[#301B14] rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {type === 'termos' && (
            <div>
              <h3 className="text-xl font-bold text-[#301B14] mb-3">
                Termos de Uso
              </h3>
              <div className="text-sm text-[#594740] space-y-3 leading-relaxed">
                <p>
                  Bem-vindo à <strong>Cozinha Livre</strong>. Ao adquirir o ebook digital “Bolos Caseiros para Vender”, você concorda com os presentes termos.
                </p>
                <p>
                  1. <strong>Uso Pessoal e Comercial das Receitas:</strong> O material educativo é licenciado para seu uso pessoal ou para confecção de bolos em seu próprio negócio culinário. É estritamente proibida a revenda, cópia, distribuição pública ou rateio não autorizado do ebook digital.
                </p>
                <p>
                  2. <strong>Acesso Digital:</strong> O produto é disponibilizado exclusivamente em formato digital após a compensação do pagamento.
                </p>
                <p>
                  3. <strong>Resultados e Prática:</strong> Os resultados culinários dependem do cumprimento das instruções, tempos de forno e marcas de insumos utilizados.
                </p>
              </div>
            </div>
          )}

          {type === 'privacidade' && (
            <div>
              <h3 className="text-xl font-bold text-[#301B14] mb-3">
                Política de Privacidade
              </h3>
              <div className="text-sm text-[#594740] space-y-3 leading-relaxed">
                <p>
                  A <strong>Cozinha Livre</strong> preza pela segurança e confidencialidade dos seus dados.
                </p>
                <p>
                  1. <strong>Coleta de Informações:</strong> Durante o processo de compra, as informações fornecidas (nome, e-mail e dados de faturamento) são coletadas de forma criptografada para envio do material digital.
                </p>
                <p>
                  2. <strong>Não Compartilhamento:</strong> Seus dados não são vendidos, alugados ou transferidos a terceiros alheios à transação de compra.
                </p>
                <p>
                  3. <strong>Segurança da Informação:</strong> Todas as transações financeiras são processadas por intermediadores de pagamento seguros com certificação SSL.
                </p>
              </div>
            </div>
          )}

          {type === 'contato' && (
            <div>
              <h3 className="text-xl font-bold text-[#301B14] mb-3">
                Suporte & Contato
              </h3>
              <div className="text-sm text-[#594740] space-y-3 leading-relaxed">
                <p>
                  Dúvidas sobre o seu acesso digital, download das receitas ou confirmação de pagamento?
                </p>
                <p>
                  Nossa equipe de suporte está pronta para auxiliar você no pós-venda diretamente pela plataforma de entrega do seu produto digital.
                </p>
                <p className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DEC9] text-xs font-medium text-[#463630]">
                  Caso já tenha realizado a compra, verifique também a caixa de entrada e spam do seu e-mail cadastrado para ter acesso imediato ao material.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#F2ECE3] text-right">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#301B14] text-white text-xs font-semibold rounded-lg hover:bg-[#C2652B] transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
