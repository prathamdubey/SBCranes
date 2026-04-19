import { Clock, ShieldCheck, Link, IndianRupee, Settings, MapPin } from 'lucide-react';

export default function BenefitsGrid() {
    const benefits = [
        {
            icon: <Clock className="h-10 w-10" />,
            title: "On-Time Project Progress",
            description: "Keep your project on schedule with efficient, reliable execution."
        },
        {
            icon: <ShieldCheck className="h-10 w-10" />,
            title: "Reduced Risk & Safer Operations",
            description: "Minimize safety risks and protect valuable assets."
        },
        {
            icon: <Link className="h-10 w-10" />,
            title: "Single Point Accountability",
            description: " One trusted partner from planning to completion."
        },
        {
            icon: <IndianRupee className="h-10 w-10" />,
            title: "Cost Control & Predictability",
            description: "Avoid delays and unexpected costs."
        },
        {
            icon: <Settings className="h-10 w-10" />,
            title: "Confidence in Complex Situations",
            description: "Expert teams for critical operations."
        },
        {
            icon: <MapPin className="h-10 w-10" />,
            title: "Scalable Support Across India",
            description: "Consistent service wherever you are."
        }
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold uppercase tracking-tight font-header md:text-3xl text-dark-slate">
                        THE BENEFITS OF WORKING WITH  <span className="text-industrial-blue">SB Cranes?</span>
                    </h2>
                    <p className="mt-2 text-base text-gray-600">
                        What our clients gain from partnering with an experienced lifting and transport provider.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-start justify-between bg-white p-5 rounded-xl transition-all duration-300 hover:bg-dark-slate border border-gray-100 border-b-4 border-b-industrial-blue hover:border-b-brand-red hover:-translate-y-1 shadow-lg hover:shadow-2xl h-auto min-h-[200px]"
                        >
                            {/* Icon */}
                            <div className="text-industrial-blue group-hover:text-brand-red transition-colors duration-300 mb-4">
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-sm sm:text-lg font-bold uppercase text-dark-slate group-hover:text-white font-header mb-2 transition-colors duration-300 leading-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-300 font-medium leading-relaxed transition-colors duration-300 block">
                                    {benefit.description}
                                </p>
                            </div>

                            {/* Large Background Number */}
                            <div
                                className="absolute -bottom-4 -right-2 text-5xl sm:text-6xl font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none pointer-events-none"
                                style={{
                                    WebkitTextStroke: '1px currentColor',
                                    WebkitTextFillColor: 'transparent',
                                    color: 'gray'
                                }}
                            >
                                <span className="group-hover:text-white text-gray-400 transition-colors duration-300">
                                    0{index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
