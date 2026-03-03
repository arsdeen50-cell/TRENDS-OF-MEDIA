import React from "react";
import { Star, Globe, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const DarkTestimonials = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 lg:px-16 font-sans text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
              What Our Clients Say
            </span>
          </div>
          <h2 className="text-7xl lg:text-9xl font-[1000] tracking-tighter mb-6">
            Testimonials.
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
            We've helped businesses across industries achieve their 
            goals. Here are some of our recent success stories.
          </p>
        </div>

        {/* --- MAIN TESTIMONIAL CARD (Dark Mode) --- */}
        <div className="bg-transparent rounded-[40px] p-8 lg:p-12 border border-zinc-800 flex flex-col lg:flex-row gap-12 mb-8 hover:border-zinc-700 transition-colors">
          
          {/* Left: Text Content */}
          <div className="flex-[1.2] flex flex-col justify-between">
            <div>
              <Quote className="text-zinc-800 w-12 h-12 mb-6" fill="currentColor" />
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-zinc-100 mb-8">
                "We were struggling to create a unified design experience until we 
                worked with <span className="text-orange-500 font-black">Trends of Media</span>. 
                The team brought consistency and elevated every detail."
              </h3>
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 border-t border-zinc-900 pt-8">
              <Globe size={20} className="text-zinc-600" />
              <p className="text-[10px] font-bold text-zinc-500 leading-tight uppercase tracking-widest">
                Trends of Media support <br /> peoples from all over the world
              </p>
            </div>
          </div>

          {/* Center: Reduced Image Size */}
          <div className="flex-1 flex justify-center items-center">
            <div className="rounded-[30px] overflow-hidden w-full lg:w-[85%] aspect-[4/5] relative border border-zinc-800">
              <img 
                src="/images/Users.png" 
                alt="Client" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-lg font-black uppercase tracking-tight">Shree</p>
                <p className="text-xs text-orange-500 font-bold uppercase">NovaStack</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right: Small Navigation Area */}
          <div className="w-full lg:w-64 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 opacity-60">
                <img 
                  src="/images/usericon.png" 
                  alt="Clip" 
                  className="w-full aspect-video object-cover"
                />
            </div>
            
            <div className="pt-10 lg:pt-0">
               <div className="flex justify-between items-center mb-6">
                 <p className="font-bold uppercase text-xs tracking-widest text-zinc-500">Testimonial</p>
                 <p className="text-orange-500 font-black text-xs">01/01</p>
               </div>
               
               <div className="flex gap-3">
                 <button className="flex-1 py-4 rounded-xl border border-zinc-800 hover:bg-white hover:text-black transition-all flex justify-center">
                    <ArrowLeft size={18} />
                 </button>
                 <button className="flex-1 py-4 rounded-xl bg-white text-black hover:bg-orange-500 hover:text-white transition-all flex justify-center">
                    <ArrowRight size={18} />
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* --- DARK STATS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-transparent border border-zinc-900 rounded-[35px] p-10 h-64 flex flex-col justify-between hover:bg-zinc-950 transition-all">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">Happy people</p>
            <div className="flex items-end justify-between">
              <h4 className="text-6xl font-black tracking-tighter text-white">3M+</h4>
              <div className="flex -space-x-3">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-zinc-800 grayscale"></div>
                 ))}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent border border-zinc-900 rounded-[35px] p-10 h-64 flex flex-col justify-between hover:bg-zinc-950 transition-all">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">ROI Improvement</p>
            <div className="flex items-end gap-4">
              <h4 className="text-6xl font-black tracking-tighter text-white">95%</h4>
              <p className="text-[9px] text-zinc-500 uppercase font-bold leading-tight mb-2">Better ROI <br/> monthly</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-transparent border border-zinc-900 rounded-[35px] p-10 h-64 flex flex-col justify-between hover:bg-zinc-950 transition-all">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">Client Retention</p>
            <div className="flex items-end gap-4">
              <h4 className="text-6xl font-black tracking-tighter text-white">85%</h4>
              <p className="text-[9px] text-zinc-500 uppercase font-bold leading-tight mb-2">Loyal <br/> Partnerships</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DarkTestimonials;