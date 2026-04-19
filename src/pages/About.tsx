import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Award, ShieldCheck, Target, TrendingUp, HardHat } from 'lucide-react';
const heroBg = '/crane_images/Photo from Himanshu(6).jpg';
const crawlerImg = '/crane_images/Photo from Himanshu(7).jpg';
const stadiumImg = '/crane_images/Photo from Himanshu(8).jpg';
const refineryImg = '/crane_images/Photo from Himanshu(10).jpg';

// Stats Component with Animation
const StatItem = ({ label, value, suffix = "+" }: { label: string, value: number, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="text-center p-6 border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm">
            <div className="text-4xl lg:text-5xl font-bold text-brand-red font-header mb-2">
                {isInView ? (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {value}{suffix}
                    </motion.span>
                ) : (
                    <span>0{suffix}</span>
                )}
            </div>
            <p className="text-gray-300 text-sm md:text-base tracking-wider uppercase font-medium">{label}</p>
        </div>
    );
};


interface AboutProps {
    onOpenModal?: () => void;
}

export default function About({ onOpenModal }: AboutProps) {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-dark-slate">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 brightness-75 contrast-125 grayscale-[20%]" style={{ backgroundImage: `url('${heroBg}')` }}></div>
                <div className="absolute inset-0 bg-linear-to-t from-dark-slate to-transparent"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold uppercase font-header text-white mb-6"
                    >
                        About <span className="text-brand-red">Us</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 font-medium">
                        Building the future with strength, precision, and over 40 years of expertise.
                    </p>
                </div>
            </section>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 py-16 lg:py-24">

                {/* Intro Section - Split Layout */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/20 rounded-full blur-2xl"></div>
                            <h2 className="text-industrial-blue text-xs font-bold uppercase tracking-[0.2em] mb-4">Who We Are</h2>
                            <h3 className="text-3xl md:text-5xl font-bold uppercase font-header text-dark-slate mb-6 leading-tight">
                                Leading Crane Rental & <br />
                                <span className="text-industrial-blue">Heavy Lifting Solutions</span>
                            </h3>
                            <div className="h-1 w-20 bg-brand-red mb-8"></div>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    We are a leading crane rental and heavy lifting solutions provider operating across India, with over 40 years of proven industry experience supporting construction, infrastructure, industrial, and engineering projects.
                                </p>
                                <p>
                                    Our focus is on reliable equipment, experienced operators, and safe execution. We work closely with contractors and project teams to ensure the right crane is deployed on time, with minimal downtime and smooth site coordination.
                                </p>
                                <p>
                                    From short-term requirements to long-duration projects, we deliver practical lifting solutions that meet real site conditions. Known for consistency, maintenance standards, and on-ground support, we aim to be a dependable crane rental partner for projects of all sizes across entire India and the World.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-industrial-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img src={crawlerImg} alt="SB Cranes Fleet" loading="lazy" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-125 saturate-150 grayscale-[10%]" />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 right-6 bg-white p-6 rounded-lg shadow-xl z-20 max-w-xs border-l-4 border-brand-red hidden md:block">
                                <p className="text-industrial-blue font-bold text-lg mb-1">Trusted Partner</p>
                                <p className="text-gray-500 text-sm">For major EPC & Infrastructure projects across India.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-industrial-blue rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                    <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <StatItem label="Years of Experience" value={40} />
                        <StatItem label="Cranes & Transport" value={100} />
                        <StatItem label="Clients Served" value={1000} />
                        <StatItem label="Pan-India Reach" value={24} suffix="x7" />
                    </div>
                </motion.div>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Target size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mb-6">
                                <Target className="h-8 w-8 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase font-header text-industrial-blue mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become a globally recognized crane rental and heavy lifting company, delivering world-class solutions through safety, innovation, reliability, and operational excellence.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <TrendingUp size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                                <TrendingUp className="h-8 w-8 text-brand-red" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase font-header text-industrial-blue mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Deliver world-class crane services while promoting workplace safety, responsible operations, and contributing to the development of communities and national infrastructure.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values - Zigzag Layout */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-industrial-blue text-xs font-bold uppercase tracking-widest mb-3">Our Culture</h2>
                        <h3 className="text-3xl md:text-5xl font-bold uppercase font-header text-dark-slate">Core <span className="text-brand-red">Values</span></h3>
                    </div>

                    <div className="space-y-24">
                        {[
                            {
                                title: 'Reliability',
                                icon: ShieldCheck,
                                desc: 'We deliver dependable performance with on-time delivery and consistent service. Our clients trust us to be there when it matters most, ensuring their projects never face unexpected downtime due to equipment failure.',
                                image: heroBg
                            },
                            {
                                title: 'Integrity',
                                icon: Scale,
                                desc: 'We believe in honest, transparent interactions and a steadfast commitment to ethical business practices. Every partnership is built on trust, clear communication, and delivering exactly what was promised.',
                                image: stadiumImg
                            },
                            {
                                title: 'Safety',
                                icon: HardHat,
                                desc: 'Safety is our non-negotiable priority. We implement rigorous safety protocols and provide continuous training to our operators, ensuring zero compromises in every operation we undertake.',
                                image: refineryImg
                            },
                            {
                                title: 'Excellence',
                                icon: Award,
                                desc: 'With over 40 years of hands-on experience, we bring unmatched expertise to complex lifting projects. We strive for perfection in every lift, combining engineering precision with skilled execution.',
                                image: crawlerImg
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl shadow-industrial-blue/10 border border-gray-100 p-2 bg-white">
                                        <div className="absolute inset-0 bg-transparent z-10 rounded-[2rem] pointer-events-none"></div>
                                        <img
                                            src={value.image}
                                            alt={`${value.title} at SB Cranes`}
                                            loading="lazy"
                                            className="w-full h-[320px] rounded-[1.5rem] object-cover transform group-hover:scale-[1.03] transition-transform duration-700 brightness-110 contrast-110 saturate-125"
                                        />
                                        <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/90 to-transparent p-6 z-20 rounded-[1.5rem]">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-brand-red p-2 rounded-full">
                                                    <value.icon className="h-6 w-6 text-black" />
                                                </div>
                                                <span className="text-white font-header font-bold uppercase tracking-wider">{value.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                    <h4 className="text-3xl md:text-4xl font-bold uppercase font-header text-industrial-blue mb-6 relative inline-block">
                                        {value.title}
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-red"></span>
                                    </h4>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {value.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-dark-slate rounded-3xl p-8 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-blue opacity-50 transform skew-x-12 translate-x-1/4"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4">Why SB Cranes?</h2>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase font-header text-white mb-8">
                                Built on Trust,<br /> Driven by Performance
                            </h3>
                            <button onClick={onOpenModal} className="bg-brand-red text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors hover:text-brand-red border border-transparent hover:border-brand-red">
                                Partner With Us
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Pan India Reach',
                                    'Trusted by Industry',
                                    'Safety Driven',
                                    'Heavy Lift Experts',
                                    'Reliable Operations',
                                    '24x7 Service Support'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                                        <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0" />
                                        <span className="text-white font-bold uppercase text-sm tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// Helper for Integrity icon since it might not be in the initial import list clearly
const Scale = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
);
