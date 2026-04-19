import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChallengesSolutions() {
    const data = [
        {
            challenge: "Delays due to unsuitable or unavailable equipment",
            solution: "Right equipment, deployed on time"
        },
        {
            challenge: "Safety risks during high-value or critical lifts",
            solution: "Safety-first planning and execution"
        },
        {
            challenge: "Coordination gaps between lifting and transport",
            solution: "Integrated lifting and transport support"
        },
        {
            challenge: "Restricted sites and challenging conditions",
            solution: "Proven execution in complex environments"
        },
        {
            challenge: "Limited time windows during shutdowns",
            solution: "Dependable support for critical operations"
        }
    ];

    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold uppercase tracking-tight text-dark-slate font-header md:text-3xl"
                    >
                        Turning <span className="text-red-500">Challenges</span> Into <span className="text-emerald-500">Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-2 text-base text-gray-600 max-w-2xl mx-auto"
                    >
                        We anticipate the risks so you don't have to. Here is how we bridge the gap between complexity and success.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-3 max-w-5xl mx-auto">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.005, boxShadow: "0 4px 12px -2px rgba(0,0,0,0.08)" }}
                            className="group relative grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                        >
                            {/* Connector Line (Desktop) */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden md:block">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-0.5 rounded-full border border-gray-100 group-hover:border-industrial-blue group-hover:scale-110 transition-all duration-300 z-10">
                                    <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-industrial-blue" />
                                </div>
                            </div>

                            {/* Challenge Side */}
                            <div className="p-4 flex items-center gap-3 bg-red-50/30 group-hover:bg-red-50/60 transition-colors duration-300">
                                <div className="shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <AlertCircle className="h-4 w-4 text-red-600" />
                                </div>
                                <p className="text-gray-700 text-sm font-medium group-hover:text-red-900 transition-colors">
                                    {item.challenge}
                                </p>
                            </div>

                            {/* Solution Side */}
                            <div className="p-4 flex items-center gap-3 group-hover:bg-emerald-50/30 transition-colors duration-300">
                                <div className="shrink-0 h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 md:ml-auto md:order-2">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                </div>
                                <p className="text-gray-900 text-sm font-bold group-hover:text-emerald-900 transition-colors md:text-right md:w-full">
                                    {item.solution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
