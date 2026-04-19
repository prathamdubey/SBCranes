import { motion } from 'framer-motion';
import { ArrowRight, Truck, Cog, Anchor, HardHat, Factory } from 'lucide-react';

// Import images
import heroBg from '../assets/images/hero_bg.png';
import crawlerImg from '../assets/images/crawler_crane.png';
import refineryImg from '../assets/images/hmel.png';
import stadiumImg from '../assets/images/jlm2.png';
import towerImg from '../assets/images/buildingcrae.png';

interface ServiceSection {
    id: string;
    title: string;
    shortTitle: string;
    icon: React.ElementType;
    image: string;
    overview: string;
    applications: string[];
    capabilities: string[];
    capacity: string[];
}

const services: ServiceSection[] = [
    {
        id: 'mobile-crane',
        title: 'Mobile Crane Rental',
        shortTitle: 'Mobile Cranes',
        icon: Truck,
        image: heroBg,
        overview: 'Our mobile crane rental services are designed for fast mobilization, flexibility, and high-performance lifting across infrastructure, industrial, and time-sensitive projects. With a modern fleet and experienced operators, SB Cranes ensures safe and efficient execution even in constrained or urban environments.',
        applications: ['Plant installation and maintenance', 'Infrastructure construction', 'Urban construction sites', 'Equipment loading and unloading', 'Emergency and time-critical lifts'],
        capabilities: ['Road-legal cranes for rapid deployment', 'Quick setup and dismantling', 'Compatible with jibs and luffing attachments', 'Suitable for tight access locations', 'Ideal for short-duration and fast-track projects'],
        capacity: ['Light to Medium Duty: 60–220 MT', 'Heavy Duty: 250–360 MT', 'Ultra Heavy Duty: 400–800 MT']
    },
    {
        id: 'crawler-crane',
        title: 'Crawler Crane Rental',
        shortTitle: 'Crawler Cranes',
        icon: Cog,
        image: crawlerImg,
        overview: 'Our crawler cranes are built for heavy industrial lifting, long-term deployment, and operations on uneven or soft ground. These cranes deliver exceptional stability and load-handling capability for complex projects.',
        applications: ['Power plants and refineries', 'Steel plants and cement plants', 'Large infrastructure projects', 'Modular construction and heavy assemblies', 'Long-duration site deployments'],
        capabilities: ['Track-mounted for superior stability', 'Capable of lifting and moving loads simultaneously', 'Ideal for continuous heavy lifting operations', 'Suitable for restricted ground conditions', 'Preferred for large-scale EPC projects'],
        capacity: ['Light to Medium Duty: 60–220 MT', 'Heavy Duty: 250–360 MT', 'Ultra Heavy Duty: 400–800 MT']
    },
    {
        id: 'heavy-lifting',
        title: 'Heavy Lifting & Erection',
        shortTitle: 'Heavy Lifting',
        icon: Anchor,
        image: stadiumImg,
        overview: 'SB Cranes specializes in heavy lifting and precision erection services for large, high-value, and critical components. Our team handles every stage — from lift planning to final placement — with uncompromising safety and accuracy.',
        applications: ['Structural erection', 'Equipment installation', 'Vessel, reactor, and column lifts', 'Modular assembly', 'Complex tandem and multi-crane lifts'],
        capabilities: ['Detailed lift studies and method statements', 'Engineered rigging solutions', 'Skilled operators and supervisors', 'Real-time coordination with project teams'],
        capacity: []
    },
    {
        id: 'shutdown',
        title: 'Shutdown & Maintenance',
        shortTitle: 'Shutdowns',
        icon: HardHat,
        image: refineryImg,
        overview: 'We provide round-the-clock crane support for plant shutdowns and maintenance activities, where timelines are tight and safety is critical. Our teams are trained to work efficiently in live and high-risk industrial environments.',
        applications: ['Shutdown crane deployment', 'Equipment removal and replacement', 'Maintenance lifting support', 'Emergency mobilization', 'Permit-to-work compliance'],
        capabilities: ['24×7 availability', 'Fast crane mobilization', 'Strict safety and refinery protocols', 'Minimal downtime for plant operations'],
        capacity: ['Refineries', 'Power plants', 'Fertilizer and chemical plants', 'Heavy industrial facilities']
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure Projects',
        shortTitle: 'Infrastructure',
        icon: Factory,
        image: towerImg,
        overview: 'SB Cranes delivers end-to-end lifting solutions for large infrastructure and industrial developments across India. We work closely with EPC contractors to ensure seamless crane deployment throughout the project lifecycle.',
        applications: ['Bridges and flyovers', 'Metro and rail projects', 'Stadiums and public infrastructure', 'Industrial plant construction', 'Large civil and structural works'],
        capabilities: ['Crane selection and planning', 'On-site execution support', 'Long-term project deployment', 'Integrated lifting and logistics coordination'],
        capacity: []
    },
    {
        id: 'transport',
        title: 'Heavy Cargo Transport',
        shortTitle: 'Transport',
        icon: Truck,
        image: heroBg,
        overview: 'Our heavy cargo and ODC transportation services ensure safe and controlled movement of oversized and overweight cargo. Supported by our in-house trailers and axle lines, we provide complete logistics solutions.',
        applications: ['ODC (Over-Dimensional Cargo) transport', 'Heavy machinery movement', 'Crane and equipment transportation', 'Plant relocation support', 'Long-distance and inter-state movement'],
        capabilities: ['Heavy-duty trailers and axle configurations', 'Experienced transport planning team', 'Route surveys and compliance support', 'Integrated lifting + transport execution'],
        capacity: ['Industrial equipment suppliers', 'EPC contractors', 'Power and refinery projects', 'Infrastructure developments']
    }
];

