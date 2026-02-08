import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-word",
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

  const philosophyText =
    "WE BUILD THE CREATIVE SYSTEMS & CAMPAIGNS THAT ELEVATE Brands";

  const words = philosophyText.split(" ");

  return (
    <>
      <section ref={sectionRef} className="about-section">
        <div className="about-container">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-title"
          >
            Our<br />philosophy
          </motion.h2>

          {/* GRID */}
          <div className="about-grid">

            {/* VIDEO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="about-video"
            >
              <video
                src="/aboutus.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>

            {/* TEXT */}
            <div className="about-text">
              <p ref={textRef} className="about-main-text">
                {words.map((word, i) => (
                  <span key={i} className="about-word">
                    {word}
                  </span>
                ))}
              </p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="about-sub-text"
              >
          At Trends of Media, our philosophy is rooted in one belief:
Great marketing is built on systems, not shortcuts.
              </motion.p>

                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="about-sub-text"
              >
        We build creative systems and high-impact marketing campaigns that elevate founders, startups, and global brands into cultural and market leaders.
              </motion.p>

                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="about-sub-text"
              >
         As a premium creative and marketing studio, we blend strategy, creativity, and performance marketing to deliver solutions that drive brand relevance, measurable impact, and sustainable global growth.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .about-section {
          background: #ffffff;
          border-radius: 64px 64px 0 0;
          margin-top: 50px;
          overflow: hidden;
        }

        .about-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 120px 80px;
          margin-top: -144px;
        }

        .about-title {
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 300;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* 🔥 VIDEO FIX */
        .about-video {
          width: 100%;
          max-width: 520px;
          aspect-ratio: 4 / 5;
          border-radius: 32px;
          overflow: hidden;
        }

        .about-video video {
          width: 100%;
          height: 100%;
         
          display: block; /* prevents gaps */
        }

        .about-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-main-text {
          font-size: clamp(1.4rem, 2.2vw, 2.2rem);
          line-height: 1.45;
          font-weight: 300;
          max-width: 560px;
        }

        .about-word {
          display: inline-block;
          margin-right: 0.3em;
          opacity: 0.25;
        }

        .about-sub-text {
          margin-top: 20px;
          font-size: 1rem;
          color: #666;
          max-width: 520px;
        }

        @media (max-width: 900px) {
          .about-container {
            padding: 80px 40px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about-video {
            max-width: 100%;
          }
        }

        @media (max-width: 500px) {
          .about-container {
            padding: 60px 24px;
          }

          .about-title {
            margin-bottom: 48px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
