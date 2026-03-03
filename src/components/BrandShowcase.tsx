import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= DATA ================= */

const showcaseImages = [
  {
    id: 1,
    title: "Heathykrunch",
    image: "/images/mockup/Heathykrunch.webp",
    pdfUrl: "/pdf-viewer.html?file=/images/pdf/HEALTHYKRUNCH.pdf&title=Healthy Krunch Catalogue",
    category: "Branding, Packaging & Strategy",
    num: "01"
  },
  {
    id: 2,
    title: "Barkat Dry Fruits",
    image: "/images/mockup/Barkat2.webp",
    pdfUrl: "#",
    category: "Branding, Packaging & Strategy",
    num: "02"
  },
  {
    id: 3,
    title: "Arfa Nutrition",
    image: "/images/mockup/ARFA.webp",
    pdfUrl: "/pdf-viewer.html?file=/images/pdf/ARFA.pdf&title=Arfa Nutrition Catalogue",
    category: "Branding, Packaging & Strategy",
    num: "03"
  },
  {
    id: 4,
    title: "Powelifter",
    image: "/images/mockup/Scene_Creator_Stationery.webp",
    pdfUrl: "#",
    category: "Branding, Packaging & Strategy",
    num: "04"
  },
  {
    id: 5,
    title: "EYEFLICK",
    image: "/images/mockup/EYEFLICK.webp",
    pdfUrl: "#",
    category: "Branding, Packaging & Strategy",
    num: "05"
  },
  {
    id: 6,
    title: "NAZAKAT",
    image: "/images/mockup/NAZAKAT.webp",
    pdfUrl: "/pdf-viewer.html?file=/images/pdf/NAZAKAT.pdf&title=Nazakat Catalogue",
    category: "Branding, Packaging & Strategy",
    num: "06"
  }
];

/* ================= ITEM COMPONENT ================= */

const PackagingExhibit = ({
  item,
  isFullWidth = false
}: {
  item: any;
  isFullWidth?: boolean;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect applied directly to the image
  const yImage = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

  return (
    <div ref={ref} className={`group w-full flex flex-col mb-12 ${isFullWidth ? "col-span-1 md:col-span-2" : "col-span-1"}`}>
      <a
        href={item.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full block cursor-pointer"
      >
        {/* IMAGE AREA - Container removed, image height/aspect handled directly */}
        <div className="w-full relative">
          <motion.img
            style={{ y: yImage }}
            src={item.image}
            alt={item.title}
            className={`w-full object-cover ${isFullWidth ? "aspect-[24/12]" : "aspect-[4/3]"}`}
          />
        </div>

        {/* INFO ROW - UI Unchanged */}
        <div className="mt-5 pb-5 border-b border-zinc-200 flex items-center justify-between">
          <h4 className="text-xl lg:text-2xl font-bold text-zinc-900 tracking-tight">
            {item.title}
          </h4>
          
          <div className="flex items-center gap-6">
            <p className="hidden sm:block text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
              {item.category}
            </p>
            <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-500">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"
              >
                <path d="M1 13L13 1M13 1H3.5M13 1V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

/* ================= MAIN SECTION ================= */

const BrandShowcase = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-white"
      style={{ marginTop: "-112px" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px]">
              Volume 01
            </span>
            <div className="h-[1px] w-12 bg-zinc-200" />
          </div>

          <h2 className="text-6xl lg:text-[7vw] font-black tracking-tighter leading-[0.85] text-zinc-900 uppercase">
            Projects <br />
            <span className="italic font-serif font-light lowercase text-zinc-400">
              We're Proud Of.
            </span>
          </h2>
        </div>

        {/* GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {showcaseImages.map((item, index) => {
            // Pattern: 1st is Full, 2nd & 3rd are side-by-side, 4th is Full, etc.
            const isFullWidth = index === 0 || index === 3; 

            return (
              <PackagingExhibit
                key={item.id}
                item={item}
                isFullWidth={isFullWidth}
              />
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center pb-12">
          <Link
            to="/contact"
            className="text-5xl lg:text-8xl font-black uppercase hover:italic transition-all duration-500"
          >
            Collab?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;