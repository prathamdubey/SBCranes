import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

interface NavbarProps {
    onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Fleet', href: '/fleet' },
        { name: 'Our Projects', href: '/projects' },
        { name: 'Careers', href: '/careers' },
        { name: 'Resources', href: '/resources' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-industrial-blue/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-4'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="h-8 w-8 bg-white flex items-center justify-center font-bold text-white text-lg font-header">
                                <img src={logo} alt="" />
                            </div>
                            <span className="text-xl font-bold uppercase tracking-tighter text-white font-header group-hover:text-brand-red transition-colors">
                                SB <span className="text-brand-red group-hover:text-white transition-colors">Cranes</span>
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden xl:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-xs font-bold uppercase tracking-widest text-white/90 hover:text-brand-red transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={onOpenModal}
                                className="flex items-center gap-2 bg-brand-red px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white transition-colors"
                            >
                                <Phone className="h-3.5 w-3.5" />
                                Plan Your Lift
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="xl:hidden text-white hover:text-brand-red transition-colors"
                        >
                            <Menu className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-dark-slate xl:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col p-8 min-h-screen">
                            <div className="flex items-center justify-end mb-8">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:text-brand-red transition-colors"
                                >
                                    <X className="h-10 w-10" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-bold uppercase tracking-tighter text-white hover:text-brand-red transition-colors font-header border-b border-white/10 pb-4"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        onOpenModal();
                                    }}
                                    className="mt-4 flex w-full items-center justify-center gap-2 bg-brand-red px-6 py-4 text-lg font-bold uppercase tracking-widest text-white hover:bg-white transition-colors"
                                >
                                    <Phone className="h-5 w-5" />
                                    Plan Your Lift
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
