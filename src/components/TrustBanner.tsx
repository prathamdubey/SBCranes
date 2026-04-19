// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import all logos using Vite's glob import
const logos = import.meta.glob('../assets/keyLeaders/*.{png,jpg,jpeg,svg}', { eager: true });

export default function TrustBanner() {
    // Extract image URLs from the glob object
    const logoUrls = Object.values(logos).map((module: any) => module.default);

    // Duplicate the array to create a seamless infinite loop effect
    const duplicatedLogos = [...logoUrls, ...logoUrls];

    return (
        <section className="bg-white py-12 border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 font-header">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex w-full">
                    <motion.div
                        className="flex items-center gap-12 md:gap-20 px-10"
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40, // Adjust speed: higher = slower
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="relative h-16 w-32 md:h-20 md:w-40 flex-shrink-0 flex items-center justify-center"
                            >
                                <img
                                    src={logo}
                                    alt={`Industry Leader ${index}`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Gradient Fades for Smooth Edges */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
        </section>
    );
}
