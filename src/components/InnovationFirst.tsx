import { motion } from "framer-motion";

export default function InnovationFirst() {
  return (
    <section className="w-full bg-white py-[10vw] px-[4vw] text-black">

      {/* TOP LABEL */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-[3vw]"
      >
        <span className="w-[12px] h-[12px] bg-[#ff3b3b] rounded-full"></span>

        <span className="uppercase tracking-[0.32em] text-[1vw] text-black/60 font-medium">
          OUR SERVICES. YOUR GROWTH.
        </span>
      </motion.div>

      {/* MAIN TITLES */}
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[6vw] leading-[1] font-extrabold text-black"
        >
          WE TURN IDEAS INTO
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[6vw] leading-[1] font-extrabold text-black"
        >
          IMPACTFUL DIGITAL RESULTS
          <span className="text-[#ff3b3b]">.</span>
        </motion.h1>
      </div>

      {/* DIVIDER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="flex justify-center items-center gap-6 mt-[3vw] mb-[2vw]"
      >
        <span className="w-[14px] h-[14px] border-2 border-black/70 rounded-full"></span>
        <span className="w-[180px] h-[2px] bg-black/30"></span>
        <span className="w-[14px] h-[14px] border-2 border-black/70 rounded-full"></span>
      </motion.div>

      {/* PARAGRAPH */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="
          text-[1.35vw] leading-[1.7]
          text-black/70
          max-w-[55vw] mx-auto text-center font-light
        "
      >
        Whether it’s websites, branding, or marketing — we build solutions designed
        to scale your business. Driven by research. Elevated by design. Powered by
        execution.
      </motion.p>

    </section>
  );
}
