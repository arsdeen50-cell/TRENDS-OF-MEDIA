import { Suspense, useLayoutEffect, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer";
import ShadowCursor from "../components/CustomCursor";
import Navigation from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

/* ===================================================================
   SERVICE DETAIL PAGE
=================================================================== */
function ServiceDetailContent() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const scrollFrameRef = useRef(null);

  // --------------------------------------------------
  // URL PARAM → Convert slug back to service name
  // --------------------------------------------------
  // NOTE: route defines `:slug` so we must read `slug` (was `id` → always undefined)
  const { slug } = useParams();

  // ✅ ADD: normalize safely (does NOT change logic)
  const safeSlug = decodeURIComponent(slug || "");

  const formattedService =
    safeSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
    "Website Development";

  // --------------------------------------------------
  // SERVICE DATA
  // --------------------------------------------------
  const serviceData = {
    "Website Development": {
      cards: [
        { id: "01", title: "DISCOVERY", text: "We work collaboratively..." },
        { id: "02", title: "STRUCTURE", text: "We specialize in creating..." },
        { id: "03", title: "DESIGN", text: "We craft premium visuals..." },
        { id: "04", title: "DEVELOPMENT", text: "We engineer scalable..." },
        { id: "05", title: "LAUNCH", text: "We deploy flawless go-live..." },
      ],
    },
    "Mobile App Development": {
      cards: [
        { id: "01", title: "RESEARCH", text: "Mobile UX research..." },
        { id: "02", title: "WIREFRAMES", text: "App structure planning..." },
        { id: "03", title: "UI DESIGN", text: "Mobile interface styling..." },
        { id: "04", title: "ENGINEERING", text: "High-performance builds..." },
        { id: "05", title: "LAUNCH", text: "App Store deployment..." },
      ],
    },
    "Brand & Creative Marketing": {
      cards: [
        { id: "01", title: "BRAND AUDIT", text: "We analyze your brand impact..." },
        { id: "02", title: "POSITIONING", text: "We define unique positioning..." },
        { id: "03", title: "IDENTITY DESIGN", text: "We craft visual identity..." },
        { id: "04", title: "GUIDELINES", text: "We create brand systems..." },
        { id: "05", title: "EXECUTION", text: "We deploy across touchpoints..." },
      ],
    },
    "Social Media Marketing": {
      cards: [
        { id: "01", title: "DISCOVERY", text: "We work collaboratively..." },
        { id: "02", title: "CONTENT STRUCTURE", text: "We build social strategy..." },
        { id: "03", title: "CREATIVE DESIGN", text: "We create scroll-stopping posts..." },
        { id: "04", title: "OPTIMIZATION", text: "We grow engagement organically..." },
        { id: "05", title: "ANALYTICS", text: "We track growth performance..." },
      ],
    },
    "Influencer Marketing": {
      cards: [
        { id: "01", title: "RESEARCH", text: "We find ideal influencers..." },
        { id: "02", title: "OUTREACH", text: "We handle communication..." },
        { id: "03", title: "COLLAB DESIGN", text: "We coordinate content creation..." },
        { id: "04", title: "CAMPAIGN RUN", text: "We manage end-to-end..." },
        { id: "05", title: "RESULTS", text: "We provide analytics & impact..." },
      ],
    },
    "Production Services": {
      cards: [
        { id: "01", title: "CONCEPT", text: "We plan storyboards..." },
        { id: "02", title: "PRE-PRODUCTION", text: "Location, casting, scripting..." },
        { id: "03", title: "SHOOT", text: "We produce high-end visuals..." },
        { id: "04", title: "EDITING", text: "Cinematic edits & effects..." },
        { id: "05", title: "DELIVERY", text: "Final mastered content..." },
      ],
    },
  };

  const cards = serviceData[formattedService]?.cards || [];

  // --------------------------------------------------
  // LATEST PROJECTS IMAGES
  // --------------------------------------------------
 const serviceImages = {
  "Website Development": {
    small: "/images/packaging/02.png",
    big: "/images/packaging/05.png",
    hero: "/images/packaging/077.png",
    title: "Website Development",
  },

  "Mobile App Development": {
    small: "/images/packaging/04.png",
    big: "/images/packaging/06.png",
    hero: "/images/packaging/10.png",
    title: "Mobile App Development",
  },

  "Social Media Marketing": {
    small: "/images/packaging/08.png",
    big: "/images/packaging/09.png",
    hero: "/images/packaging/022.png",
    title: "Social Media Marketing",
  },

  "Influencer Marketing": {
    small: "/images/packaging/055.png",
    big: "/images/packaging/01.png",
    hero: "/images/packaging/07.png",
    title: "Influencer Marketing",
  },

  "Brand & Creative Marketing": {
    small: "/images/packaging/07.png",
    big: "/images/packaging/03.png",
    hero: "/images/packaging/077.png",
    title: "Brand & Creative Marketing",
  },

  "Production Services": {
    small: "/images/packaging/02.png",
    big: "/images/packaging/05.png",
    hero: "/images/packaging/10.png",
    title: "Production Services",
  },
};


  // ✅ ADD: safe fallback (prevents crash)
  const img =
    serviceImages[formattedService] ||
    serviceImages["Website Development"];

  // --------------------------------------------------
  // TITLE / TEXT ANIMATIONS
  // --------------------------------------------------
  useLayoutEffect(() => {
    if (!titleRef.current || !textRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { y: -120, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo(textRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");

    return () => tl.kill();
  }, [formattedService]);

  // --------------------------------------------------
  // SCROLLER PROXY
  // --------------------------------------------------
  useEffect(() => {
    const frame = scrollFrameRef.current;
    if (!frame) return;

    ScrollTrigger.scrollerProxy(frame, {
      scrollTop(value) {
        if (value !== undefined) frame.scrollTop = value;
        return frame.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: frame.clientWidth,
          height: frame.clientHeight,
        };
      },
      pinType: "fixed",
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Ensure content updates from GoalServices clicks reset scroll and refresh triggers
  useEffect(() => {
    const frame = scrollFrameRef.current;
    if (frame) {
      frame.scrollTop = 0;
    }
    // re-evaluate ScrollTrigger measurements after DOM/content change
    ScrollTrigger.refresh();
  }, [formattedService]);

  // --------------------------------------------------
  // HORIZONTAL CARD SCROLL
  // --------------------------------------------------
  useLayoutEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cardsEl = cardsRef.current;

    const ctx = gsap.context(() => {
      gsap.to(cardsEl, {
        x: () => -(cardsEl.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + (cardsEl.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, [cards]);

  /* --------------------------------------------------
     RENDER
  -------------------------------------------------- */

  return (
    <>
      <ShadowCursor />
      <Navigation />

      {/* ✅ ADD: attach scrollFrameRef */}
     <main
  ref={scrollFrameRef}
  className="w-full bg-white text-black overflow-hidden"
>
  <div
    className="
      px-6 pt-24
      sm:px-10 sm:pt-28
      lg:px-[4vw] lg:pt-[8vw]
    "
  >
    {/* BREADCRUMB */}
    <div
      className="
        flex flex-wrap gap-3 mb-10
        text-xs sm:text-sm
        lg:text-[0.9vw]
        opacity-60
      "
    >
      <span>TRENDS OF MEDIA</span>
      <span>•</span>
      <span>SERVICES</span>
      <span>•</span>
      <span className="opacity-100 font-semibold">
        {formattedService.toUpperCase()}
      </span>
    </div>

    {/* TITLE */}
    <div
      ref={titleRef}
      className="
        leading-[0.9]
        mb-12
        lg:leading-[0.8]
        lg:mb-[4vw]
      "
    >
      {formattedService.split(" ").map((word, i) => (
        <h1
          key={i}
          className={`
            font-extrabold uppercase tracking-tight font-['Anton']
            text-[12vw] sm:text-[10vw]
            lg:text-[11vw]
            ${i === 0 ? "text-[#ff2f42]" : "text-black"}
          `}
        >
          {word}
        </h1>
      ))}
    </div>

    <div className="w-full h-px bg-black/10 mb-12 lg:mb-[3vw]" />

    {/* INTRO */}
    <div
      ref={textRef}
      className="
        w-full
        flex flex-col gap-6
        lg:flex-row lg:justify-between lg:items-start
        mt-8 lg:mt-[3vw]
      "
    >
      <p
        className="
          w-full lg:w-[30%]
          uppercase font-semibold opacity-90
          text-sm sm:text-base
          lg:text-[0.95vw]
          leading-relaxed lg:leading-[1.45vw]
        "
      >
        As a company, you require a partner who understands the significance
        of going beyond product and service design.
      </p>

      <p
        className="
          w-full lg:w-[40%]
          opacity-80
          text-sm sm:text-base
          lg:text-[0.95vw]
          leading-relaxed lg:leading-[1.5vw]
        "
      >
        Our expertise lies in building connections that extend to the broader
        scope of your brand.
      </p>
    </div>

    {/* SPACER */}
    <div className="mt-20 lg:mt-[6vw]" />

    {/* ===================== */}
    {/* HORIZONTAL / VERTICAL CARDS */}
    {/* ===================== */}

    {/* DESKTOP — HORIZONTAL SCROLL */}
    <section
      ref={sectionRef}
      className="relative mt-24 hidden lg:block"
    >
      <div ref={cardsRef} className="flex gap-[6vw]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              w-[40vw] h-[60vh]
              bg-black rounded-[25px]
              p-[3vw]
              text-white shadow-xl
              flex-shrink-0
            "
          >
            <h2 className="text-[3.5vw] font-['Anton'] uppercase mb-[2vw]">
              {card.title}
            </h2>

            <p className="text-[1vw] leading-[1.6vw] opacity-90 w-[90%]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* MOBILE / TABLET — VERTICAL */}
    <section className="lg:hidden space-y-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="
            bg-black rounded-2xl p-6
            text-white shadow-xl
          "
        >
          <h2 className="text-2xl font-['Anton'] uppercase mb-4">
            {card.title}
          </h2>

          <p className="text-sm sm:text-base leading-relaxed opacity-90">
            {card.text}
          </p>
        </div>
      ))}
    </section>

    {/* ===================== */}
    {/* LATEST PROJECTS */}
    {/* ===================== */}

    <section className="mt-28 mb-28 lg:mt-[12vw] lg:mb-[12vw]">
      <div
        className="
          flex flex-col gap-10
          lg:flex-row lg:justify-between lg:items-start
          mb-16 lg:mb-[6vw]
        "
      >
        <div className="leading-[0.9]">
          <h1 className="text-[14vw] sm:text-[10vw] lg:text-[10vw] uppercase font-['Anton']">
            LATEST
          </h1>
          <h1 className="text-[14vw] sm:text-[10vw] lg:text-[10vw] uppercase font-['Anton']">
            PROJECTS<span className="text-[#ff2f42]">.</span>
          </h1>
        </div>

        <div
          className="
            w-full lg:w-[40vw]
            h-[300px] sm:h-[400px] lg:h-[55vh]
            rounded-[25px] overflow-hidden shadow-xl
          "
        >
          <img
            src={img.hero}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div
        className="
          flex flex-col gap-8
          lg:flex-row lg:gap-[3vw]
        "
      >
        <div
          className="
            w-full lg:w-[28vw]
            h-[260px] sm:h-[320px] lg:h-[42vh]
            rounded-[25px] overflow-hidden shadow-xl
          "
        >
          <img src={img.small} className="w-full h-full object-cover" />
        </div>

        <div className="w-full lg:w-auto">
          <div
            className="
              w-full lg:w-[40vw]
              h-[320px] sm:h-[420px] lg:h-[55vh]
              rounded-[25px] overflow-hidden shadow-xl
              mb-4
            "
          >
            <img src={img.big} className="w-full h-full object-cover" />
          </div>

          <p
            className="
              uppercase tracking-wider font-semibold opacity-80
              text-sm lg:text-[1vw]
            "
          >
            {img.title}
          </p>
        </div>
      </div>
    </section>
  </div>

  {/* FOOTER */}
  <Footer />
</main>

    </>
  );
}

/* ===================================================================
   SUSPENSE
=================================================================== */
export default function ServiceDetail() {
  return (
    <Suspense fallback={<div style={{ padding: 50 }}>Loading…</div>}>
      <ServiceDetailContent />
    </Suspense>
  );
}