import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo.png';

interface PlanYourLiftModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface CustomSelectProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const CustomSelect = ({ label, options, value, onChange, placeholder = "Select option" }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative space-y-1" ref={containerRef}>
            <label className="text-xs font-bold uppercase text-gray-600">{label}</label>
            <div
                className={`w-full bg-gray-100 border-b-2 cursor-pointer flex justify-between items-center px-4 py-3 transition-colors ${isOpen ? 'border-industrial-blue bg-white' : 'border-transparent hover:bg-gray-200'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={value ? 'text-dark-slate' : 'text-gray-400'}>
                    {value || placeholder}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto bg-white shadow-xl border border-gray-100 rounded-b-md"
                    >
                        {options.map((option) => (
                            <div
                                key={option}
                                className={`px-4 py-3 cursor-pointer hover:bg-gray-50 text-sm transition-colors ${value === option ? 'bg-blue-50 text-industrial-blue font-bold' : 'text-gray-700'}`}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function PlanYourLiftModal({ isOpen, onClose }: PlanYourLiftModalProps) {
    const [knowsEquipment, setKnowsEquipment] = useState<boolean | null>(null);
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        jobTitle: '',
        country: '',
        serviceType: '',
        address: '',
        equipment: '',
        message: ''
    });

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const apiBaseUrl =
                (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:4000';

            const res = await fetch(`${apiBaseUrl}/api/plan-lift`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formState,
                    knowsEquipment,
                }),
            });

            if (!res.ok) {
                const text = await res.text().catch(() => '');
                throw new Error(text || `Request failed (${res.status})`);
            }

            onClose();
            alert("Thank you! Our team will review your requirement and recommend the right solution.");
        } catch (err: any) {
            alert(err?.message || 'Failed to send request. Please try again.');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
                        style={{ pointerEvents: 'none' }} // Allow clicks to pass through wrapper to backdrop
                    >
                        <div
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl pointer-events-auto" // Re-enable pointer events
                        >
                            {/* Header */}
                            <div className="sticky top-0 z-10 flex items-center justify-between bg-industrial-blue px-6 py-4 text-white shadow-md border-b-4 border-brand-red">
                                <div className="flex flex-row items-center gap-5">
                                    <div className="h-14 w-14 bg-white flex items-center justify-center rounded shadow-inner">
                                        <img src={logo} alt="SB Cranes" className="w-12 h-12 object-contain" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight font-header">
                                            Plan Your Lift
                                        </h2>
                                        <p className="text-xs text-blue-200 mt-1 uppercase tracking-widest font-medium">Connect with our engineering team</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="rounded-full p-2 hover:bg-white/10 transition-colors"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Form Content */}
                            <div className="p-6 sm:p-8">
                                <p className="mb-8 text-sm uppercase tracking-wider text-gray-500 font-bold">
                                    Submit your requirement and our team will provide a tailored lifting solution.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase text-gray-600">First Name *</label>
                                            <input name="firstName" required className="w-full bg-gray-100 border-b-2 border-transparent focus:border-industrial-blue px-4 py-3 outline-none transition-colors" onChange={handleChange} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase text-gray-600">Last Name *</label>
                                            <input name="lastName" required className="w-full bg-gray-100 border-b-2 border-transparent focus:border-industrial-blue px-4 py-3 outline-none transition-colors" onChange={handleChange} />
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase text-gray-600">Phone</label>
                                            <input name="phone" type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 focus:bg-white focus:border-industrial-blue px-4 py-3 outline-none transition-colors" onChange={handleChange} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase text-gray-600">Email Address *</label>
                                            <input name="email" type="email" required className="w-full bg-gray-100 border-b-2 border-transparent focus:border-industrial-blue px-4 py-3 outline-none transition-colors" onChange={handleChange} />
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase text-gray-600">Company</label>
                                            <input name="company" className="w-full bg-gray-50 border-b-2 border-gray-200 focus:bg-white focus:border-industrial-blue px-4 py-3 outline-none transition-colors" onChange={handleChange} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase text-gray-600">Job Title</label>
                                            <input name="jobTitle" className="w-full bg-gray-50 border-b-2 border-gray-200 focus:bg-white focus:border-industrial-blue px-4 py-3 outline-none transition-colors" onChange={handleChange} />
                                        </div>
                                    </div>

                                    {/* Row 4: Custom Selects */}
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <CustomSelect
                                            label="Service Interest *"
                                            placeholder="Select Service"
                                            value={formState.serviceType}
                                            onChange={(val) => handleSelectChange('serviceType', val)}
                                            options={[
                                                'Mobile Crane Rental',
                                                'Crawler Crane Rental',
                                                'Heavy Lifting & Erection',
                                                'Shutdown Support',
                                                'Infrastructure Projects',
                                                'Heavy Cargo / ODC Transport',
                                                'Other / General Inquiry'
                                            ]}
                                        />
                                        <CustomSelect
                                            label="Country / Region *"
                                            placeholder="Select Country"
                                            value={formState.country}
                                            onChange={(val) => handleSelectChange('country', val)}
                                            options={['India', 'Middle East', 'Southeast Asia', 'Africa', 'Other']}
                                        />
                                    </div>

                                    {/* Row 5 */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase text-gray-600">Project Location / Site Address *</label>
                                        <input name="address" required className="w-full bg-gray-100 border-b-2 border-transparent focus:border-industrial-blue px-4 py-3 outline-none transition-colors" onChange={handleChange} />
                                    </div>

                                    {/* Equipment Question */}
                                    <div className="bg-steel-grey/30 p-6">
                                        <p className="mb-4 text-sm font-bold uppercase text-dark-slate">Do you know what type of equipment you need?</p>
                                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${knowsEquipment === true ? 'border-industrial-blue bg-industrial-blue' : 'border-gray-400 bg-white'}`}>
                                                    {knowsEquipment === true && <Check className="w-3 h-3 text-white" />}
                                                </div>
                                                <input type="radio" name="knowsEquipment" className="hidden" onChange={() => setKnowsEquipment(true)} />
                                                <span className="text-sm font-medium text-gray-700 group-hover:text-black">Yes, I do.</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <div className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${knowsEquipment === false ? 'border-industrial-blue bg-industrial-blue' : 'border-gray-400 bg-white'}`}>
                                                    {knowsEquipment === false && <Check className="w-3 h-3 text-white" />}
                                                </div>
                                                <input type="radio" name="knowsEquipment" className="hidden" onChange={() => setKnowsEquipment(false)} />
                                                <span className="text-sm font-medium text-gray-700 group-hover:text-black">No, please advise me.</span>
                                            </label>
                                        </div>

                                        <AnimatePresence>
                                            {knowsEquipment === true && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="space-y-1 pt-2">
                                                        <label className="text-xs font-bold uppercase text-gray-600">Equipment Details</label>
                                                        <input name="equipment" placeholder="e.g. 500T Mobile Crane" className="w-full bg-white border border-gray-300 focus:border-industrial-blue px-4 py-3 outline-none transition-colors" onChange={handleChange} />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase text-gray-600">Message / Additional Details</label>
                                        <textarea name="message" rows={4} className="w-full bg-gray-100 border-b-2 border-transparent focus:border-industrial-blue px-4 py-3 outline-none transition-colors resize-none" onChange={handleChange} />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-industrial-blue py-4 text-white font-bold uppercase tracking-widest hover:bg-blue-900 transition-colors shadow-lg"
                                    >
                                        Send Request
                                    </button>

                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
