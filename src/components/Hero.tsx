import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const lines = [
  "Building brands that shape culture",
  "Designing digital products with purpose",
  "Engineering creativity for business",
  "Strategy, design, and technology",
];

// Healthier, deeper curve paths
const paths = [
  "M0,50 Q25,0 50,50 T100,50",
  "M0,50 Q25,100 50,50 T100,50",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLHeadingElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % lines.length;
      const tl = gsap.timeline();

      tl.to(textRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });

      tl.to(svgPathRef.current, {
        attr: { d: paths[nextIndex % paths.length] },
        duration: 0.8,
        ease: "power2.out",
      }, "<");

      tl.add(() => setIndex(nextIndex));

      tl.fromTo(textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden font-sans">
      
      {/* LEFT SIDEBAR STRIP */}
      <div className="absolute left-0 top-0 h-full w-20 border-r border-gray-100 hidden lg:flex flex-col justify-between py-10 items-center z-20">
        <span className="text-[10px] font-black rotate-180 [writing-mode:vertical-lr] tracking-widest text-gray-300">
          BIGTRUNK / 2026
        </span>
        <div className="w-1 h-1 bg-[#FF6B4A] rounded-full" />
      </div>

      {/* RIGHT SIDEBAR STRIP */}
      <div className="absolute right-0 top-0 h-full w-24 border-l border-gray-100 hidden lg:flex flex-col justify-center items-center z-20 bg-white">
        <button 
          onClick={() => navigate("/projects")}
          className="rotate-90 whitespace-nowrap text-[11px] font-black uppercase tracking-[0.4em] hover:text-[#FF6B4A] transition-colors duration-300"
        >
          Start a Project —
        </button>
      </div>

      {/* SVG BACKGROUND - Thicker "Healthy" Stroke */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw]">
          <path
            ref={svgPathRef}
            d={paths[0]}
            fill="none"
            stroke="black"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 text-center px-10 lg:px-44">
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 font-medium">
            Creative Excellence
          </span>
        </div>

        <h1
          ref={textRef}
          className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-tighter leading-[1.1] text-black max-w-5xl"
        >
          {lines[index]}
        </h1>

        {/* MOBILE ONLY BUTTON */}
        <div className="mt-12 lg:hidden">
          <button 
            onClick={() => navigate("/projects")}
            className="text-[10px] font-black uppercase tracking-widest py-4 px-8 bg-black text-white rounded-full"
          >
            Start a Project
          </button>
        </div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="absolute bottom-10 left-32 hidden lg:flex gap-12 text-[9px] font-bold text-gray-300 tracking-widest">
        <span>STRATEGY</span>
        <span>DESIGN</span>
        <span>DEVELOPMENT</span>
      </div>
    </section>
  );
};

export default Hero;