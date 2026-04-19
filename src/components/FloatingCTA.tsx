import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

interface FloatingCTAProps {
    onOpenModal: () => void;
}

export default function FloatingCTA({ onOpenModal }: FloatingCTAProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show if scrolled past 100px OR if on mobile/tablet (< 1280px) where navbar CTA is hidden
            if (window.scrollY > 100 || window.innerWidth < 1280) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Initial check
        toggleVisibility();

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('resize', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('resize', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex items-center justify-end">
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        layout
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={onOpenModal}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        className="group flex flex-row-reverse items-center bg-brand-red text-white shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] rounded-full overflow-hidden h-[4.5rem] border-2 border-transparent hover:border-white/20 transition-all duration-300"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        {/* Icon Container - Pinned to the right via flex-row-reverse */}
                        <motion.div
                            layout
                            className="flex h-[4.5rem] w-[4.5rem] items-center justify-center shrink-0 bg-brand-red relative z-10"
                        >
                            <CalendarCheck className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>

                        {/* Text Content - Expands left */}
                        <motion.div
                            layout
                            className="flex items-center overflow-hidden h-full bg-brand-red whitespace-nowrap"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-sm font-bold uppercase tracking-wider text-white font-header pl-6 pr-2">
                                Looking for a dependable partner for your project?
                            </span>
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
