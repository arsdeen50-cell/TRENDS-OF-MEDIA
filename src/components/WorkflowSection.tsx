"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
	{
		id: "01",
		title: "DESIGN & MOTION",
		desc: "Visual identity that speaks before words do. We craft unforgettable visuals and premium brand experiences.",
		deliver: "Deliverables may include: Brand design, UI/UX, motion videos, social visual systems.",
	},
	{
		id: "02",
		title: "SMOOTH DEVELOPMENT",
		desc: "Built fast. Built clean. Built to convert. We build smooth digital experiences optimized for scale and performance.",
		deliver: "Deliverables may include: Website development, landing pages, integrations & tech setup.",
	},
	{
		id: "03",
		title: "POWERFUL MARKETING",
		desc: "We don’t run campaigns — we build narratives. We bring brands into relevance using insight-driven creativity and psychology.",
		deliver: "Every move is shaped to convert, engage, and create long-term brand recall.",
	},
	{
		id: "04",
		title: "ONGOING SUPPORT",
		desc: "Your growth doesn’t end at launch — neither do we. We refine, enhance and optimize.",
		deliver: "Continuous improvements. Monthly management. Real support.",
	},
];

export default function WorkflowSection() {
	const [active, setActive] = useState(1);

	return (
		<section
			className="
        w-full bg-black font-[Outfit]
        px-6 py-20
        sm:px-10
        lg:px-[3vw] lg:py-[6vw]
        rounded-none
      "
		>
			{/* HEADER */}
			<h2
				className="
          text-white font-black tracking-tight
          text-4xl sm:text-5xl lg:text-[5.4vw]
          leading-[0.95]
          mb-12 lg:mb-[3vw]
        "
			>
				OUR PATHWAY <br />
				TO SUCCESS<span className="text-[#FF4A4A]">.</span>
			</h2>

			{/* DESKTOP VERSION */}
			<div className="hidden lg:block">
				<div className="w-full bg-white rounded-[40px] p-[2.5vw] shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
					<div className="flex gap-[1vw] items-stretch overflow-hidden pl-[220px] pr-[220px] justify-center">
						{steps.map((step, i) => {
							const isActive = i === active;

							return (
								<motion.div
									key={i}
									onMouseEnter={() => setActive(i)}
									animate={{ width: isActive ? 650 : 210 }}
									transition={{ duration: 0.4, ease: "easeOut" }}
									className="
                    h-[550px] rounded-[32px]
                    relative overflow-hidden flex-shrink-0 cursor-pointer
                    bg-gradient-to-b from-white via-[#F3F4F7] to-[#E7E8EC]
                    border border-[#e5e7ef]
                  "
								>
									{/* Shadows */}
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.06),transparent_60%)]" />
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(0,0,0,0.06),transparent_60%)]" />

									{/* Dot + Number */}
									<div className="absolute top-[1vw] left-[1vw] flex items-center gap-2 z-20">
										<span className="w-3 h-3 bg-[#FF4A4A] rounded-full shadow-[0_0_8px_rgba(255,74,74,0.8)]" />
										<span className="text-black text-[0.95vw] font-semibold">
											{step.id}
										</span>
									</div>

									{/* Collapsed label */}
									{!isActive && (
										<div className="absolute inset-0 flex items-center justify-center rotate-90">
											<span className="text-black font-extrabold text-[1.45vw]">
												{step.title}
											</span>
										</div>
									)}

									{/* Expanded */}
									{isActive && (
										<motion.div
											initial={{ opacity: 0, y: 25 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.35 }}
											className="absolute p-[3vw]"
										>
											<h3 className="text-black text-[3.5vw] font-black leading-[0.9] mb-[1.5vw]">
												{step.title}
											</h3>
											<p className="text-[#263050] text-[1vw] leading-[1.6] w-[85%] mb-[1vw]">
												{step.desc}
											</p>
											<p className="text-[#263050] text-[0.9vw] opacity-75 leading-[1.5] w-[85%]">
												{step.deliver}
											</p>
										</motion.div>
									)}
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			{/* MOBILE / TABLET VERSION */}
			<div className="lg:hidden space-y-6">
				{steps.map((step, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className="
              bg-white rounded-2xl p-6
              shadow-[0_10px_30px_rgba(0,0,0,0.15)]
            "
					>
						<div className="flex items-center gap-3 mb-4">
							<span className="w-3 h-3 bg-[#FF4A4A] rounded-full" />
							<span className="font-bold text-black">{step.id}</span>
						</div>

						<h3 className="text-xl sm:text-2xl font-black text-black mb-3">
							{step.title}
						</h3>

						<p className="text-[#263050] text-sm sm:text-base leading-relaxed mb-3">
							{step.desc}
						</p>

						<p className="text-[#263050] text-sm opacity-75">
							{step.deliver}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
