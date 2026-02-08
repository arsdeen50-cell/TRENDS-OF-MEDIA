import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";

const lines = [
  "Trends of Media® – Premium Digital Marketing & Branding Company",
  "Building brands that shape culture",
  "Designing digital products with purpose",
  "Engineering creativity for business",
  "Strategy, design, and technology",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_TIME = 1500;

const Hero = () => {
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const textRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentLine.substring(0, text.length + 1));

        if (text === currentLine) {
          setTimeout(() => setIsDeleting(true), PAUSE_TIME);
        }
      }, TYPING_SPEED);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentLine.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }, DELETING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, lineIndex]);

  return (
    <>
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden font-sans">
      
      {/* LEFT STRIP */}
      <div className="absolute left-0 top-0 h-full w-20 border-r border-gray-100 hidden lg:flex flex-col justify-between py-10 items-center">
        <span className="text-[10px] font-black rotate-180 [writing-mode:vertical-lr] tracking-widest text-gray-300">
          TRENDS OF MEDIA / 2025
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
      <div className="flex-1 flex flex-col items-center justify-center text-center px-10 lg:px-44">
        <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 mb-6">
          Creative Excellence
        </span>

        <h1
          ref={textRef}
          className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tighter leading-[1.1]"
        >
          {text}
          <span className="animate-pulse">|</span>
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
  Trends of Media® is a premium digital marketing and creative agency helping founders, startups, and global brands grow through branding, website development, social media marketing, performance marketing, mobile app development, and creative production.
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

      {/* FOOTER LABELS */}
      <div className="absolute bottom-10 left-32 hidden lg:flex gap-12 text-[9px] font-bold text-gray-300 tracking-widest">
        <span>STRATEGY</span>
        <span>DESIGN</span>
        <span>DEVELOPMENT</span>
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
