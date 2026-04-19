
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 30, damping: 15 }); // Slower, heavier feel
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
}

export default function StatsStrip() {
    return (
        <section className="relative z-20 border-b border-white/10 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 divide-x divide-white/20 md:divide-x md:divide-y-0">
                    {/* Stat 1 */}
                    <div className="group flex flex-col items-center justify-center py-6 md:py-16 hover:bg-white/5 transition-colors duration-300">
                        <div className="text-3xl md:text-6xl font-bold font-header text-white group-hover:text-brand-red transition-colors">
                            <Counter value={100} suffix="+" />
                        </div>
                        <div className="mt-1 md:mt-2 text-[10px] md:text-sm font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors text-center">Cranes</div>
                    </div>
                    {/* Stat 2 */}
                    <div className="group flex flex-col items-center justify-center py-6 md:py-16 hover:bg-white/5 transition-colors duration-300">
                        <div className="text-3xl md:text-6xl font-bold font-header text-white group-hover:text-brand-red transition-colors">
                            <Counter value={1000} suffix="+" />
                        </div>
                        <div className="mt-1 md:mt-2 text-[10px] md:text-sm font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors text-center">Clients</div>
                    </div>
                    {/* Stat 3 */}
                    <div className="group flex flex-col items-center justify-center py-6 md:py-16 hover:bg-white/5 transition-colors duration-300">
                        <div className="text-3xl md:text-6xl font-bold font-header text-white group-hover:text-brand-red transition-colors">
                            <Counter value={40} suffix="+" />
                        </div>
                        <div className="mt-1 md:mt-2 text-[10px] md:text-sm font-medium uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors text-center">Years Exp.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
