import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingImp = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scrub animation for the background text
      gsap.fromTo(
        ".dm-word",
        { opacity: 0.05, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 1,
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
     <section
  ref={sectionRef}
  className="dm-section-v3 mt-[-100px]"
>
        <div className="dm-container-v3">
          
          {/* LARGE BACKGROUND HEADING */}
          <div className="dm-bg-text-wrap">
            <h2 className="dm-giant-title">
              {words.map((word, i) => (
                <span key={i} className="dm-word">
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* FLOATING CONTENT CARD */}
          <div className="dm-content-wrapper">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="dm-card"
            >
              <div className="dm-card-header">
                <span className="dm-tag">Insight</span>
                <div className="dm-line" />
              </div>

              <div className="dm-card-body">
                <p className="dm-main-para">
                  Digital marketing is essential in today’s connected world because your audience lives online. From search engines and social media to email and content platforms, digital marketing helps brands reach the right people at the right time with measurable impact.
                </p>
                
                <p className="dm-sub-para">
                  Unlike traditional marketing, digital strategies offer real-time data, precise targeting, and scalable growth—allowing businesses to build awareness, generate leads, and drive conversions efficiently.
                </p>
              </div>

              {/* <div className="dm-card-footer">
                <button className="dm-explore-btn">
                  Explore Strategy
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div> */}
            </motion.div>
          </div>

        </div>
      </section>

      <style>{`
        .dm-section-v3 {
          background: #ffff;
          padding: 160px 0;
          position: relative;
          overflow: hidden;
        }

        .dm-container-v3 {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ===== BACKGROUND TEXT ===== */
        .dm-bg-text-wrap {
          width: 100%;
          text-align: center;
          pointer-events: none;
          margin-bottom: -120px; /* Overlap effect */
        }

        .dm-giant-title {
          font-size: clamp(4rem, 10vw, 12rem);
          font-weight: 900;
          line-height: 0.9;
          color: #000;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0 40px;
          text-transform: uppercase;
          letter-spacing: -0.05em;
        }

        .dm-word {
          display: inline-block;
          will-change: transform, opacity;
        }

        /* ===== CONTENT CARD ===== */
        .dm-content-wrapper {
          width: 100%;
          max-width: 800px;
          z-index: 2;
        }

        .dm-card {
          background: #fff;
          padding: 80px;
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.1);
          border-left: 8px solid #000;
        }

        .dm-card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .dm-tag {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 12px;
          color: #ff2647;
        }

        .dm-line {
          height: 1px;
          flex-grow: 1;
          background: #eee;
        }

        .dm-main-para {
          font-size: 24px;
          line-height: 1.5;
          font-weight: 600;
          color: #111;
          margin-bottom: 30px;
        }

        .dm-sub-para {
          font-size: 16px;
          line-height: 1.8;
          color: #666;
        }

        .dm-card-footer {
          margin-top: 50px;
        }

        .dm-explore-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.1em;
          transition: 0.3s;
        }

        .dm-explore-btn:hover {
          gap: 20px;
          color: #ff2647;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .dm-card { padding: 60px; }
          .dm-bg-text-wrap { margin-bottom: -60px; }
        }

        @media (max-width: 768px) {
          .dm-section-v3 { padding: 100px 0; }
          .dm-card { padding: 40px 30px; }
          .dm-main-para { font-size: 20px; }
          .dm-bg-text-wrap { margin-bottom: -40px; }
        }
      `}</style>
    </>
  );
};

export default DigitalMarketingImp;