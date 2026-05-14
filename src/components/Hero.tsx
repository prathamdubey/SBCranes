import { useState, useEffect } from 'react';
import { Truck, ShieldCheck, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDE_DURATION = 7000;

// Using the real video and images provided by the client
const heroSlides = [
    {
        type: 'video',
        src: '/updated_images/vid3.mp4',
        topText: 'SB Cranes',
        highlightText: 'Engineered',
        bottomText: 'for critical lifts.',
        desc: 'Premium crane rental, heavy lifting, erection, and ODC transport support for infrastructure and industrial projects across India.'
    },
    {
        type: 'image',
        image: '/updated_images/hero1.jpg',
        topText: 'Engineered for',
        highlightText: 'Precision Lifts',
        bottomText: '& Heavy Transport.',
        desc: 'Crane rental, heavy lifting, erection, and ODC transportation for infrastructure and industrial projects across India.'
    },
    {
        type: 'image',
        image: '/updated_images/hero2.webp',
        topText: 'Unmatched scale.',
        highlightText: 'Absolute Safety',
        bottomText: 'in every operation.',
        desc: 'Deploying India\'s most modern fleet of crawler and mobile cranes directly to your most challenging sites.'
    },
    {
        type: 'image',
        image: '/updated_images/hero3.jpg',
        topText: 'Driving India\'s',
        highlightText: 'Infrastructure',
        bottomText: 'forward daily.',
        desc: 'Trusted by top EPC contractors to deliver reliable lifting solutions on strict timelines without compromise.'
    },
    {
        type: 'image',
        image: '/updated_images/hero4.jpg',
        topText: 'Performance &',
        highlightText: 'Reliability',
        bottomText: 'when it matters.',
        desc: 'From short-term rentals to full project-lifecycle engineering, our team guarantees execution excellence.'
    }
];

export default function Hero() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const currentSlide = heroSlides[currentSlideIndex];

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
        }, SLIDE_DURATION);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[760px] h-[100svh] w-full overflow-hidden bg-dark-slate sm:min-h-[720px]">
            {/* Background Slideshow */}
            <AnimatePresence initial={false}>
                {currentSlide.type === 'video' ? (
                    <motion.video
                        key={currentSlideIndex}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 z-0 h-full w-full object-cover contrast-[1.18] saturate-[1.28]"
                        src={currentSlide.src}
                        autoPlay
                        muted
                        playsInline
                        loop
                        preload="metadata"
                    />
                ) : (
                    <motion.div
                        key={currentSlideIndex}
                        initial={{ scale: 1.08, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 1.2, ease: "easeInOut" },
                            scale: { duration: 8, ease: "linear" }
                        }}
                        className="absolute inset-0 z-0 bg-cover bg-center contrast-[1.22] saturate-[1.35] transition-all duration-1000"
                        style={{ backgroundImage: `url("${currentSlide.image}")` }}
                    />
                )}
            </AnimatePresence>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-dark-slate/85 via-dark-slate/35 to-black/10" />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-slate via-dark-slate/20 to-transparent" />

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col justify-center pt-24 pb-[23rem] sm:pb-52 md:pb-36">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlideIndex}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                            className="max-w-5xl"
                        >
                            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-lg backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-brand-red shadow-[0_0_16px_rgba(244,63,94,0.9)]" />
                                SB Cranes
                            </div>
                            <h1 className="text-[clamp(2.4rem,11vw,5.8rem)] font-black uppercase leading-[0.95] tracking-normal text-white drop-shadow-2xl font-header break-words sm:text-6xl md:text-7xl lg:text-8xl">
                                {currentSlide.topText} <br />
                                <span className="text-brand-red">{currentSlide.highlightText}</span> {currentSlide.bottomText}
                            </h1>
                            <p className="mt-5 max-w-2xl border-l-4 border-brand-red bg-black/25 py-3 pl-5 pr-4 text-sm font-medium leading-relaxed text-gray-100 shadow-xl backdrop-blur-sm sm:mt-6 sm:text-lg">
                                {currentSlide.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute bottom-[19.25rem] left-0 z-20 w-full sm:bottom-[7.35rem] md:bottom-[7.75rem]">
                    <div className="container mx-auto flex items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
                        {heroSlides.map((slide, index) => {
                            const isActive = index === currentSlideIndex;

                            return (
                                <button
                                    key={`${slide.highlightText}-${index}`}
                                    type="button"
                                    onClick={() => setCurrentSlideIndex(index)}
                                    className={`h-3 rounded-full border border-white/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-dark-slate ${
                                        isActive ? 'w-10 bg-brand-red shadow-[0_0_18px_rgba(244,63,94,0.6)]' : 'w-3 bg-white/35 hover:bg-white/80'
                                    }`}
                                    aria-label={`Show hero slide ${index + 1}`}
                                    aria-current={isActive ? 'true' : undefined}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Info Bar - Anchored to bottom */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "circOut" }}
                    className="absolute bottom-0 left-0 w-full grid grid-cols-1 border-t border-white/10 sm:grid-cols-3"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                                group relative flex min-h-24 items-center justify-between px-5 py-4 sm:px-6 lg:px-8 
                                bg-industrial-blue/95 border-b border-white/10 sm:border-b-0 sm:border-r overflow-hidden cursor-default transition-all duration-300 backdrop-blur-md
                                before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:transition-all before:duration-300 before:z-0
                                hover:before:w-full ${feature.sweepColor}
                            `}
                        >
                            <div className="relative z-10 flex items-center gap-6 w-full">
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-black/10 transition-colors duration-300 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className={`text-base font-black uppercase tracking-wide text-white font-header leading-tight mb-1 transition-colors duration-300 lg:text-lg ${feature.hoverTextColor}`}>
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

                {/* Scroll Down Arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-[20.9rem] right-4 z-20 hidden sm:bottom-[8.4rem] sm:right-6 md:block lg:right-8"
                >
                    <motion.button 
                        onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all hover:scale-110 hover:bg-white hover:text-brand-red hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
                        aria-label="Scroll to Fleet"
                    >
                        <ChevronDown className="h-6 w-6" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
