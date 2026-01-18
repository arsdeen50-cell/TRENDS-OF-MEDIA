import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Target, Zap, BarChart3, Shield, Users, Rocket, Eye, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const approachItems = [
  { icon: Target, title: 'Strategy-first execution', description: 'Every action backed by data and insight' },
  { icon: BarChart3, title: 'Performance-focused campaigns', description: 'Results that move the needle' },
  { icon: Zap, title: 'Technology-enabled automation', description: 'Scale without sacrificing quality' },
  { icon: Eye, title: 'Transparent reporting & insights', description: 'Full visibility into your growth' },
  { icon: Rocket, title: 'Continuous optimization', description: 'Always improving, never settling' },
];

const whyChooseUs = [
  { stat: '5+', label: 'Years of proven experience' },
  { stat: '2-in-1', label: 'Marketing + Tech under one roof' },
  { stat: 'ROI', label: 'Focused mindset' },
  { stat: '∞', label: 'Long-term growth partnerships' },
];

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero - Staggered letter reveal with wave effect
      if (heroTextRef.current) {
        const chars = heroTextRef.current.querySelectorAll('.hero-char');
        gsap.fromTo(chars, 
          { y: 120, opacity: 0, rotateX: -90, scale: 0.8 },
          { 
            y: 0, 
            opacity: 1, 
            rotateX: 0,
            scale: 1,
            stagger: { each: 0.015, from: 'start' },
            duration: 1.4,
            ease: 'expo.out',
            delay: 0.5
          }
        );
      }

      // Hero decorative lines animation
      gsap.fromTo('.hero-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power4.out', stagger: 0.2, delay: 0.8 }
      );

      // Intro section - Text split reveal
      if (introRef.current) {
        const words = introRef.current.querySelectorAll('.intro-word');
        gsap.fromTo(words,
          { opacity: 0.1, y: 30, filter: 'blur(10px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            stagger: 0.03,
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 75%',
              end: 'bottom 50%',
              scrub: 1,
            },
          }
        );
      }

      // Who We Are - Bento grid staggered reveal
      if (whoWeAreRef.current) {
        gsap.fromTo('.bento-item',
          { opacity: 0, scale: 0.8, y: 60 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: {
              each: 0.1,
              from: 'random',
            },
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: whoWeAreRef.current,
              start: 'top 70%',
            },
          }
        );

        // Animate the orbit ring
        gsap.to('.orbit-ring', {
          rotation: 360,
          duration: 30,
          repeat: -1,
          ease: 'none',
        });
      }

      // Approach cards - Simple fade in
      gsap.fromTo('.approach-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.approach-section',
            start: 'top 80%',
          },
        }
      );

      // Approach center pulse
      gsap.to('.approach-center-pulse', {
        scale: 1.2,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Why Choose Us - Counter pulse effect
      gsap.fromTo('.why-stat',
        { opacity: 0, scale: 0.5, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.why-section',
            start: 'top 70%',
          },
        }
      );

      // Mission/Vision - Text wave animation
      if (missionRef.current) {
        const missionChars = missionRef.current.querySelectorAll('.mission-char');
        gsap.fromTo(missionChars,
          { opacity: 0, y: 50, rotateY: 90 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            stagger: 0.01,
            duration: 0.8,
            scrollTrigger: {
              trigger: missionRef.current,
              start: 'top 70%',
            },
          }
        );
      }

      // CTA section - Scale reveal
      if (ctaRef.current) {
        gsap.fromTo('.cta-content',
          { opacity: 0, scale: 0.8, y: 60 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      // Floating shapes continuous animation
      gsap.to('.float-shape', {
        y: 'random(-30, 30)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 'random(4, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const heroText = "Marketing & Technology, Built for Growth";

  const introText = "Founded in 2021, we are a marketing and technology-driven agency with 5+ years of industry experience, helping brands grow smarter, faster, and stronger in the digital era.";

  const splitText = (text: string, className: string) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className={`${className} inline-block mr-[0.3em]`}>
        {word}
      </span>
    ));
  };

  const splitChars = (text: string, className: string) => {
    return text.split('').map((char, i) => (
      <span 
        key={i} 
        className={`${className} inline-block`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <>
      <Helmet>
        <title>About — Trends of Media | Marketing & Technology Agency</title>
        <meta name="description" content="Founded in 2021, Trends of Media is a marketing and technology-driven agency helping brands grow smarter, faster, and stronger in the digital era." />
      </Helmet>

      <SmoothScroll>
        <CustomCursor />
        <Header />
        <FloatingContact />
        
        <main ref={containerRef}>
          {/* Hero Section */}
          <motion.section 
  style={{ opacity: heroOpacity, y: heroY }}
  className="h-auto md:min-h-screen flex flex-col justify-start md:justify-center items-center relative overflow-hidden pt-10 md:pt-0"
>

            {/* Animated geometric shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="float-shape absolute top-[10%] left-[5%] w-32 h-32 border border-accent/20 rounded-full" />
              <div className="float-shape absolute top-[20%] right-[10%] w-20 h-20 border border-primary/20 rotate-45" />
              <div className="float-shape absolute bottom-[30%] left-[15%] w-16 h-16 bg-accent/5 rounded-lg rotate-12" />
              <div className="float-shape absolute bottom-[20%] right-[20%] w-24 h-24 border-2 border-border/30 rounded-2xl" />
              <div className="float-shape absolute top-[40%] right-[5%] w-12 h-12 bg-primary/5 rounded-full" />
              
              {/* Grid pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
                <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
              {/* Decorative lines */}
              <div className="hero-line w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 origin-left" />
              
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm text-muted-foreground mb-10"
              >
                <Rocket className="w-4 h-4 text-accent" />
                Est. 2021 — CULTURE-SHAPING CREATIVE STUDIO
              </motion.span>
              
              <h1 ref={heroTextRef} className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight max-w-6xl mx-auto perspective-1000">
                {splitChars(heroText, 'hero-char')}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-10"
              >
                Where marketing meets technology, and strategy meets results
              </motion.p>

              <div className="hero-line w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-10 origin-right" />

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
                  <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Introduction Section - Text Blur Reveal */}
          <section className="py-16 md:py-24 lg:py-32 relative">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/[0.02] to-transparent" />
            
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                <div className="lg:w-1/4">
                  <span className="text-sm text-accent font-medium tracking-wider uppercase flex items-center gap-2">
                    <span className="w-8 h-px bg-accent" />
                    Who We Are
                  </span>
                </div>
                <div ref={introRef} className="lg:w-3/4">
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
                    {splitText(introText, 'intro-word')}
                  </p>
                  
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mt-6 md:mt-8 max-w-3xl">
                    We combine creative marketing strategies with powerful technology solutions to build brands, drive performance, and deliver measurable business results. Our approach is simple — understand the business, leverage the right technology, and execute strategies that create real impact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Are - Bento Grid Section */}
          <section ref={whoWeAreRef} className="py-16 md:py-24 lg:py-32 bg-secondary relative overflow-hidden">
            {/* Animated orbit ring - hidden on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none hidden lg:block">
              <div className="orbit-ring absolute inset-0 border border-accent/10 rounded-full" />
              <div className="orbit-ring absolute inset-8 border border-border/20 rounded-full" style={{ animationDirection: 'reverse' }} />
            </div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="text-center mb-10 md:mb-14">
                <span className="text-sm text-accent font-medium tracking-wider uppercase mb-3 block">Who We Are</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">The Team Behind Growth</h2>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5 max-w-6xl mx-auto">
                {/* Main large card */}
                <div className="bento-item col-span-12 lg:col-span-8 bg-background rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-border/50">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                   <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
  <Users className="w-5 h-5 md:w-7 md:h-7 text-black" />
</div>

                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Modern Growth Experts</h3>
                      <p className="text-sm md:text-base text-muted-foreground">At the intersection of marketing, data & technology</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    We are a team of strategists, marketers, designers, and tech experts who believe that modern growth happens at the intersection of marketing, data, and technology. From building strong digital identities to deploying scalable tech solutions, we work as an extension of your team.
                  </p>
                </div>

                {/* Stats card */}
                <div className="bento-item col-span-12 md:col-span-6 lg:col-span-4 bg-foreground text-background rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent">5+</span>
                  <span className="text-background/70 mt-2 text-sm md:text-base">Years of Experience</span>
                </div>

                {/* Role cards */}
                <div className="bento-item col-span-6 md:col-span-6 lg:col-span-3 bg-background rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-3 md:mb-4">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg">Strategists</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Data-driven planning</p>
                </div>

                <div className="bento-item col-span-6 md:col-span-6 lg:col-span-3 bg-background rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-3 md:mb-4">
                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg">Marketers</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Performance experts</p>
                </div>

                <div className="bento-item col-span-6 md:col-span-6 lg:col-span-3 bg-background rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-3 md:mb-4">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg">Designers</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Visual storytellers</p>
                </div>

                <div className="bento-item col-span-6 md:col-span-6 lg:col-span-3 bg-background rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-3 md:mb-4">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg">Tech Experts</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Scalable solutions</p>
                </div>

                {/* Bottom wide card */}
                <div className="bento-item col-span-12 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-2xl md:rounded-3xl p-5 md:p-8 border border-accent/20">
                  <p className="text-lg md:text-xl lg:text-2xl font-medium text-center">
                    Focused on <span className=""><b>long-term success</b></span>, not short-term wins.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Approach Section - Radial Cards */}
          <section className="py-16 md:py-24 lg:py-32 approach-section relative overflow-hidden">
            {/* Background decorative */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
                <div className="approach-center-pulse absolute inset-0 border border-accent/20 rounded-full" />
                <div className="absolute inset-[100px] border border-border/30 rounded-full" />
                <div className="absolute inset-[200px] border border-border/20 rounded-full" />
              </div>
            </div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="text-center mb-12 md:mb-16">
               <span className="text-sm text-black font-medium tracking-wider uppercase mb-4 block">Our Approach</span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Data-driven. Creative. Scalable.</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every solution tailored to your business goals — because no two brands grow the same way.
                </p>
              </div>

              {/* Approach Cards Grid */}
              <div ref={approachRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {approachItems.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={item.title}
                      className="approach-card group relative"
                    >
                      <div className="relative bg-secondary border border-border/50 rounded-2xl p-6 md:p-8 h-full">
                        {/* Number badge */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 bg-accent rounded-xl flex items-center justify-center text-accent-foreground font-bold text-xs md:text-sm shadow-lg">
                          0{i + 1}
                        </div>
                        
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom highlight */}
              <div className="mt-10 md:mt-12 text-center">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-background rounded-full border border-border/50">
                  <Rocket className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Continuous optimization & improvement</span>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us - Stats Section */}
          <section ref={whyUsRef} className="py-16 md:py-24 lg:py-32 bg-foreground text-background why-section relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="text-center mb-10 md:mb-14">
                <span className="text-sm text-accent font-medium tracking-wider uppercase mb-3 block">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Built Different</h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {whyChooseUs.map((item, i) => (
                  <div key={item.label} className="why-stat text-center">
                    <div className="relative inline-block mb-2 md:mb-4">
                      <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent">
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-background/70 text-sm md:text-base">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="why-stat p-5 md:p-8 border border-background/10 rounded-xl md:rounded-2xl">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-accent mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold mb-2">Startup-friendly</h3>
                  <p className="text-sm md:text-base text-background/60">Flexible solutions that grow with your business from day one.</p>
                </div>
                <div className="why-stat p-5 md:p-8 border border-background/10 rounded-xl md:rounded-2xl">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-accent mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold mb-2">Enterprise-ready</h3>
                  <p className="text-sm md:text-base text-background/60">Scalable infrastructure that handles millions of users.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section ref={missionRef} className="py-16 md:py-24 lg:py-32 relative">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="absolute -top-3 -left-3 w-12 md:w-16 h-12 md:h-16 border-l-2 border-t-2 border-accent/50 rounded-tl-2xl hidden md:block" />
                  <div className="bg-secondary rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <Target className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                      <span className="text-xs md:text-sm text-accent font-medium tracking-wider uppercase">Our Mission</span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
                      {splitChars("Empowering brands with smart marketing and scalable technology", 'mission-char')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                      Helping them achieve sustainable growth in an ever-evolving digital world.
                    </p>
                  </div>
                </motion.div>

                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative lg:mt-12"
                >
                  <div className="absolute -bottom-3 -right-3 w-12 md:w-16 h-12 md:h-16 border-r-2 border-b-2 border-accent/50 rounded-br-2xl hidden md:block" />
                  <div className="bg-secondary rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <Eye className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                      <span className="text-xs md:text-sm text-accent font-medium tracking-wider uppercase">Our Vision</span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
                      To become a trusted global partner
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                      For businesses seeking performance-driven marketing and innovative tech solutions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section ref={ctaRef} className="py-16 md:py-24 lg:py-32 bg-secondary relative overflow-hidden">
            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0.8, 1], [0, -80])
              }}
              className="absolute inset-0 flex items-center justify-center opacity-[0.03]"
            >
              <span className="text-[15vw] font-bold whitespace-nowrap">GROW</span>
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="cta-content max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 rounded-full bg-accent/10 flex items-center justify-center"
                >
                  <Heart className="w-7 h-7 md:w-10 md:h-10 text-accent" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                  Let's Build, Scale & Grow
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-3">
                  — Together
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
                  Where marketing meets technology, and strategy meets results.
                </p>

                <motion.a
                  href="/contacts"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-foreground text-background rounded-full text-sm md:text-base font-medium"
                >
                  Start Your Growth Journey
                  <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
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
