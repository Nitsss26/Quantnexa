"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Image Imports Removed (using static paths now)
const Embers = () => {
    const [embers, setEmbers] = React.useState<any[]>([]);

    React.useEffect(() => {
        setEmbers(Array.from({ length: 40 }).map(() => ({
            size: Math.random() * 3 + 1,
            left: Math.random() * 100,
            duration: Math.random() * 10 + 8,
            delay: Math.random() * 7,
            xOffset: Math.random() * 100 - 50,
        })));
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {embers.map((ember, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#22ff66]"
                    style={{
                        width: ember.size,
                        height: ember.size,
                        left: `${ember.left}%`,
                        bottom: '-10%',
                        boxShadow: '0 0 8px 1px #22ff66'
                    }}
                    animate={{
                        y: ['0vh', '-120vh'],
                        x: [0, ember.xOffset, ember.xOffset * 1.5],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: ember.duration,
                        delay: ember.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const CyberOfficialCard = ({ image, name, designation, index, imageScale = 1, objectPosition = "top", className = "" }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative bg-[#020703]/80 backdrop-blur-md overflow-hidden border border-[#22ff66]/20 hover:border-[#22ff66]/80 transition-all duration-500 rounded-2xl ${className}`}
        >
            {/* Cyber Grid Overlay */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none mix-blend-screen" />
            
            {/* Image Container */}
            <div className="relative h-72 md:h-80 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[#22ff66]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none" />
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={image.src || image}
                        alt={name}
                        style={{
                            transform: `scale(${imageScale})`,
                            objectPosition: objectPosition
                        }}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                {/* Cyber Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020703] via-transparent to-transparent opacity-90" />
            </div>

            {/* Text Content */}
            <div className="p-6 space-y-2 relative z-20 -mt-4">
                <h3 className="text-md font-black text-white uppercase tracking-wider group-hover:text-[#22ff66] transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-xs font-mono text-gray-400 leading-relaxed uppercase opacity-80">
                    {designation}
                </p>
                
                {/* Tech Accent Line */}
                <div className="w-0 h-px bg-[#22ff66] group-hover:w-full transition-all duration-700 mt-4" />
            </div>

            {/* Cyber Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#22ff66]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#22ff66]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#22ff66]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#22ff66]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-2xl" />
        </motion.div>
    );
};

export default function GovPartnerships() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

const officials = [
        // {
        //     image: '/assets/OurSocialImpact/EduMinAssam.jpg',
        //     name: "Dr. Ranoj Pegu",
        //     designation: "Hon'ble Education Minister, Government of Assam | Transforming Education Through Technology"
        // },
        // {
        //     image: '/assets/OurSocialImpact/MrKeshabMahanta.png',
        //     name: "Mr. Keshab Mahanta",
        //     designation: "Hon'ble Minister of Revenue & Disaster Management, IT, Science & Technology, Government of Assam"
        // },
        {
            image: '/assets/Gov/Rao_Uday_Pratap_Singh.jpeg',
            name: "Rao Uday Pratap Singh",
            designation: "Hon'ble Minister of School Education | Minister of Road and Transport",
            imageScale: 1.15,
            objectPosition: "center 10%"
        },
        {
            image: '/assets/Gov/Anil Firojiya.jpg',
            name: "Shri Anil Firojiya",
            designation: "Member of Parliament | Parliamentary Committee on Tourism and Culture, Government of India"
        },
             {
            image: '/assets/Gov/Dr.-Hemant-Khandelwal.jpg',
            name: "Dr. Hemant Khandelwal",
            designation: "Hon'ble State President, Bharatiya Janata Party (BJP), Madhya Pradesh"
        },
        {
            image: '/assets/Gov/JYOTSNA.png',
            name: "Smt. Jyotsna Charandas Mahant",
            designation: "Member of Parliament (Lok Sabha), Korba | Standing Committee on Coal, Mines and Steel"
        },
   
        // {
        //     image: '/assets/OurSocialImpact/MP_Assam.jpg',
        //     name: "Shri Ranjit Dutta",
        //     designation: "Hon'ble Member of Parliament, Assam | Former Minister of Sericulture, Handloom & Textiles"
        // },
        {
            image: '/assets/OurSocialImpact/IAS_Anil_Kumar_Jha.jpg',
            name: "IAS Mr. Anil Kumar Jha",
            designation: "Cane Commissioner, Government of India | Former Joint Secretary, Ministry of Agriculture"
        },
        {
            image: '/assets/Gov/Jitendra Parashar.jpg',
            name: "Mr. Jitendra Parashar",
            designation: "Joint Director, Information Technology Department | Government of Madhya Pradesh"
        },
        {
            image: '/assets/Gov/IAS Awanish Sharan.jpg',
            name: "IAS Mr. Awanish Sharan",
            designation: "Chief Executive Officer, Skill Development Mission | Government of Chhattisgarh"
        },
        {
            image: '/assets/Gov/Charan Das Mahant.png',
            name: "Dr. Charan Das Mahant",
            designation: "Former Lok Sabha Speaker, Government of Chhattisgarh | Former Cabinet Minister, Government of India"
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#020703] text-white pt-32 pb-24 overflow-hidden selection:bg-[#22ff66] selection:text-black">
            {/* Background elements */}
            <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#22ff66]/30 to-transparent" />
            <Embers />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4 border border-[#22ff66]/30 bg-[#22ff66]/5 px-4 py-1.5 rounded-full"
                    >
                        <span className="font-mono text-xs text-[#22ff66] tracking-widest uppercase">
                            Strategic Alliances
                        </span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6"
                    >
                        Gov. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22ff66] to-[#00aa33]">Partnerships</span>
                    </motion.h1>
                    
                    {/* <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
                    >
                        &gt; COLLABORATING WITH GOVERNMENT VISIONARIES TO BUILD THE DIGITAL INFRASTRUCTURE FOR BHARAT'S FUTURE.
                    </motion.p> */}
                </div>

                {/* Officials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {officials.map((official, index) => (
                        <CyberOfficialCard
                            key={index}
                            index={index}
                            image={official.image}
                            name={official.name}
                            designation={official.designation}
                            imageScale={official.imageScale}
                            objectPosition={official.objectPosition}
                            className={index === officials.length - 1 && officials.length % 3 === 1 ? "lg:col-start-2" : ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
