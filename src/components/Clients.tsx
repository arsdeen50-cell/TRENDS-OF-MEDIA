import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/* LOGO SOURCES */
const clientsRow1 = [
  "/images/brands/0000.png",
  "/images/brands/0001.png",
  "/images/brands/0002.png",
  "/images/brands/0003.png",
  "/images/brands/0004.png",
  "/images/brands/0005.png",
];

const clientsRow2 = [
  "/images/brands/0006.png",
  "/images/brands/0007.png",
  "/images/brands/0008.png",
  "/images/brands/0009.png",
  "/images/brands/0010.png",
  "/images/brands/0011.png",
  "/images/brands/0012.png",
];

const Logo = ({ src }: { src: string }) => (
  <div className="flex items-center justify-center w-[160px] h-[80px] md:w-[220px] md:h-[120px] lg:w-[260px] lg:h-[140px] flex-shrink-0 px-4 md:px-8">
    <img
      src={src}
      alt="Brand logo"
      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
);

const Clients = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls1.start({
        x: [0, "-50%"],
        transition: { duration: 25, repeat: Infinity, ease: "linear" },
      });
      controls2.start({
        x: ["-50%", 0],
        transition: { duration: 25, repeat: Infinity, ease: "linear" },
      });
    }
  }, [isInView, controls1, controls2]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 py-16 lg:py-24 overflow-hidden bg-white mt-[-80px] md:mt-[-151px]"
    >
      {/* HEADER */}
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b59055] mb-4 block">
            Trusted Partners
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif text-stone-900">
            Brands that trust Barkat
          </h2>
        </motion.div>
      </div>

      {/* LOGO ROWS WRAPPER */}
      <div className="flex flex-col space-y-2 md:space-y-6">
        
        {/* ROW 1: LEFT TO RIGHT */}
        <div 
          className="relative overflow-hidden group"
          onMouseEnter={() => controls1.stop()}
          onMouseLeave={() => controls1.start({
            x: [null, "-50%"],
            transition: { duration: 25, repeat: Infinity, ease: "linear" },
          })}
        >
          <motion.div
            className="flex flex-row whitespace-nowrap w-fit"
            animate={controls1}
          >
            {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((src, i) => (
              <Logo key={`r1-${i}`} src={src} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: RIGHT TO LEFT */}
        <div 
          className="relative overflow-hidden group"
          onMouseEnter={() => controls2.stop()}
          onMouseLeave={() => controls2.start({
            x: [null, 0],
            transition: { duration: 25, repeat: Infinity, ease: "linear" },
          })}
        >
          <motion.div
            className="flex flex-row whitespace-nowrap w-fit"
            animate={controls2}
          >
            {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((src, i) => (
              <Logo key={`r2-${i}`} src={src} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* GRADIENT OVERLAYS (Optional: Makes the edges look professional) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
    </section>
  );
};

export default Clients;