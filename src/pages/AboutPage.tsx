import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { 
  Layout, 
  Code, 
  Server, 
  Wrench, 
  Megaphone, 
  Search, 
  MapPin, 
  Sparkles, 
  Eye, 
  Rocket 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Services corrected to match your specific categories and items
const categorizedServices = [
  {
    category: "Website Design",
    icon: Layout,
    items: ["UI Design", "UX Design", "Wireframing", "Responsive Design"]
  },
  {
    category: "Front-end Development",
    icon: Code,
    items: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"]
  },
  {
    category: "Back-end Development",
    icon: Server,
    items: ["Node.js", "Express.js", "APIs", "Database Integration"]
  },
  {
    category: "Website Support",
    icon: Wrench,
    items: ["Maintenance", "Bug Fixing", "Performance Optimization", "Hosting Support"]
  },
  {
    category: "Social Media Advertising",
    icon: Megaphone,
    items: ["Facebook Ads", "Instagram Ads", "Campaign Strategy", "Analytics"]
  },
  {
    category: "SEO",
    icon: Search,
    items: ["On-page SEO", "Off-page SEO", "Keyword Research", "Technical SEO"]
  }
];

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const locationSliderRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroBadgeRotate = useTransform(scrollYProgress, [0, 0.2], [0, 45]);
  const sectionTwoOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }));
    }, 1000);

    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 120,
        opacity: 0,
        skewY: 7,
        duration: 1.5,
        stagger: 0.15,
        ease: 'power4.out',
      });

      gsap.from('.mv-card', {
        scrollTrigger: {
          trigger: '.mv-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.bento-service', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        y: 50,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out'
      });

      if (locationSliderRef.current) {
        gsap.to(locationSliderRef.current, {
          y: '-20%',
          ease: 'none',
          scrollTrigger: {
            trigger: locationSliderRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Trends of Media – Digital Marketing Agency</title>
      </Helmet>

      <SmoothScroll>
        <CustomCursor />
        <Header />
        <FloatingContact />
        
        <main ref={containerRef} className="bg-white text-black overflow-x-hidden">
          
          {/* --- HERO SECTION --- */}
          <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden bg-[#fafafa]">
            <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />
            
            <div className="container mx-auto max-w-[1500px] z-10">
              <motion.div style={{ y: heroTextY }} className="relative">
                <div className="flex items-center gap-3 mb-8 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 1, delay: 0.5 }} className="h-[1px] bg-black" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">Creative Engineering Studio</span>
                </div>

                <h1 className="text-[12vw] md:text-[9vw] font-bold tracking-tighter leading-[0.8] mb-12">
                  <div className="overflow-hidden">
                    <span className="hero-line block">CRAFTING</span>
                  </div>
                  <div className="overflow-hidden flex items-center gap-4 md:gap-8">
                    <span className="hero-line block italic font-light text-black/20">DIGITAL</span>
                    <motion.div 
                       style={{ rotate: heroBadgeRotate }}
                       className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-black/10 flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-black/20" />
                    </motion.div>
                    <span className="hero-line block">LEGACIES.</span>
                  </div>
                </h1>

                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                  <div className="max-w-sm">
                    <p className="text-lg text-black/60 leading-relaxed font-light">
                      A Mumbai-based nexus where performance marketing meets high-fidelity design and scalable technology.
                    </p>
                  </div>
                  <div className="flex flex-col items-end font-mono text-[10px] uppercase tracking-widest opacity-40">
                    <span>19.0760° N, 72.8777° E</span>
                    <span>Local Time — {time} IST</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* --- SECTION 2: WHO WE ARE / MISSION / VISION --- */}
          <motion.section 
            style={{ opacity: sectionTwoOpacity }}
            className="py-32 bg-white px-6 md:px-16 border-t border-black/5"
          >
            <div className="container mx-auto max-w-[1500px]">
              <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                
                <div className="lg:col-span-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 block mb-6">01 / The Identity</span>
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
                    An Engineering studio <br />
                    with a <span className="italic font-light">Creative soul.</span>
                  </h2>
                  <p className="text-black/60 text-lg leading-relaxed">
                    Trends of Media is a boutique agency based in Mumbai. We don't just provide services; we partner with brands to build digital ecosystems that are technically superior and visually arresting.
                  </p>
                </div>

                <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 mv-grid">
                  <div className="mv-card p-8 rounded-3xl bg-[#f9f9f9] border border-black/[0.03] flex flex-col gap-6">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tighter">Our Mission</h3>
                    <p className="text-sm text-black/50 leading-relaxed">
                      To empower businesses with high-performance digital tools, bridging the gap between complex engineering and human-centric design.
                    </p>
                  </div>

                  <div className="mv-card p-8 rounded-3xl bg-black text-white flex flex-col gap-6">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tighter">Our Vision</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      To become the global benchmark for boutique digital craftsmanship, where every line of code serves a purpose and every pixel tells a story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* --- SERVICES (BENTO GRID) --- */}
          <motion.section 
            className="services-grid py-32 bg-black text-white px-6 md:px-16"
          >
            <div className="container mx-auto max-w-[1500px]">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">OUR <br />EXPERTISE.</h3>
                <span className="font-mono text-xs uppercase opacity-40 mb-2">02 / Capabilities</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {categorizedServices.map((service, index) => (
                  <div 
                    key={index} 
                    className={`bento-service col-span-12 p-10 rounded-[2rem] bg-[#1a1a1a] flex flex-col justify-between min-h-[350px] ${index % 3 === 1 ? 'md:col-span-7' : 'md:col-span-5'}`}
                  >
                    <div className="flex justify-between items-start">
                      <service.icon className="w-10 h-10 text-white/20" />
                      <div className="text-[10px] font-mono opacity-30">0{index+1}</div>
                    </div>
                    <div>
                      <h4 className="text-3xl md:text-4xl font-medium mb-6">{service.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.items.map((item, i) => (
                          <span key={i} className="text-[10px] font-mono py-1 px-4 border border-white/10 rounded-full">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* --- CONTACT SECTION --- */}
          <section className="py-32 px-6 md:px-16 relative overflow-hidden">
            <div ref={locationSliderRef} className="absolute top-0 left-0 w-full h-full pointer-events-none text-[20vw] font-black text-black/[0.02] leading-none select-none">
              MUMBAI INDIA MUMBAI INDIA
            </div>

            <div className="container mx-auto max-w-[1500px] z-10 relative">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <MapPin className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-xs">Based in Mumbai</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Let's build <br />something bold.</h2>
                  <a href="mailto:hello@trendsofmedia.com" className="text-2xl md:text-3xl font-light hover:opacity-50 transition-all border-b border-black/20 pb-2">
                    hello@trendsofmedia.com
                  </a>
                </div>

                <div className="md:text-right flex flex-col md:items-end">
                   <div className="font-mono text-xs mb-8 uppercase opacity-40">Local Time: {time} IST</div>
                   <motion.a 
                    href="/contact"
                    whileHover={{ scale: 0.98 }}
                    className="px-14 py-6 bg-black text-white rounded-full font-bold uppercase text-xs tracking-widest"
                  >
                    Start a project
                  </motion.a>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default AboutPage;