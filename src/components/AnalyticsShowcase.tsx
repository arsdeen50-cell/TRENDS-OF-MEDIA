import { motion } from "framer-motion";

export default function AnalyticsShowcase() {
  const cards = [
    {
      image: "/images/projects/01.png",
      title: "PET'S ALLEY",
      label: "PETSCARE",
      url: "https://petsalley.co.in/",
    },
    {
      image: "/images/projects/04.png",
      title: "DHAAGAE",
      label: "STYLE INSPIRATIONS",
      url: "https://xn--dhaaga-gva.com/",
    },
    {
      image: "/images/projects/02.png",
      title: "ARFA NUTRITION",
      label: "MASS GAINER",
      url: "https://arfanutrition.com/",
    },
    {
      image: "/images/projects/03.png",
      title: "BARKAT DRY FRUITS",
      label: "DRY FRUITS",
      url: "https://barkatdryfruits.com/",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[6vw] px-4 sm:px-8 lg:px-[4vw]">
      {/* GRID LAYOUT */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6 lg:gap-[2vw]
        "
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="
              bg-[#f7f7fb]
              rounded-2xl lg:rounded-[20px]
              p-5 sm:p-6 lg:p-[1.8vw]
              pb-7 lg:pb-[2.4vw]
              text-center
              border border-black/10
              shadow-[0_6px_20px_rgba(0,0,0,0.12)]
              hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]
              transition
            "
          >
            {/* IMAGE */}
            <div className="relative w-full h-[220px] sm:h-[240px] lg:h-[260px] rounded-xl overflow-hidden mb-5 lg:mb-[1.5vw]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-black text-lg sm:text-xl lg:text-[1.1vw] font-semibold tracking-wide mb-3 lg:mb-[0.8vw]">
              {card.title}
            </h3>

            {/* LABEL */}
            <p className="text-black/60 text-xs sm:text-sm lg:text-[0.9vw] tracking-[0.15em] mb-4 lg:mb-[1.2vw]">
              {card.label}
            </p>

            {/* VISIT BUTTON */}
            <a
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-6 py-2
                lg:px-[1.6vw] lg:py-[0.6vw]
                rounded-full
                border border-black
                text-sm lg:text-[0.9vw]
                font-semibold
                text-black
                hover:bg-black hover:text-white
                transition
              "
            >
              Visit Website →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
