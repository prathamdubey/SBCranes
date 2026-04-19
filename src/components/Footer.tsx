
import { Link } from 'react-router-dom';
import { Download, Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import textureBg from '../assets/images/texture_bg.png';

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-[#020617] pt-24 text-white overflow-hidden border-t border-white/5">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-industrial-blue/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen opacity-50"></div>
            
            {/* Huge Watermark Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black italic text-white/[0.02] pointer-events-none select-none z-0 whitespace-nowrap overflow-hidden">
                SB CRANES
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Column 1: Logo & Mission */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-4xl font-black uppercase tracking-tighter text-white font-header">SB Cranes</h2>
                            <div className="h-3 w-3 bg-brand-red rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
                        </div>
                        <p className="mb-8 text-gray-400 leading-relaxed max-w-xs text-sm border-l-2 border-brand-red/50 pl-4 py-1">
                            Engineered lifting and transport solutions designed for absolute precision and uncompromising safety.
                        </p>
                        <div className="flex gap-4">
                            {/* Socials */}
                            <a href="#" className="group flex h-12 w-12 items-center justify-center bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 rounded-lg"><Facebook className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" /></a>
                            <a href="#" className="group flex h-12 w-12 items-center justify-center bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 rounded-lg"><Instagram className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex h-12 w-12 items-center justify-center bg-white/5 hover:bg-[#0A66C2] border border-white/10 hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] transition-all duration-300 rounded-lg"><Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-brand-red">Quick Links</h3>
                        <ul className="space-y-4 text-sm font-medium text-gray-300">
                            <li><Link to="/fleet" className="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition-all">Equipment Fleet</Link></li>
                            <li><Link to="/projects" className="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition-all">Featured Projects</Link></li>
                            <li><Link to="/about" className="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition-all">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition-all">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white hover:underline decoration-brand-red underline-offset-4 transition-all">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div>
                        <h3 className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 inline-block">Contact Us</h3>
                        <ul className="space-y-6 text-sm text-gray-400">
                            <li className="flex gap-4 group cursor-default">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-brand-red/10 transition-colors shrink-0">
                                    <MapPin className="h-5 w-5 text-brand-red" />
                                </div>
                                <span className="font-medium group-hover:text-white transition-colors pt-2">SHED NO-10 DSIDC, Okhla<br />Phase-1, New Delhi - 110020</span>
                            </li>
                            <li className="flex gap-4 group cursor-default">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-brand-red/10 transition-colors shrink-0">
                                    <Phone className="h-5 w-5 text-brand-red" />
                                </div>
                                <div className="font-medium group-hover:text-white transition-colors pt-1">
                                    <p className="mb-1">+91 98111 40311</p>
                                    <p>+91 98114 64927</p>
                                </div>
                            </li>
                            <li className="flex gap-4 group cursor-default">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-brand-red/10 transition-colors shrink-0">
                                    <Mail className="h-5 w-5 text-brand-red" />
                                </div>
                                <div className="font-medium group-hover:text-white transition-colors pt-1">
                                    <p className="mb-1">info@sbcranes.in</p>
                                    <p>sbcranes25@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Brochure CTA - Upgraded Card */}
                    <div className="bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-3xl group">
                        <div className="bg-[#0f172a]/80 backdrop-blur-xl p-8 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10">
                                <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter text-white font-header leading-tight">Company<br/>Profile</h3>
                                <div className="w-12 h-1 bg-brand-red mb-6"></div>
                                <p className="mb-8 text-gray-400 text-sm font-medium">
                                    Get our detailed equipment specification guide and safety certifications.
                                </p>
                            </div>
                            
                            <Link to="/resources" className="relative z-10 flex w-full items-center justify-center gap-3 bg-brand-red hover:bg-[#ff3b3b] shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] px-6 py-4 rounded-xl text-sm font-black uppercase tracking-widest text-white transition-all duration-300">
                                <Download className="h-5 w-5" />
                                Download PDF
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Office Map */}
                <div className="py-14 border-b border-white/10">
                    <div className="flex items-center justify-between gap-6 mb-6 flex-col sm:flex-row">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            Office Location
                        </h3>
                        <a
                            className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                            href="https://www.google.com/maps?q=28.5253889,77.2835278"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open in Google Maps
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <iframe
                            title="SB Cranes office location"
                            src="https://www.google.com/maps?q=28.5253889,77.2835278&z=16&output=embed"
                            className="w-full h-72 md:h-80"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 text-center text-xs font-bold uppercase tracking-widest text-gray-600 sm:text-left flex flex-col sm:flex-row justify-between items-center">
                    <p>&copy; 2026 SB Cranes. Heavy Lifting Solutions.</p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
