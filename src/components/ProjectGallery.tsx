
const refineryImg = '/updated_images/refinery_project.png';
const stadiumImg = '/updated_images/stadium_project.png';
const windImg = '/updated_images/wind-farm.jpg';
import { Link } from 'react-router-dom';
const towerCraneImg = '/updated_images/tower-crane.jpg';

export default function ProjectGallery() {
    const projects = [
        {
            id: 1,
            title: "HMEL Refinery",
            category: "Oil & Gas",

            image: refineryImg,
            description: "SB Cranes provided long-term mobile crane support at HMEL Refinery for routine maintenance, shutdown activities, and equipment handling across multiple process units.",
            desktopClasses: "md:col-span-2 md:row-span-2",
            mobileOrder: "left"
        },
        {
            id: 2,
            title: "Stadium Roof Lift",
            category: "Infrastructure",
            image: stadiumImg,
            description: "SB Cranes was engaged for heavy lifting and crane support during the redevelopment works at JLN Stadium, involving the handling and placement of large structural components.",
            desktopClasses: "md:col-span-2",
            mobileOrder: "right"
        },
        {
            id: 3,
            title: "Wind Farm Logistics",
            category: "Wind Energy",
            image: windImg,
            description: "Comprehensive logistics and lifting solutions for wind energy projects, ensuring safe and efficient turbine erection.",
            desktopClasses: "",
            mobileOrder: "left"
        },
        {
            id: 4,
            title: "Tower Crane Erection",
            category: "Construction",
            image: towerCraneImg,
            description: "Installation of a T-type tower crane at a congested urban site in Gurgaon.",
            desktopClasses: "",
            mobileOrder: "right"
        }
    ];

    return (
        <section id="projects" className="bg-dark-slate py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter text-white font-header md:text-5xl">
                            Our <span className="text-brand-red">Projects</span>
                        </h2>
                        <div className="mt-2 h-1 w-24 bg-industrial-blue"></div>
                    </div>
                </div>

                {/* Mobile View: Zig-Zag List */}
                <div className="flex flex-col gap-6 md:hidden">
                    {projects.map((project, index) => (
                        <Link
                            to="/projects"
                            key={project.id}
                            className="group flex items-stretch bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:border-brand-red transition-all duration-300"
                        >
                            {/* Image - Conditional Order */}
                            <div className={`w-32 h-auto flex-shrink-0 bg-cover bg-center ${index % 2 === 1 ? 'order-2' : 'order-1'}`} style={{ backgroundImage: `url('${project.image}')` }}></div>

                            {/* Content - Conditional Order */}
                            <div className={`p-4 flex flex-col justify-center flex-1 ${index % 2 === 1 ? 'order-1 text-right' : 'order-2 text-left'}`}>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-1">{project.category}</span>
                                <h3 className="text-lg font-bold uppercase text-white font-header leading-tight mb-2 group-hover:text-brand-red transition-colors">{project.title}</h3>
                                <div className="h-0.5 w-8 bg-gray-600 mb-2 group-hover:bg-brand-red transition-colors inline-block"></div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Desktop View: Bento Grid */}
                <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    {projects.map((project) => (
                        <Link
                            to="/projects"
                            key={project.id}
                            className={`group relative overflow-hidden bg-gray-800 block ${project.desktopClasses}`}
                        >
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${project.image}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-red">{project.category}</span>
                                <h3 className={`font-bold uppercase text-white font-header ${project.desktopClasses.includes('span-2') ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>{project.title}</h3>
                                {project.description && (
                                    <p className="mt-2 text-xs lg:text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
