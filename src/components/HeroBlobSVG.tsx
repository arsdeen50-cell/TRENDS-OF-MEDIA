import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroBlobSVG = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".orb-1", {
        y: -20,
        x: 10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".orb-2", {
        y: 15,
        x: -15,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".orb-3", {
        y: -25,
        x: -10,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".main-shape", {
        rotation: 360,
        duration: 60,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      });

      gsap.to(".pulse-shape", {
        scale: 1.05,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 500"
      className="w-full max-w-[420px] lg:max-w-[520px] h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
        </linearGradient>

        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(280,80%,60%)" />
          <stop offset="100%" stopColor="hsl(320,80%,60%)" />
        </linearGradient>

        <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(30,100%,60%)" />
          <stop offset="100%" stopColor="hsl(50,100%,60%)" />
        </linearGradient>

        <linearGradient id="grad4" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(200,80%,60%)" />
          <stop offset="100%" stopColor="hsl(220,80%,70%)" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* MAIN BLOB */}
      <g className="main-shape" filter="url(#shadow)">
        <ellipse
          cx="250"
          cy="250"
          rx="180"
          ry="160"
          fill="hsl(var(--background))"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="175"
          ry="155"
          fill="url(#grad1)"
          className="pulse-shape"
        />
        <path
          d="M120 200 Q180 100 320 150"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
      </g>

      {/* ORB 1 */}
      <g className="orb-1">
        <circle cx="350" cy="120" r="24" fill="url(#grad2)" filter="url(#glow)" />
        <circle cx="342" cy="112" r="7" fill="white" fillOpacity="0.6" />
      </g>

      {/* ORB 2 */}
      <g className="orb-2">
        <circle cx="320" cy="340" r="20" fill="url(#grad3)" filter="url(#glow)" />
        <circle cx="314" cy="334" r="6" fill="white" fillOpacity="0.6" />
      </g>

      {/* ORB 3 */}
      <g className="orb-3">
        <circle cx="130" cy="300" r="18" fill="url(#grad4)" filter="url(#glow)" />
        <circle cx="125" cy="295" r="5" fill="white" fillOpacity="0.6" />
      </g>

      {/* DECORATIVE DOTS */}
      <circle cx="400" cy="250" r="4" fill="hsl(var(--muted-foreground))" fillOpacity="0.3" />
      <circle cx="100" cy="180" r="3" fill="hsl(var(--muted-foreground))" fillOpacity="0.2" />
      <circle cx="380" cy="380" r="5" fill="hsl(var(--muted-foreground))" fillOpacity="0.2" />
    </svg>
  );
};

export default HeroBlobSVG;
