import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";

export default function Contactus() {
  const [step, setStep] = useState(1);
  const containerRef = useRef(null);

  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [referral, setReferral] = useState("");

  const next = () => animateStepOut(() => setStep((s) => Math.min(5, s + 1)));
  const back = () => animateStepOut(() => setStep((s) => Math.max(1, s - 1)));

  /* RED DOT */
  const RedDot = () => (
    <div className="w-5 h-5 rounded-full border border-black/30 flex items-center justify-center">
      <div className="w-2 h-2 bg-red-500 rounded-full" />
    </div>
  );

  /* BUTTON STYLES */
  const buzzButton =
    "group flex items-center gap-3 px-6 py-4 rounded-full bg-white border border-black/20 text-black text-sm md:text-base tracking-widest cursor-pointer transition hover:bg-black hover:text-white";

  const summaryPill =
    "flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-black/20 text-xs md:text-sm tracking-wide";

  /* ANIMATIONS */
  const animateStepIn = () => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  };

  const animateStepOut = (onComplete) => {
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.4,
      ease: "power2.in",
      onComplete,
    });
  };

  useEffect(() => {
    animateStepIn();
  }, [step]);

  return (
    <>
      <CustomCursor />
      <Header />

      <main className="w-full min-h-screen bg-white px-6 md:px-20 pt-28 pb-20">
        {/* RELATIVE PARENT */}
        <div ref={containerRef} className="max-w-6xl mx-auto relative">

          {/* TITLE */}
          <h1
            className="text-center text-3xl md:text-5xl lg:text-6xl font-extrabold mb-14 tracking-tight"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {step === 1 && "HOW CAN WE HELP?"}
            {step === 2 && "WHAT TYPE OF PROJECT?"}
            {step === 3 && "WHAT IS YOUR BUDGET?"}
            {step === 4 && "HOW DID YOU HEAR ABOUT US?"}
            {step === 5 && "READY TO CREATE MAGIC?"}
          </h1>

          {/* SUMMARY */}
          {step >= 3 && (
            <div className="flex flex-wrap gap-4 justify-center mb-14">
              {projectType && (
                <div className={summaryPill}>
                  <RedDot /> {projectType}
                </div>
              )}
              {step >= 4 && budget && (
                <div className={summaryPill}>
                  <RedDot /> {budget}
                </div>
              )}
              {step >= 5 && referral && (
                <div className={summaryPill}>
                  <RedDot /> {referral}
                </div>
              )}
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
              <div onClick={next} className={buzzButton}>
                <RedDot /> START A PROJECT
              </div>
              <div onClick={() => setStep(5)} className={buzzButton}>
                <RedDot /> JOIN OUR TEAM
              </div>
              <div onClick={() => setStep(5)} className={buzzButton}>
                <RedDot /> DROP US A LINE
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "WEBSITE DEVELOPMENT",
                "MOBILE APP DEVELOPMENT",
                "INFLUENCER MARKETING",
                "BRANDING & CREATIVE IDENTITY",
                "SOCIAL MEDIA MARKETING",
              ].map((item) => (
                <div
                  key={item}
                  className={buzzButton}
                  onClick={() => {
                    setProjectType(item);
                    next();
                  }}
                >
                  <RedDot /> {item}
                </div>
              ))}
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="flex flex-wrap justify-center gap-6">
              {["10K – 25K", "25K – 50K", "50K – 75K", "75K – 100K", "100K+"].map(
                (item) => (
                  <div
                    key={item}
                    className={buzzButton}
                    onClick={() => {
                      setBudget(item);
                      next();
                    }}
                  >
                    <RedDot /> {item}
                  </div>
                )
              )}
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "AWWWARDS",
                "FRIEND REFERRAL",
                "WE DID A PROJECT",
                "GOOGLE",
                "ARTICLE",
              ].map((item) => (
                <div
                  key={item}
                  className={buzzButton}
                  onClick={() => {
                    setReferral(item);
                    next();
                  }}
                >
                  <RedDot /> {item}
                </div>
              ))}
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              <input placeholder="First Name *" className="p-4 border rounded" />
              <input placeholder="Last Name *" className="p-4 border rounded" />
              <input placeholder="Phone" className="p-4 border rounded" />
              <input placeholder="Email *" className="p-4 border rounded" />
              <input placeholder="Company *" className="p-4 border rounded" />
              <input placeholder="Deadline (weeks)" className="p-4 border rounded" />

              <textarea
                placeholder="Your message..."
                className="md:col-span-2 h-40 p-4 border rounded resize-none"
              />

              <button
                type="submit"
                className="md:col-span-2 mx-auto mt-6 px-10 py-4 rounded-full bg-black text-white tracking-widest hover:bg-red-600 transition"
              >
                SUBMIT
              </button>
            </form>
          )}

          {/* BACK BUTTON – FIXED POSITION */}
          {step > 1 && (
            <button
              onClick={back}
              className="
                absolute -bottom-16 left-0
                w-12 h-12 rounded-full
                border border-black flex items-center justify-center
                bg-white hover:bg-black hover:text-white transition
              "
            >
              ←
            </button>
          )}
        </div>
      </main>
    </>
  );
}
