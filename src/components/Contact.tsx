import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Subtle parallax effect for the portal image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#FAFAFA] text-black overflow-hidden flex flex-col items-center"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] whitespace-nowrap">
        <h2 className="text-[20vw] font-black tracking-tighter">BIGTRUNK</h2>
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* HEADER AREA */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 rounded-full border border-[#FF6B4A]/20 bg-[#FF6B4A]/5 text-[#FF6B4A] text-[10px] font-black uppercase tracking-[0.4em] mb-6"
          >
            Our Headquarters
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
          >
            Let's Create <span className="text-[#FF6B4A]">Together</span>
          </motion.h2>
        </div>

        {/* CENTRAL PORTAL SECTION */}
        <div className="relative w-full grid lg:grid-cols-3 items-center gap-12 mb-28">
          
          {/* Left Details */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="order-2 lg:order-1 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-300">The Studio</h3>
              <p className="text-xl font-bold leading-snug">
                506, Town Centre 2,<br />
                Marol Naka, Andheri East,<br />
                Mumbai - 400059
              </p>
            </div>
          </motion.div>

          {/* Center Portal with YOUR LOCAL IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15px] rounded-full border border-dashed border-gray-200" 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[14px] border-white shadow-2xl"
            >
              <motion.img
                style={{ y: yImage, scale: 1.15 }}
                src="/images/contact.png" 
                alt="Mumbai Office Context"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback in case path is slightly different
                  console.error("Image not found at /images/contact.png");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Details */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="order-3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-300">Connect</h3>
              <a href="mailto:support@trendsofmedia.com" className="text-xl font-bold hover:text-[#FF6B4A] transition-colors block">
                support@trendsofmedia.com
              </a>
              <a href="tel:+918879947977" className="text-xl font-bold hover:text-[#FF6B4A] transition-colors block">
                +91 8879947977
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Hub Active</span>
            </div>
          </motion.div>
        </div>

        {/* CITIES NAV */}
        <div className="w-full max-w-2xl flex flex-col items-center">
            {/* <div className="flex flex-wrap justify-center gap-10 mb-12">
                {['Mumbai', 'Delhi', 'Bangalore', 'Dubai'].map((city, idx) => (
                    <button 
                        key={city}
                        className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all ${idx === 0 ? 'text-[#FF6B4A]' : 'text-gray-300 hover:text-gray-600'}`}
                    >
                        {city}
                    </button>
                ))}
            </div> */}
            
            <Link 
              to="/contacts"
              className="group relative px-14 py-5 bg-black text-white rounded-full font-black text-[11px] uppercase tracking-widest transition-all hover:bg-[#FF6B4A] shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Contact;