import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-dark-slate">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="absolute inset-0 bg-linear-to-t from-dark-slate to-transparent"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold uppercase font-header text-white mb-6"
                    >
                        Contact <span className="text-brand-red">Us</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 font-medium">
                        Get in touch with our team for lifting solutions and support.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Column: Contact Info */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-12">
                            <h2 className="text-industrial-blue text-xs font-bold uppercase tracking-widest mb-4">Get In Touch</h2>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase font-header text-dark-slate mb-8">
                                Head Office <span className="text-industrial-blue">Details</span>
                            </h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shrink-0">
                                        <MapPin className="h-6 w-6 text-brand-red" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-dark-slate mb-2">Headquarters</h4>
                                        <p className="text-gray-600 leading-relaxed max-w-xs font-medium">
                                            SHED NO-10 DSIDC, Okhla Industrial Area,<br />Phase-1, New Delhi - 110020
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shrink-0">
                                        <Mail className="h-6 w-6 text-brand-red" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-dark-slate mb-2">Email Us</h4>
                                        <p className="text-gray-600">info@sbcranes.in</p>
                                        <p className="text-gray-600">sbcranes25@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shrink-0">
                                        <Phone className="h-6 w-6 text-brand-red" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-dark-slate mb-2">Call Us</h4>
                                        <p className="text-gray-600">+91 9811140311</p>
                                        <p className="text-gray-600">+91 9811464927</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        {/* Interactive Google Map */}
                        <div className="bg-gray-200 h-[300px] lg:h-[400px] rounded-2xl w-full overflow-hidden shadow-inner border border-gray-300 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.5032195712193!2d77.27852746959844!3d28.524769098482757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafe67984c7c2061f%3A0xccdbd1c73ed50ae0!2sSB%20CRANES!5e1!3m2!1sen!2sin!4v1774543304603!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                            ></iframe>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-md shadow-sm border border-gray-200 pointer-events-none">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-industrial-blue flex items-center gap-1">
                                    <MapPin className="h-3 w-3 text-brand-red" /> Locate Us
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
                            <h3 className="text-2xl font-bold uppercase font-header text-dark-slate mb-6">Send us a Message</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name</label>
                                        <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name</label>
                                        <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Subject</label>
                                    <select className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-red transition-colors">
                                        <option>General Enquiry</option>
                                        <option>Crane Rental Quote</option>
                                        <option>Project Partnership</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="button" className="w-full bg-industrial-blue text-white font-bold uppercase tracking-widest py-4 hover:bg-black transition-colors flex items-center justify-center gap-2 mt-4">
                                    Send Message <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
