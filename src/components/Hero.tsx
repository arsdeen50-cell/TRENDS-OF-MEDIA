import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";

const lines = [
  "Trends of Media® – Premium Digital Marketing & Branding Company",
  "Building brands that shape culture",
  "Designing digital products with purpose",
  "Engineering creativity for business",
  "Strategy, design, and technology",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const PAUSE_TIME = 2500;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();

  // 1. Typewriter Logic
  useEffect(() => {
    const currentFullText = lines[index];
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullText.substring(0, displayText.length + 1));

        if (displayText === currentFullText) {
          // Pause at the end of the sentence
          setTimeout(() => setIsDeleting(true), PAUSE_TIME);
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % lines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  // 2. Cursor Blink Animation
  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-white flex items-center overflow-hidden font-sans">
        
        {/* LEFT SIDEBAR STRIP */}
        <div className="absolute left-0 top-0 h-full w-20 border-r border-gray-100 hidden lg:flex flex-col justify-between py-10 items-center z-20">
          <span className="text-[10px] font-black rotate-180 [writing-mode:vertical-lr] tracking-widest text-gray-300 uppercase">
            Trends of Media / 2026
          </span>
          <div className="w-1 h-1 bg-[#FF6B4A] rounded-full" />
        </div>

        {/* RIGHT STRIP */}
        <div className="absolute right-0 top-0 h-full w-24 border-l border-gray-100 hidden lg:flex justify-center items-center">
          <button
            onClick={() => navigate("/projects")}
            className="rotate-90 text-[11px] font-black uppercase tracking-[0.4em] hover:text-[#FF6B4A]"
          >
            Start a Project —
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col items-center justify-center z-10 text-center px-10 lg:px-44">
          <div className="mb-8 overflow-hidden">
            <span className="inline-block text-[10px] uppercase tracking-[0.6em] text-gray-400 font-medium">
              Creative Excellence
            </span>
          </div>

          {/* TYPEWRITER HEADING */}
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tighter leading-[1.1] text-black max-w-5xl min-h-[3.3em] lg:min-h-[2.2em]">
            {displayText}
            <span
              ref={cursorRef}
              className="inline-block w-[2px] h-[0.9em] ml-2 bg-[#FF6B4A] align-middle"
            />
          </h1>

          {/* MOBILE BUTTON */}
          <div className="mt-12 lg:hidden">
            <button
              onClick={() => navigate("/projects")}
              className="text-[10px] font-black uppercase tracking-widest py-4 px-8 bg-black text-white rounded-full"
            >
              Start a Project
            </button>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="about-sub-text"
          >
            We Build Creative Systems & Campaigns That Elevate Brands
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-sub-text max-w-5xl w-full"
          >
            Trends of Media® is a premium digital marketing and creative agency
            helping founders, startups, and global brands grow through branding,
            website development, social media marketing, performance marketing,
            mobile app development, and creative production.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="we-sub-text text-xs md:text-sm"
          >
            We don’t just market brands — we build market leaders.
          </motion.p>
        </div>

        {/* BOTTOM DECORATION */}
        <div className="absolute bottom-10 left-32 hidden lg:flex gap-12 text-[9px] font-bold text-gray-300 tracking-widest uppercase">
          <span>Strategy</span>
          <span className="text-gray-200">/</span>
          <span>Design</span>
          <span className="text-gray-200">/</span>
          <span>Development</span>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .hero-sub-text {
          margin-top: 20px;
          font-size: 1rem;
          color: #666;
        }
        .we-sub-text {
          margin-top: 20px;
          color: #666;
        }
      `}</style>
    </>
  );
};

export default Hero;