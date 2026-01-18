import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const showcaseImages = [
  { id: 1, title: "Arfa Nutrition", image: "/images/brands/ArfaNutrition-1.webp", url: "/brand/arfa-nutrition", category: "Wellness", num: "01" },
  { id: 2, title: "Barkat Dry Fruits", image: "/images/brands/b11.webp", url: "/brand/barkat", category: "Premium Food", num: "02" },
  { id: 3, title: "Powerlifters", image: "/images/brands/p11.webp", url: "/brand/powerlifters", category: "Nutrition", num: "03" },
  { id: 4, title: "Nagakat", image: "/images/packaging/08.png", url: "/brand/nagakat", category: "Lifestyle", num: "04" },
  { id: 5, title: "Pet's Alley", image: "/images/packaging/022.png", url: "/brand/pets-alley", category: "Pet Care", num: "05" },
];

const PackagingExhibit = ({ item, index, isAlt = false }: { item: any; index: number; isAlt?: boolean }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yText = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div ref={ref} className={`relative w-full flex flex-col ${isAlt ? 'items-end' : 'items-start'} mb-20 lg:mb-32`}>
      {/* Increased width from 70% to 85% for larger desktop presence */}
      <Link to={item.url} className="relative w-full lg:w-[85%] group">
        
        {/* Adjusted background numbers for larger images */}
        <motion.span 
          style={{ y: yText }}
          className={`absolute -top-10 lg:-top-24 ${isAlt ? '-right-5 lg:-right-10' : '-left-5 lg:-left-10'} text-[25vw] font-black text-zinc-50 select-none z-0 opacity-80`}
        >
          {item.num}
        </motion.span>

        {/* PRODUCT IMAGE - Increased padding and max-height */}
        <div className="relative z-10 flex items-center justify-center p-4 lg:p-8">
          <motion.img
            style={{ y: yImage }}
            src={item.image}
            alt={item.title}
            // Increased max-h from 600px to 800px
            className="w-full h-auto max-h-[550px] lg:max-h-[800px] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.07)] group-hover:drop-shadow-[0_60px_90px_rgba(0,0,0,0.12)] transition-all duration-700"
          />
        </div>

        {/* OVERLAY INFO - Slightly more blur for the larger area */}
        <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 backdrop-blur-[3px] transition-all duration-500 flex items-center justify-center rounded-[3rem]">
           <div className="text-center p-6">
              <span className="text-[11px] uppercase tracking-[0.5em] text-orange-600 font-bold mb-3 block">Discover Case</span>
              <h3 className="text-5xl lg:text-7xl font-black tracking-tighter text-zinc-900 uppercase">VIEW</h3>
           </div>
        </div>
      </Link>

      {/* STATIC LABELS */}
      <motion.div className={`mt-10 ${isAlt ? 'text-right' : 'text-left'} max-w-xl px-4`}>
        <h4 className="text-4xl lg:text-7xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.9]">
          {item.title}
        </h4>
        <div className={`flex items-center gap-4 mt-4 ${isAlt ? 'justify-end' : 'justify-start'}`}>
          {!isAlt && <div className="h-[1.5px] w-12 bg-orange-500" />}
          <p className="text-xs lg:text-sm font-bold text-zinc-400 uppercase tracking-[0.3em]">{item.category}</p>
          {isAlt && <div className="h-[1.5px] w-12 bg-orange-500" />}
        </div>
      </motion.div>
    </div>
  );
};

const BrandShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="mb-24 lg:mb-40">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px]">Volume 01</span>
            <div className="h-[1px] w-12 bg-zinc-200" />
          </div>
          <h2 className="text-7xl lg:text-[11vw] font-black tracking-tighter leading-[0.8] text-zinc-900 uppercase">
            Product <br /> <span className="italic font-serif font-light lowercase text-zinc-400">Archive.</span>
          </h2>
        </div>

        {/* ASYMMETRIC LIST - Max width increased to allow images to breathe */}
        <div className="max-w-7xl mx-auto space-y-32">
          <PackagingExhibit item={showcaseImages[0]} index={0} />
          <PackagingExhibit item={showcaseImages[1]} index={1} isAlt={true} />
          <PackagingExhibit item={showcaseImages[2]} index={2} />
          <PackagingExhibit item={showcaseImages[3]} index={3} isAlt={true} />
          <PackagingExhibit item={showcaseImages[4]} index={4} />
        </div>

        {/* FOOTER CTA */}
        <div className="mt-40 text-center pb-20">
           <Link 
            to="/contact" 
            className="group relative inline-block text-5xl lg:text-[9vw] font-black tracking-tighter uppercase leading-none"
           >
             <span className="relative z-10">Collab?</span>
             <motion.div 
              className="absolute bottom-2 left-0 w-full h-4 bg-orange-100 -z-0 group-hover:h-full transition-all duration-300"
             />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;