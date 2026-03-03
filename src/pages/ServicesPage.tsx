import { useState, useRef } from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import GoalServices from "../components/GoalServices";
import WorkflowSection from "../components/WorkflowSection";
import InnovationFirst from "../components/InnovationFirst";
import AnalyticsShowcase from "../components/AnalyticsShowcase";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const redMessages = [
  "STRATEGY",
  "MOTIONDESIGN",
  "MARKETING",
  "GROWTH-DRIVEN",
  "FUTURE EVOLUTION",
];

export default function ServicesPage() {
  const [index, setIndex] = useState(0);
  const scrollFrameRef = useRef(null);

  const cycleMessage = () =>
    setIndex((i) => (i + 1) % redMessages.length);

  return (
    <>
      <CustomCursor />

      <main className="w-full min-h-screen bg-white">
        <div ref={scrollFrameRef} className="w-full h-full bg-white">
          {/* HERO */}
          <section
            className="
              relative w-full min-h-screen bg-white overflow-hidden
              lg:block
              max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center
              max-lg:-mt-[25px]
            "
          >
            <Header />

            {/* ROTATING BUTTON */}
            <div className="max-lg:flex max-lg:justify-center">
              <motion.div
                onClick={cycleMessage}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55 }}
                className="
                  absolute left-[10vw] top-[32vh] cursor-pointer
                  max-lg:static max-lg:mb-10
                "
              >
                <div className="absolute w-[220px] h-[220px] rounded-full bg-[#ff2647]/15" />
                <div className="absolute w-[170px] h-[170px] rounded-full bg-[#ff2647]/25" />
                <div className="relative w-[120px] h-[120px] bg-[#ff2647] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <span className="text-white text-3xl font-bold">↻</span>
                </div>
              </motion.div>
            </div>

            {/* LEFT HEADLINES */}
            <div
              className="
                absolute left-[18vw] top-[22vh] leading-none select-none
                max-lg:static max-lg:text-center max-lg:px-4
                max-lg:mt-[123px]
              "
            >
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[7.5vw] max-lg:text-[12vw] font-extrabold text-[#ff2647]"
              >
                {redMessages[index]}
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-[7.5vw] max-lg:text-[12vw] font-extrabold text-black max-lg:-mt-2"
              >
                WEBSITES
              </motion.h1>
            </div>

            {/* RIGHT TEXT */}
            <div
              className="
                absolute right-[4vw] bottom-[12vh] text-right leading-none select-none
                max-lg:static max-lg:text-center max-lg:mt-6 max-lg:px-4
              "
            >
              <motion.h1
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[6.5vw] max-lg:text-[10vw] font-extrabold text-black"
              >
                THAT HELP YOUR
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
                className="text-[6.5vw] max-lg:text-[10vw] font-extrabold text-black max-lg:-mt-2"
              >
                BUSINESS
              </motion.h1>
            </div>
          </section>

          {/* CONTENT */}
          <GoalServices />
          <WorkflowSection />
          <InnovationFirst />
          <AnalyticsShowcase />
          <Footer />
        </div>
      </main>
    </>
  );
}
