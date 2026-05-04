
const refineryImg = '/updated_images/refinery.png';
const stadiumImg = '/updated_images/stadium.png';
const windImg = '/updated_images/wind-farm.jpg';
import { Link } from 'react-router-dom';
const towerCraneImg = '/updated_images/tower-crane.jpg';

export default function ProjectGallery() {
    const projects = [
        {
            id: 1,
            slug: "hmel-refinery",
            title: "HMEL Refinery",
            category: "Oil & Gas",

            image: refineryImg,
            description: "SB Cranes provided long-term mobile crane support at HMEL Refinery for routine maintenance, shutdown activities, and equipment handling across multiple process units.",
            desktopClasses: "md:col-span-2 md:row-span-2",
            mobileOrder: "left"
        },
        {
            id: 2,
            slug: "stadium-roof-lift",
            title: "Stadium Roof Lift",
            category: "Infrastructure",
            image: stadiumImg,
            description: "SB Cranes was engaged for heavy lifting and crane support during the redevelopment works at JLN Stadium, involving the handling and placement of large structural components.",
            desktopClasses: "md:col-span-2",
            mobileOrder: "right"
        },
        {
            id: 3,
            slug: "wind-farm-logistics",
            title: "Wind Farm Logistics",
            category: "Wind Energy",
            image: windImg,
            description: "Comprehensive logistics and lifting solutions for wind energy projects, ensuring safe and efficient turbine erection.",
            desktopClasses: "",
            mobileOrder: "left"
        },
        {
            id: 4,
            slug: "tower-crane-erection",
            title: "Tower Crane Erection",
            category: "Construction",
            image: towerCraneImg,
            description: "Installation of a T-type tower crane at a congested urban site in Gurgaon.",
            desktopClasses: "",
            mobileOrder: "right"
        }
    ];

    return (
        <section id="projects" className="bg-[#08111f] py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <span className="mb-3 block text-xs font-black uppercase tracking-[0.24em] text-brand-red">SB Cranes Portfolio</span>
                        <h2 className="text-4xl font-black uppercase tracking-tight text-white font-header md:text-6xl">
                            Our <span className="text-brand-red">Projects</span>
                        </h2>
                        <div className="mt-2 h-1 w-24 bg-industrial-blue"></div>
                    </div>
                </div>

                {/* Mobile View: Zig-Zag List */}
                <div className="flex flex-col gap-6 md:hidden">
                    {projects.map((project, index) => (
                        <Link
                            to={`/project/${project.slug}`}
                            key={project.id}
                            className="group flex items-stretch overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-lg transition-all duration-300 hover:border-brand-red hover:bg-white/[0.09]"
                        >
                            {/* Image - Conditional Order */}
                            <div className={`w-32 h-auto flex-shrink-0 bg-cover bg-center ${index % 2 === 1 ? 'order-2' : 'order-1'}`} style={{ backgroundImage: `url('${project.image}')` }}></div>

                            {/* Content - Conditional Order */}
                            <div className={`p-4 flex flex-col justify-center flex-1 ${index % 2 === 1 ? 'order-1 text-right' : 'order-2 text-left'}`}>
                                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-red mb-1">{project.category}</span>
                                <h3 className="text-lg font-black uppercase text-white font-header leading-tight mb-2 tracking-tight group-hover:text-brand-red transition-colors">{project.title}</h3>
                                <div className="h-0.5 w-8 bg-gray-600 mb-2 group-hover:bg-brand-red transition-colors inline-block"></div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Desktop View: Bento Grid */}
                <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    {projects.map((project) => (
                        <Link
                            to={`/project/${project.slug}`}
                            key={project.id}
                            className={`group relative overflow-hidden rounded-lg bg-gray-800 block shadow-xl ring-1 ring-white/10 ${project.desktopClasses}`}
                        >
                            <div className="absolute inset-0 bg-cover bg-center brightness-[1.12] transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${project.image}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-80 transition-opacity group-hover:opacity-70"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-brand-red">{project.category}</span>
                                <h3 className={`font-black uppercase tracking-tight text-white font-header ${project.desktopClasses.includes('span-2') ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}>{project.title}</h3>
                                {project.description && (
                                    <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-gray-200 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 line-clamp-3">
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
