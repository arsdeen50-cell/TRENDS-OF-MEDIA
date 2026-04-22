import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingImp = () => {
  // Hooks for the second (Dark) section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".dm-word",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const headingText = "WHY CHOOSE TRENDS OF MEDIA AS YOUR DIGITAL MARKETING AGENCY IN MUMBAI";
  const words = headingText.split(" ");

  return (
    <>
      {/* SECTION 1: MINIMAL WHITE SECTION */}
      <section className="dm-minimal-section">
        <div className="dm-minimal-container">
          {/* HEADER SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="dm-header"
          >
            <span className="dm-accent-text">(The Strategy)</span>
            <h2 className="dm-heading-white">Why Digital Marketing Matters</h2>
          </motion.div>

          {/* CONTENT SECTION */}
          <div className="dm-body-minimal">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="dm-primary-text"
            >
              Digital marketing is essential in today’s connected world because your audience lives online. From search engines and social media to email and content platforms, digital marketing helps brands reach the right people at the right time with measurable impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="dm-secondary-text"
            >
              Unlike traditional marketing, digital strategies offer real-time data, precise targeting, and scalable growth—allowing businesses to build awareness, generate leads, and drive conversions efficiently.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK AGENCY SECTION */}
      <section ref={sectionRef} className="dm-section">
        <div className="dm-container">
          {/* Heading */}
          <div className="dm-heading-wrap">
            <h2 className="dm-heading-dark">
              {words.map((word, i) => (
                <span key={i} className="dm-word">
                  {word}&nbsp;
                </span>
              ))}
            </h2>
          </div>

          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="dm-body-dark"
          >
            <p className="dm-para">
              A lot is happening online — but what really matters is how close your brand can get to the right audience at the right moment. Trends of Media is a results-driven digital marketing agency in Mumbai that helps businesses navigate the digital space with strategies that are thoughtful, creative, and built to drive measurable growth.
            </p>
            <p className="dm-para">
              With deep expertise across SEO, social media marketing, performance advertising, influencer campaigns, and web development, we ensure every touchpoint moves your brand forward — bringing clarity, consistency, and real business outcomes that compound over time.
            </p>
            <p className="dm-para">
              Whether you're a startup finding your footing or an established brand ready to scale, we're the digital marketing partner in Mumbai that connects you with your audience across every platform, generates quality leads, and grows your online presence — all with full transparency and measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* Minimal Section Styles */
        .dm-minimal-section {
          background: #ffffff;
          padding: 40px 0 100px 0; 
          position: relative;
          z-index: 10;
        }
        .dm-minimal-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .dm-header { margin-bottom: 40px; }
        .dm-accent-text {
          font-size: 10px;
          font-weight: 700;
          color: #e71422; 
          text-transform: uppercase;
          letter-spacing: 0.4em;
          display: block;
          margin-bottom: 20px;
        }
        .dm-heading-white {
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 600;
          color: #111;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .dm-body-minimal {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .dm-primary-text {
          font-size: 24px;
          line-height: 1.4;
          color: #111;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        .dm-secondary-text {
          font-size: 18px;
          line-height: 1.7;
          color: #444;
          font-weight: 400;
        }

        /* Dark Section Styles */
        .dm-section {
          background: #0a0a0a;
          padding: 60px 0;
          position: relative;
          overflow: hidden;
          margin-bottom: 80px;
        }
        .dm-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 60px;
        }
        .dm-heading-dark {
          font-size: clamp(28px, 4vw, 56px);
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          max-width: 1000px;
        }
        .dm-word { display: inline-block; will-change: transform, opacity; }
        .dm-body-dark {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 1300px;
        }
        .dm-para {
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 400;
          text-align: justify;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .dm-body-minimal { grid-template-columns: 1fr; gap: 30px; }
          .dm-minimal-container { padding: 0 24px; }
          .dm-minimal-section { padding-top: 20px; }
          .dm-container { padding: 0 40px; gap: 48px; }
        }
        @media (max-width: 768px) {
          .dm-heading-white { font-size: 36px; }
          .dm-primary-text { font-size: 20px; }
          .dm-secondary-text { font-size: 16px; }
          .dm-section { padding: 100px 0; }
          .dm-container { padding: 0 24px; gap: 36px; }
          .dm-para { font-size: 15px; text-align: left; }
        }
      `}</style>
    </>
  );
};

export default DigitalMarketingImp;