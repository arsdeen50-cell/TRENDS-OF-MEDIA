import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "We build SEO-friendly, high-performance websites that convert visitors into customers. Every site we create is structured for search engine visibility, lightning-fast load speeds, and seamless user experience across all devices. From clean code architecture to keyword-optimised content hierarchy, our websites are engineered to rank, engage, and grow your business organically over time.",
    // capabilities: ["UI/UX", "SEO", "Performance", "Website Development"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "We design and develop scalable mobile applications that deliver real business results on both Android and iOS platforms. Built with performance, security, and user experience at the core, our apps are crafted to support your growth from launch day to long-term scale. Whether you're a startup or an enterprise, we build solutions that users love and businesses rely on.",
    // capabilities: ["Android", "iOS", "UI/UX", "Deployment"],
  },
  {
    number: "03",
    title: "Branding & Creative Identity",
    description:
      "Your brand is more than a logo — it's the story people tell about you when you're not in the room. We build cohesive brand identities rooted in strategy, visual clarity, and emotional resonance that make your business instantly recognisable. From positioning to visual systems, we craft identities that stand out in crowded markets and stay memorable long after the first impression.",
    // capabilities: ["Branding", "Logo Design", "Visual Identity", "Guidelines"],
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "We help brands build a consistent, compelling presence across Instagram, LinkedIn, and every platform your audience calls home. Our content strategies are built around engagement, storytelling, and community — turning followers into loyal advocates for your brand. With data-backed decisions and creative execution, we grow your social presence in ways that actually move the business forward.",
    // capabilities: ["Content", "Engagement", "Growth", "Analytics"],
  },
  {
    number: "05",
    title: "Performance Marketing",
    description:
      "Every rupee you spend should work harder — and that's exactly what our performance marketing campaigns are designed to do. We run precision-targeted Google and Meta ad campaigns focused on generating quality leads, driving conversions, and maximising your return on investment. From creative to tracking to optimisation, every element is built around measurable, scalable growth.",
    // capabilities: ["Meta Ads", "Google Ads", "ROI", "Tracking"],
  },
  {
    number: "06",
    title: "Influencer Marketing",
    description:
      "We connect your brand with the right creators — voices your audience already trusts and engages with every day. Our influencer campaigns are built on data-driven discovery, authentic partnerships, and end-to-end execution that drives real results beyond just impressions. From micro-influencers to large-scale collaborations, we manage everything so your brand message reaches further and converts better.",
    // capabilities: ["Creators", "Campaigns", "Negotiation", "Tracking"],
  },
  {
    number: "07",
    title: "Production Services",
    description:
      "Great content begins with great production — and we deliver both, from concept to final cut. Our team handles brand films, photography, creative direction, and post-production with a cinematic eye and a strategic mind, ensuring every visual asset elevates your brand presence. Whether it's a product shoot or a full campaign film, we create content that stops the scroll and tells your story beautifully.",
    // capabilities: ["Video", "Photography", "Editing", "Creative"],
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={containerRef}
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
                <div className="lg:col-span-3">
                  <h3 className="text-2xl lg:text-4xl font-medium transition-transform duration-500 group-hover:translate-x-4 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
               <div className="lg:col-span-8">
  <p className="text-base lg:text-lg text-black/70 leading-relaxed text-justify">
    {service.description}
  </p>
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