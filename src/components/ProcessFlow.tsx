
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, ClipboardCheck, HardHat, Flag, ArrowRight } from 'lucide-react';

interface ProcessFlowProps {
    onOpenModal?: () => void;
}

export default function ProcessFlow({ onOpenModal }: ProcessFlowProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const steps = [
        {
            id: 1,
            icon: <MessageSquare className="h-6 w-6 text-white" />,
            title: "Review",
            description: "Scope & Timeline Analysis"
        },
        {
            id: 2,
            icon: <ClipboardCheck className="h-6 w-6 text-white" />,
            title: "Plan",
            description: "Equipment & Lift Planning"
        },
        {
            id: 3,
            icon: <HardHat className="h-6 w-6 text-white" />,
            title: "Execute",
            description: "Safe & Precise Operation"
        },
        {
            id: 4,
            icon: <Flag className="h-6 w-6 text-white" />,
            title: "Complete",
            description: "Handover & Peace of Mind"
        }
    ];

    return (
        <section ref={ref} className="bg-dark-slate py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="block text-sm font-bold uppercase tracking-widest text-brand-red mb-2"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white font-header"
                    >
                        From Plan to Execution
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-gray-700 -z-0">
                        <motion.div
                            className="h-full bg-brand-red origin-left"
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Steps Container */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon Bubble */}
                                <div className="relative mb-3 lg:mb-6">
                                    <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-industrial-blue border-4 border-gray-600 flex items-center justify-center group-hover:border-brand-red group-hover:scale-110 transition-all duration-300 shadow-xl">
                                        <div className="text-brand-red group-hover:text-white transition-colors duration-300 transform group-hover:rotate-12">
                                            {step.icon}
                                        </div>
                                    </div>
                                    {/* Number Badge */}
                                    <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-brand-red flex items-center justify-center text-[10px] lg:text-xs font-bold text-white border-2 border-industrial-blue">
                                        0{step.id}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <h3 className="text-sm lg:text-xl font-bold uppercase text-white font-header mb-1 lg:mb-2 group-hover:text-brand-red transition-colors">{step.title}</h3>
                                <p className="text-gray-400 text-xs lg:text-sm max-w-[120px] lg:max-w-[200px]">{step.description}</p>
                            </motion.div>
                        ))}

                        {/* Final Step: The Result */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="flex flex-col items-center text-center group col-span-2 lg:col-span-1 mt-4 lg:mt-0"
                        >
                            {/* Image Bubble */}
                            <div className="relative mb-3 lg:mb-6">
                                <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-xl lg:rounded-2xl bg-brand-red border-4 border-white flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
                                    <img
                                        src="/crane_images/Photo from Himanshu(9).jpg"
                                        alt="Project Execution"
                                        loading="lazy"
                                        className="h-full w-full object-cover grayscale-[30%] brightness-90 contrast-125 saturate-150 group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                {/* Success Badge */}
                                <div className="absolute -bottom-2 -right-2 lg:-bottom-3 lg:-right-3 h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-green-500 flex items-center justify-center text-white border-2 lg:border-4 border-dark-slate shadow-lg z-10">
                                    <Flag className="h-4 w-4 lg:h-5 lg:w-5" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-sm lg:text-xl font-bold uppercase text-brand-red font-header mb-1 lg:mb-2">The Result</h3>
                            <p className="text-white text-xs lg:text-sm max-w-[140px] lg:max-w-[200px] font-medium italic">"A Confident, Satisfied Client."</p>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        onClick={onOpenModal}
                        className="group inline-flex items-center gap-3 bg-transparent border-2 border-brand-red px-8 py-4 text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 font-bold uppercase tracking-widest rounded-sm"
                    >
                        Start Your Project
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>

            </div>
        </section>
    );
}
