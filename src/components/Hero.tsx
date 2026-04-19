import { useState, useEffect } from 'react';
import {Truck, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// Using the real images provided by the client
const heroSlides = [
    {
        image: '/updated_images/hero1.jpg',
        topText: 'Engineered for',
        highlightText: 'Precision Lifts',
        bottomText: '& Heavy Transport.',
        desc: 'Crane rental, heavy lifting, erection, and ODC transportation for infrastructure and industrial projects across India.'
    },
    {
        image: '/updated_images/hero2.webp',
        topText: 'Unmatched scale.',
        highlightText: 'Absolute Safety',
        bottomText: 'in every operation.',
        desc: 'Deploying India\'s most modern fleet of crawler and mobile cranes directly to your most challenging sites.'
    },
    {
        image: '/updated_images/hero3.jpg',
        topText: 'Driving India\'s',
        highlightText: 'Infrastructure',
        bottomText: 'forward daily.',
        desc: 'Trusted by top EPC contractors to deliver reliable lifting solutions on strict timelines without compromise.'
    },
    {
        image: '/updated_images/hero4.jpg',
        topText: 'Performance &',
        highlightText: 'Reliability',
        bottomText: 'when it matters.',
        desc: 'From short-term rentals to full project-lifecycle engineering, our team guarantees execution excellence.'
    }
];

export default function Hero() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const features = [
        {
            icon: <Truck className="h-8 w-8 text-brand-red group-hover:text-white transition-colors duration-300" />,
            title: "Right Equipment",
            desc: "Modern fleet up to 800 MT capacity",
            borderColor: "hover:border-brand-red",
            sweepColor: "before:bg-brand-red",
            hoverTextColor: "group-hover:text-white",
            subTextColor: "group-hover:text-white/80"
        },
        {
            icon: <ShieldCheck className="h-8 w-8 text-emerald-400 group-hover:text-white transition-colors duration-300" />,
            title: "Safe Execution",
            desc: "Engineered lift planning & safety",
            borderColor: "hover:border-emerald-500",
            sweepColor: "before:bg-emerald-600",
            hoverTextColor: "group-hover:text-white",
            subTextColor: "group-hover:text-white/90"
        },
        {
            icon: <MapPin className="h-8 w-8 text-orange-400 group-hover:text-white transition-colors duration-300" />,
            title: "Pan-India Support",
            desc: "On-time mobilization across India",
            borderColor: "hover:border-orange-500",
            sweepColor: "before:bg-orange-600",
            hoverTextColor: "group-hover:text-white",
            subTextColor: "group-hover:text-white/90"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
        }, 8000); // Change bg every 8 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-dark-slate">
            {/* Background Slideshow */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlideIndex}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 8, ease: "linear" }
                    }}
                    className="absolute inset-0 z-0 bg-cover bg-center brightness-100 contrast-[1.1] saturate-[1.2] transition-all duration-1000"
                    style={{ backgroundImage: `url("${heroSlides[currentSlideIndex].image}")` }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 z-0 bg-black/40" /> {/* Darker overlay for better text contrast */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-slate via-transparent to-transparent" /> {/* Smoother bottom fade */}

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col justify-center pt-20 pb-32"> {/* Centered vertically more, added padding */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlideIndex}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <h1 className="max-w-4xl text-3xl sm:text-5xl font-bold uppercase leading-none tracking-tighter text-white md:text-6xl drop-shadow-2xl font-header break-words">
                                {heroSlides[currentSlideIndex].topText} <br />
                                <span className="text-brand-red">{heroSlides[currentSlideIndex].highlightText}</span> {heroSlides[currentSlideIndex].bottomText}
                            </h1>
                            <p className="mt-6 max-w-lg text-lg font-light text-gray-200 border-l-4 border-brand-red pl-6">
                                {heroSlides[currentSlideIndex].desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Info Bar - Anchored to bottom */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "circOut" }}
                    className="absolute bottom-0 left-0 w-full grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                                group relative flex h-24 items-center justify-between px-8 
                                bg-industrial-blue/90 border-r border-white/10 overflow-hidden cursor-default transition-all duration-300
                                before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:transition-all before:duration-300 before:z-0
                                hover:before:w-full ${feature.sweepColor}
                            `}
                        >
                            <div className="relative z-10 flex items-center gap-6 w-full">
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-black/10 transition-colors duration-300 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-lg font-bold uppercase tracking-wider text-white font-header leading-tight mb-1 transition-colors duration-300 ${feature.hoverTextColor}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-xs text-gray-300 font-medium tracking-wide transition-colors duration-300 ${feature.subTextColor}`}>
                                        {feature.desc}
                                    </p>
                                </div>
                                <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feature.hoverTextColor}`}>
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
