import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronRight, Truck, Cog, Anchor, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';
import crawlerImg from '../assets/images/crawler_crane.png';

interface SpecCategory {
    id: string;
    label: string;
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    capacityData: { category: string; capacity: string }[];
    image: string;
    isContainInfo?: boolean;
}

const specCategories: SpecCategory[] = [
    {
        id: 'mobile',
        label: 'Mobile Cranes',
        icon: Truck,
        title: 'Mobile Cranes',
        description: 'Our mobile crane fleet is designed for rapid mobilization, flexibility, and high-performance lifting across varied terrains. These cranes are ideal for infrastructure, industrial, and time-sensitive projects requiring quick setup and reliable performance.',
        features: [
            'Road-legal mobility',
            'Quick setup and dismantling',
            'Suitable for urban and remote locations',
            'Compatible with jibs and luffing attachments',
            'Ideal for time-critical operations'
        ],
        capacityData: [
            { category: 'Light to Medium Duty', capacity: '60 - 220' },
            { category: 'Heavy Duty', capacity: '250 - 360' },
            { category: 'Ultra Heavy Duty', capacity: '400 - 800' }
        ],
        image: heroBg
    },
    {
        id: 'crawler',
        label: 'Crawler Cranes',
        icon: Cog,
        title: 'Crawler Cranes',
        description: 'Designed to operate on crawler tracks, these cranes offer superior stability and load-handling capability, making them ideal for heavy industrial, power, refinery, and infrastructure projects. Unlike mobile cranes, crawler cranes are suited for continuous lifting operations, movement with load, and work on uneven or soft ground conditions where maximum stability is required.',
        features: [
            'Designed for heavy and critical lifts',
            'Operates efficiently on uneven or soft terrain',
            'Ideal for long-term project deployment',
            'Capable of lifting and moving heavy loads simultaneously',
            'Preferred for power plants, refineries, and large infrastructure projects'
        ],
        capacityData: [
            { category: 'Light to Medium Duty', capacity: '60 - 220' },
            { category: 'Heavy Duty', capacity: '250 - 360' },
            { category: 'Ultra Heavy Duty', capacity: '400 - 800' }
        ],
        image: crawlerImg,
        isContainInfo: true
    },
    {
        id: 'trailer',
        label: 'Trailers',
        icon: Anchor,
        title: 'Trailers',
        description: 'Our trailer fleet is designed to support safe, efficient, and controlled transportation of heavy, oversized, and project cargo across short and long distances. These trailers play a critical role in project logistics, enabling the movement of heavy equipment, crane components, and industrial machinery to and from project sites.',
        features: [
            'Transportation of crane components',
            'Movement of heavy machinery and equipment',
            'ODC (Over Dimensional Cargo) transport',
            'Plant shutdown and relocation support',
            'Infrastructure and industrial project logistics'
        ],
        capacityData: [], // Custom handling for trailers
        image: heroBg
    }
];

