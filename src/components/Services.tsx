import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Crafting high-performance, visually stunning websites tailored to your brand identity. We focus on user experience, speed, SEO, and modern UI to convert visitors into customers.",
    capabilities: ["UI/UX", "SEO", "Performance", "Modern Web"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Building intuitive and scalable mobile apps for Android & iOS with seamless functionality. From UI/UX to deployment, we deliver smooth, fast, and user-friendly mobile experiences.",
    capabilities: ["Android", "iOS", "UI/UX", "Deployment"],
  },
  {
    number: "03",
    title: "Branding & Creative Identity",
    description:
      "Creating powerful brand identities that make your business unforgettable. From logos to full brand kits, we build visuals that speak your story and attract customers.",
    capabilities: ["Branding", "Logo Design", "Visual Identity", "Guidelines"],
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Growing your brand with strategic content, creativity, and consistent engagement. We build audience-focused communication that boosts reach, followers, and conversions.",
    capabilities: ["Content", "Engagement", "Growth", "Analytics"],
  },
  {
    number: "05",
    title: "Performance Marketing",
    description:
      "Driving measurable results using data-driven ad campaigns across Meta, Google & more. Our campaigns maximize ROI with smart targeting, optimization, and real-time tracking.",
    capabilities: ["Meta Ads", "Google Ads", "ROI", "Tracking"],
  },
  {
    number: "06",
    title: "Influencer Marketing",
    description:
      "Connecting your brand with top influencers across niches to boost visibility and trust. We manage end-to-end campaigns — selection, negotiation, content, and performance tracking.",
    capabilities: ["Creators", "Campaigns", "Negotiation", "Tracking"],
  },
  {
    number: "07",
    title: "Production Services",
    description:
      "Delivering high-end video, photo, and creative production for brands of all sizes. From concept to final edit, we create cinematic content that elevates your brand presence.",
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
      className="py-32 lg:py-5 bg-white text-black"
    >
     <div
  className="container mx-auto px-6 lg:px-12"
  style={{ marginTop: "-160px" }}
>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-10"
        >
          <span className="text-sm uppercase tracking-wider text-black/50 mb-6 block">
            (What we do)
          </span>
          <h2 className="text-4xl lg:text-6xl font-semibold max-w-4xl leading-tight">
            We help ambitious brands and startups create meaningful experiences.
          </h2>
        </motion.div>

        {/* Services List */}
        <div>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group border-t border-black/10 py-12 lg:py-10"
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-1 items-start">
                {/* Number */}
                <span className="lg:col-span-1 text-sm text-black/40">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="lg:col-span-4 text-2xl lg:text-3xl font-medium transition-transform duration-500 group-hover:translate-x-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="lg:col-span-4 text-base text-black/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities */}
                <div className="lg:col-span-3 flex flex-wrap gap-2">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1 text-sm border border-black/20 rounded-full text-black/80"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
