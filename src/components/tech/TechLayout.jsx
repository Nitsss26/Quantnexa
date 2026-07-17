"use client";
import React, { useState, useEffect } from 'react';

import SplashScreen from './SplashScreen';
import ParticleBackground from './ParticleBackground';
import Navbar from './Navbar';
import Footer from './Footer';

export default function TechLayout({ children }) {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const originalZoom = document.body.style.zoom;
    document.body.style.zoom = '1';
    
    return () => {
      document.body.style.zoom = originalZoom || '';
    };
  }, []);

  return (
    <>
      {/* Splash loader — disappears after ~4.2s */}
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {/* Main site — renders underneath, visible after splash exits */}
      <div className="relative min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#020703' }}>
        {/* 1. HTML5 Particle Plexus Canvas */}
        <ParticleBackground />

        {/* 2. Fixed top Navbar */}
        <Navbar />

        {/* Dynamic Page Content */}
        <div className="relative z-10 w-full min-h-screen flex flex-col">
           {children}
        </div>

        {/* 10. System Status Brand Footer */}
        <Footer />
      </div>
    </>
  );
}
