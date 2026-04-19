import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Send, MapPin, Clock, ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';

const openings: { title: string; location: string; type: string; experience: string; description: string }[] = [];

export default function Careers() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-dark-slate">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="absolute inset-0 bg-linear-to-t from-dark-slate via-dark-slate/50 to-transparent"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold uppercase font-header text-white mb-6 tracking-tight">
                            Build Your <span className="text-brand-red">Legacy</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                            Join the team that's lifting the future of India's infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-3/5 space-y-16">

                        {/* Why Work With Us */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-brand-red"></div>
                                <h2 className="text-industrial-blue text-sm font-bold uppercase tracking-widest">Why SB Cranes?</h2>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase font-header text-dark-slate mb-8 leading-tight">
                                More Than Just <span className="text-industrial-blue">Heavy Lifting</span>
                            </h3>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    At SB Cranes, we don't just operate machines; we engineer solutions. Our team is our greatest asset, and we invest heavily in training, safety, and career progression.
                                </p>
                                <p>
                                    We offer a professional environment where merit is rewarded and safety is never compromised. Whether you're in the cab of a 500-ton crane or managing logistics in the office, your contribution matters.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                                {[
                                    'Industry Leading Pay',
                                    'Health & Safety Focus',
                                    'Latest Equipment',
                                    'Career Advancement',
                                    'Pan-India Projects',
                                    'Skill Certification'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0" />
                                        <span className="text-dark-slate font-bold uppercase text-sm tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Current Openings */}
                        <div id="openings">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-brand-red"></div>
                                <h2 className="text-industrial-blue text-sm font-bold uppercase tracking-widest">Current Opportunities</h2>
                            </div>
                            <h3 className="text-3xl font-bold uppercase font-header text-dark-slate mb-8">
                                Open <span className="text-industrial-blue">Positions</span>
                            </h3>

                            {openings.length > 0 ? (
                                <div className="space-y-4">
                                    {openings.map((job, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group bg-gray-50 border border-gray-100 p-6 hover:border-brand-red transition-all duration-300 rounded-lg hover:shadow-md"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div>
                                                    <h4 className="text-xl font-bold text-dark-slate font-header uppercase mb-2 group-hover:text-industrial-blue transition-colors">{job.title}</h4>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                                                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                                                        <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.type}</span>
                                                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.experience}</span>
                                                    </div>
                                                    <p className="text-gray-600 text-sm">{job.description}</p>
                                                </div>
                                                <div className="md:self-center">
                                                    <a href="#apply" className="inline-flex items-center gap-2 text-sm font-bold uppercase text-industrial-blue hover:text-brand-red transition-colors">
                                                        Apply Now <ArrowRight className="h-4 w-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-gray-50 border border-gray-100 p-8 rounded-lg text-center">
                                    <h4 className="text-xl font-bold text-dark-slate font-header uppercase mb-2">No Current Openings</h4>
                                    <p className="text-gray-600">We are not actively hiring for specific roles right now, but we are always looking for talented individuals. Please submit a general application below.</p>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Right Column: Application Form */}
                    <div className="w-full lg:w-2/5">
                        <div id="apply" className="bg-dark-slate text-white rounded-xl shadow-2xl p-8 lg:p-10 sticky top-28">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-brand-red p-3 rounded-full">
                                    <Briefcase className="h-6 w-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold uppercase font-header text-white">Join the Team</h3>
                                    <p className="text-gray-400 text-sm">Fill out the form below to apply.</p>
                                </div>
                            </div>

                            <form className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2">First Name</label>
                                        <input type="text" className="w-full bg-white/10 border border-white/10 text-white p-3 focus:outline-none focus:border-brand-red transition-colors rounded" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Last Name</label>
                                        <input type="text" className="w-full bg-white/10 border border-white/10 text-white p-3 focus:outline-none focus:border-brand-red transition-colors rounded" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-white/10 border border-white/10 text-white p-3 focus:outline-none focus:border-brand-red transition-colors rounded" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-white/10 border border-white/10 text-white p-3 focus:outline-none focus:border-brand-red transition-colors rounded" placeholder="+91 98765 43210" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Position</label>
                                    <select className="w-full bg-white/10 border border-white/10 text-white p-3 focus:outline-none focus:border-brand-red transition-colors rounded [&>option]:text-black">
                                        <option>Select a Position...</option>
                                        {openings.map((o, i) => <option key={i} value={o.title}>{o.title}</option>)}
                                        <option value="Other">Other / General Application</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Years of Experience</label>
                                    <input type="number" className="w-full bg-white/10 border border-white/10 text-white p-3 focus:outline-none focus:border-brand-red transition-colors rounded" placeholder="e.g. 5" />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="w-full bg-brand-red text-white font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 mt-2 rounded"
                                >
                                    Submit Application <Send className="h-4 w-4" />
                                </motion.button>
                                <p className="text-xs text-gray-500 text-center mt-4">We respect your privacy. Your data is safe with us.</p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
