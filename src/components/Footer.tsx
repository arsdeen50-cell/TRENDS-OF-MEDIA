import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Rotation for the "LET'S TALK" circle badge
      gsap.to(".rotating-svg", {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      // Simple reveal for the grid content
      gsap.from(".footer-grid-col", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="agency-footer">
      {/* TOP DECORATIVE SECTION WITH CIRCULAR BADGE */}
      <div className="footer-top-accent">
        <div className="badge-container" onClick={() => navigate("/contacts")}>
          <div className="rotating-text-wrap">
            <svg viewBox="0 0 100 100" className="rotating-svg">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text fill="white" fontSize="11" fontWeight="bold" letterSpacing="2">
                <textPath xlinkHref="#circlePath">
                  LET'S TALK • LET'S TALK • LET'S TALK • 
                </textPath>
              </text>
            </svg>
            <div className="badge-arrow">→</div>
          </div>
        </div>
      </div>

      <div className="footer-content-wrap">
        {/* LOGO SECTION */}
        <div className="footer-logo-row">
          <h1
  className="brand-logo"
  onClick={() => navigate("/")}
>
  TRENDS OF MEDIA.
</h1>
        </div>

        {/* MAIN GRID - USING YOUR DATA */}
        <div className="footer-main-grid">
          <div className="footer-grid-col">
            <h3>PROJECTS</h3>
            <p onClick={() => navigate("/projects")}>Case Studies</p>
            <p onClick={() => navigate("/projects")}>Recent Work</p>
            <p onClick={() => navigate("/projects")}>Portfolio</p>
          </div>

          <div className="footer-grid-col">
            <h3>SERVICES</h3>
            {[
              "WEBSITE DESIGN",
              "FRONT-END DEVELOPMENT",
              "BACK-END DEVELOPMENT",
              "WEBSITE SUPPORT",
              "SOCIAL MEDIA ADVERTISING",
              "SEO",
            ].map((s) => (
              <p key={s} onClick={() => navigate("/services")}>
                {s}
              </p>
            ))}
          </div>

          <div className="footer-grid-col">
            <h3>COMPANY</h3>
            <p onClick={() => navigate("/about")}>Our Story</p>
            <p onClick={() => navigate("/contacts")}>Contact Us</p>
            {/* <p>Careers</p> */}
          </div>

          <div className="footer-grid-col newsletter-col">
            {/* <h3>NEWSLETTER</h3> */}
            {/* <div className="modern-input-group">
              <input placeholder="Your Email" />
              <button className="input-submit-btn">↗</button>
            </div> */}

            <div className="contact-links">
              <h3>CONNECT</h3>
              <div className="contact-row">
                <span className="icon">✉</span>
                <a href="mailto:support@trendofmedia.com">support@trendofmedia.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom-bar">
           <div className="social-links">
            <a href="https://linkedin.com/company/trends-of-media" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/trendsofmediaofficial/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>

          <p className="copyright-text">©2025 Trend of Media, All rights reserved</p>

          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑
          </button>
        </div>
      </div>

      <style>{`
        .agency-footer {
          background-color: #0c0c0c;
          background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png"); /* Subtle grain texture */
          color: #ffffff;
          position: relative;
          padding-top: 0;
          font-family: 'Inter', sans-serif;
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          margin-top: 100px;
        }

        /* THE CIRCULAR CUTOUT AREA */
        .footer-top-accent {
          position: absolute;
          top: -60px;
          right: 10%;
          width: 140px;
          height: 140px;
          z-index: 10;
        }

        .badge-container {
          width: 130px;
          height: 130px;
          background: #151515;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid #000;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .badge-container:hover { transform: scale(1.05); }

        .rotating-text-wrap { position: relative; width: 100%; height: 100%; }

        .badge-arrow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          color: #cf1d3e; /* Your brand red */
        }

        /* CONTENT LAYOUT */
        .footer-content-wrap { padding: 80px 6vw 40px; }

        .brand-logo {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -1px;
          display: flex;
          align-items: center;
          margin-bottom: 70px;
          cursor: pointer;
        }

        .logo-accent-line {
          width: 50px;
          height: 6px;
          background: #cf1d3e;
          margin: 0 4px;
          display: inline-block;
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 50px;
          margin-bottom: 80px;
        }

        .footer-grid-col h3 {
          font-size: 14px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        .footer-grid-col p {
          font-size: 15px;
          color: #ccc;
          margin-bottom: 12px;
          cursor: pointer;
          transition: 0.3s;
        }

        .footer-grid-col p:hover { color: #cf1d3e; }

        /* NEWSLETTER FIELD */
        .modern-input-group {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          padding: 6px 6px 6px 20px;
          margin-bottom: 40px;
        }

        .modern-input-group input {
          background: transparent;
          border: none;
          color: white;
          outline: none;
          width: 100%;
          font-size: 14px;
        }

        .input-submit-btn {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .input-submit-btn:hover { background: #cf1d3e; }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }

        .contact-row a { color: #fff; text-decoration: none; }

        /* BOTTOM BAR */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .social-links a {
          color: #666;
          text-decoration: none;
          margin-right: 20px;
          font-size: 13px;
          transition: 0.3s;
        }

        .social-links a:hover { color: #fff; }

        .copyright-text { font-size: 12px; color: #444; }

        .back-to-top {
          background: #1a1a1a;
          border: 1px solid #333;
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .footer-top-accent { display: none; }
          .footer-main-grid { grid-template-columns: 1fr; gap: 30px; }
          .brand-logo { font-size: 32px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;