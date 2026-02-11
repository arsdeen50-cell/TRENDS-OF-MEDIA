import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    title: "The Future of Digital Marketing in 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    excerpt: "Discover the latest trends shaping digital marketing",
    date: "Feb 10, 2025",
    category: "Marketing"
  },
  {
    id: 2,
    title: "Building High-Performance Web Applications",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    excerpt: "Best practices for modern web development",
    date: "Feb 08, 2025",
    category: "Development"
  },
  {
    id: 3,
    title: "UI/UX Design Principles That Matter",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    excerpt: "Creating user experiences that convert",
    date: "Feb 05, 2025",
    category: "Design"
  },
  {
    id: 4,
    title: "SEO Strategies for 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    excerpt: "Rank higher with these proven techniques",
    date: "Feb 03, 2025",
    category: "SEO"
  },
  {
    id: 5,
    title: "Social Media Marketing Mastery",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    excerpt: "Grow your brand across all platforms",
    date: "Jan 30, 2025",
    category: "Social Media"
  },
  {
    id: 6,
    title: "Content Marketing That Drives Results",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    excerpt: "Create content that resonates with your audience",
    date: "Jan 28, 2025",
    category: "Content"
  },
  {
    id: 7,
    title: "Email Marketing Best Practices",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop",
    excerpt: "Boost open rates and conversions",
    date: "Jan 25, 2025",
    category: "Email"
  },
  {
    id: 8,
    title: "Branding in the Digital Age",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
    excerpt: "Build a brand that stands out online",
    date: "Jan 22, 2025",
    category: "Branding"
  },
  {
    id: 9,
    title: "Analytics and Data-Driven Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    excerpt: "Make smarter decisions with data insights",
    date: "Jan 20, 2025",
    category: "Analytics"
  }
];

const BlogCard = ({ blog, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Category Badge */}
        {/* <div className="absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-semibold z-10">
          {blog.category}
        </div> */}

        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-400 text-sm mb-2">{blog.date}</p>
        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-500 transition-colors duration-300">
          {blog.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {blog.excerpt}
        </p>
        
        {/* Read More */}
        <div className="flex items-center text-red-500 font-semibold">
          <span className="group-hover:mr-2 transition-all duration-300">Read More</span>
          <motion.span
            initial={{ x: 0, opacity: 0 }}
            whileHover={{ x: 5, opacity: 1 }}
            className="opacity-0 group-hover:opacity-100"
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-600/50 transition-all duration-300" />
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="">
              Our Blogs
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Insights, trends, and expert tips to help you grow your business
          </p>
        </motion.div>

        {/* Blog Grid - 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;