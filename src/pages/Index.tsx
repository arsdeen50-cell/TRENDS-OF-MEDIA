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
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import DigitalMarketingImp from '@/components/DigitalMarketingImp';
import Blogs from '@/components/Blogs';

const Index = () => {
useEffect(() => {
const link = document.createElement('link');
link.href =
'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);


return () => {
  document.head.removeChild(link);
};


}, []);

return (
<> <Helmet>
{/* Title */} <title>Trends of Media | No.1 Digital Marketing Agency in Mumbai</title>


    {/* Basic SEO */}
    <meta
      name="description"
      content="Trends of Media is a leading digital marketing agency offering SEO, branding, and social media services to grow your business."
    />

    {/* Canonical (IMPORTANT) */}
    <link rel="canonical" href="https://www.trendsofmedia.com/" />

    {/* Robots */}
    <meta name="robots" content="index, follow" />

    {/* Open Graph (Social Sharing) */}
    <meta property="og:title" content="Trends of Media | No.1 Digital Marketing Agency in Mumbai" />
    <meta property="og:description" content="Trends of Media is a leading digital marketing agency offering SEO, branding, and social media services to grow your business." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.trendsofmedia.com/" />
    <meta property="og:image" content="https://www.trendsofmedia.com/images/Medialogo.png" />

    {/* Twitter SEO */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Trends of Media | No.1 Digital Marketing Agency in Mumbai" />
    <meta name="twitter:description" content="Trends of Media is a leading digital marketing agency offering SEO, branding, and social media services to grow your business." />
    <meta name="twitter:image" content="https://www.trendsofmedia.com/images/Medialogo.png" />
  </Helmet>

  <SmoothScroll>
    <CustomCursor />
    <Header />
    <FloatingContact />
    <main>
      <Hero />
      <About />
      <Services />
      <DigitalMarketingImp />
      <BrandShowcase />
      <Clients />
      <Blogs />
      <Contact />
    </main>
    <Footer />
  </SmoothScroll>
</>


);
};

export default Index;
