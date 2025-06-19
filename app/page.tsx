import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Clients } from './components/sections/Clients';
import { Services } from './components/sections/Services';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Clients />
        <Services />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}