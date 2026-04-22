import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";

const lines = [
  "Trends of Media® – Marketing Agency in Mumbai",
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
        setDisplayText(currentFullText.substring(0, displayText.length + 1));

        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), PAUSE_TIME);
        }
      } else {
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
      <section className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden font-sans">
        
        {/* MAIN CONTENT */}
        <div className="w-full flex flex-col items-center justify-center z-10 text-center px-6 md:px-10 lg:px-44">
          
          <div className="mb-6 overflow-hidden">
            <span className="inline-block text-[10px] uppercase tracking-[0.6em] text-gray-400 font-medium">
              Creative Excellence
            </span>
          </div>

          {/* TYPEWRITER HEADING */}
          {/* Added flex and justify-center to keep the cursor pinned to the text correctly */}
          <h1 className="text-[clamp(2.2rem,6vw,4.8rem)] font-light tracking-tighter leading-[1.1] text-black max-w-5xl min-h-[3.5em] md:min-h-[2.5em] lg:min-h-[2.2em] flex flex-wrap justify-center items-center">
            <span>
              {displayText}
              <span
                ref={cursorRef}
                className="inline-block w-[2px] h-[0.8em] ml-2 bg-[#FF6B4A] align-middle"
              />
            </span>
          </h1>

          {/* SUBTEXT GROUP - Wrapped for unified alignment */}
          <div className="flex flex-col items-center max-w-4xl w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="about-sub-text font-medium"
            >
              We Build Creative Systems & Campaigns That Elevate Brands
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-sub-text"
            >
              Trends of Media® is a premium digital marketing and creative agency
              helping founders, startups, and global brands grow through branding,
              website development, social media marketing, performance marketing,
              mobile app development, and creative production.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="we-sub-text text-xs md:text-sm"
            >
              We don’t just market brands — we build market leaders.
            </motion.p>
          </div>

          {/* MOBILE BUTTON - Centered via flex-col items-center above */}
          <div className="mt-12 lg:hidden">
            <button
              onClick={() => navigate("/projects")}
              className="text-[10px] font-black uppercase tracking-widest py-4 px-8 bg-black text-white rounded-full"
            >
              Start a Project
            </button>
          </div>
        </div>

        {/* BOTTOM DECORATION - Adjusted left to center-ish for better balance */}
        <div className="absolute bottom-10 left-10 lg:left-20 hidden lg:flex gap-12 text-[9px] font-bold text-gray-300 tracking-widest uppercase">
          <span>Strategy</span>
          <span className="text-gray-200">/</span>
          <span>Design</span>
          <span className="text-gray-200">/</span>
          <span>Development</span>
        </div>
      </section>

      {/* CSS - Kept your design intact but improved spacing */}
      <style>{`
        .about-sub-text {
          margin-top: 40px;
          font-size: 1.1rem;
          color: #333;
          letter-spacing: -0.01em;
        }
        .hero-sub-text {
          margin-top: 15px;
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }
        .we-sub-text {
          margin-top: 25px;
          color: #999;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default Hero;