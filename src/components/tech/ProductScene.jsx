"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, PlaySquare, FileText } from 'lucide-react';

export default function ProductScene({ product, index }) {
  const { title, description, tags, features, MockupComponent, status } = product;
  const isEven = index % 2 === 0;

  return (
    <section className="relative flex items-center justify-center py-10 md:py-16 px-4 md:px-12 border-b border-cyber-border/20 overflow-hidden">
      {/* Subtle tech background detail */}
      <div className="cyber-grid opacity-10 absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Product Storytelling (Order switches based on index) */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`lg:col-span-5 flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'} relative z-20`}
          style={{ perspective: '1000px' }}
        >
          {/* Inner Floating 3D Panel */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: isEven ? 2 : -2 }}
            className="w-full relative p-6 sm:p-8 rounded-2xl bg-[#030906]/70 backdrop-blur-xl border border-neon-green/20 shadow-[0_20px_50px_-10px_rgba(0,255,136,0.2),inset_0_0_20px_rgba(0,255,136,0.05)] overflow-hidden transform-gpu"
          >
            {/* Holographic Glowing Accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green/50 to-transparent opacity-50" />
            <div className="absolute -left-10 top-20 w-32 h-32 bg-neon-green/20 rounded-full blur-[50px] pointer-events-none" />
            <div className="absolute -right-10 bottom-10 w-32 h-32 bg-amber-400/10 rounded-full blur-[50px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header & Status Indicator */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-amber-400 tracking-widest font-bold">FLAGSHIP PRODUCT {index + 1}</span>
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]" />
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 font-cyber drop-shadow-[0_2px_15px_rgba(0,255,136,0.3)]">
                {title}
              </h2>

              <p className="text-cyber-text text-sm md:text-base leading-relaxed font-medium">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="font-mono text-[10px] font-bold text-amber-400 border border-amber-400/40 px-3 py-1.5 rounded bg-amber-400/10 shadow-[0_0_10px_rgba(251,191,36,0.15)] hover:bg-amber-400/20 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    #{tag.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* Features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-neon-green/20 pt-5 mt-2 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-neon-green/5 transition-colors group cursor-default">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-[4px] group-hover:bg-amber-400/40 transition-colors" />
                      <CheckCircle2 className="w-4 h-4 text-amber-400 relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-mono text-[11px] text-white/90 font-semibold leading-normal tracking-wide group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Mockup Frame */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {MockupComponent && <MockupComponent />}
        </motion.div>

      </div>
    </section>
  );
}
