import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const headline = "Let's create".split("");
  const subline = "together".split("");

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-white text-black overflow-hidden"
      style={{ marginTop: "-150px" }}
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.06 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-black/20"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.04 } : {}}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-black/10"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm text-black/50 mb-8 block tracking-widest uppercase"
          >
            Ready for your next project?
          </motion.span>

          <h2 className="overflow-hidden mb-4">
            <span className="flex justify-center flex-wrap">
              {headline.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-[clamp(3rem,6vw,5rem)] font-medium inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </h2>

          <h2 className="overflow-hidden">
            <span className="flex justify-center flex-wrap">
              {subline.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + headline.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-[clamp(3rem,6vw,5rem)] italic text-black/40 inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
        >
          {/* EMAIL */}
          <a
            href="mailto:hello@studio.com"
            className="group relative bg-black/[0.03] rounded-3xl p-8 border border-black/10 hover:border-black/30 transition-all duration-500"
          >
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-black/50 block mb-4 uppercase tracking-wide">
              Write us
            </span>
            <span className="text-lg font-medium block">
              support@trendsofmedia.com
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+1234567890"
            className="group relative bg-black/[0.03] rounded-3xl p-8 border border-black/10 hover:border-black/30 transition-all duration-500"
          >
            <span className="text-xs text-black/50 block mb-4 uppercase tracking-wide">
              Call us
            </span>
            <span className="text-lg font-medium block">
              +91 8879947977
            </span>
          </a>

          {/* LOCATION */}
          <Link
            to="/contacts"
            className="group relative bg-black/[0.03] rounded-3xl p-8 border border-black/10 hover:border-black/30 transition-all duration-500"
          >
            <span className="text-xs text-black/50 block mb-4 uppercase tracking-wide">
              Visit us
            </span>
            <span className="text-lg font-medium block">
              MUMBAI, INDIA
            </span>
          </Link>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/contacts"
            className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full text-lg font-medium hover:gap-6 transition-all duration-500"
          >
            <span>Start a project</span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* BOTTOM DOTS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex justify-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-black/20" />
          <div className="w-2 h-2 rounded-full bg-black/40" />
          <div className="w-2 h-2 rounded-full bg-black/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
