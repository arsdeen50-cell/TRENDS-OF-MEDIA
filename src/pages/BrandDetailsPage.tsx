import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingContact from '@/components/FloatingContact';
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 

const BRAND_CONTENT: Record<string, any> = {
  "arfa-nutrition": {
    title: "Arfa Nutrition",
    client: "Arfa Health",
    year: "2024",
    category: "Wellness",
    description: "Developing a trusted visual language for premium nutritional supplements.",
    fullStory: "Arfa Nutrition required a brand identity that balanced scientific credibility with lifestyle appeal. We utilized a clean, clinical color palette paired with bold, energetic typography to stand out in a crowded wellness market.",
    color: "#ff6b00", 
    gallery: [
      "/images/brands/ArfaNutrition-1.webp",
      "/images/brands/ArfaNutrition-2.webp",
      "/images/brands/ArfaNutrition-3.webp",
      "/images/brands/ArfaNutrition-4.webp",
      "/images/brands/ArfaNutrition-5.webp",
      "/images/brands/ArfaNutrition-6.webp",
      "/images/brands/ArfaNutrition-7.webp",
      "/images/brands/ArfaNutrition-8.webp",
      "/images/brands/ArfaNutrition-9.webp",
      "/images/brands/ArfaNutrition-10.webp",
    ],
    timeline: [
      { step: "01", title: "Discovery", desc: "Deep dive into the health supplement landscape.", align: "left" },
      { step: "02", title: "Visual DNA", desc: "Establishing the color theory and clinical fonts.", align: "right" },
      { step: "03", title: "Prototyping", desc: "3D modeling and sustainable material testing.", align: "left" },
      { step: "04", title: "Evolution", desc: "Final brand guidelines and market rollout.", align: "right" }
    ]
  },
  "barkat": {
    title: "Barkat Fruits",
    client: "Barkat Foods",
    year: "2023",
    category: "Premium Food",
    description: "Elegant packaging for organic and premium dry fruits.",
    fullStory: "For Barkat, we focused on heritage and purity. The packaging design uses earth tones and gold foil accents to reflect the high quality of the product while maintaining a modern shelf presence.",
    color: "#8B4513", 
    gallery: [
      "/images/brands/b11.webp",
      "/images/brands/b22.webp",
      "/images/brands/b33.webp",
      "/images/brands/b44.webp",
      "/images/brands/b55.webp",
      "/images/brands/b66.webp",
      "/images/brands/b77.webp",
      "/images/brands/b88.webp",
      "/images/brands/b99.webp",
    ],
    timeline: [
      { step: "01", title: "Sourcing", desc: "Studying traditional fruit packaging.", align: "left" },
      { step: "02", title: "Palette", desc: "Selecting earthy, organic tones.", align: "right" },
      { step: "03", title: "Design", desc: "Creating the custom calligraphy logo.", align: "left" },
      { step: "04", title: "Print", desc: "Finalizing matte finishes and foil textures.", align: "right" }
    ]
  },
  "powerlifters": {
    title: "Powerlifters",
    client: "PL Nutrition",
    year: "2024",
    category: "Nutrition",
    description: "A high-octane visual identity for elite performance supplements.",
    fullStory: "Powerlifters needed to look aggressive and professional. We used high-contrast black and neon yellow schemes with heavy typography to speak directly to the bodybuilding community.",
    color: "#E2FF00", 
    gallery: [
      "/images/brands/p11.webp",
      "/images/brands/p22.webp",
      "/images/brands/p33.webp",
      "/images/brands/p44.webp",
      "/images/brands/p55.webp",
      "/images/brands/p66.webp",
      "/images/brands/p77.webp",
      "/images/brands/p88.webp",
      "/images/brands/p99.webp",
      "/images/brands/p100.webp",
      "/images/brands/p101.webp",
    ],
    timeline: [
      { step: "01", title: "Market", desc: "Competitive analysis of gym supplements.", align: "left" },
      { step: "02", title: "Energy", desc: "Developing the 'Bolt' icon system.", align: "right" },
      { step: "03", title: "Mockups", desc: "Testing visibility on large protein tubs.", align: "left" },
      { step: "04", title: "Launch", desc: "Digital campaign for fitness influencers.", align: "right" }
    ]
  }
};

