"use client";
import React from 'react';
import Hero from '../components/tech/Hero';
import TechAreas from '../components/tech/TechAreas';
import ProductShowcase from '../components/tech/ProductShowcase';
import TechStackMarquee from '../components/tech/TechStackMarquee';
import AILabs from '../components/tech/AILabs';
import ImpactStats from '../components/tech/ImpactStats';
import IITTeamSection from '../components/tech/IITTeamSection';
import Contact from '../components/tech/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TechAreas />
      <ProductShowcase />
      <TechStackMarquee />
      <AILabs />
      <ImpactStats />
      {/* <IITTeamSection /> */}
      <Contact />
    </>
  );
}
