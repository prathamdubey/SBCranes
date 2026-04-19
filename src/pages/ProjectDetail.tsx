import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Truck, ShieldCheck, MapPin } from 'lucide-react';

const PROJECT_DATA = {
    'hmel-refinery': {
        title: "HMEL Refinery",
        longTitle: "HMEL Refinery (HPCL–Mittal Energy Limited)",
        category: "Oil & Gas",
        image: '/updated_images/refinery_project.png',
        overview: "SB Cranes provided long-term mobile crane support at HMEL Refinery for routine maintenance, shutdown activities, and equipment handling across multiple process units. The engagement spanned nearly three years, supporting critical refinery operations requiring precision lifting and strict safety compliance.",
        subheading: "Ongoing Maintenance & Lifting Operations",
        bodyParagraphs: [
            "We were engaged for long-term mobile crane support at HMEL Refinery, providing lifting services for routine maintenance, shutdown activities, and equipment handling across multiple operational units.",
            "The scope involved frequent mobilization of cranes for handling mechanical components, piping systems, and plant equipment within live refinery conditions. All operations were executed under stringent safety and permit-to-work procedures, requiring precise coordination with refinery operations and maintenance teams.",
            "Through detailed lift planning, disciplined execution, and deployment of well-maintained cranes with trained operators, SB Cranes ensured smooth workflow, zero safety incidents, and uninterrupted refinery operations throughout the project duration."
        ],
        outcomes: [
            "Zero safety incidents across 3 years of operations",
            "Smooth execution within live refinery conditions",
            "Stringent adherence to permit-to-work protocols",
            "Uninterrupted workflow for mechanical and piping maintenance"
        ],
        highlight: "A Benchmark in Safety\nOur operations at HMEL perfectly demonstrate our absolute commitment to safety and precision in high-risk environments."
    },
    'stadium-roof-lift': {
        title: "Stadium Roof Lift",
        longTitle: "JLN Stadium Redevelopment",
        category: "Infrastructure",
        image: '/updated_images/stadium_project.png',
        overview: "SB Cranes played a key role in the redevelopment and structural upgradation of Jawaharlal Nehru (JLN) Stadium, one of India’s premier sports infrastructure facilities. The project involved heavy structural lifting, precision placement, and coordinated execution within a live construction environment.",
        subheading: "Heavy Lifting Support for Structural Upgradation",
        bodyParagraphs: [
            "The scope was executed in collaboration with leading structural and heavy engineering contractors as part of the stadium modernization works.",
            "The project presented challenges such as restricted site access, tight working spaces, and the need for precision lifting within an active construction environment.",
            "To address this, high-capacity crawler cranes were deployed along with detailed lift planning and close coordination with the project team. The operation was executed safely and efficiently, ensuring smooth installation, zero downtime, and timely completion of the assigned scope."
        ],
        outcomes: [
            "Precision placement of massive roof structures",
            "Successful navigation of restricted access site",
            "Zero downtime affecting concurrent construction activities",
            "Deployment of specialized high-capacity crawler cranes"
        ],
        highlight: "Engineering Landmark\nContributing to the modernization of JLN Stadium cemented our capability in handling large-scale infrastructural upgrades with tight deadlines."
    },
    'wind-farm-logistics': {
        title: "Wind Farm Logistics",
        longTitle: "Comprehensive Wind Farm Construction Logistics",
        category: "Wind Energy",
        image: '/updated_images/wind-farm.jpg',
        overview: "Comprehensive logistics and heavy lifting solutions for major wind energy projects across India, ensuring safe, efficient, and timely turbine erection in challenging terrains.",
        subheading: "Powering India's Renewable Future",
        bodyParagraphs: [
            "Wind farm construction presents unique logistical and lifting challenges, often situated in remote locations with difficult terrain and harsh weather conditions. SB Cranes was tasked with providing end-to-end support for turbine component transportation and erection.",
            "Our fleet of high-capacity cranes was specifically configured for the heights and weights associated with modern wind turbines. We executed precise tandem lifts for nacelles and rotor blades, prioritizing safety and wind-speed monitoring.",
            "The project involved intricate route planning for ODC (Over-Dimensional Cargo) and on-site assembly, demonstrating our capability to support the green infrastructure boom in India comprehensively."
        ],
        outcomes: [
            "Timely erection of multiple wind turbine generators",
            "Safe negotiation of remote, challenging terrains",
            "Zero damage to highly sensitive turbine components",
            "Seamless coordination between transport and lifting teams"
        ],
        highlight: "Sustainable Growth\nWe are proud to be instrumental in expanding India's wind energy capacity, matching the scale of ambition with outsized execution capabilities."
    },
    'tower-crane-erection': {
        title: "Tower Crane Erection",
        longTitle: "Tower Crane Erection for High-Rise Construction",
        category: "Construction",
        image: '/updated_images/tower-crane.jpg',
        overview: "SB Cranes was engaged for the erection of a tower crane for a major high-rise construction project in Gurgaon. The project involved the installation of a T-type tower crane at a congested urban site, requiring precise planning and controlled lifting.",
        subheading: "Urban High-Rise Support Strategy",
        bodyParagraphs: [
            "Erecting a tower crane in a densely populated and active construction environment demands meticulous planning to ensure zero disruption to surrounding activities and maximum safety for all personnel.",
            "Our engineering team developed a comprehensive lift plan, utilizing luffing jib configurations to navigate the airspace restrictions and physical obstacles present at the Gurgaon site.",
            "Through coordinated staging of components and highly controlled lifting operations, the tower crane was assembled piece by piece, anchored securely, and commissioned within the strict timeline provided by the main contractor."
        ],
        outcomes: [
            "Successful erection in a restricted urban environment",
            "Safe and precise lifting using luffing crane configuration",
            "No disruption to surrounding construction activities",
            "High level of safety and execution control maintained"
        ],
        highlight: "Vertical Mastery\nDemonstrating that no urban environment is too complex for our precision planning and specialized equipment deployment."
    }
};

