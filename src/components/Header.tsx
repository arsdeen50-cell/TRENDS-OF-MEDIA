import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

const rotatingMessages = [
  "BUILD BRANDS THAT MATTER",
  "DESIGN THAT CREATES CULTURE",
  "TURNING BRANDS INTO TRENDS",
  "CREATIVITY ENGINEERED FOR GROWTH",
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const blueBoxRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* Scroll */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Rotating text */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((i) => (i + 1) % rotatingMessages.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  /* GSAP animation */
  useEffect(() => {
    if (!menuOpen || !blueBoxRef.current || !navItemsRef.current) return;

    const navItems = navItemsRef.current.children;
    const tl = gsap.timeline();

    tl.fromTo(
      blueBoxRef.current,
      {
        opacity: 0,
        y: 80,
        scaleX: 0.75,
        borderRadius: "120px",
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        y: 0,
        scaleX: 1,
        borderRadius: "25px",
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      navItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      },
      0.3
    );
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[300] transition-all duration-500 ${
          isScrolled ? "bg-white/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
  <div className="flex items-center justify-between h-20 lg:h-24">
    {/* LOGO */}
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/images/Medialogo.png"
        alt="Trends of Media"
        className="h-10 lg:h-12 w-auto object-contain"
      />
      {/* <span className="text-xl font-semibold tracking-tight">
        Trends of Media
      </span> */}
    </Link>

            {/* CENTER TEXT */}
            <div className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
              <span className="text-sm font-semibold tracking-widest">WE</span>
              <span className="w-2 h-2 rounded-full bg-red-500" />

              <div className="overflow-hidden h-6">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-medium block whitespace-nowrap"
                  >
                    {rotatingMessages[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              {/* CONTACT BUTTON */}
              <button
                onClick={() => navigate("/contacts")}
                className="hidden lg:flex items-center px-4 h-10 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                Contact
              </button>

              {/* MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-12 h-12 flex items-center justify-center"
              >
                <div className="relative w-8 h-8">
                  <motion.span
  animate={{
    rotate: menuOpen ? 45 : 0,
    y: menuOpen ? 0 : -4,
    width: menuOpen ? "100%" : "100%",
    left: menuOpen ? "50%" : "0%",
  }}
  className="absolute top-1/2 h-[2px] bg-black"
  style={{ translateY: "-50%", translateX: menuOpen ? "-50%" : "0%" }}
/>

<motion.span
  animate={{
    opacity: menuOpen ? 0 : 1,
  }}
  className="absolute top-1/2 left-0 w-3/4 h-[2px] bg-black"
  style={{ translateY: "-50%" }}
/>

<motion.span
  animate={{
    rotate: menuOpen ? -45 : 0,
    y: menuOpen ? 0 : 4,
    width: menuOpen ? "100%" : "50%",
    left: menuOpen ? "50%" : "0%",
  }}
  className="absolute top-1/2 h-[2px] bg-black"
  style={{ translateY: "-50%", translateX: menuOpen ? "-50%" : "0%" }}
/>

                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* FULLSCREEN MENU */}
     <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#fff] text-black font-['Antonio']"
          >
            <div className="h-full grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-20 pt-[18vh]">
              {/* NAV */}
              <div className="flex flex-col gap-6 text-[12vw] lg:text-[4vw] font-semibold">
                {[
                  { label: "WORK", route: "/projects" },
                  { label: "SERVICES", route: "/services" },
                  { label: "STUDIO", route: "/about" },
                  { label: "CONTACT", route: "/contacts" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => navigate(item.route)}
                    className="cursor-pointer hover:opacity-70 transition"
                  >
                    {item.label}
                  </motion.div>
                ))}
              </div>

              {/* BRAND PANEL */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex flex-col justify-end pb-20 text-right"
              >
                <p className="text-sm tracking-widest opacity-60 mb-4">
                  TRENDS OF MEDIA
                </p>
                <h2 className="text-4xl font-semibold leading-tight">
                  We don’t make noise.
                  <br />
                  We build signals.
                </h2>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
