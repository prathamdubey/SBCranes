import { Link } from 'react-router-dom';
import { HardHat, ArrowLeft, Construction } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-dark-slate flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-dark-slate z-0"></div>

            {/* Animated Background Element */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 -bottom-20 opacity-5 z-0"
            >
                <Construction className="w-96 h-96 text-white" />
            </motion.div>

            <div className="relative z-10 text-center max-w-2xl px-4">
                {/* Icon Animation */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-red/20"
                >
                    <HardHat className="w-12 h-12 text-dark-slate" />
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold uppercase font-header text-white mb-6 tracking-tight"
                >
                    Work in <span className="text-brand-red">Progress</span>
                </motion.h1>

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="h-1 w-24 bg-industrial-blue mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        We are currently crafting this section to bring you detailed information about our services and fleet. <br className="hidden md:block" />Check back soon for updates.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-white text-dark-slate px-8 py-3 font-bold uppercase tracking-widest hover:bg-industrial-blue hover:text-white transition-all duration-300 rounded-sm group"
                    >
                        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-8 text-center w-full z-10 opacity-30">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">SB Cranes &copy; {new Date().getFullYear()} &bull; Building the Future</p>
            </div>
        </div>
    );
}