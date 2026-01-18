import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const lines = [
  "Building brands that shape culture",
  "Designing digital products with purpose",
  "Engineering creativity for business",
  "Strategy, design, and technology",
];

const paths = [
  "M0,50 Q25,20 50,50 T100,50",
  "M0,50 Q25,80 50,50 T100,50",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLHeadingElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % lines.length;

      const tl = gsap.timeline();

      // TEXT OUT
      tl.to(textRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });

      // SVG MORPH
      tl.to(
        svgPathRef.current,
        {
          attr: { d: paths[nextIndex % paths.length] },
          duration: 0.8,
          ease: "power2.out",
        },
        "<"
      );

      // UPDATE TEXT
      tl.add(() => setIndex(nextIndex));

      // TEXT IN
      tl.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden font-sans">
      {/* SVG BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
        <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw]">
          <path
            ref={svgPathRef}
            d={paths[0]}
            fill="none"
            stroke="black"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="z-10 text-center max-w-4xl px-10">
        <div className="flex justify-center mb-6">
          <span className="h-[1px] w-8 bg-black/20" />
          <span className="mx-4 text-[10px] uppercase tracking-widest text-gray-400">
            Innovation Studio
          </span>
          <span className="h-[1px] w-8 bg-black/20" />
        </div>

        <h1
          ref={textRef}
          className="text-[clamp(2rem,7vw,5rem)] font-extralight tracking-tighter leading-[1.1]"
        >
          {lines[index]}
        </h1>

        <div className="mt-16">
          <button className="text-[11px] uppercase tracking-[0.5em] font-bold py-3 px-8 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all duration-500">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
