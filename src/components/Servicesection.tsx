import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const services = [
  {
    title: "Web development",
    text:
      "We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere.",
  },
  {
    title: "Application development",
    text:
      "We have a team of skilled developers who are experts in the latest app frameworks, like Angular and Google Web Toolkit.",
  },
  {
    title: "E-commerce",
    text:
      "We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years.",
  },
  {
    title: "Custom content management",
    text:
      "We understand the importance of having a robust and customised CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".service-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-32 lg:py-48"
    >
      <div className="max-w-[1500px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Masked shape */}
          <div className="relative w-full max-w-[520px]">
            <img
              src="/services.png" // replace with your image
              alt="Services"
              className="w-full h-auto object-cover"
              style={{
                clipPath:
                  "polygon(8% 0%, 90% 0%, 100% 12%, 100% 92%, 92% 100%, 10% 100%, 0% 88%, 0% 8%)",
              }}
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col">
          {services.map((item, i) => (
            <div
              key={i}
              className="service-item py-10 border-b border-neutral-200 last:border-none"
            >
              <h3 className="text-xl font-medium mb-4">
                {item.title}
              </h3>
              <p className="text-neutral-600 max-w-xl leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
