import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingImp = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".dm-word",
        { opacity: 0.25 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingText = "WHY DIGITAL MARKETING IS IMPORTANT";
  const words = headingText.split(" ");

  return (
    <>
      <section ref={sectionRef} className="dm-section">
        <div className="dm-container">

     <motion.h2
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="dm-title text-4xl lg:text-6xl font-semibold mx-auto leading-tight"
  aria-label={headingText}
>
  <span ref={textRef} className="dm-title-wrapper">
    {words.map((word, i) => (
      <span key={i} className="dm-word">
        {word}
        {i < words.length - 1 ? "\u00A0" : ""}
      </span>
    ))}
  </span>
</motion.h2>

          {/* CONTENT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="dm-text"
          >
            Digital marketing is essential in today’s connected world because
            your audience lives online. From search engines and social media to
            email and content platforms, digital marketing helps brands reach
            the right people at the right time with measurable impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="dm-text"
          >
            Unlike traditional marketing, digital strategies offer real-time
            data, precise targeting, and scalable growth—allowing businesses to
            build awareness, generate leads, and drive conversions efficiently.
          </motion.p>

        </div>
      </section>

      {/* CSS */}
      <style>{`
        /* ===== SECTION ===== */
        .dm-section {
          background: #fff;
          padding: 50px 0 140px;
          text-align: center;
          overflow-x: hidden;
        }

        .dm-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .dm-title {
          margin-bottom: 48px;
          white-space: nowrap;
        }

        .dm-title-wrapper {
          display: inline-block;
        }

        .dm-word {
          display: inline-block;
          opacity: 0.25;
          white-space: nowrap;
        }

        /* ===== TEXT ===== */
        .dm-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #555;
          max-width: 900px;
          margin: 0 auto 24px;
        }

        /* ===== TABLET ===== */
        @media (max-width: 900px) {
          .dm-section {
            padding: 70px 0 110px;
          }

          .dm-title {
            white-space: normal; 
          }

          .dm-title-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.3em;
          }

          .dm-word {
            white-space: normal;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .dm-section {
            padding: 0px 0 90px;
          }

          .dm-title {
            margin-bottom: 32px;
          }

          .dm-text {
            font-size: 0.95rem;
            line-height: 1.6;
            padding: 0 8px;
          }
        }
      `}</style>
    </>
  );
};

export default DigitalMarketingImp;