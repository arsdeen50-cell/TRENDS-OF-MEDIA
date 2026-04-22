import { motion } from "framer-motion";

const DigitalMarketingImp = () => {
  return (
    <>
      <section className="dm-minimal-section">
        <div className="dm-minimal-container">
          
          {/* HEADER SECTION - Moves up due to reduced top padding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="dm-header"
          >
            <span className="dm-accent-text">(The Strategy)</span>
            <h2 className="dm-heading">Why Digital Marketing Matters</h2>
          </motion.div>

          {/* CONTENT SECTION */}
          <div className="dm-body">
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

      <style>{`
        .dm-minimal-section {
          background: #ffffff;
          /* Reduced top padding to move section up */
          padding: 40px 0 100px 0; 
          position: relative;
          z-index: 10;
        }

        .dm-minimal-container {
          max-width: 1100px; /* Slightly wider to match a premium layout */
          margin: 0 auto;
          padding: 0 40px; /* Aligned with standard side margins */
        }

        .dm-header {
          margin-bottom: 40px;
        }

        .dm-accent-text {
          font-size: 10px;
          font-weight: 700;
          color: #e71422; 
          text-transform: uppercase;
          letter-spacing: 0.4em; /* Increased spacing for modern look */
          display: block;
          margin-bottom: 20px;
        }

        .dm-heading {
          font-size: clamp(32px, 5vw, 64px); /* Fluid typography */
          font-weight: 600;
          color: #111;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .dm-body {
          display: grid;
          grid-template-cols: 1.2fr 1fr; /* Two column layout for desktop */
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
          color: #444; /* Darker secondary text */
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .dm-body {
            grid-template-cols: 1fr;
            gap: 30px;
          }
          .dm-minimal-container { padding: 0 24px; }
          .dm-minimal-section { padding-top: 20px; }
        }

        @media (max-width: 768px) {
          .dm-heading { font-size: 36px; }
          .dm-primary-text { font-size: 20px; }
          .dm-secondary-text { font-size: 16px; }
        }
      `}</style>
    </>
  );
};

export default DigitalMarketingImp;