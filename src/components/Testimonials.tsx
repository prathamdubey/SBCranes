import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            text: "SB Cranes handled our refinery expansion with absolute precision. Their engineering team planned every lift, and the execution was flawless.",
            author: "Rajesh Kumar",
            role: "Project Director, Major EPC",
            rating: 5
        },
        {
            text: "We needed a 600MT crawler crane on short notice for a bridge erection. SB Cranes mobilized within 48 hours. Exceptional service.",
            author: "Amit Singh",
            role: "Site Manager, Infrastructure Ltd",
            rating: 5
        },
        {
            text: "Reliability is key for us. SB Cranes has been our partner for 5 years, and their equipment uptime is unmatched in the industry.",
            author: "Vikram Mehta",
            role: "Logistics Head, Wind Power Co",
            rating: 5
        }
    ];

    return (
        <section className="bg-steel-grey py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-dark-slate font-header md:text-4xl">
                        Testimonials
                    </h2>
                    <div className="mt-4 h-1 w-24 bg-industrial-blue mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="relative flex flex-col justify-between bg-white p-8 shadow-lg rounded-xl border-t-4 border-industrial-blue">
                            <Quote className="absolute top-4 right-4 h-12 w-12 text-gray-100 rotate-180" />

                            <div className="flex mb-4 text-brand-red">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>

                            <p className="mb-6 text-gray-600 italic leading-relaxed z-10 relative">
                                "{testimonial.text}"
                            </p>

                            <div className="mt-auto flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-industrial-blue flex items-center justify-center text-white font-bold text-xl font-header">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-dark-slate uppercase tracking-wide text-sm">{testimonial.author}</div>
                                    <div className="text-xs text-gray-500 font-medium">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
