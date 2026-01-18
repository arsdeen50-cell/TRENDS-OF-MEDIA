import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const experiments = [
  {
    title: 'Fluid Dynamics',
    description: 'Interactive particle systems',
    tags: ['WebGL', 'Three.js'],
  },
  {
    title: 'Morphing Shapes',
    description: 'SVG animation playground',
    tags: ['GSAP', 'SVG'],
  },
  {
    title: 'Sound Visualizer',
    description: 'Audio-reactive visuals',
    tags: ['Web Audio', 'Canvas'],
  },
  {
    title: 'Cursor Effects',
    description: 'Creative mouse interactions',
    tags: ['Framer Motion', 'React'],
  },
];

const Experiments = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section ref={containerRef} className="py-32 lg:py-48 overflow-hidden bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32"
        >
          <span className="text-caption text-muted-foreground mb-6 block">(Lab)</span>
          <h2 className="text-display-lg max-w-3xl">
            Experiments & explorations in digital creativity.
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scrolling experiments */}
      <motion.div style={{ x }} className="flex gap-6 lg:gap-8 pl-6 lg:pl-12">
        {experiments.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex-shrink-0 w-[300px] lg:w-[400px]"
            data-cursor-text="Play"
          >
            {/* Card */}
            <div className="relative aspect-square bg-background overflow-hidden">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 border border-foreground/10 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute w-20 h-20 border border-foreground/10 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-foreground flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-background text-body-lg">View Experiment →</span>
              </motion.div>
            </div>

            {/* Info */}
            <div className="mt-6">
              <h3 className="text-display-md mb-2">{exp.title}</h3>
              <p className="text-body-md text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-body-sm px-3 py-1 bg-muted rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experiments;
