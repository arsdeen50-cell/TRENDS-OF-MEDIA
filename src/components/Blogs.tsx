import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogData = [
  {
    id: 1,
    title: "Why Every Business in Mumbai Needs a Digital Marketing Strategy in 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    excerpt: "From local reach to global visibility — here's why digital marketing is no longer optional for Mumbai businesses.",
    date: "Apr 05, 2026",
    category: "Digital Marketing"
  },
  {
    id: 2,
    title: "Top 7 Social Media Marketing Strategies That Actually Work in 2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    excerpt: "Discover the social media tactics Mumbai's fastest-growing brands are using to dominate Instagram, LinkedIn and beyond.",
    date: "Mar 28, 2026",
    category: "Social Media"
  },
  {
    id: 3,
    title: "SEO for Mumbai Businesses: How to Rank on Google in 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    excerpt: "A step-by-step guide to ranking your Mumbai business on Google's first page with proven SEO strategies.",
    date: "Mar 20, 2026",
    category: "SEO"
  },
  {
    id: 4,
    title: "How Performance Marketing Drives Real ROI for Indian Startups",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    excerpt: "Learn how Google Ads and Meta campaigns are helping Indian startups generate quality leads and scale revenue fast.",
    date: "Mar 12, 2026",
    category: "Performance Marketing"
  },
  {
    id: 5,
    title: "Influencer Marketing in India: How to Pick the Right Creator for Your Brand",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    excerpt: "Not every influencer is right for your brand. Here's how to find, vet, and collaborate with creators who actually convert.",
    date: "Mar 05, 2026",
    category: "Influencer Marketing"
  },
  {
    id: 6,
    title: "What Makes a Great Brand Identity? Lessons from Mumbai's Top Agencies",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
    excerpt: "A strong brand identity goes beyond a logo. See how Mumbai's leading brands are building recognition that lasts.",
    date: "Feb 25, 2026",
    category: "Branding"
  },
  {
    id: 7,
    title: "Website Development Checklist: What Your Business Website Must Have in 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    excerpt: "From speed to SEO structure — the non-negotiables every high-converting business website needs this year.",
    date: "Feb 15, 2026",
    category: "Web Development"
  },
  {
    id: 8,
    title: "Media Agency vs Advertising Agency: What's the Difference and Which Do You Need?",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    excerpt: "Confused between a media agency and an ad agency? We break down the difference so you hire the right partner.",
    date: "Feb 05, 2026",
    category: "Digital Marketing"
  },
  {
    id: 9,
    title: "How to Choose the Best Digital Marketing Agency in Mumbai for Your Business",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    excerpt: "Not all agencies deliver results. Here's exactly what to look for when hiring a digital marketing agency in Mumbai.",
    date: "Jan 25, 2026",
    category: "Digital Marketing"
  },
  {
    id: 10,
    title: "Trends of Media: The Digital Marketing Agency Mumbai Brands Trust for Growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    excerpt: "From SEO and social media to performance ads and branding — see how Trends of Media helps Mumbai businesses grow online.",
    date: "Jan 15, 2026",
    category: "Agency"
  },
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