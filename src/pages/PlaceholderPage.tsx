import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PlaceholderPage() {
    const location = useLocation();
    const title = location.pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') || 'Page Under Construction';

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-steel-grey px-4 text-center">
            <h1 className="mb-4 text-6xl font-bold uppercase text-industrial-blue font-header opacity-20">Coming Soon</h1>
            <h2 className="mb-8 text-4xl font-bold uppercase text-dark-slate font-header">{title}</h2>
            <p className="mb-8 max-w-md text-lg text-gray-600">
                We are currently building this section to serve you better. Check back soon for updates.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 rounded-none bg-brand-red px-8 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-500 transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>
        </div>
    );
}
