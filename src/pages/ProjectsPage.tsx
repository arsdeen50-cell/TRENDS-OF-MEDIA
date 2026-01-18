import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const projects = [
  // --- ARFA NUTRITION SERIES ---
  { id: 1, title: 'Arfa Nutrition Gold', category: 'Packaging Design', year: '2024', image: '/images/brands/ArfaNutrition-1.webp' },
  { id: 2, title: 'Arfa Premium Blend', category: 'Brand Identity', year: '2024', image: '/images/brands/ArfaNutrition-2.webp' },
  { id: 3, title: 'Arfa Wellness', category: 'Visual System', year: '2024', image: '/images/brands/ArfaNutrition-3.webp' },
  { id: 4, title: 'Arfa Organic Pack', category: 'Packaging', year: '2024', image: '/images/brands/ArfaNutrition-4.webp' },
  { id: 5, title: 'Arfa Eco Series', category: 'Label Design', year: '2024', image: '/images/brands/ArfaNutrition-5.webp' },
  { id: 6, title: 'Arfa Pure', category: 'Packaging Design', year: '2024', image: '/images/brands/ArfaNutrition-6.webp' },
  { id: 7, title: 'Arfa Daily', category: 'Visual Identity', year: '2024', image: '/images/brands/ArfaNutrition-7.webp' },
  { id: 8, title: 'Arfa Active', category: 'Product Design', year: '2024', image: '/images/brands/ArfaNutrition-8.webp' },
  { id: 9, title: 'Arfa Pro', category: 'Packaging System', year: '2024', image: '/images/brands/ArfaNutrition-9.webp' },
  { id: 10, title: 'Arfa Nutrition X', category: 'Limited Edition', year: '2024', image: '/images/brands/ArfaNutrition-10.webp' },

  // --- POWERLIFTER SERIES ---
  { id: 11, title: 'Powerlifter Elite', category: 'Sports Nutrition', year: '2024', image: '/images/brands/p11.webp' },
  { id: 12, title: 'Powerlifter Pro', category: 'Packaging', year: '2024', image: '/images/brands/p22.webp' },
  { id: 13, title: 'Powerlifter Max', category: 'Visual Identity', year: '2024', image: '/images/brands/p33.webp' },
  { id: 14, title: 'Powerlifter 44', category: 'Performance Gear', year: '2024', image: '/images/brands/p44.webp' },
  { id: 15, title: 'Powerlifter 55', category: 'Strength Series', year: '2024', image: '/images/brands/p55.webp' },
  { id: 16, title: 'Powerlifter 66', category: 'Label Design', year: '2024', image: '/images/brands/p66.webp' },
  { id: 17, title: 'Powerlifter 77', category: 'Packaging System', year: '2024', image: '/images/brands/p77.webp' },
  { id: 18, title: 'Powerlifter 99', category: 'Sports Branding', year: '2024', image: '/images/brands/p99.webp' },
  { id: 19, title: 'Powerlifter Century', category: 'Special Edition', year: '2024', image: '/images/brands/p100.webp' },
  { id: 20, title: 'Powerlifter Ultra', category: 'Packaging Design', year: '2024', image: '/images/brands/p101.webp' },

  // --- BARKAT SERIES ---
  { id: 21, title: 'Barkat Classic', category: 'Traditional Pack', year: '2024', image: '/images/brands/b11.webp' },
  { id: 22, title: 'Barkat Special', category: 'Visual Identity', year: '2024', image: '/images/brands/b22.webp' },
  { id: 23, title: 'Barkat Premium', category: 'Branding', year: '2024', image: '/images/brands/b33.webp' },
  { id: 24, title: 'Barkat Retail', category: 'Packaging System', year: '2024', image: '/images/brands/b44.webp' },
  { id: 25, title: 'Barkat Choice', category: 'Label Design', year: '2024', image: '/images/brands/b55.webp' },
  { id: 26, title: 'Barkat Select', category: 'Packaging Design', year: '2024', image: '/images/brands/b66.webp' },
  { id: 27, title: 'Barkat Gold', category: 'Premium Pack', year: '2024', image: '/images/brands/b77.webp' },
  { id: 28, title: 'Barkat Heritage', category: 'Identity Design', year: '2024', image: '/images/brands/b88.webp' },
  { id: 29, title: 'Barkat Legacy', category: 'Packaging', year: '2024', image: '/images/brands/b99.webp' },
];

const ProjectsPage = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects — Trends of Media</title>
        <meta name="description" content="Explore our complete portfolio of brand and packaging designs." />
      </Helmet>

      <SmoothScroll>
        <CustomCursor />
        <Header />
        <FloatingContact />

        <main>
          {/* HERO */}
          <section ref={heroRef} className="min-h-[45vh] flex items-end pb-14 pt-20 sm:pt-24 lg:pt-32">
            <div className="container mx-auto px-6 lg:px-12" style={{ marginBottom: '150px' }}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="text-caption text-muted-foreground mb-6 block"
              >
                (Selected work)
              </motion.span>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-display-xl"
                >
                  Our Portfolio
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-body-lg text-muted-foreground max-w-xl mt-6"
              >
                Comprehensive packaging systems and brand identities for the leading names in nutrition and wellness.
              </motion.p>
            </div>
          </section>

          {/* PROJECTS GRID */}
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12" style={{ marginTop: '-212px' }}>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    className={i % 2 === 1 ? 'lg:mt-32' : ''} // Staggered grid effect
                  >
                    <div
                      className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-6 bg-[#fafafa] border border-zinc-100 group shadow-sm"
                      data-cursor-text="Explore"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain p-6 lg:p-12 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex justify-between items-start px-1">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold mb-1 text-zinc-900">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm lg:text-base">
                          {project.category}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 mt-2">
                        {project.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-32 lg:py-48 border-t border-border">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-display-md mb-8"
              >
                Ready to elevate your brand?
              </motion.h2>
              <motion.a
                href="/contacts"
                className="inline-flex items-center gap-3 text-xl font-medium link-hover"
                data-cursor-text="Connect"
              >
                Start a project <span>→</span>
              </motion.a>
            </div>
          </section>
        </main>

        <Footer />
      </SmoothScroll>
    </>
  );
};

export default ProjectsPage;