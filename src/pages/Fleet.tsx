import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import heroBg from '../assets/updated_images/mobile-crane.webp';
import crawlerImg from '../assets/images/crawler_crane.png';


// Placeholder data for fleet categories - replacing actual brochure content for now
const fleetCategories = [
    {
        title: "Mobile Cranes",
        description: "Versatile and rapid deployment cranes for all-terrain operations.",
        specs: ["Capacity: 20T - 700T", "Boom Length: Up to 80m", "All-Terrain & Rough Terrain"],
        image: heroBg,
        id: "mobile"
    },
    {
        title: "Crawler Cranes",
        description: "Heavy-duty lifting with superior stability and load capacity.",
        specs: ["Capacity: 75MT - 800MT", "Configuration: Lattice Boom", "Superlift Attachments"],
        image: crawlerImg,
        id: "crawler"
    },
    {
        title: "Heavy Transport",
        description: "Specialized trailers and axles for ODC and heavy cargo movement.",
        specs: ["Hydraulic Axles", "Low Bed Trailers", "Pullers & Prime Movers"],
        image: heroBg,
        id: "transport"
    }
];

export default function Fleet() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-dark-slate">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="absolute inset-0 bg-linear-to-t from-dark-slate to-transparent"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold uppercase font-header text-white mb-6"
                    >
                        Our <span className="text-brand-red">Fleet</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 font-medium">
                        A modern fleet built for safe & reliable heavy lifting.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 lg:py-24">

                {/* Intro / Fleet at a Glance */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-industrial-blue text-xs font-bold uppercase tracking-widest mb-4">Fleet Overview</h2>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase font-header text-dark-slate mb-8">
                        Precision Engineered for <span className="text-brand-red">Every Lift</span>
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        SB Cranes operates a modern and diverse fleet of cranes and heavy transport equipment designed to deliver safe, efficient, and dependable lifting solutions across infrastructure, industrial, and engineering projects in India. Our fleet is continuously upgraded and meticulously maintained to meet the demands of complex and high-value operations.
                    </p>

                    {/* Brochure Download CTA */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 inline-block shadow-lg">
                        <h4 className="text-industrial-blue font-bold uppercase tracking-wider mb-4">Complete Specifications</h4>
                        <button className="flex items-center gap-3 bg-industrial-blue text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all duration-300 rounded-sm mx-auto group">
                            <Download className="h-5 w-5" />
                            <span>Download Fleet Brochure</span>
                        </button>
                    </div>
                </div>

                {/* Fleet Categories */}
                <div className="space-y-24 mb-24">
                    {fleetCategories.map((category, index) => (
                        <div key={category.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-industrial-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img src={category.image} alt={category.title} className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-3xl md:text-4xl font-bold uppercase font-header text-industrial-blue mb-4">{category.title}</h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {category.description}
                                </p>

                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                                    <h5 className="font-bold uppercase text-sm tracking-widest text-dark-slate mb-4 border-b border-gray-200 pb-2">Key Specifications</h5>
                                    <ul className="space-y-3">
                                        {category.specs.map((spec, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Mid-Section CTA (Simulated as requested) */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => document.getElementById('plan-lift-btn')?.click()}
                                        className="bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-industrial-blue hover:text-white transition-colors text-sm"
                                    >
                                        Enquire Now
                                    </button>
                                    <a
                                        href={`/specs?cat=${category.id}`}
                                        className="bg-white border-2 border-gray-200 text-industrial-blue px-6 py-3 font-bold uppercase tracking-widest hover:border-industrial-blue hover:bg-industrial-blue hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                                    >
                                        Load Charts
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Interlinked CTAs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-industrial-blue p-10 rounded-2xl text-white text-center relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold uppercase font-header mb-4">See Our Fleet in Action</h3>
                            <p className="text-gray-300 mb-8">Explore our portfolio of complex lifts and major projects across India.</p>
                            <a href="/projects" className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest hover:text-white transition-colors">
                                Explore Projects <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-brand-red p-10 rounded-2xl text-white text-center relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold uppercase font-header mb-4">Need the Right Equipment?</h3>
                            <p className="text-gray-800 mb-8">Our engineers can help you select the perfect crane for your specific lift requirements.</p>
                            <button
                                onClick={() => document.getElementById('plan-lift-btn')?.click()}
                                className="inline-flex items-center gap-2 text-industrial-blue font-bold uppercase tracking-widest hover:text-black transition-colors"
                            >
                                Plan Your Lift <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
