import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingImp = () => {
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
      <section ref={sectionRef} className="dm-section">
        <div className="dm-container">

          {/* Heading */}
          <div className="dm-heading-wrap">
            <h2 className="dm-heading">
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
            className="dm-body"
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
          padding: 0 0px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 60px;
        }

        /* ===== HEADING ===== */
        .dm-heading-wrap {
          width: 100%;
        }

       .dm-heading {
  font-size: clamp(28px, 4vw, 56px);
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  max-width: 1000px;
}

        .dm-word {
          display: inline-block;
          will-change: transform, opacity;
        }

        /* ===== BODY TEXT ===== */
        .dm-body {
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

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .dm-container {
            padding: 0 40px;
            gap: 48px;
          }
        }

        @media (max-width: 768px) {
          .dm-section {
            padding: 100px 0;
          }
          .dm-container {
            padding: 0 24px;
            gap: 36px;
          }
          .dm-para {
            font-size: 15px;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};

export default DigitalMarketingImp;