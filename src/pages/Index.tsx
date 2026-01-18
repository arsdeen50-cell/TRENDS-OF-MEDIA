import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import BrandShowcase from '@/components/BrandShowcase';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Servicesection from '@/components/Servicesection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const Index = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Trends of Media</title>
        <meta
          name="description"
          content="We are a global creative agency that combines design expertise with technology and intelligence to create award-winning digital products."
        />
      </Helmet>

      <SmoothScroll>
        <CustomCursor />
        <Header />
        <FloatingContact />
        <main>
          <Hero />
          <About />
         
          <Services />
           {/* <Servicesection /> */}
          <BrandShowcase />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default Index;
