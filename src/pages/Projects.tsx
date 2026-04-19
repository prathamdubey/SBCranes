import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';
import crawlerImg from '../assets/images/crawler_crane.png';

// Import Client Logos
import hmel from '../assets/keyLeaders/HMEL.jpg';
import ntpc from '../assets/keyLeaders/NTPC.png';
import ongc from '../assets/keyLeaders/ONGC.png';
import reliance from '../assets/keyLeaders/reliance.png';
import lnt from '../assets/keyLeaders/l&t.png';
import tata from '../assets/keyLeaders/tataprojects.png';
import adani from '../assets/keyLeaders/adani.png';
import ultratech from '../assets/keyLeaders/ultratech.png';
import gail from '../assets/keyLeaders/GAIL.png';

import powergrid from '../assets/keyLeaders/powergrid.png';

// this is the update 

const projects = [
    {
        id: 1,
        title: "Installation of National Flag at Wagah Border",
        overview: "SB Cranes was entrusted with the prestigious responsibility of supporting the installation of the National Flag structure at the Wagah Border. The project involved precision lifting and careful handling of structural components at a site of high national importance, requiring strict adherence to safety, coordination, and execution standards.",
        subheading: "",
        bodyParagraphs: [
            "The installation of the National Flag at the Wagah Border was carried out with utmost care, precision, and respect for the significance of the site.",
            "The operation required seamless coordination with authorities, adherence to strict protocols, and disciplined execution under close supervision. SB Cranes ensured that the lifting activity was conducted in a controlled and composed manner, maintaining the dignity of the location while achieving accurate placement of the structure.",
            "The successful completion of the task marked a moment of pride for the entire team, contributing to a landmark installation that symbolizes national unity and honor."
        ],
        outcomes: [],
        highlight: "A Moment of Pride\nSB Cranes is honored to have contributed to a project of national pride, supporting the installation of the Indian National Flag at the Wagah Border.",
        image: heroBg,
        partnerLogo: null
    },
    {
        id: 2,
        title: "JLN STADIUM REDEVELOPMENT",
        overview: "SB Cranes played a key role in the redevelopment and structural upgradation of Jawaharlal Nehru (JLN) Stadium, one of India’s premier sports infrastructure facilities, in 2010. The project involved heavy structural lifting, precision placement, and coordinated execution within a live construction environment.\n\nThe scope was executed in collaboration with P&R (Patel & Raval Engineering / P&R Infra – leading structural and heavy engineering contractor) as part of the stadium modernization works.",
        subheading: "JLN Stadium Redevelopment – Heavy Lifting Support",
        bodyParagraphs: [
            "SB Cranes was engaged for heavy lifting and crane support during the redevelopment works at JLN Stadium, involving the handling and placement of large structural components.",
            "The project presented challenges such as restricted site access, tight working spaces, and the need for precision lifting within an active construction environment.",
            "To address this, high-capacity crawler cranes were deployed along with detailed lift planning and close coordination with the project team. The operation was executed safely and efficiently, ensuring smooth installation, zero downtime, and timely completion of the assigned scope."
        ],
        outcomes: [],
        highlight: "",
        image: crawlerImg,
        partnerLogo: null
    },
    {
        id: 3,
        title: "Tower Crane Erection for High-Rise Construction",
        overview: "SB Cranes was engaged for the erection of a tower crane for a major high-rise construction project in Gurgaon. The project involved the installation of a T-type tower crane at a congested urban site, requiring precise planning, controlled lifting, and coordination with the construction team to ensure safe and timely execution.",
        subheading: "",
        bodyParagraphs: [],
        outcomes: [
            "Successful erection of tower crane in a restricted urban environment",
            "Safe and precise lifting using luffing crane configuration",
            "No disruption to surrounding construction activities",
            "Timely completion in line with project schedule",
            "High level of safety and execution control maintained throughout"
        ],
        highlight: "",
        image: heroBg,
        partnerLogo: null
    },
    {
        id: 4,
        title: "HMEL REFINERY (HPCL–MITTAL ENERGY LIMITED)",
        overview: "SB Cranes provided long-term mobile crane support at HMEL Refinery for routine maintenance, shutdown activities, and equipment handling across multiple process units. The engagement spanned nearly three years, supporting critical refinery operations requiring precision lifting and strict safety compliance.",
        subheading: "Ongoing Maintenance & Lifting Operations",
        bodyParagraphs: [
            "SB Cranes was engaged for long-term mobile crane support at HMEL Refinery, providing lifting services for routine maintenance, shutdown activities, and equipment handling across multiple operational units.",
            "The scope involved frequent mobilization of cranes for handling mechanical components, piping systems, and plant equipment within live refinery conditions. All operations were executed under stringent safety and permit-to-work procedures, requiring precise coordination with refinery operations and maintenance teams.",
            "Through detailed lift planning, disciplined execution, and deployment of well-maintained cranes with trained operators, SB Cranes ensured smooth workflow, zero safety incidents, and uninterrupted refinery operations throughout the project duration."
        ],
        outcomes: [],
        highlight: "",
        image: crawlerImg,
        partnerLogo: hmel
    }
];