export default function ProjectDetail({ onOpenModal }: { onOpenModal: () => void }) {
    const { id } = useParams<{ id: string }>();
    const project = id ? PROJECT_DATA[id as keyof typeof PROJECT_DATA] : null;

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-dark-slate">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center grayscale-[30%] contrast-[1.1] saturate-[1.2]" 
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-slate/80 via-dark-slate/60 to-[#fafafa]"></div>
                
                <div className="relative z-10 container mx-auto px-4 mt-16 lg:px-8 flex flex-col items-start">
                    <Link to="/#projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                        <ArrowLeft className="h-4 w-4" /> Back to Projects
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-red/20 border border-brand-red/50 text-brand-red text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            {project.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase font-header text-white mb-6 leading-[0.9] tracking-tighter max-w-4xl">
                            {project.longTitle}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <div className="py-20 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
                    
                    {/* Main Content */}
                    <div className="w-full lg:w-2/3 pr-0 lg:pr-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-1 w-12 bg-brand-red"></div>
                                <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em]">Project Overview</span>
                            </div>
                            <p className="text-2xl md:text-3xl text-dark-slate font-light leading-snug tracking-tight mb-8">
                                {project.overview}
                            </p>
                        </motion.div>

                        {/* Subheading & Paras */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-8"
                        >
                            {project.subheading && (
                                <h2 className="text-2xl font-bold text-industrial-blue uppercase tracking-wider font-header border-l-4 border-industrial-blue pl-4">
                                    {project.subheading}
                                </h2>
                            )}

                            {project.bodyParagraphs.map((p, i) => (
                                <p key={i} className="text-gray-600 text-lg leading-relaxed">{p}</p>
                            ))}
                        </motion.div>

                        {/* Outcomes */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-16 pt-10 border-t border-gray-200"
                        >
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Key Execution Outcomes</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                {project.outcomes.map((outcome, i) => (
                                    <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <CheckCircle2 className="h-6 w-6 text-brand-red shrink-0" />
                                        <span className="text-gray-700 font-medium leading-snug">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-32">
                            {/* Call to action completely fitting theme */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-dark-slate p-8 rounded-3xl shadow-2xl border border-gray-800 text-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black uppercase font-header mb-4 tracking-tight">Need Similar <span className="text-brand-red">Excellence?</span></h3>
                                    <p className="text-gray-400 font-light mb-8 text-sm">
                                        Partner with SB Cranes to execute your next heavy lift with absolute precision and safety. Let our experts plan your lift today.
                                    </p>
                                    
                                    <ul className="space-y-4 mb-8 text-sm text-gray-300">
                                        <li className="flex items-center gap-3">
                                            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Secure Execution
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <Truck className="h-4 w-4 text-brand-red" /> Modern Fleet Access
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <MapPin className="h-4 w-4 text-orange-400" /> Pan-India Mobilization
                                        </li>
                                    </ul>

                                    <button 
                                        onClick={onOpenModal}
                                        className="w-full group relative overflow-hidden rounded bg-brand-red px-6 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-between"
                                    >
                                        <span className="relative z-10 uppercase tracking-widest text-sm">Plan Your Lift</span>
                                        <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                    </button>
                                </div>
                            </motion.div>
                            
                            {project.highlight && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100"
                                >
                                    <h4 className="text-sm font-bold text-industrial-blue uppercase tracking-wider mb-2">{project.highlight.split('\n')[0]}</h4>
                                    <p className="text-gray-600 text-sm italic">"{project.highlight.split('\n')[1]}"</p>
                                </motion.div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
