import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import SmoothScroll from './SmoothScroll';
import CustomCursor from './CustomCursor';
import Header from './Header';
import FloatingContact from './FloatingContact';
import Footer from './Footer';

// Blog data with proper bullet point structure
const blogData = [
  {
    id: 1,
    title: "The Future of Digital Marketing in 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop",
    excerpt: "Discover the latest trends shaping digital marketing",
    date: "Feb 10, 2025",
    category: "Marketing",
    readTime: "8 min read",
    author: "John Doe",
    sections: [
      {
        type: 'heading',
        content: 'Introduction'
      },
      {
        type: 'paragraph',
        content: 'Digital marketing is evolving at an unprecedented pace. As we move through 2025, businesses must adapt to new technologies, consumer behaviors, and marketing channels to stay competitive.'
      },
      {
        type: 'heading',
        content: 'The Rise of AI in Marketing'
      },
      {
        type: 'paragraph',
        content: 'Artificial Intelligence is no longer a futuristic concept—it\'s here, and it\'s transforming how we approach marketing. From personalized content recommendations to predictive analytics, AI is helping marketers make smarter decisions.'
      },
      {
        type: 'paragraph',
        content: 'Machine learning algorithms can now analyze vast amounts of customer data to identify patterns and predict future behaviors. This allows businesses to create hyper-targeted campaigns that resonate with their audience on a personal level.'
      },
      {
        type: 'heading',
        content: 'Voice Search Optimization'
      },
      {
        type: 'paragraph',
        content: 'With the increasing popularity of smart speakers and voice assistants, optimizing for voice search has become crucial. Users are now asking questions in natural language, which means your SEO strategy needs to adapt.'
      },
      {
        type: 'bullets',
        items: [
          'Focus on long-tail keywords and conversational phrases',
          'Create FAQ pages that answer common questions',
          'Optimize for local search queries',
          'Ensure your website loads quickly and is mobile-friendly'
        ]
      },
      {
        type: 'heading',
        content: 'Video Content Domination'
      },
      {
        type: 'paragraph',
        content: 'Video content continues to dominate social media platforms. Short-form videos on platforms like TikTok, Instagram Reels, and YouTube Shorts are driving massive engagement.'
      },
      {
        type: 'quote',
        content: 'Video is not just a trend—it\'s the present and future of content marketing. Brands that fail to incorporate video into their strategy will be left behind.'
      },
      {
        type: 'heading',
        content: 'Privacy-First Marketing'
      },
      {
        type: 'paragraph',
        content: 'With increasing regulations like GDPR and CCPA, and the phasing out of third-party cookies, marketers must find new ways to collect and use customer data responsibly.'
      },
      {
        type: 'paragraph',
        content: 'First-party data collection through owned channels (email lists, loyalty programs, website interactions) is becoming more valuable than ever. Building trust with your audience is paramount.'
      },
      {
        type: 'heading',
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'The future of digital marketing is exciting and full of opportunities. By staying informed about these trends and adapting your strategies accordingly, you can ensure your business thrives in the digital landscape of 2025 and beyond.'
      }
    ]
  },
  {
    id: 2,
    title: "Building High-Performance Web Applications",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=800&fit=crop",
    date: "Feb 08, 2025",
    category: "Development",
    readTime: "10 min read",
    author: "Jane Smith",
    sections: [
      {
        type: 'heading',
        content: 'Why Performance Matters'
      },
      {
        type: 'paragraph',
        content: 'In today\'s fast-paced digital world, users expect websites to load instantly. A delay of even a few seconds can lead to higher bounce rates and lost conversions.'
      },
      {
        type: 'heading',
        content: 'Core Web Vitals'
      },
      {
        type: 'paragraph',
        content: 'Google\'s Core Web Vitals have become essential metrics for measuring user experience. These include:'
      },
      {
        type: 'bullets',
        items: [
          'Largest Contentful Paint (LCP): Measures loading performance',
          'First Input Delay (FID): Measures interactivity',
          'Cumulative Layout Shift (CLS): Measures visual stability'
        ]
      },
      {
        type: 'heading',
        content: 'Optimization Techniques'
      },
      {
        type: 'paragraph',
        content: 'There are several strategies you can implement to improve your web application\'s performance:'
      },
      {
        type: 'subheading',
        content: '1. Code Splitting'
      },
      {
        type: 'paragraph',
        content: 'Break down your JavaScript bundles into smaller chunks that can be loaded on demand. This reduces the initial load time and improves perceived performance.'
      },
      {
        type: 'subheading',
        content: '2. Image Optimization'
      },
      {
        type: 'paragraph',
        content: 'Use modern image formats like WebP and AVIF, implement lazy loading, and serve responsive images based on device size.'
      },
      {
        type: 'subheading',
        content: '3. Caching Strategies'
      },
      {
        type: 'paragraph',
        content: 'Implement effective caching mechanisms at multiple levels—browser cache, CDN cache, and server-side cache.'
      },
      {
        type: 'heading',
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Building high-performance web applications requires a holistic approach. By focusing on these optimization techniques, you can create faster, more responsive experiences that delight your users.'
      }
    ]
  },
  {
    id: 3,
    title: "UI/UX Design Principles That Matter",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=800&fit=crop",
    date: "Feb 05, 2025",
    category: "Design",
    readTime: "6 min read",
    author: "Sarah Johnson",
    sections: [
      {
        type: 'heading',
        content: 'The Foundation of Great Design'
      },
      {
        type: 'paragraph',
        content: 'Great design is invisible. When users interact with a well-designed interface, they don\'t think about the design—they simply accomplish their goals effortlessly.'
      },
      {
        type: 'heading',
        content: 'Key Principles'
      },
      {
        type: 'subheading',
        content: 'Consistency'
      },
      {
        type: 'paragraph',
        content: 'Maintain consistency in colors, typography, spacing, and interaction patterns throughout your application. This helps users build a mental model of how your interface works.'
      },
      {
        type: 'subheading',
        content: 'Hierarchy'
      },
      {
        type: 'paragraph',
        content: 'Use visual hierarchy to guide users\' attention to the most important elements. Size, color, contrast, and positioning all play a role in establishing hierarchy.'
      },
      {
        type: 'subheading',
        content: 'Feedback'
      },
      {
        type: 'paragraph',
        content: 'Provide immediate feedback for user actions. Loading states, success messages, and error notifications help users understand what\'s happening.'
      },
      {
        type: 'heading',
        content: 'User-Centered Design'
      },
      {
        type: 'paragraph',
        content: 'Always design with your users in mind. Conduct user research, create personas, and test your designs with real users to ensure you\'re solving actual problems.'
      }
    ]
  },
  {
    id: 4,
    title: "SEO Strategies for 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920&h=800&fit=crop",
    date: "Feb 03, 2026",
    category: "SEO",
    readTime: "7 min read",
    author: "Mike Wilson",
    sections: [
      { type: 'heading', content: 'SEO in 2026' },
      { type: 'paragraph', content: 'Search Engine Optimization continues to evolve. Here are the strategies that will help you rank higher in search results this year.' },
      { type: 'heading', content: 'Content Quality Over Quantity' },
      { type: 'paragraph', content: 'Google\'s algorithms are getting better at understanding content quality. Focus on creating comprehensive, valuable content that truly helps your audience.' },
      { type: 'heading', content: 'Technical SEO' },
      { type: 'paragraph', content: 'Ensure your website has a solid technical foundation with fast loading speeds, mobile responsiveness, and proper schema markup.' }
    ]
  },
  // {
  //   id: 5,
  //   title: "Social Media Marketing Mastery",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=800&fit=crop",
  //   date: "Jan 30, 2025",
  //   category: "Social Media",
  //   readTime: "9 min read",
  //   author: "Emily Chen",
  //   sections: [
  //     { type: 'heading', content: 'Mastering Social Media' },
  //     { type: 'paragraph', content: 'Social media platforms are where your audience spends most of their time. Learn how to create content that cuts through the noise.' },
  //     { type: 'heading', content: 'Platform-Specific Strategies' },
  //     { type: 'paragraph', content: 'Each social media platform has its own culture and best practices. Tailor your content accordingly.' }
  //   ]
  // },
  {
    id: 6,
    title: "Content Marketing That Drives Results",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=800&fit=crop",
    date: "Jan 28, 2025",
    category: "Content",
    readTime: "8 min read",
    author: "David Lee",
    sections: [
      { type: 'heading', content: 'The Power of Content' },
      { type: 'paragraph', content: 'Content marketing is about creating valuable content that attracts and retains your target audience.' }
    ]
  },
  {
    id: 7,
    title: "Email Marketing Best Practices",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1920&h=800&fit=crop",
    date: "Jan 25, 2025",
    category: "Email",
    readTime: "5 min read",
    author: "Lisa Anderson",
    sections: [
      { type: 'heading', content: 'Email Still Works' },
      { type: 'paragraph', content: 'Despite the rise of social media, email marketing remains one of the highest ROI channels.' }
    ]
  },
  {
    id: 8,
    title: "Branding in the Digital Age",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1920&h=800&fit=crop",
    date: "Jan 22, 2025",
    category: "Branding",
    readTime: "7 min read",
    author: "Chris Martinez",
    sections: [
      { type: 'heading', content: 'Digital Branding' },
      { type: 'paragraph', content: 'Your brand is more than just a logo. It\'s the entire experience your customers have with your business.' }
    ]
  },
  {
    id: 9,
    title: "Analytics and Data-Driven Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=800&fit=crop",
    date: "Jan 20, 2025",
    category: "Analytics",
    readTime: "10 min read",
    author: "Rachel Kim",
    sections: [
      { type: 'heading', content: 'Data-Driven Decisions' },
      { type: 'paragraph', content: 'Use analytics to understand what\'s working and what\'s not in your marketing efforts.' }
    ]
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const blog = blogData.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Blog Not Found</h2>
          <button
            onClick={() => navigate('/blogs')}
            className="text-red-400 hover:text-red-300"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'heading':
        return (
          <motion.h2
            key={index}
            className="text-3xl font-bold text-black mt-12 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {section.content}
          </motion.h2>
        );
      
      case 'subheading':
        return (
          <motion.h3
            key={index}
            className="text-2xl font-semibold text-red-500 mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {section.content}
          </motion.h3>
        );
      
      case 'paragraph':
        return (
          <motion.p
            key={index}
            className="text-black text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {section.content}
          </motion.p>
        );
      
      case 'bullets':
        return (
          <motion.ul
            key={index}
            className="my-6 space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {section.items.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-black text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.1) + (i * 0.05) }}
              >
                <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2.5"></span>
                <span className="flex-1">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        );
      
    //   case 'quote':
    //     return (
    //       <motion.blockquote
    //         key={index}
    //         className="border-l-4 border-red-600 pl-6 py-4 my-8 italic text-gray-400 bg-gray-800/30 rounded-r-lg text-xl"
    //         initial={{ opacity: 0, x: -20 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ delay: index * 0.1 }}
    //       >
    //         "{section.content}"
    //       </motion.blockquote>
    //     );
      
      default:
        return null;
    }
  };

  return (
    <>
      <SmoothScroll>
        <CustomCursor />
        <Header />
        <FloatingContact />
        <div className="min-h-screen bg-gradient-to-br ">
          {/* Hero Section with Image */}
          <div className="relative h-[60vh] overflow-hidden">
            {/* Background Image */}
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-gray-950" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-4xl mx-auto px-6 pb-16 w-full">
                <motion.button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 text-white/80 hover:text-black mb-6 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <ArrowLeft size={20} />
                  Back to Home
                </motion.button>

                <motion.div
                  className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {blog.category}
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {blog.title}
                </motion.h1>

                <motion.div
                  className="flex flex-wrap gap-6 text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {/* <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{blog.date}</span>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{blog.readTime}</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Tag size={18} />
                    <span>By {blog.author}</span>
                  </div> */}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <motion.div
            className="max-w-4xl mx-auto px-6 py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="max-w-none">
              {blog.sections.map((section, index) => renderSection(section, index))}
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-center">
                Found this helpful? Share it with your network!
              </p>
            </div>
          </motion.div>
        </div>

        <Footer />
      </SmoothScroll>
    </>
  );
};

export default BlogDetail;