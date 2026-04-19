import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight, ChevronRight, X } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';

type ChartItem = {
    title: string;
    relativePath: string;
    urlPath: string;
    sizeBytes: number;
};

function formatBytes(bytes: number) {
    if (!Number.isFinite(bytes) || bytes <= 0) return '';
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex += 1;
    }
    return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

export default function Resources() {
    const apiBaseUrl = useMemo(() => {
        return (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:4000';
    }, []);

    const [items, setItems] = useState<ChartItem[]>([]);
    const [loadError, setLoadError] = useState<string | null>(null);

    const [selected, setSelected] = useState<ChartItem | null>(null);
    const [formState, setFormState] = useState({ name: '', email: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitOk, setSubmitOk] = useState(false);

    useEffect(() => {
        let isCancelled = false;

        const run = async () => {
            try {
                setLoadError(null);
                const res = await fetch(`${apiBaseUrl}/api/charts`);
                if (!res.ok) throw new Error(`Failed to load charts (${res.status})`);
                const data = await res.json();
                const nextItems = Array.isArray(data?.items) ? data.items : [];
                if (!isCancelled) setItems(nextItems);
            } catch (err: any) {
                if (!isCancelled) setLoadError(err?.message || 'Failed to load charts');
            }
        };

        run();
        return () => {
            isCancelled = true;
        };
    }, [apiBaseUrl]);

    useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selected]);

    const openModal = (item: ChartItem) => {
        setSelected(item);
        setFormState({ name: '', email: '', phone: '' });
        setIsSubmitting(false);
        setSubmitError(null);
        setSubmitOk(false);
    };

    const closeModal = () => {
        setSelected(null);
    };

    const submitRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selected) return;

        try {
            setIsSubmitting(true);
            setSubmitError(null);
            setSubmitOk(false);

            const res = await fetch(`${apiBaseUrl}/api/charts/request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    phone: formState.phone,
                    relativePath: selected.relativePath,
                }),
            });

            if (!res.ok) {
                const text = await res.text().catch(() => '');
                throw new Error(text || `Request failed (${res.status})`);
            }

            const data = await res.json().catch(() => null);
            if (data && data.ok && data.emailSent === false) {
                throw new Error(data.emailError || 'Saved, but failed to send email');
            }

            setSubmitOk(true);
        } catch (err: any) {
            setSubmitError(err?.message || 'Failed to send email');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        className="text-4xl md:text-6xl font-bold uppercase font-header text-white mb-6"
                    >
                        Brochures & <span className="text-brand-red">Resources</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 font-medium">
                        Technical specifications and company information at your fingertips.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 lg:py-24">

                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-industrial-blue text-xs font-bold uppercase tracking-widest mb-4">Downloads</h2>
                        <h3 className="text-3xl font-bold uppercase font-header text-dark-slate">
                            Technical <span className="text-industrial-blue">Library</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                        {loadError ? (
                            <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
                                {loadError}
                            </div>
                        ) : null}

                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <button
                                    type="button"
                                    onClick={() => openModal(item)}
                                    className="w-full text-left bg-gray-50 hover:bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-red hover:shadow-lg transition-all duration-300 flex items-center gap-4 cursor-pointer"
                                >
                                    <div className="bg-white group-hover:bg-brand-red p-4 rounded-lg shadow-sm border border-gray-100 transition-colors duration-300">
                                        <FileText className="h-6 w-6 text-industrial-blue" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-dark-slate group-hover:text-industrial-blue transition-colors text-lg mb-1">{item.title}</h4>
                                        <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                                            PDF {formatBytes(item.sizeBytes) ? `• ${formatBytes(item.sizeBytes)}` : ''}
                                        </p>
                                    </div>
                                    <div className="bg-gray-200 group-hover:bg-industrial-blue p-2 rounded-full transition-colors duration-300">
                                        <Download className="h-4 w-4 text-gray-500 group-hover:text-white" />
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Custom Solution CTA */}
                    <div className="bg-industrial-blue rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-2xl md:text-4xl font-bold uppercase font-header text-white mb-6">
                                Need More Details or a <span className="text-brand-red">Customized Solution?</span>
                            </h3>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                Our engineering team can provide specific load charts, lift plans, and technical advice tailored to your project requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button
                                    onClick={() => document.getElementById('plan-lift-btn')?.click()}
                                    className="bg-brand-red text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
                                >
                                    Contact Engineering <ChevronRight className="h-5 w-5" />
                                </button>
                                <a
                                    href="/contact"
                                    className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-industrial-blue transition-colors flex items-center justify-center gap-2"
                                >
                                    Get in Touch <ArrowRight className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {selected ? (
                <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={closeModal}
                    />
                    <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Download</p>
                                <h3 className="text-xl font-bold uppercase font-header text-dark-slate">
                                    {selected.title}
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={submitRequest} className="p-6 space-y-4">
                            <p className="text-sm text-gray-600">
                                Enter your details and we’ll email you the PDF.
                            </p>

                            {submitError ? (
                                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                                    {submitError}
                                </div>
                            ) : null}

                            {submitOk ? (
                                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                                    Sent! Please check your email inbox (and spam folder).
                                </div>
                            ) : null}

                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-600">Name</label>
                                <input
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                                    className="w-full bg-gray-100 border-b-2 border-transparent focus:border-industrial-blue px-4 py-3 outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-600">Email</label>
                                <input
                                    required
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                                    className="w-full bg-gray-100 border-b-2 border-transparent focus:border-industrial-blue px-4 py-3 outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-600">Phone</label>
                                <input
                                    required
                                    value={formState.phone}
                                    onChange={(e) => setFormState((p) => ({ ...p, phone: e.target.value }))}
                                    className="w-full bg-gray-100 border-b-2 border-transparent focus:border-industrial-blue px-4 py-3 outline-none transition-colors"
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 border border-gray-300 px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-50 transition-colors rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-industrial-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-blue-900 transition-colors rounded-lg disabled:opacity-60"
                                >
                                    {isSubmitting ? 'Sending…' : 'Email Me'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
