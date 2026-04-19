
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const heroBg = '/updated_images/hydrolic-crane.jpeg';
const heroBgm = '/updated_images/mobile-crane.webp';
const crawlerImg = '/updated_images/crawler-crane.webp';

const tabs = [
    {
        id: 'mobile',
        label: 'Mobile Cranes',
        image: heroBgm,
        specs: { capacity: '60 - 800 MT', brands: 'Liebherr, Demag, Sany', usage: 'Urban, Industrial, Refinery' }
    },
    {
        id: 'crawler',
        label: 'Crawler Cranes',
        image: crawlerImg,
        specs: { capacity: '75 - 1200 MT', brands: 'Sany, Zoomlion, Kobelco', usage: 'Wind Power, Infrastructure' }
    },
    {
        id: 'trailer',
        label: 'Hydraulic Trailers',
        image: heroBg, // Placeholder
        specs: { capacity: 'Multi-Axle', brands: 'Goldhofer, Scheuerle', usage: 'Heavy Transport, ODC' }
    },
];

export default function EquipmentSelector() {
    const [activeTab, setActiveTab] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (!isHovered) {
            interval = setInterval(() => {
                setActiveTab((prev) => (prev + 1) % tabs.length);
            }, 15000); // Switch every 15 seconds
        }

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section
            id="fleet"
            className="bg-steel-grey py-24 text-dark-slate relative z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold uppercase tracking-tighter text-industrial-blue md:text-6xl font-header">Our Fleet</h2>
                    <div className="mt-4 h-1 w-24 bg-brand-red" />
                </div>

                <div className="flex flex-col lg:flex-row gap-0 lg:h-[600px] border border-gray-300 shadow-2xl">
                    {/* Tabs Navigation */}
                    <div className="flex w-full flex-row lg:flex-col bg-white lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200 overflow-x-auto no-scrollbar">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(index)}
                                className={`group relative flex-shrink-0 flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-center border-r lg:border-r-0 lg:border-b border-gray-200 px-6 py-4 lg:px-10 lg:py-8 text-left transition-all hover:bg-gray-50 bg-white
                ${activeTab === index ? '!bg-industrial-blue text-white flex-1 lg:flex-none' : 'w-20 lg:w-full'}`}
                            >
                                <div className="flex items-center justify-center lg:justify-between w-auto lg:w-full mr-3 lg:mr-0 lg:mb-2">
                                    <span className={`text-sm lg:text-sm font-bold uppercase tracking-widest ${activeTab === index ? 'text-brand-red' : 'text-gray-400'}`}>0{index + 1}</span>
                                    {activeTab === index && <motion.div layoutId="activeTabIndicator" className="h-1.5 w-1.5 lg:h-2 lg:w-2 bg-brand-red rounded-full ml-2 lg:ml-0 hidden lg:block" />}
                                </div>

                                {/* Label - Show only if active on mobile, always on desktop */}
                                <span className={`text-sm lg:text-2xl font-bold uppercase font-header tracking-tighter relative z-10 whitespace-nowrap lg:whitespace-normal
                                    ${activeTab === index ? 'block' : 'hidden lg:block'}`}>
                                    {tab.label}
                                </span>

                                {/* Progress Bar - Moves to active tab */}
                                {activeTab === index && (
                                    <motion.div
                                        key={`${activeTab}-${isHovered ? 'hovered' : 'active'}`}
                                        initial={{ width: "100%" }}
                                        animate={{ width: isHovered ? "100%" : "0%" }}
                                        transition={{ duration: isHovered ? 0.2 : 15, ease: "linear" }}
                                        className="absolute bottom-0 left-0 h-1 lg:h-1.5 bg-brand-red z-20"
                                    />
                                )}
                            </button>
                        ))}
                        <div className="flex-1 bg-white hidden lg:block" />
                    </div>

                    {/* Content Area */}
                    <div className="relative w-full overflow-hidden bg-gray-100 lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: "linear" }}
                                className="flex h-full flex-col md:flex-row"
                            >
                                {/* Image Side */}
                                <div className="relative h-64 w-full md:h-full md:w-3/5 overflow-hidden">
                                    <motion.div
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 4 }}
                                        className="absolute inset-0 bg-cover bg-center brightness-90 contrast-125 saturate-150 grayscale-[10%]"
                                        style={{ backgroundImage: `url('${tabs[activeTab].image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-industrial-blue/20 mix-blend-multiply" />
                                    {/* Diagonal Hazard Stripe Overlay */}
                                    <div className="absolute top-0 right-0 h-16 w-16 lg:h-24 lg:w-24 bg-brand-red opacity-90 clipping-triangle" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                                </div>

                                {/* Specs Side */}
                                <div className="flex w-full flex-col justify-center bg-white p-6 md:p-12 md:w-2/5">
                                    <h3 className="mb-6 lg:mb-8 text-2xl lg:text-3xl font-bold uppercase text-industrial-blue font-header">{tabs[activeTab].label}</h3>

                                    <div className="space-y-6 lg:space-y-8">
                                        <div className="border-l-2 border-brand-red pl-4">
                                            <span className="block text-[10px] lg:text-xs uppercase tracking-widest text-gray-400">Capacity</span>
                                            <span className="text-xl lg:text-2xl font-bold text-dark-slate font-header">{tabs[activeTab].specs.capacity}</span>
                                        </div>
                                        <div className="border-l-2 border-gray-200 pl-4">
                                            <span className="block text-[10px] lg:text-xs uppercase tracking-widest text-gray-400">Brands</span>
                                            <span className="text-base lg:text-lg font-medium text-dark-slate">{tabs[activeTab].specs.brands}</span>
                                        </div>
                                        <div className="border-l-2 border-gray-200 pl-4">
                                            <span className="block text-[10px] lg:text-xs uppercase tracking-widest text-gray-400">Ideal Usage</span>
                                            <span className="text-base lg:text-lg font-medium text-dark-slate">{tabs[activeTab].specs.usage}</span>
                                        </div>
                                    </div>

                                    <Link to={`/specs?cat=${tabs[activeTab].id}`} className="group mt-8 lg:mt-12 inline-flex items-center gap-3 text-xs lg:text-sm font-bold uppercase tracking-widest text-industrial-blue hover:text-brand-red transition-colors bg-gray-100 p-3 lg:p-4 border border-gray-200 hover:bg-black hover:border-black w-fit">
                                        View Spec Sheet <ArrowRight className="h-3.5 w-3.5 lg:h-4 lg:w-4 transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </section >
    );
}
