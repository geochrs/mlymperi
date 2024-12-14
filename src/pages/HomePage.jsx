import ContactSection from '../components/content/ContactSection';
import HeroSection from '../components/content/HeroSection';
import PortfolioSection from '../components/content/PortfolioSection';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
