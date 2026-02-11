import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIDo from '@/components/WhatIDo';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatIDo />
      <CTABanner />
      <Footer />
    </main>
  );
}
