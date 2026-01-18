import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GoalServices() {
  const services = [
    { title: "Website Development", slug: "website-development" },
    { title: "Mobile App Development", slug: "mobile-app-development" },
    { title: "Brand & Creative Marketing", slug: "brand-&-creative-marketing" },
    { title: "Social Media Marketing", slug: "social-media-marketing" },
    { title: "Influencer Marketing", slug: "influencer-marketing" },
    { title: "Production Services", slug: "production-services" },
  ];

  return (
    <section
      className="
        relative w-full bg-white text-black
        px-6 py-20
        sm:px-10 sm:py-24
        lg:px-[8vw] lg:py-[10vw]
        flex flex-col lg:flex-row
        gap-16 lg:gap-[10vw]
      "
      style={{ fontFamily: "Poppins, Inter, sans-serif", marginTop: "-100px" }}
    >
      {/* LEFT — TITLE & DESCRIPTION */}
      <div className="w-full lg:w-[32%]">
        {/* Title Row */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,0,0,0.35)]" />
          <span className="uppercase tracking-[0.3em] text-xs sm:text-sm text-black/60">
            What We Do
          </span>
        </div>

        {/* Description */}
        <p
          className="
            text-base sm:text-lg lg:text-[1.15vw]
            leading-relaxed lg:leading-[1.8vw]
            text-black/75 font-light
            max-w-xl
          "
        >
          At Trends of Media, we excel in constructing website ecosystems that
          seamlessly weave brand narratives, enhance conversions, and cultivate trust.
        </p>
      </div>

      {/* RIGHT — SERVICE LIST */}
      <div className="w-full lg:w-[55%] flex flex-col gap-8 lg:gap-[3vw]">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            to={`/service/${encodeURIComponent(service.slug)}`}
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Label + Arrow */}
              <div className="flex items-center gap-4 mb-3">
                <span
                  className="
                    opacity-0 -translate-x-2
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300
                    text-xl lg:text-[1.7vw]
                    text-black/60
                  "
                >
                  →
                </span>

                <p
                  className="
                    text-xl sm:text-2xl lg:text-[2vw]
                    font-light text-black
                    group-hover:text-black/70
                    transition-colors duration-300
                  "
                >
                  {service.title}
                </p>
              </div>

              {/* Underline */}
              <div className="relative w-full h-px bg-black/20 overflow-hidden">
                <div
                  className="
                    absolute left-0 top-0 h-full w-0
                    bg-black
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
