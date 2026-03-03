import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Orbital Finance',
    category: 'Fintech',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    color: '#f5f5f5',
  },
  {
    id: 2,
    title: 'Mindful App',
    category: 'Healthcare',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&h=800&fit=crop',
    color: '#e8e8e8',
  },
  {
    id: 3,
    title: 'Urban Studio',
    category: 'Architecture',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    color: '#f0f0f0',
  },
  {
    id: 4,
    title: 'Echo Commerce',
    category: 'E-commerce',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    color: '#ebebeb',
  },
];

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" ref={containerRef} className="py-32 lg:py-48">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-20 lg:mb-32"
        >
          <div>
            <span className="text-caption text-muted-foreground mb-6 block">(Selected work)</span>
            <h2 className="text-display-lg">Featured projects</h2>
          </div>
          <a
            href="#"
            className="hidden lg:flex items-center gap-2 text-body-md link-hover"
            data-cursor-text="All"
          >
            View all work
            <span>→</span>
          </a>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-cursor-text="View"
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-foreground/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-display-md mb-2 transition-transform duration-500 group-hover:translate-x-4">
                    {project.title}
                  </h3>
                  <p className="text-body-md text-muted-foreground">{project.category}</p>
                </div>
                <span className="text-caption text-muted-foreground">{project.year}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile view all link */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:hidden flex items-center justify-center gap-2 mt-12 text-body-md"
        >
          View all work
          <span>→</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Work;
