import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SmoothScroll from './SmoothScroll';
import CustomCursor from './CustomCursor';
import Header from './Header';
import FloatingContact from './FloatingContact';
import Footer from './Footer';

const blogData = [
  {
    id: 1,
    title: "Why Every Business in Mumbai Needs a Digital Marketing Strategy in 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop",
    excerpt: "From local reach to global visibility — here's why digital marketing is no longer optional for Mumbai businesses.",
    date: "Apr 05, 2026",
    category: "Digital Marketing",
    readTime: "7 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'The Digital Shift Is Already Here' },
      { type: 'paragraph', content: 'Mumbai is one of India\'s most competitive business cities — and the brands winning here are the ones showing up online first. Whether you run a retail store in Bandra, a law firm in Nariman Point, or a D2C brand shipping across India, your customers are searching for you on Google before they ever walk through your door.' },
      { type: 'paragraph', content: 'Without a digital marketing strategy in 2026, you\'re not just missing out on leads — you\'re actively handing them to your competitors.' },
      { type: 'heading', content: 'What a Digital Marketing Strategy Actually Includes' },
      { type: 'paragraph', content: 'A real strategy isn\'t just running a few Instagram posts. It covers every touchpoint your customer has with your brand online — from the first Google search to the final purchase decision.' },
      { type: 'bullets', items: [
        'Search Engine Optimisation (SEO) — getting found on Google organically',
        'Social Media Marketing — building audience trust and engagement on Instagram, LinkedIn & more',
        'Performance Marketing — running targeted Google and Meta ads for measurable ROI',
        'Content Marketing — creating blogs, videos and resources that attract and educate your audience',
        'Website Development — having a fast, SEO-structured site that converts visitors into leads',
      ]},
      { type: 'heading', content: 'Why Mumbai Businesses Can\'t Afford to Wait' },
      { type: 'paragraph', content: 'Consumer behaviour has permanently shifted online. Over 700 million Indians are now active internet users, and that number grows every year. In Mumbai specifically, smartphone penetration and social media usage are among the highest in the country — meaning your audience is online right now, and they\'re looking for exactly what you offer.' },
      { type: 'paragraph', content: 'Businesses that invested in digital marketing early are now reaping compounding returns — better search rankings, larger audiences, and lower customer acquisition costs. The longer you wait, the further behind you fall.' },
      { type: 'heading', content: 'The ROI of Going Digital' },
      { type: 'paragraph', content: 'Unlike traditional advertising — hoardings, print, or TV — digital marketing gives you full visibility into what\'s working. You can track every click, every lead, every rupee spent and earned. This level of accountability means you can continuously optimise and scale what works, making your marketing budget go further every month.' },
      { type: 'heading', content: 'How Trends of Media Helps Mumbai Businesses Grow' },
      { type: 'paragraph', content: 'At Trends of Media, we\'ve helped businesses across Mumbai build digital marketing strategies that generate real, measurable results. From SEO-optimised websites to performance ad campaigns and social media growth, we handle everything end-to-end so you can focus on running your business.' },
      { type: 'paragraph', content: 'If you\'re ready to stop leaving growth on the table, get in touch with our team today and let\'s build a strategy built for your business.' },
    ]
  },
  {
    id: 2,
    title: "Top 7 Social Media Marketing Strategies That Actually Work in 2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=800&fit=crop",
    excerpt: "Discover the social media tactics Mumbai's fastest-growing brands are using to dominate Instagram, LinkedIn and beyond.",
    date: "Mar 28, 2026",
    category: "Social Media",
    readTime: "8 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'Social Media in 2026: What\'s Changed' },
      { type: 'paragraph', content: 'Social media platforms have matured. Organic reach is harder, algorithms are smarter, and audiences are more selective about the content they engage with. The brands winning on social media in 2026 aren\'t posting more — they\'re posting smarter.' },
      { type: 'heading', content: '7 Strategies That Actually Drive Results' },
      { type: 'subheading', content: '1. Short-Form Video First' },
      { type: 'paragraph', content: 'Instagram Reels and YouTube Shorts continue to receive the highest organic reach of any content format. Brands that lead with short-form video consistently outperform those that don\'t. Aim for 15–45 second videos that educate, entertain, or inspire.' },
      { type: 'subheading', content: '2. Niche Community Building' },
      { type: 'paragraph', content: 'Instead of broadcasting to everyone, build a community around your brand\'s core niche. Engage in comment sections, respond to DMs, create polls and questions — make your audience feel heard and valued.' },
      { type: 'subheading', content: '3. Consistent Brand Voice' },
      { type: 'paragraph', content: 'The most memorable brands on social media have a distinctive, consistent voice. Whether you\'re witty, authoritative, or inspirational — stay consistent across every caption, story, and reply.' },
      { type: 'subheading', content: '4. Influencer Collaborations' },
      { type: 'paragraph', content: 'Micro-influencers (10K–100K followers) in your niche consistently outperform mega-influencers in engagement and conversion. Partner with creators whose audience genuinely matches your target customer.' },
      { type: 'subheading', content: '5. Data-Driven Content Calendar' },
      { type: 'paragraph', content: 'Use platform analytics to identify which content formats, topics, and posting times drive the most engagement for your specific audience. Build your content calendar around data, not guesswork.' },
      { type: 'subheading', content: '6. LinkedIn for B2B Growth' },
      { type: 'paragraph', content: 'If you\'re a B2B brand or professional service, LinkedIn is the highest-ROI social platform available. Thought leadership posts, case studies, and founder stories perform exceptionally well and generate high-quality inbound leads.' },
      { type: 'subheading', content: '7. Paid + Organic Integration' },
      { type: 'paragraph', content: 'Boost your best-performing organic posts with paid promotion to extend their reach. This hybrid approach maximises both organic credibility and paid visibility without wasting budget on content that hasn\'t been proven to work.' },
      { type: 'heading', content: 'Ready to Grow Your Social Media Presence?' },
      { type: 'paragraph', content: 'Trends of Media manages social media for brands across Mumbai and India. From content creation to community management and paid campaigns, we handle it all. Get in touch to find out how we can grow your brand online.' },
    ]
  },
  {
    id: 3,
    title: "SEO for Mumbai Businesses: How to Rank on Google in 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920&h=800&fit=crop",
    excerpt: "A step-by-step guide to ranking your Mumbai business on Google's first page with proven SEO strategies.",
    date: "Mar 20, 2026",
    category: "SEO",
    readTime: "9 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'Why SEO Matters More Than Ever in Mumbai' },
      { type: 'paragraph', content: 'When someone in Mumbai searches "best digital marketing agency near me" or "web development company Mumbai", the businesses on Google\'s first page get almost all the clicks. SEO is how you get there — and stay there.' },
      { type: 'heading', content: 'The 4 Pillars of SEO in 2026' },
      { type: 'subheading', content: '1. Technical SEO' },
      { type: 'paragraph', content: 'Your website needs to be fast, mobile-friendly, and correctly structured for Google to crawl and index it effectively. Core Web Vitals — page speed, interactivity, and layout stability — are now direct ranking factors.' },
      { type: 'subheading', content: '2. On-Page SEO' },
      { type: 'paragraph', content: 'Every page on your site should be optimised for a target keyword. This includes your title tags, meta descriptions, header structure (H1, H2, H3), image alt text, and internal linking between related pages.' },
      { type: 'subheading', content: '3. Content SEO' },
      { type: 'paragraph', content: 'Google rewards websites that consistently publish high-quality, relevant content. A well-maintained blog targeting the questions your customers are searching for is one of the most powerful long-term SEO assets you can build.' },
      { type: 'subheading', content: '4. Off-Page SEO & Backlinks' },
      { type: 'paragraph', content: 'Backlinks — links from other reputable websites to yours — remain one of Google\'s strongest ranking signals. Building relationships, getting featured in industry publications, and creating shareable content all contribute to a strong backlink profile.' },
      { type: 'heading', content: 'Local SEO: Ranking in Mumbai Specifically' },
      { type: 'paragraph', content: 'For Mumbai businesses targeting local customers, Local SEO is essential. This includes optimising your Google Business Profile, getting listed in local directories, collecting genuine customer reviews, and creating location-specific content that targets Mumbai-based search queries.' },
      { type: 'bullets', items: [
        'Claim and fully optimise your Google Business Profile',
        'Get listed on Justdial, Sulekha, and other Indian local directories',
        'Collect and respond to Google reviews consistently',
        'Create location pages targeting specific Mumbai areas (Andheri, Bandra, Powai etc.)',
        'Use structured data markup (Schema) to help Google understand your business',
      ]},
      { type: 'heading', content: 'How Long Does SEO Take?' },
      { type: 'paragraph', content: 'SEO is a long-term investment. Most businesses start seeing meaningful results within 3–6 months, with significant rankings improvements in 6–12 months. The key is consistency — regular content, ongoing technical improvements, and continuous link building.' },
      { type: 'paragraph', content: 'Trends of Media provides end-to-end SEO services for Mumbai businesses, from technical audits to content strategy and link building. Contact us to get a free SEO audit for your website.' },
    ]
  },
  {
    id: 4,
    title: "How Performance Marketing Drives Real ROI for Indian Startups",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=800&fit=crop",
    excerpt: "Learn how Google Ads and Meta campaigns are helping Indian startups generate quality leads and scale revenue fast.",
    date: "Mar 12, 2026",
    category: "Performance Marketing",
    readTime: "7 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'What Is Performance Marketing?' },
      { type: 'paragraph', content: 'Performance marketing is advertising where you only pay for results — clicks, leads, purchases, or sign-ups. Unlike traditional advertising where you pay for exposure with no guarantee of return, performance marketing is fully accountable and measurable.' },
      { type: 'heading', content: 'The Two Biggest Platforms for Indian Startups' },
      { type: 'subheading', content: 'Google Ads' },
      { type: 'paragraph', content: 'Google Ads places your business in front of people who are actively searching for what you offer. Search ads, Shopping ads, and Display campaigns can drive highly qualified traffic to your website from day one.' },
      { type: 'subheading', content: 'Meta Ads (Facebook & Instagram)' },
      { type: 'paragraph', content: 'Meta\'s advertising platform offers unparalleled audience targeting based on demographics, interests, behaviours, and lookalike audiences. For brand awareness, lead generation, and e-commerce sales, Meta Ads remain one of the most cost-effective channels available in India.' },
      { type: 'heading', content: 'Why Performance Marketing Works for Startups' },
      { type: 'bullets', items: [
        'Start with any budget — even ₹500/day can generate measurable results',
        'Full transparency — see exactly where every rupee goes and what it returns',
        'Rapid testing — launch, test, and optimise campaigns in days, not months',
        'Scalable — once a campaign is profitable, simply increase the budget to scale',
        'Retargeting — bring back visitors who didn\'t convert the first time',
      ]},
      { type: 'heading', content: 'Common Mistakes That Kill Performance Marketing ROI' },
      { type: 'paragraph', content: 'Poor targeting, weak ad creatives, and sending traffic to badly designed landing pages are the three biggest reasons performance marketing campaigns fail. A great ad gets the click — but the landing page closes the sale. Both need to work together.' },
      { type: 'paragraph', content: 'At Trends of Media, we manage full-funnel performance marketing campaigns for Indian startups and established brands alike. From creative strategy to campaign management and conversion tracking, we make every rupee count.' },
    ]
  },
  {
    id: 5,
    title: "Influencer Marketing in India: How to Pick the Right Creator for Your Brand",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=800&fit=crop",
    excerpt: "Not every influencer is right for your brand. Here's how to find, vet, and collaborate with creators who actually convert.",
    date: "Mar 05, 2026",
    category: "Influencer Marketing",
    readTime: "6 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'Why Influencer Marketing Works in India' },
      { type: 'paragraph', content: 'India has one of the world\'s largest and most active creator economies. From lifestyle and finance to food and fashion, there are influential voices in every niche — and their audiences trust their recommendations far more than traditional ads.' },
      { type: 'heading', content: 'Mega vs Macro vs Micro Influencers' },
      { type: 'paragraph', content: 'Not all influencers deliver the same results. The right tier depends on your goals, budget, and target audience.' },
      { type: 'bullets', items: [
        'Mega Influencers (1M+): Maximum reach, best for brand awareness campaigns',
        'Macro Influencers (100K–1M): Balance of reach and engagement, good for broad campaigns',
        'Micro Influencers (10K–100K): Highest engagement rates, strongest audience trust, best for conversions',
        'Nano Influencers (1K–10K): Hyper-local, extremely authentic, ideal for community-based products',
      ]},
      { type: 'heading', content: 'How to Vet an Influencer Before Partnering' },
      { type: 'bullets', items: [
        'Check engagement rate — likes and comments relative to follower count (aim for 3%+)',
        'Analyse audience demographics — are their followers your target customers?',
        'Review past brand partnerships — do they align with your brand values?',
        'Look for authentic content — avoid creators who post only sponsored content',
        'Verify follower authenticity — use tools to check for fake or bot followers',
      ]},
      { type: 'heading', content: 'Influencer Marketing Campaign Structure' },
      { type: 'paragraph', content: 'A successful influencer campaign needs clear objectives, a well-defined brief, and proper tracking in place before launch. Define your KPIs upfront — whether that\'s reach, engagement, website traffic, or direct sales — and measure everything.' },
      { type: 'paragraph', content: 'Trends of Media manages end-to-end influencer campaigns for brands across India — from creator discovery and negotiation to campaign execution, content review, and performance reporting.' },
    ]
  },
  {
    id: 6,
    title: "What Makes a Great Brand Identity? Lessons from Mumbai's Top Agencies",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1920&h=800&fit=crop",
    excerpt: "A strong brand identity goes beyond a logo. See how Mumbai's leading brands are building recognition that lasts.",
    date: "Feb 25, 2026",
    category: "Branding",
    readTime: "7 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'Brand Identity Is More Than a Logo' },
      { type: 'paragraph', content: 'Many businesses confuse a logo with a brand identity. A logo is just one visual element. A brand identity is the complete system — colours, typography, tone of voice, imagery style, and the overall feeling your brand creates in the mind of your customer.' },
      { type: 'heading', content: 'The Core Elements of a Strong Brand Identity' },
      { type: 'bullets', items: [
        'Brand Strategy — your positioning, target audience, values, and differentiation',
        'Visual Identity — logo, colour palette, typography, and design system',
        'Brand Voice — the personality and tone of how your brand communicates',
        'Brand Guidelines — a document that ensures consistency across every touchpoint',
        'Brand Story — the narrative that makes your brand human and memorable',
      ]},
      { type: 'heading', content: 'Why Consistency Is Everything' },
      { type: 'paragraph', content: 'Research consistently shows that brand recognition increases dramatically when businesses maintain visual and tonal consistency across all channels. From your website and social media to your packaging and customer service — every interaction should feel unmistakably like your brand.' },
      { type: 'heading', content: 'Common Branding Mistakes Mumbai Businesses Make' },
      { type: 'bullets', items: [
        'Choosing a logo based on personal taste rather than audience research',
        'Using inconsistent colours and fonts across different platforms',
        'Having no defined brand voice — sounding different in every piece of content',
        'Copying competitor branding instead of differentiating',
        'Never updating brand identity as the business evolves',
      ]},
      { type: 'paragraph', content: 'At Trends of Media, we build brand identities from the ground up — starting with strategy, moving through visual design, and delivering a complete brand system your team can implement consistently across every channel.' },
    ]
  },
  {
    id: 7,
    title: "Website Development Checklist: What Your Business Website Must Have in 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=800&fit=crop",
    excerpt: "From speed to SEO structure — the non-negotiables every high-converting business website needs this year.",
    date: "Feb 15, 2026",
    category: "Web Development",
    readTime: "8 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'Your Website Is Your Most Important Digital Asset' },
      { type: 'paragraph', content: 'In 2026, your website is often the first impression a potential customer has of your business. A slow, outdated, or poorly structured website doesn\'t just lose leads — it actively damages trust in your brand.' },
      { type: 'heading', content: 'The Non-Negotiable Checklist' },
      { type: 'subheading', content: 'Performance & Speed' },
      { type: 'bullets', items: [
        'Page load time under 3 seconds on mobile and desktop',
        'Images compressed and served in WebP format',
        'Core Web Vitals passing Google\'s thresholds',
        'CDN (Content Delivery Network) enabled for global speed',
      ]},
      { type: 'subheading', content: 'SEO Structure' },
      { type: 'bullets', items: [
        'Proper H1, H2, H3 heading hierarchy on every page',
        'Unique, keyword-optimised title tags and meta descriptions',
        'XML sitemap submitted to Google Search Console',
        'Schema markup implemented for business type and content',
        'Clean URL structure (no long, messy URLs)',
      ]},
      { type: 'subheading', content: 'User Experience' },
      { type: 'bullets', items: [
        'Fully responsive and mobile-first design',
        'Clear navigation with no more than 7 items in the main menu',
        'Prominent CTAs (Call to Action) on every key page',
        'Contact information visible without scrolling',
        'Trust signals — testimonials, reviews, certifications, client logos',
      ]},
      { type: 'subheading', content: 'Security & Technical' },
      { type: 'bullets', items: [
        'SSL certificate (HTTPS) enabled',
        'Regular backups automated',
        'GDPR-compliant cookie consent if serving international users',
        '404 error page with navigation back to main site',
      ]},
      { type: 'heading', content: 'Need a Website That Ticks Every Box?' },
      { type: 'paragraph', content: 'Trends of Media builds high-performance, SEO-optimised websites for businesses across Mumbai and India. From design to development to launch, we handle everything. Get in touch to start your project.' },
    ]
  },
  {
    id: 8,
    title: "Media Agency vs Advertising Agency: What's the Difference and Which Do You Need?",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=800&fit=crop",
    excerpt: "Confused between a media agency and an ad agency? We break down the difference so you hire the right partner.",
    date: "Feb 05, 2026",
    category: "Digital Marketing",
    readTime: "6 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'Two Types of Agency — Very Different Roles' },
      { type: 'paragraph', content: 'When businesses start looking for a marketing partner, one of the most common points of confusion is the difference between a media agency and an advertising agency. They sound similar, but they serve very different functions.' },
      { type: 'heading', content: 'What Is an Advertising Agency?' },
      { type: 'paragraph', content: 'An advertising agency focuses on the creative side of marketing — developing campaigns, writing copy, designing visuals, producing videos, and building the messaging and creative assets that represent your brand. Their output is the actual ads and content.' },
      { type: 'heading', content: 'What Is a Media Agency?' },
      { type: 'paragraph', content: 'A media agency focuses on where and how your advertising is placed and distributed. They plan, buy, and optimise media placements across TV, digital, print, outdoor, and online platforms to maximise the reach and efficiency of your advertising spend.' },
      { type: 'heading', content: 'Key Differences at a Glance' },
      { type: 'bullets', items: [
        'Advertising Agency: Creates the content, copy, and creative assets',
        'Media Agency: Plans and buys the channels where that content is shown',
        'Advertising Agency: Brand storytelling, campaign concepts, video production',
        'Media Agency: Ad buying, audience targeting, media planning and optimisation',
        'Full-Service Agency (like Trends of Media): Does both — creative and media planning under one roof',
      ]},
      { type: 'heading', content: 'Which One Do You Need?' },
      { type: 'paragraph', content: 'For most growing businesses in Mumbai, working with a full-service digital marketing agency is the most efficient choice. You get both the creative strategy and the media execution in one place — no coordination overhead, no misalignment between what\'s created and where it runs.' },
      { type: 'paragraph', content: 'Trends of Media operates as a full-service agency — handling everything from brand identity and content creation to performance ad campaigns and media planning. One partner, complete accountability.' },
    ]
  },
  {
    id: 9,
    title: "How to Choose the Best Digital Marketing Agency in Mumbai for Your Business",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=800&fit=crop",
    excerpt: "Not all agencies deliver results. Here's exactly what to look for when hiring a digital marketing agency in Mumbai.",
    date: "Jan 25, 2026",
    category: "Digital Marketing",
    readTime: "8 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'Why Choosing the Right Agency Matters' },
      { type: 'paragraph', content: 'Mumbai has hundreds of digital marketing agencies — from one-person freelancers to large multinational networks. Choosing the wrong partner wastes budget, time, and momentum. Choosing the right one can transform your business.' },
      { type: 'heading', content: 'What to Look For in a Digital Marketing Agency' },
      { type: 'subheading', content: '1. Proven Results, Not Just Promises' },
      { type: 'paragraph', content: 'Ask for case studies, client testimonials, and specific results they\'ve achieved — traffic growth percentages, lead generation numbers, ROAS on ad campaigns. Any agency worth hiring can show you evidence of their work.' },
      { type: 'subheading', content: '2. Full-Service Capability' },
      { type: 'paragraph', content: 'Your marketing needs will evolve. An agency that can handle SEO, social media, performance marketing, content, and web development means you have one consistent strategic partner rather than juggling multiple vendors.' },
      { type: 'subheading', content: '3. Transparent Reporting' },
      { type: 'paragraph', content: 'You should always know what\'s being done, why it\'s being done, and what results it\'s generating. Monthly reports, regular check-ins, and access to live dashboards are signs of a trustworthy agency.' },
      { type: 'subheading', content: '4. Industry Understanding' },
      { type: 'paragraph', content: 'An agency that understands your industry — your customers, your competitors, your market dynamics — will produce far better work than one learning your business from scratch.' },
      { type: 'subheading', content: '5. Cultural Fit' },
      { type: 'paragraph', content: 'You\'re entering a long-term relationship. The agency team should feel like an extension of yours — responsive, collaborative, and genuinely invested in your success.' },
      { type: 'heading', content: 'Red Flags to Watch Out For' },
      { type: 'bullets', items: [
        'Guaranteeing specific Google rankings (no agency can guarantee this)',
        'No transparent pricing or vague deliverables in the proposal',
        'Unwilling to share case studies or references',
        'Locking you into long contracts with no performance clauses',
        'One-size-fits-all strategy with no customisation for your business',
      ]},
      { type: 'paragraph', content: 'Trends of Media is a results-first digital marketing agency based in Mumbai. We offer transparent pricing, clear deliverables, regular reporting, and a dedicated team that treats your growth as our own. Let\'s talk.' },
    ]
  },
  {
    id: 10,
    title: "Trends of Media: The Digital Marketing Agency Mumbai Brands Trust for Growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop",
    excerpt: "From SEO and social media to performance ads and branding — see how Trends of Media helps Mumbai businesses grow online.",
    date: "Jan 15, 2026",
    category: "Agency",
    readTime: "5 min read",
    author: "Trends of Media",
    sections: [
      { type: 'heading', content: 'Who We Are' },
      { type: 'paragraph', content: 'Trends of Media is a full-service digital marketing agency based in Mumbai. We help ambitious brands and growing businesses build powerful online presences, generate quality leads, and achieve measurable growth through smart, creative, and data-driven marketing.' },
      { type: 'heading', content: 'What We Do' },
      { type: 'bullets', items: [
        'Search Engine Optimisation (SEO) — ranking your business on Google',
        'Social Media Marketing — growing and engaging your audience across platforms',
        'Performance Marketing — Google Ads and Meta Ads campaigns built for ROI',
        'Influencer Marketing — connecting your brand with the right creators',
        'Website Development — fast, SEO-optimised, high-converting websites',
        'Branding & Creative Identity — logos, visual systems, and brand strategy',
        'Production Services — brand films, photography, and creative content',
      ]},
      { type: 'heading', content: 'Why Mumbai Brands Choose Trends of Media' },
      { type: 'paragraph', content: 'We\'re not a generic agency running the same playbook for every client. We take time to understand your business, your market, and your goals — then build a strategy that\'s tailored to deliver results for your specific situation.' },
      { type: 'paragraph', content: 'Our team combines creative talent with analytical rigour. We create content that connects with audiences and campaigns that convert — always with full transparency into what\'s working and why.' },
      { type: 'heading', content: 'Our Approach' },
      { type: 'bullets', items: [
        'Strategy First — we research before we execute',
        'Creative Excellence — work that looks great and performs even better',
        'Data-Driven — every decision backed by real insights and analytics',
        'Full Transparency — clear reporting, open communication, no hidden fees',
        'Long-Term Partnership — we grow as your business grows',
      ]},
      { type: 'heading', content: 'Ready to Grow Your Business Online?' },
      { type: 'paragraph', content: 'Whether you\'re starting from scratch or scaling an existing presence, Trends of Media has the team, the tools, and the track record to help you get there. Get in touch today and let\'s build something great together.' },
    ]
  },
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Blog Not Found</h2>
          <button onClick={() => navigate('/blogs')} className="text-red-500 hover:text-red-400">
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
            className="text-2xl lg:text-3xl font-bold text-black mt-12 mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {section.content}
          </motion.h2>
        );
      case 'subheading':
        return (
          <motion.h3
            key={index}
            className="text-xl font-semibold text-red-500 mt-8 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {section.content}
          </motion.h3>
        );
      case 'paragraph':
        return (
          <motion.p
            key={index}
            className="text-gray-700 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.5 }}
          >
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-lg">
                <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        );
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

        <div className="min-h-screen bg-white">

          {/* Hero */}
          <div className="relative h-[60vh] overflow-hidden">
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-4xl mx-auto px-6 pb-16 w-full">
                <motion.button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <ArrowLeft size={18} />
                  Back to Home
                </motion.button>

                <motion.div
                  className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {blog.category}
                </motion.div>

                <motion.h1
                  className="text-3xl md:text-5xl font-black text-white leading-tight mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {blog.title}
                </motion.h1>

                <motion.div
                  className="flex gap-6 text-white/60 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span>{blog.date}</span>
                  <span>·</span>
                  <span>{blog.readTime}</span>
                  <span>·</span>
                  <span>By {blog.author}</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            className="max-w-4xl mx-auto px-6 py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {/* Excerpt intro */}
            <p className="text-xl text-gray-500 leading-relaxed mb-12 pb-12 border-b border-gray-100">
              {blog.excerpt}
            </p>

            {/* Sections */}
            <div>
              {blog.sections.map((section, index) => renderSection(section, index))}
            </div>

            {/* Footer CTA */}
            <div className="mt-20 pt-10 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-base mb-4">Found this helpful? Share it with your network.</p>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                <ArrowLeft size={16} />
                Back to Home
              </button>
            </div>
          </motion.div>
        </div>

        <Footer />
      </SmoothScroll>
    </>
  );
};

export default BlogDetail;