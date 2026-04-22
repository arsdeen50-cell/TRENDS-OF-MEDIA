import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "We build SEO-friendly, high-performance websites that convert visitors into customers.",
    bullets: [
      "Custom website design",
      "Responsive & mobile-first layouts",
      "SEO-optimised structure",
      "Fast loading & secure development",
    ],
    capabilities: ["UI/UX", "SEO", "Performance", "Web Dev"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Scalable and user-friendly mobile applications built for growth.",
    bullets: [
      "Android & iOS apps",
      "Business & startup apps",
      "UI/UX-focused development",
      "Secure & scalable architecture",
    ],
    capabilities: ["Android", "iOS", "UI/UX", "Deployment"],
  },
  {
    number: "03",
    title: "Branding & Creative Identity",
    description:
      "We craft brand identities that people remember through visual storytelling.",
    bullets: [
      "Brand identity & positioning",
      "Video production",
      "Ad creatives & visual design",
      "Storytelling & content systems",
    ],
    capabilities: ["Branding", "Logo", "Visual Identity", "Guidelines"],
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "We help brands grow and engage audiences across all major platforms.",
    bullets: [
      "Instagram & LinkedIn marketing",
      "Content creation & reels",
      "Community engagement",
      "Storytelling & content systems",
    ],
    capabilities: ["Content", "Engagement", "Growth", "Analytics"],
  },
  {
    number: "05",
    title: "Performance Marketing",
    description:
      "ROI-focused advertising campaigns designed for high-impact conversions.",
    bullets: [
      "Google Ads",
      "Meta (Facebook & Instagram) Ads",
      "Lead generation campaigns",
      "Conversion tracking & optimisation",
    ],
    capabilities: ["Meta Ads", "Google Ads", "ROI", "Tracking"],
  },
  {
    number: "06",
    title: "Influencer Marketing",
    description:
      "Connecting your brand with the right influencers to build credibility and drive engagement.",
    bullets: [
      "Influencer discovery & vetting",
      "Authentic creator partnerships",
      "Campaign planning & execution",
      "Performance tracking & analytics",
    ],
    capabilities: ["Creators", "Campaigns", "Negotiation", "Tracking"],
  },
  {
    number: "07",
    title: "Production Services",
    description:
      "Delivering high-end cinematic content that elevates your brand presence.",
    bullets: [
      "Brand films & promotional videos",
      "Professional photography shoots",
      "Creative direction & storytelling",
      "Editing & post-production",
    ],
    capabilities: ["Video", "Photography", "Editing", "Creative"],
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="-mt-20 lg:-mt-32 pt-0 pb-24 lg:pb-32 bg-white text-[#1a1a1a] overflow-hidden relative z-20"
    >
      {/* Container horizontal padding reduced from px-20 to px-10 */}
      <div className="container mx-auto px-6 lg:px-16 max-w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-20 lg:mb-32"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-black/50 mb-6 block font-bold">
            (What we do)
          </span>
          <h3 className="text-4xl lg:text-7xl font-semibold max-w-5xl leading-[1.05] tracking-tighter text-[#11]">
            We help ambitious brands and startups create meaningful experiences.
          </h3>
        </motion.div>

        {/* Services List Wrapper */}
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative py-12 lg:py-20 group"
            >
              <motion.div
                variants={lineVariants}
                className="absolute top-0 left-0 w-full h-[1px] bg-black/20 origin-left"
              />

              <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-start text-left">
                
                {/* Left Column */}
                <div className="lg:col-span-5 flex gap-8 md:gap-12">
                  <span className="text-xs text-black/40 font-mono mt-2 lg:mt-3">
                    {service.number}
                  </span>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-3xl lg:text-5xl font-medium tracking-tighter text-[#111]">
                      {service.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest border border-black/20 rounded-full text-black/60 whitespace-nowrap bg-black/[0.02]"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7 flex flex-col gap-10">
                  <p className="text-lg lg:text-xl text-[#333] leading-relaxed font-normal max-w-2xl">
                    {service.description}
                  </p>

                  <div className="w-full">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                      {service.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-4 text-sm text-[#444] font-medium leading-tight"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#FF6B4A] mt-1.5 shrink-0 shadow-sm" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
          <motion.div
            variants={lineVariants}
            className="w-full h-[1px] bg-black/20 origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;