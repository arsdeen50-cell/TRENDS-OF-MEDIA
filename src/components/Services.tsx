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
    capabilities: ["UI/UX", "SEO", "Performance", "Website Development"],
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
      "We craft brand identities that people remember.",
    bullets: [
      "Brand identity & positioning",
      "Video production",
      "Ad creatives & visual design",
      "Storytelling & content systems",
    ],
    capabilities: ["Branding", "Logo Design", "Visual Identity", "Guidelines"],
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
      "ROI-focused advertising campaigns designed for conversions.",
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
      "We connect your brand with the right influencers across platforms to build credibility, drive engagement, and convert audiences through data-driven campaigns.",
    bullets: [
      "Influencer discovery & vetting",
      "Authentic creator partnerships",
      "Campaign planning & execution",
      "Performance tracking, analytics",
    ],
    capabilities: ["Creators", "Campaigns", "Negotiation", "Tracking"],
  },
  {
    number: "07",
    title: "Production Services",
    description:
      "Delivering high-end video, photo, and creative production for brands of all sizes. From concept to final edit, we create cinematic content that elevates your brand presence.",
    bullets: [
      "Brand films & promotional videos",
      "Professional photography shoots",
      "Creative direction & storytelling",
      "Editing, post-production",
    ],
    capabilities: ["Video", "Photography", "Editing", "Creative"],
  },
];


const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={containerRef}
      /* Added negative margin-top to pull it up significantly */
      className="-mt-20 lg:-mt-32 pt-0 pb-24 lg:pb-32 bg-white text-black overflow-hidden relative z-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-sm uppercase tracking-widest text-black/50 mb-6 block font-medium">
            (What we do)
          </span>
          <h2 className="text-4xl lg:text-6xl font-semibold max-w-4xl leading-[1.1] tracking-tight">
            We help ambitious brands and startups create meaningful experiences.
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group border-t border-black/10 py-12 lg:py-16 first:border-t-2 first:border-black"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-start">
                {/* Index Number */}
                <div className="lg:col-span-1">
                  <span className="text-sm text-black/40 font-mono">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl lg:text-4xl font-medium transition-transform duration-500 group-hover:translate-x-4 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-base lg:text-lg text-black/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities Tags */}
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap lg:justify-end gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1 text-[11px] uppercase tracking-wider border border-black/20 rounded-full text-black/80 whitespace-nowrap"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullets - Perfectly Aligned under the Title/Description area */}
                {service.bullets && (
                  <div className="lg:col-span-12 mt-10 lg:mt-12">
                    <div className="grid lg:grid-cols-12">
                      {/* Spacer to align bullets with Title column */}
                      <div className="hidden lg:block lg:col-span-1" />
                      <div className="lg:col-span-11">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 list-disc list-inside md:list-outside text-sm text-black/60 font-medium">
                          {service.bullets.map((item) => (
                            <li key={item} className="leading-snug">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;