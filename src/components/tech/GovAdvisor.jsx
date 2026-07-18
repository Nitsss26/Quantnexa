import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Home2 from '../../../../assets/Home2.jpg';
import GovAssoc2 from '../../../../assets/gov_association2.jpg';

export default function GovAdvisor() {
    const [currentGovImage, setCurrentGovImage] = useState(0);
    const govImages = [Home2, GovAssoc2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGovImage((prev) => (prev + 1) % govImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full py-20 bg-[#020703] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left order-2 md:order-1"
                    >
                        <div className="inline-block px-4 py-2 bg-[#34D562]/10 border border-[#34D562]/30 rounded-full mb-6">
                            <span className="text-[#34D562] text-sm font-semibold tracking-wide">🤝 GOVERNMENT ASSOCIATION</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight font-cyber">
                            Technical Advisor to <br />
                            <span className="text-[#34D562]">Government of Madhya Pradesh</span>
                        </h3>

                        <div className="relative mb-8">
                            <div className="absolute -left-8 -top-4 text-6xl text-[#FFD700]/30 font-serif">"</div>
                            <p className="text-white/80 text-lg leading-relaxed pl-4 font-mono">
                                We are deeply honored to be appointed as the Technical Advisor to the Government of Madhya Pradesh.
                                It was a privilege to be felicitated by <span className="text-[#FFD700] font-semibold">Hon'ble Governor, Shri Mangubhai C. Patel Ji</span>,
                                to deeply implement tech based implementations around all the universities across Madhya Pradesh.
                            </p>
                            <div className="absolute -right-4 -bottom-6 text-6xl text-[#FFD700]/30 font-serif">"</div>
                        </div>

                        {/* <div className="flex flex-wrap gap-4 justify-center md:justify-start font-mono">
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                                <span className="text-white/90 text-sm font-medium">💪 Empowering Bharat</span>
                            </div>
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                                <span className="text-white/90 text-sm font-medium">✨ Future of Tech</span>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* RIGHT: Image with Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-1 md:order-2"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute -top-8 -right-8 w-16 h-28 transform scale-x-[-1]">
                            <svg viewBox="0 0 80 130" fill="none" className="w-full h-full">
                                <path d="M40 0 C40 60, 0 80, 0 130" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.6" />
                                <path d="M50 10 C50 50, 20 70, 10 120" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.4" />
                            </svg>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative bg-gradient-to-br from-[#FFD700]/20 to-transparent p-2 rounded-lg">
                            <div className="border-4 border-[#FFD700] rounded-lg overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.3)]">
                                {/* Image Slideshow */}
                                <div className="relative h-[350px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentGovImage}
                                            src={govImages[currentGovImage].src || govImages[currentGovImage]}
                                            alt="Government Association"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Bottom Left */}
                        <div className="absolute -bottom-8 -left-8 w-16 h-28 rotate-180 transform scale-x-[-1]">
                            <svg viewBox="0 0 80 130" fill="none" className="w-full h-full">
                                <path d="M40 0 C40 60, 0 80, 0 130" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.6" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