export default function Services() {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* Minimalist Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-dark-slate">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-dark-slate/80 via-dark-slate/50 to-[#fafafa]"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
                    >
                        <div className="h-2 w-2 rounded-full bg-brand-red animate-pulse"></div>
                        <span className="text-white text-xs font-bold uppercase tracking-widest">SB CRANES</span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase font-header text-white mb-6 leading-[0.9] tracking-tighter"
                    >
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-[#ff6b6b]">Expertise</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
                    >
                        Precision engineering and heavy lifting solutions tailored for the most demanding environments.
                    </motion.p>
                </div>
            </section>

            {/* Seamless Flowing Services Overview */}
            <div className="flex flex-col">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={service.id} className={`relative py-16 lg:py-20 ${isEven ? 'bg-white' : 'bg-[#fafafa]'}`}>
                             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                  <div className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''} gap-16 lg:gap-24 items-center`}>
                                       
                                       {/* Image side */}
                                       <motion.div 
                                           initial={{ opacity: 0, scale: 0.95 }}
                                           whileInView={{ opacity: 1, scale: 1 }}
                                           viewport={{ once: true, margin: "-100px" }}
                                           transition={{ duration: 0.8 }}
                                           className="w-full lg:w-1/2 relative group"
                                       >
                                           <div className={`absolute inset-0 bg-brand-red/5 rounded-[3rem] transform transition-transform duration-700 group-hover:bg-brand-red/10 ${isEven ? 'translate-x-6' : '-translate-x-6'} translate-y-6 -z-10`} />
                                           <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                                                <div className="absolute inset-0 bg-dark-slate/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out" />
                                                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                                                    <service.icon className="h-8 w-8 text-brand-red" />
                                                </div>
                                           </div>
                                       </motion.div>

                                       {/* Content Side */}
                                       <div className="w-full lg:w-1/2 flex flex-col gap-10">
                                           <motion.div
                                               initial={{ opacity: 0, y: 30 }}
                                               whileInView={{ opacity: 1, y: 0 }}
                                               viewport={{ once: true, margin: "-100px" }}
                                               transition={{ duration: 0.6 }}
                                           >
                                               <div className="flex items-center gap-4 mb-6">
                                                   <div className="h-px w-12 bg-brand-red"></div>
                                                   <span className="text-industrial-blue font-black tracking-[0.2em] uppercase text-xs">Service 0{index + 1}</span>
                                               </div>
                                               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-header text-dark-slate uppercase leading-[1.1] tracking-tight mb-8">
                                                   {service.title}
                                               </h2>
                                               <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed tracking-tight">
                                                   {service.overview}
                                               </p>
                                           </motion.div>

                                           {/* Sleek Chips for Applications & Capabilities */}
                                           <motion.div 
                                               initial={{ opacity: 0, y: 30 }}
                                               whileInView={{ opacity: 1, y: 0 }}
                                               viewport={{ once: true, margin: "-100px" }}
                                               transition={{ duration: 0.6, delay: 0.1 }}
                                               className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-4"
                                           >
                                               <div>
                                                   <h4 className="text-xs font-black text-dark-slate uppercase tracking-[0.15em] mb-6 border-b border-gray-200 pb-3 flex items-center justify-between">
                                                       Applications <ArrowRight className="h-3 w-3 text-brand-red" />
                                                   </h4>
                                                   <div className="flex flex-wrap gap-2">
                                                       {service.applications.map((app, i) => (
                                                           <span key={i} className="text-xs font-bold uppercase tracking-wider text-gray-600 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl hover:bg-white hover:border-brand-red hover:shadow-sm transition-all cursor-default text-center flex-grow sm:flex-grow-0 sm:text-left">
                                                               {app}
                                                           </span>
                                                       ))}
                                                   </div>
                                               </div>
                                           </motion.div>

                                           {service.capacity.length > 0 && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ duration: 0.6, delay: 0.2 }}
                                                    className="mt-6 p-8 bg-industrial-blue text-white rounded-3xl shadow-xl relative overflow-hidden"
                                                >
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-10 blur-2xl"></div>
                                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-white/50">Capacity Range / Focus</h4>
                                                    <div className="flex flex-wrap gap-3 relative z-10">
                                                        {service.capacity.map((cap, i) => (
                                                            <span key={i} className="text-xs font-black bg-white/10 px-4 py-3 rounded-xl backdrop-blur-md border border-white/20 uppercase tracking-widest hover:bg-white/20 transition-colors">
                                                                {cap}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                           )}
                                           
                                           <motion.div 
                                               initial={{ opacity: 0, y: 30 }}
                                               whileInView={{ opacity: 1, y: 0 }}
                                               viewport={{ once: true, margin: "-100px" }}
                                               transition={{ duration: 0.6, delay: 0.3 }}
                                               className="mt-6"
                                           >
                                               <button
                                                   onClick={() => document.getElementById('plan-lift-btn')?.click()}
                                                   className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-brand-red hover:text-industrial-blue transition-colors px-6 py-4 border border-brand-red/20 rounded-full hover:border-industrial-blue/30 hover:bg-white bg-[#fafafa]"
                                               >
                                                   Request Quote 
                                                   <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                                               </button>
                                           </motion.div>
                                       </div>
                                  </div>
                             </div>
                        </div>
                    )
                })}
            </div>

            {/* Bottom Interlink CTA */}
            <section className="bg-brand-red py-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black uppercase font-header text-white mb-6">See Our Work In Action</h2>
                    <p className="text-white/90 text-xl font-light mb-10 max-w-2xl mx-auto">Explore our portfolio of successful heavy lifts and complex operations across India.</p>
                    <a href="/projects" className="inline-flex items-center gap-3 bg-white text-brand-red px-8 py-4 font-black uppercase tracking-[0.2em] rounded-full hover:bg-black hover:text-white transition-all duration-300">
                        View Projects <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