export default function SpecSheet() {
    const { search } = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(search);
    const categoryParam = queryParams.get('cat');
    const activeTab = categoryParam && specCategories.find(c => c.id === categoryParam) ? categoryParam : 'mobile';

    const handleTabChange = (categoryId: string) => {
        navigate(`/specs?cat=${categoryId}`, { replace: true });
    };

    const activeCategory = specCategories.find(c => c.id === activeTab) || specCategories[0];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-dark-slate flex-shrink-0">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="absolute inset-0 bg-linear-to-t from-dark-slate to-transparent"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold uppercase font-header text-white mb-4"
                    >
                        Technical <span className="text-brand-red">Specifications</span>
                    </motion.h1>
                    <p className="text-lg text-gray-300 font-medium">
                        Detailed capabilities and load charts.
                    </p>
                </div>
            </section>

            <div className="flex-grow container mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start h-full">

                    {/* Sticky Sidebar Navigation - Identical to Services.tsx pattern */}
                    <aside className="sticky top-28 z-30 w-full lg:w-72 flex-shrink-0 self-start">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300">
                            <div className="bg-industrial-blue p-4">
                                <h3 className="text-white font-bold uppercase tracking-widest text-sm font-header">Select Equipment</h3>
                            </div>
                            <nav className="flex flex-col">
                                {specCategories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleTabChange(cat.id)}
                                        className={`group flex items-center justify-between p-4 border-l-4 transition-all duration-200 text-left relative
                                            ${activeTab === cat.id
                                                ? 'bg-blue-50 border-brand-red text-industrial-blue font-bold shadow-inner'
                                                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-industrial-blue hover:border-gray-200'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <cat.icon className={`h-5 w-5 flex-shrink-0 ${activeTab === cat.id ? 'text-brand-red' : 'text-gray-400'}`} />
                                            <span className="uppercase text-sm tracking-tight">{cat.label}</span>
                                        </div>
                                        {activeTab === cat.id && (
                                            <ChevronRight className="h-4 w-4 text-brand-red" />
                                        )}
                                    </button>
                                ))}
                            </nav>
                            <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                                <a href="/resources" className="inline-flex items-center justify-center gap-2 w-full bg-industrial-blue text-white px-4 py-3 font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors rounded-sm">
                                    <Download className="h-4 w-4" />
                                    Download All
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 w-full min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                {/* Active Content Header Image */}
                                <div className="relative h-64 md:h-80">
                                    <div className={`absolute inset-0 bg-cover bg-center ${activeCategory.isContainInfo ? 'bg-contain bg-no-repeat bg-gray-100' : ''}`} style={{ backgroundImage: `url(${activeCategory.image})` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/90 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 md:left-10 z-10">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-brand-red p-2 rounded-lg">
                                                <activeCategory.icon className="h-6 w-6 text-black" />
                                            </div>
                                            <h2 className="text-2xl md:text-4xl font-bold uppercase text-white font-header">
                                                {activeCategory.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-10 space-y-10">
                                    {/* Description */}
                                    <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-brand-red pl-6">
                                        {activeCategory.description}
                                    </p>

                                    {/* Features Grid */}
                                    <div>
                                        <h3 className="text-sm font-bold uppercase text-industrial-blue tracking-widest mb-6 border-b border-gray-200 pb-2">Key Features</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeCategory.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-dark-slate font-medium">
                                                    <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Capacity Table (if exists) */}
                                    {activeCategory.capacityData.length > 0 ? (
                                        <div>
                                            <h3 className="text-sm font-bold uppercase text-industrial-blue tracking-widest mb-6 border-b border-gray-200 pb-2">Load Capacity</h3>
                                            <div className="overflow-hidden rounded-lg border border-gray-200">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="bg-gray-50 text-industrial-blue">
                                                        <tr>
                                                            <th className="py-4 px-6 font-bold uppercase tracking-wider w-1/2">Category</th>
                                                            <th className="py-4 px-6 font-bold uppercase tracking-wider w-1/2">Capacity (MT)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100">
                                                        {activeCategory.capacityData.map((row, i) => (
                                                            <tr key={i} className="hover:bg-gray-50/50">
                                                                <td className="py-4 px-6 font-bold text-dark-slate uppercase text-xs tracking-wide">{row.category}</td>
                                                                <td className="py-4 px-6 font-medium text-gray-600">{row.capacity}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ) : (
                                        // Special content for Trailers or others without standard table
                                        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                                            <h4 className="text-xl font-bold uppercase text-red-700 leading-tight mb-2">
                                                Specialized Heavy Logistics
                                            </h4>
                                            <p className="text-red-900/80">
                                                Engineered for over-dimensional cargo, plant relocations, and extreme weight transport. Contact our engineering team for specific axle configurations.
                                            </p>
                                        </div>
                                    )}

                                    {/* Detailed CTA */}
                                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                                        <h4 className="text-dark-slate font-bold uppercase tracking-wider mb-2">Need specific load charts for {activeCategory.title}?</h4>
                                        <p className="text-gray-500 mb-6 text-sm">Download our comprehensive fleet brochure for detailed diagrams and working ranges.</p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a href="/resources" className="inline-flex items-center justify-center gap-2 bg-industrial-blue text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-sm">
                                                <Download className="h-4 w-4" />
                                                Download Brochure
                                            </a>
                                            <button
                                                onClick={() => document.getElementById('plan-lift-btn')?.click()}
                                                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-red-500 transition-colors rounded-sm"
                                            >
                                                Enquire Now
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </div>
    );
}
