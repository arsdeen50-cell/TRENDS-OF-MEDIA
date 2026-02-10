import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= DATA ================= */

const showcaseImages = [
  {
    id: 1,
    title: "Pet's Alley",
    image: "/images/mockup/PETSALLEY.webp",
    pdfUrl: "/pdf-viewer.html?file=/images/pdf/PETSALLEY.pdf&title=Pets Alley Catalogue",
    category: "Pet Care",
    num: "01"
  },
  {
    id: 2,
    title: "Car Source",
    image: "/images/mockup/CARSOURCE.webp",
    pdfUrl: "#", // Add specific PDF if available
    category: "Automotive",
    num: "02"
  },
  {
    id: 3,
    title: "Nazakat",
    image: "/images/mockup/NAZAKAT.webp",
    pdfUrl: "/pdf-viewer.html?file=/images/pdf/NAZAKAT.pdf&title=Nazakat Catalogue",
    category: "Lifestyle",
    num: "03"
  },
  {
    id: 4,
    title: "Eye Flick",
    image: "/images/mockup/EYEFLICK.webp",
    pdfUrl: "#",
    category: "Optics",
    num: "04"
  },
  {
    id: 5,
    title: "Healthy Crunch",
    image: "/images/mockup/HEALTHYCRUNCH.webp",
    pdfUrl: "#",
    category: "Premium Food",
    num: "05"
  },
  {
    id: 6,
    title: "Arfa Nutrition",
    image: "/images/mockup/ARFA.webp",
    pdfUrl: "/pdf-viewer.html?file=/images/pdf/ARFA.pdf&title=Arfa Nutrition Catalogue",
    category: "Wellness",
    num: "06"
  }
];

/* ================= ITEM COMPONENT ================= */

const PackagingExhibit = ({
  item,
  isAlt = false
}: {
  item: any;
  isAlt?: boolean;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yText = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div
      ref={ref}
      className={`relative w-full flex flex-col ${
        isAlt ? "items-end" : "items-start"
      } mb-20 lg:mb-28`}
    >
      <a
        href={item.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full lg:w-[85%] group block cursor-pointer"
      >
        {/* BIG NUMBER */}
        <motion.span
          style={{ y: yText }}
          className={`absolute -top-10 lg:-top-20 ${
            isAlt ? "-right-5 lg:-right-10" : "-left-5 lg:-left-10"
          } text-[22vw] font-black text-zinc-50 select-none z-0 opacity-80`}
        >
          {item.num}
        </motion.span>

        {/* IMAGE */}
        <div className="relative z-10 flex items-center justify-center p-4 lg:p-8">
          <motion.img
            style={{ y: yImage }}
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[550px] lg:max-h-[750px] object-contain transition-all duration-700"
          />
        </div>
      </a>

      {/* TEXT */}
      <div
        className={`mt-8 ${
          isAlt ? "text-right" : "text-left"
        } max-w-xl px-4`}
      >
        <h4 className="text-4xl lg:text-6xl font-black uppercase">
          {item.title}
        </h4>

        <div
          className={`flex items-center gap-4 mt-3 ${
            isAlt ? "justify-end" : "justify-start"
          }`}
        >
          {!isAlt && <div className="h-[1.5px] w-12 bg-orange-500" />}
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">
            {item.category}
          </p>
          {isAlt && <div className="h-[1.5px] w-12 bg-orange-500" />}
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN SECTION ================= */

const BrandShowcase = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-white overflow-hidden"
      style={{ marginTop: "-112px" }}
    >
      <div className="container mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="mb-20 lg:mb-32">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px]">
              Volume 01
            </span>
            <div className="h-[1px] w-12 bg-zinc-200" />
          </div>

          <h2 className="text-7xl lg:text-[7vw] font-black tracking-tighter leading-[0.8] text-zinc-900 uppercase">
            Projects <br />
            <span className="italic font-serif font-light lowercase text-zinc-400">
              We're Proud Of.
            </span>
          </h2>
        </div>

        {/* ITEMS */}
        <div className="max-w-7xl mx-auto space-y-24 lg:space-y-32">
          {showcaseImages.map((item, index) => (
            <PackagingExhibit
              key={item.id}
              item={item}
              isAlt={index % 2 !== 0}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center pb-12">
          <Link
            to="/contact"
            className="text-5xl lg:text-7xl font-black uppercase"
          >
            Collab?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;