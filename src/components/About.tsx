import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-word",
        { opacity: 0.1, y: 5 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const philosophyText = "WE BUILD THE CREATIVE SYSTEMS & CAMPAIGNS THAT ELEVATE Brands";
  const words = philosophyText.split(" ");

  return (
    <>
      <section ref={sectionRef} className="about-v4-section">
        <div className="about-v4-container">
          
          {/* HEADER LAYER */}
          <div className="about-v4-header">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="about-v4-tag"
            >
              01 — OUR CORE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="about-v4-title"
            >
              Systemic<br /><span className="italic-serif">Creativity</span>
            </motion.h2>
          </div>

          <div className="about-v4-content">
            {/* LEFT: FLOATING MEDIA LAYER */}
            <div className="about-v4-media">
              <motion.div 
                style={{ y: isInView ? 0 : 50 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="about-v4-video-wrapper"
              >
                <video src="/aboutus.mp4" autoPlay muted loop playsInline />
                
                {/* FLOATING GLASS ELEMENT */}
                <div className="about-v4-glass-badge">
                  <span className="text-emerald-500 font-bold">●</span>
                  <span className="text-xs tracking-tighter">PREMIUM STUDIO</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: EDITORIAL TEXT LAYER */}
            <div className="about-v4-details">
              <div ref={textRef} className="about-v4-main-text">
                {words.map((word, i) => (
                  <span key={i} className="about-word">
                    {word}
                  </span>
                ))}
              </div>

              <div className="about-v4-sub-content">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="about-v4-description"
                >
                  At Trends of Media, our philosophy is rooted in one belief: Great marketing is built on systems, not shortcuts.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="about-v4-description"
                >
                 We build creative systems and high-impact marketing campaigns that elevate founders, startups, and global brands into cultural and market leaders.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="about-v4-description"
                >
                As a premium creative and marketing studio, we blend strategy, creativity, and performance marketing to deliver solutions that drive brand relevance, measurable impact, and sustainable global growth.
                </motion.p>
                
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  className="about-v4-divider"
                />

                <div className="about-v4-footer-stats">
                  <div>
                    <span className="stat-label">Strategy</span>
                    <div className="stat-bar"><motion.div initial={{width:0}} whileInView={{width: "90%"}} /></div>
                  </div>
                  <div>
                    <span className="stat-label">Creativity</span>
                    <div className="stat-bar"><motion.div initial={{width:0}} whileInView={{width: "95%"}} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-v4-section {
          background: #ffffff;
          padding: 160px 0;
          position: relative;
          overflow: hidden;
        }

        .about-v4-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .about-v4-tag {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #999;
          display: block;
          margin-bottom: 20px;
        }

        .about-v4-title {
          font-size: clamp(4rem, 8vw, 8rem);
          line-height: 0.85;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #111;
          margin-bottom: -40px;
          position: relative;
          z-index: 10;
        }

        .italic-serif {
          font-family: serif;
          font-style: italic;
          font-weight: 400;
          color: #e81115; /* Emerald Green */
        }

        .about-v4-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 100px;
          align-items: flex-start;
        }

        .about-v4-video-wrapper {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 40px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.15);
        }

        .about-v4-video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-v4-glass-badge {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255,255,255,0.3);
        }

        .about-v4-main-text {
          font-size: clamp(1.8rem, 3vw, 3rem);
          line-height: 1.1;
          font-weight: 800;
          color: #111;
          margin-top: 100px;
          margin-bottom: 40px;
          text-transform: uppercase;
        }

        .about-word {
          display: inline-block;
          margin-right: 0.25em;
          will-change: transform, opacity;
        }

        .about-v4-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          max-width: 450px;
          margin-bottom: 40px;
        }

        .about-v4-divider {
          height: 1px;
          background: #eee;
          margin-bottom: 30px;
        }

        .about-v4-footer-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .stat-label {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          color: #111;
          display: block;
          margin-bottom: 8px;
        }

        .stat-bar {
          height: 2px;
          background: #f0f0f0;
          width: 100%;
        }

        .stat-bar div {
          height: 100%;
          background: #059669;
        }

        @media (max-width: 1024px) {
          .about-v4-content { grid-template-columns: 1fr; gap: 40px; }
          .about-v4-main-text { margin-top: 0; }
          .about-v4-title { margin-bottom: 20px; }
        }
      `}</style>
    </>
  );
};

export default About;