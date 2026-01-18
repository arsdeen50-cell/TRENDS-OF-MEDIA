import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const trig = ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 90%",
      end: "bottom 10%",
    });

    return () => trig.kill();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      {/* TOP */}
      <div className="footer-top">
        <h1 className="footer-title" onClick={() => navigate("/contacts")}>
          LET’S TALK.<span className="footer-icon" />
        </h1>
      </div>

      <div className="footer-divider" />

      {/* GRID */}
      <div className="footer-grid">
        <h1
          className="footer-section-title"
          onClick={() => navigate("/projects")}
        >
          PROJECTS<span className="footer-icon" />
        </h1>

        <div className="services-wrap">
          <ul>
            {[
              "WEBSITE DESIGN",
              "FRONT-END DEVELOPMENT",
              "BACK-END DEVELOPMENT",
              "WEBSITE SUPPORT",
              "SOCIAL MEDIA ADVERTISING",
              "SEO",
            ].map((s) => (
              <li key={s} onClick={() => navigate("/services")}>
                {s}
              </li>
            ))}
          </ul>

          <h1
            className="footer-section-title right"
            onClick={() => navigate("/services")}
          >
            SERVICES<span className="footer-icon" />
          </h1>
        </div>
      </div>

      <div className="footer-divider" />

      {/* WORK */}
      <h1 className="footer-work" onClick={() => navigate("/projects")}>
        WORK<span className="footer-icon" />
      </h1>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="newsletter">
          <p>NEWSLETTER</p>
          <div className="input-wrap">
            <input placeholder="Your Email" />
            <span>→</span>
          </div>
        </div>

        <p className="copyright">©2025 Trend of Media</p>

        <div className="socials">
          <a href="https://www.linkedin.com/company/trends-of-media/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/trendsofmediaofficial/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
.footer {
  background: #000;
  color: #fff;
  padding: clamp(80px, 12vw, 140px) clamp(20px, 6vw, 60px) 60px;
  font-family: "Anton", sans-serif;
}

/* TOP */
.footer-top {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.footer-title {
  font-size: clamp(42px, 7vw, 80px);
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-align: center;
}

/* ICON */
.footer-icon {
  width: 14px;
  height: 14px;
  background: #cf1d3e;
  clip-path: polygon(
    50% 0%,
    100% 35%,
    100% 70%,
    50% 100%,
    0% 70%,
    0% 35%
  );
}

/* DIVIDER */
.footer-divider {
  margin: 40px 0;
  border-bottom: 2px solid rgba(255,255,255,0.25);
}

/* GRID */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.footer-section-title {
  font-size: clamp(36px, 6vw, 68px);
  cursor: pointer;
}

.footer-section-title.right {
  text-align: right;
}

.services-wrap ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 1.8;
}

.services-wrap li {
  cursor: pointer;
  opacity: 0.8;
}

.services-wrap li:hover {
  opacity: 1;
}

/* WORK */
.footer-work {
  font-size: clamp(42px, 7vw, 80px);
  text-align: center;
  margin: 60px 0;
  cursor: pointer;
}

/* BOTTOM */
.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
}

.newsletter p {
  font-size: 12px;
  letter-spacing: 2px;
  opacity: 0.7;
}

.input-wrap {
  display: flex;
  border-bottom: 1px solid rgba(255,255,255,.4);
  width: 200px;
}

.input-wrap input {
  flex: 1;
  background: none;
  border: none;
  color: white;
  outline: none;
}

.socials {
  display: flex;
  gap: 20px;
}

.socials a {
  color: white;
  opacity: 0.75;
  font-size: 14px;
  text-decoration: none;
}

/* MOBILE */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-section-title.right {
    text-align: center;
    margin-top: 30px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
      `}</style>
    </footer>
  );
};

export default Footer;