const TimelineNode = ({ item, isLeft }: { item: any, isLeft: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`flex flex-col lg:flex-row items-center justify-between mb-32 lg:mb-52 w-full ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[42%] p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] group hover:border-red-500/50 transition-all duration-500 shadow-2xl"
      >
        <div className="flex items-center gap-4 mb-6">
            <span className="text-red-500 font-mono text-xs px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">{item.step}</span>
            <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-red-500/30 transition-colors" />
        </div>
        <h3 className="text-3xl font-black uppercase mb-4 tracking-tight group-hover:text-red-500 transition-colors">{item.title}</h3>
        <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">{item.desc}</p>
      </motion.div>

      <div className="relative flex items-center justify-center z-20 my-10 lg:my-0">
         <motion.div 
            animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute w-12 h-12 bg-red-500/20 rounded-full blur-xl"
         />
         <div className={`w-4 h-4 rounded-full transition-colors duration-500 z-10 ${isInView ? 'bg-red-500 shadow-[0_0_20px_#ff2647]' : 'bg-zinc-700'}`} />
      </div>

      <div className="w-[42%] hidden lg:block" />
    </div>
  );
};

const BrandDetailsPage = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const brand = BRAND_CONTENT[brandId?.toLowerCase() || ""];
  
  const timelineRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(timelineScroll, { stiffness: 400, damping: 90 });

  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: 'instant' }); 
  }, [brandId]);

  if (!brand) return <div className="h-screen bg-white" />;

  return (
    <SmoothScroll>
      <CustomCursor />
      <Header />
      <FloatingContact />
      
      {/* Container must allow full height for images to show */}
      <div className="bg-white text-zinc-900 selection:bg-red-500 selection:text-white min-h-screen">
        <main className="relative overflow-visible">
          
          {/* SECTION 1: HERO */}
         <section ref={heroRef} className="relative min-h-screen flex flex-col lg:flex-row bg-white overflow-visible">
  {/* LEFT CONTENT: TEXT AND DETAILS */}
  <div className="w-full lg:w-[45%] p-8 lg:p-20 flex flex-col justify-between relative z-10 bg-white">
    <motion.div 
      initial={{ opacity: 0, x: -20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}
    >
      <button 
        onClick={() => navigate(-1)} 
        className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-20 text-zinc-400 hover:text-black transition-colors"
      >
        <span className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all text-sm">←</span>
        Go Back
      </button>
      
      <span className="text-red-500 font-mono text-xs tracking-[0.4em] uppercase mb-6 block">
        Est. {brand.year}
      </span>
      
      <h1 className="text-6xl lg:text-[7.5vw] font-black tracking-tighter leading-[0.85] uppercase mb-10">
        {brand.title.split(' ')[0]} <br/>
        <span className="text-zinc-200">
          {brand.title.split(' ').slice(1).join(' ') || "Project"}
        </span>
      </h1>
      
      <div className="flex gap-4">
        <span className="px-4 py-2 bg-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {brand.category}
        </span>
        <span className="px-4 py-2 bg-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {brand.client}
        </span>
      </div>
    </motion.div>

    <div className="hidden lg:block border-t border-zinc-100 pt-10 mt-10">
      <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-sm italic">
        "{brand.description}"
      </p>
    </div>
  </div>

  {/* RIGHT CONTENT: FULL IMAGE DISPLAY */}
  {/* Removing h-screen here allows the image to push the container to its full height */}
  <div className="w-full lg:w-[55%] min-h-[60vh] lg:min-h-screen relative flex items-center justify-center bg-zinc-50 overflow-hidden">
    <motion.img 
      initial={{ scale: 1.05, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      src={brand.gallery[0]} 
      // Using object-contain ensures the image is NEVER cropped.
      // h-auto and max-h-screen ensure it stays within a reasonable view.
      className="w-full h-auto max-h-screen lg:max-h-none object-contain lg:object-cover block"
      alt={brand.title}
    />
    
    {/* Subtle overlay to soften the image edges if needed */}
    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]" />
  </div>
</section>
          {/* SECTION 2: CONTENT GRID */}
          <section className="py-24 lg:py-40 px-6 lg:px-20 bg-white overflow-visible">
              <div className="container mx-auto">
                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-start">
                      <div className="lg:col-span-5">
                          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100">
                              <img src={brand.gallery[1]} className="w-full h-auto object-cover" alt="Detail" />
                          </motion.div>
                      </div>

                      <div className="lg:col-span-7 lg:pt-20">
                          <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
                              The Narrative <br/> <span className="text-red-500 italic font-serif">& Concept.</span>
                          </h2>
                          <div className="grid md:grid-cols-2 gap-10">
                              <p className="text-zinc-500 text-lg leading-relaxed italic border-l-2 border-red-500 pl-6">
                                  "{brand.description}"
                              </p>
                              <p className="text-zinc-500 text-lg leading-relaxed">
                                  {brand.fullStory}
                              </p>
                          </div>
                          <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-16 rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100">
                              <img src={brand.gallery[2]} className="w-full h-auto object-cover" alt="Detail" />
                          </motion.div>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECTION 3: WORKFLOW TREE */}
          <section ref={timelineRef} className="py-40 bg-[#0a0a0a] text-white relative overflow-visible">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col items-center text-center mb-40">
                <span className="px-6 py-2 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-6">Workflow</span>
                {/* <h2 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8]">The <br/> <span className="text-red-500">Tree.</span></h2> */}
              </div>
              <div className="relative max-w-6xl mx-auto">
                <svg className="absolute left-1/2 -translate-x-1/2 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 100 1000" fill="none" preserveAspectRatio="none">
                  <path d="M50 0 C 80 200, 20 350, 50 500 C 80 650, 20 800, 50 1000" stroke="#1a1a1a" strokeWidth="0.5" />
                  <motion.path d="M50 0 C 80 200, 20 350, 50 500 C 80 650, 20 800, 50 1000" stroke="#ff2647" strokeWidth="1.2" style={{ pathLength }} filter="drop-shadow(4px -4px #ff2647)" />
                </svg>
                {brand.timeline.map((item: any, i: number) => (
                  <TimelineNode key={i} item={item} isLeft={item.align === 'left'} />
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: FULL GALLERY EXHIBIT */}
          <section className="py-20 px-6 lg:px-20 bg-white overflow-visible">
            <div className="container mx-auto">
                {/* Secondary Large Images */}
                <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <img src={brand.gallery[3]} className="w-full h-auto rounded-[3rem] shadow-lg block" alt="Gallery 3" />
                    <img src={brand.gallery[4]} className="w-full h-auto rounded-[3rem] shadow-lg block" alt="Gallery 4" />
                </div>
                
                <div className="mb-10">
                    <img src={brand.gallery[5]} className="w-full h-auto rounded-[4rem] shadow-lg block" alt="Gallery 5" />
                </div>

                {/* The "Public/Images/Brands" Loop for extra images */}
                {brand.gallery.length > 6 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {brand.gallery.slice(6).map((imgUrl: string, idx: number) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-[2rem] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-sm"
                            >
                                <img 
                                    src={imgUrl} 
                                    className="w-full h-full object-cover block hover:scale-105 transition-transform duration-700" 
                                    alt={`Extra view ${idx}`} 
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>

          {/* FOOTER CTA */}
          <section className="py-60 text-center relative bg-white">
            <Link to="/" className="group inline-block relative z-10">
              <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-none transition-all group-hover:scale-95">
                Next Project.
              </h2>
              <div className="h-4 w-0 bg-red-500 group-hover:w-full transition-all duration-700 absolute -bottom-4" />
            </Link>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[40vw] font-black select-none pointer-events-none">
              WORK
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default BrandDetailsPage;