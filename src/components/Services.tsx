import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "We build SEO-friendly, high-performance websites that convert visitors into customers. Every site we create is structured for search engine visibility, lightning-fast load speeds, and seamless user experience across all devices. From clean code architecture to keyword-optimised content hierarchy, our websites are engineered to rank, engage, and grow your business organically over time.",
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
      "We design and develop scalable mobile applications that deliver real business results on both Android and iOS platforms. Built with performance, security, and user experience at the core, our apps are crafted to support your growth from launch day to long-term scale. Whether you're a startup or an enterprise, we build solutions that users love and businesses rely on.",
    bullets: [
      "iOS & Android Development",
      "Native & Cross-platform",
      "App Store Optimization",
      "Maintenance & Support",
    ],
    capabilities: ["Android", "iOS", "UI/UX", "Deployment"],
  },
  {
    number: "03",
    title: "Branding & Creative Identity",
    description:
      "Your brand is more than a logo — it's the story people tell about you when you're not in the room. We build cohesive brand identities rooted in strategy, visual clarity, and emotional resonance that make your business instantly recognisable. From positioning to visual systems, we craft identities that stand out in crowded markets and stay memorable long after the first impression.",
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
      "We help brands build a consistent, compelling presence across Instagram, LinkedIn, and every platform your audience calls home. Our content strategies are built around engagement, storytelling, and community — turning followers into loyal advocates for your brand. With data-backed decisions and creative execution, we grow your social presence in ways that actually move the business forward.",
    bullets: [
      "Social Strategy",
      "Content Creation",
      "Community Management",
      "Paid Social Growth",
    ],
    capabilities: ["Content", "Engagement", "Growth", "Analytics"],
  },
  {
    number: "05",
    title: "Performance Marketing",
    description:
      "Every rupee you spend should work harder — and that's exactly what our performance marketing campaigns are designed to do. We run precision-targeted Google and Meta ad campaigns focused on generating quality leads, driving conversions, and maximising your return on investment. From creative to tracking to optimisation, every element is built around measurable, scalable growth.",
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
      "We connect your brand with the right creators — voices your audience already trusts and engages with every day. Our influencer campaigns are built on data-driven discovery, authentic partnerships, and end-to-end execution that drives real results beyond just impressions. From micro-influencers to large-scale collaborations, we manage everything so your brand message reaches further and converts better.",
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
      "Great content begins with great production — and we deliver both, from concept to final cut. Our team handles brand films, photography, creative direction, and post-production with a cinematic eye and a strategic mind, ensuring every visual asset elevates your brand presence. Whether it's a product shoot or a full campaign film, we create content that stops the scroll and tells your story beautifully.",
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
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
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
          <h3 className="text-4xl lg:text-7xl font-semibold max-w-5xl leading-[1.05] tracking-tighter text-[#111]">
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
                {/* Left Column: Number, Title, Capabilities */}
                <div className="lg:col-span-5 flex gap-8 md:gap-12">
                  <span className="text-xs text-black/40 font-mono mt-2 lg:mt-3">
                    {service.number}
                  </span>

                  <div className="flex flex-col gap-6">
                    <h3 className="text-3xl lg:text-5xl font-medium tracking-tighter text-[#111] transition-transform duration-500 group-hover:translate-x-2">
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

                {/* Right Column: Description and Bullets */}
                <div className="lg:col-span-7 flex flex-col gap-10">
                  <p className="text-lg lg:text-xl text-[#333] leading-relaxed font-normal max-w-2xl text-justify">
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
          
          {/* Bottom Line */}
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