"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
const heroImgLogo = '/assets/tech/QuantNexaLogoFinal.png';
const heroBg = '/Nexa_Img.png';

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#020703]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Atmosphere / Overlays */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.3) 60%, #020703 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(52,213,98,0.08) 0px, rgba(52,213,98,0.08) 1px, transparent 1px, transparent 4px)',
        }} />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          className="flex flex-col items-center gap-4"
        >
          {/* <span style={{
            fontFamily: 'monospace', fontSize: 12, color: '#ffffff',
            fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase',
          }}>
            GOG TECH VISION
          </span> */}

          <h1 className="flex flex-col items-center gap-0 m-0 tracking-tight text-white font-black" style={{ fontFamily: 'Outfit, Inter, system-ui, sans-serif' }}>
            <img 
              src={heroImgLogo} 
              alt="QuantNexa" 
              className="w-[380px] md:w-[55vw] max-w-[650px] h-auto block mb-0 md:mb-0 mt-4 md:mt-10"
            />
            {/* <span className="block text-2xl md:text-[2.5rem] mt-2 text-[#e5e7eb]">
              Next-Gen Tech Solutions
            </span> */}
          </h1>

          <p style={{
            fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
            lineHeight: 1.7,
            maxWidth: 600,
           marginTop: '-2rem',
          }}
          className='uppercase font-mono tracking-wider font-bold mt-4 md:mt-0 lg:-mt-2'
          >
            We build next-generation digital products and AI-powered platforms that turn ideas into real-world impact.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: '2rem', marginBottom: '5rem' }}>
            <a href="#products" onClick={scrollTo('#products')} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '16px 32px',
              fontSize: 14, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.1em',
              color: '#000', background: '#34D562', borderRadius: 6,
              boxShadow: '0 0 15px rgba(52,213,98,0.3)',
              cursor: 'pointer', textDecoration: 'none', border: 'none',
              transition: 'all 0.3s ease'
            }}>
              EXPLORE SOLUTIONS <ArrowRight size={18} />
            </a>
            <a href="#tech-areas" onClick={scrollTo('#tech-areas')} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '16px 32px',
              fontSize: 14, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.1em',
              color: '#fff', background: 'rgba(0,0,0,0.5)', borderRadius: 6,
              border: '1px solid rgba(52,213,98,0.2)',
              cursor: 'pointer', textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              LEARN MORE
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2 } }}
        style={{
          position: 'absolute', bottom: 6,
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          fontFamily: 'monospace', fontSize: 10, color: '#34D562',
          letterSpacing: '0.2em', zIndex: 20, pointerEvents: 'none',
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 24, height: 40,
            border: '2px solid rgba(52,213,98,0.3)',
            borderRadius: 999,
            display: 'flex', justifyContent: 'center', paddingTop: 8,
          }}
        >
          <ChevronDown size={16} color="#34D562" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}