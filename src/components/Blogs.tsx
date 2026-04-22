import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogData = [
  {
    id: 1,
    title: "What is Trends of Media and How It Helps Businesses Grow",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    excerpt: "Discover the philosophy behind Trends of Media and our unique approach to driving sustainable business growth through creative engineering.",
    date: "Apr 05, 2026",
    category: "Agency"
  },
  {
    id: 2,
    title: "Why Choose Trends of Media for Digital Marketing in India",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    excerpt: "Why leading Indian brands trust Trends of Media to navigate the complex digital landscape and deliver performance-driven results.",
    date: "Mar 28, 2026",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Top Digital Marketing Services Offered by Trends of Media",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    excerpt: "From high-end luxury design to performance engineering—explore the full suite of services we offer to elevate your brand.",
    date: "Mar 20, 2026",
    category: "Services"
  },
  {
    id: 4,
    title: "Best SEO strategies in 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    excerpt: "The ultimate guide to ranking on top of Search Engine Result Pages using modern, AI-integrated SEO tactics and semantic search.",
    date: "Mar 12, 2026",
    category: "SEO"
  },
  {
    id: 5,
    title: "How to grow business online",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    excerpt: "Proven frameworks for scaling your brand's digital presence and converting high-quality traffic into loyal customers.",
    date: "Mar 05, 2026",
    category: "Growth"
  },
  {
    id: 6,
    title: "Digital marketing trends",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
    excerpt: "A deep dive into the emerging shifts in digital advertising, social commerce, and consumer behavior to watch this year.",
    date: "Feb 25, 2026",
    category: "Trends"
  }
];

const BlogCard = ({ blog, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex-shrink-0 w-[78vw] sm:w-[55vw] lg:w-[420px] cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      {/* Image */}
      <div className="relative w-full h-[220px] lg:h-[300px] rounded-2xl overflow-hidden mb-4">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
          <span className="text-white text-xs font-semibold uppercase tracking-widest border border-white px-4 py-2 rounded-full">
            Read Blog
          </span>
        </div>
      </div>

      {/* Category Badge */}
      <div className="mb-2 lg:mb-3">
        <span className="inline-block bg-white text-black text-xs font-semibold px-3 lg:px-4 py-1 lg:py-1.5 rounded-full">
          {blog.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-white text-base lg:text-xl font-semibold leading-snug group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
        {blog.title}
      </h3>
    </motion.div>
  );
};

const Blogs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -460 : 460,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#0a0a0a] py-12 lg:py-20 px-4 lg:px-16">
      <div className="max-w-[1600px] mx-auto">

        {/* Header Row */}
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <h2 className="text-white text-2xl lg:text-5xl font-bold uppercase tracking-tight">
            Related Blogs
          </h2>

          {/* Arrow Buttons */}
          <div className="flex gap-2 lg:gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 lg:w-11 lg:h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 lg:w-11 lg:h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {blogData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blogs;