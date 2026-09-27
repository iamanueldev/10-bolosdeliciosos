import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatYouGetSection from '@/components/WhatYouGetSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import OfferCheckoutSection from '@/components/OfferCheckoutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2]">
      {/* HEADER MINIMALISTA STICKY */}
      <Header />

      <main className="flex-1">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. O QUE VOCÊ VAI RECEBER */}
        <WhatYouGetSection />

        {/* 3. POR QUE ESCOLHER O PRODUTO */}
        <WhyChooseSection />

        {/* 4. OFERTAS */}
        <OfferCheckoutSection />

        {/* 5. DEPOIMENTOS */}
        <TestimonialsSection />

        {/* 6. FAQ */}
        <FaqSection />

        {/* 7. GARANTIA */}
        <GuaranteeSection />
      </main>

      {/* 8. RODAPÉ */}
      <Footer />

      {/* BARRA CTA MOBILE FIXA */}
      <MobileStickyBar />
    </div>
  );
}