const clientLogos = [ntpc, ongc, reliance, lnt, tata, adani, ultratech, gail, powergrid];

export default function Projects() {
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
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Case Studies Archive</span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase font-header text-white mb-6 leading-[0.9] tracking-tighter"
                    >
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-[#ff6b6b]">Legacy</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
                    >
                        Engineering excellence in complex lifting operations across India's most demanding sectors.
                    </motion.p>
                </div>
            </section>

            <div className="py-24 lg:py-32">
                <div className="space-y-40 md:space-y-64">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={project.id} className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start`}>
                                    
                                    {/* Image Column - Sticky */}
                                    <div className="w-full lg:w-5/12 lg:sticky lg:top-32 z-10">
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8 }}
                                            className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] group"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/90 via-dark-slate/20 to-transparent z-10" />
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                                            
                                            <div className="absolute top-6 right-6 z-20">
                                                <div className="bg-white text-dark-slate text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                                    0{index + 1}
                                                </div>
                                            </div>

                                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                                 {project.partnerLogo && (
                                                     <div className="mb-6 inline-block bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50">
                                                         <img src={project.partnerLogo} alt="Partner Logo" className="h-8 object-contain" />
                                                     </div>
                                                 )}
                                                 <h3 className="text-white text-3xl md:text-4xl font-black font-header uppercase leading-[1.1] tracking-tight">
                                                     {project.title}
                                                 </h3>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Text Column - Scrolling */}
                                    <div className="w-full lg:w-7/12 py-4 lg:py-12 flex flex-col gap-12 lg:gap-16">
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="h-px w-16 bg-brand-red"></div>
                                                <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em]">Project Overview</span>
                                            </div>
                                            <p className="text-2xl md:text-3xl lg:text-4xl text-dark-slate font-light leading-snug tracking-tight">
                                                {project.overview}
                                            </p>
                                        </motion.div>

                                        {project.highlight && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.6, delay: 0.1 }}
                                                className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
                                            >
                                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-linear-to-br from-[#f09a59]/20 to-transparent rounded-full blur-3xl group-hover:bg-[#f09a59]/30 transition-colors duration-500"></div>
                                                <div className="relative z-10">
                                                    <h4 className="text-xl md:text-2xl font-bold text-dark-slate mb-4 font-header uppercase tracking-wide">{project.highlight.split('\n')[0]}</h4>
                                                    <p className="text-gray-600 text-lg leading-relaxed">{project.highlight.split('\n')[1]}</p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {(project.subheading || (project.bodyParagraphs && project.bodyParagraphs.length > 0)) && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.6 }}
                                                className="space-y-8"
                                            >
                                                {project.subheading && (
                                                    <h4 className="text-xl font-bold text-industrial-blue uppercase tracking-wider font-header border-l-4 border-industrial-blue pl-4">
                                                        {project.subheading}
                                                    </h4>
                                                )}

                                                {project.bodyParagraphs && project.bodyParagraphs.length > 0 && (
                                                    <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                                                        {project.bodyParagraphs.map((p, i) => (
                                                            <p key={i}>{p}</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}

                                        {project.outcomes && project.outcomes.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.6 }}
                                                className="pt-8 border-t border-gray-200"
                                            >
                                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Key Outcomes</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                                    {project.outcomes.map((outcome, i) => (
                                                        <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow duration-300">
                                                            <CheckCircle2 className="h-6 w-6 text-brand-red shrink-0" />
                                                            <span className="text-gray-700 font-medium leading-snug">{outcome}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Minimalist Trusted By Section */}
            <div className="bg-white py-24 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em] mb-4 block">Our Network</span>
                        <h3 className="text-4xl md:text-5xl font-black uppercase font-header text-dark-slate tracking-tight">Trusted By <span className="text-transparent bg-clip-text bg-linear-to-r from-industrial-blue to-blue-400">Leaders</span></h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center max-w-6xl mx-auto opacity-60">
                        {clientLogos.map((logo, idx) => (
                            <motion.img 
                                key={idx} 
                                src={logo} 
                                alt={`Client ${idx}`} 
                                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
                                className="h-10 md:h-14 object-contain grayscale transition-all duration-300 cursor-pointer" 
                            />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}
