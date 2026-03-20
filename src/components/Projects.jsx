import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "Chrono24 Web Clone",
        desc: "Chrono24 is a website which sells the Luxuarious Watches.",
        tech: ["HTML", "CSS", "JS", "Figma"],
        github: "https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/web1",
        image: "https://placehold.co/600x400/png"
    },
    {
        title: "AI Image Generator",
        desc: "Integrated OpenAI DALL-E API to generate unique images based on text prompts with community sharing.",
        tech: ["MERN", "OpenAI API", "Tailwind"],
        github: "#",
        image: "https://placehold.co/600x400/png"
    },
    {
        title: "Real-time Chat App",
        desc: "Socket.io based chat application supporting private messaging, rooms, and file sharing.",
        tech: ["Socket.io", "React", "Express"],
        github: "#",
        image: "https://placehold.co/600x400/png"
    },
    {
        title: "Crypto Tracker",
        desc: "Live cryptocurrency storage tracking application using CoinGecko API with historical charts.",
        tech: ["Next.js", "Chart.js", "API"],
        github: "#",
        image: "https://placehold.co/600x400/png"
    },
    {
        title: "Portfolio v1",
        desc: "My previous personal portfolio website built with HTML, SCSS and Vanilla JavaScript.",
        tech: ["HTML", "SCSS", "JS"],
        github: "#",
        image: "https://placehold.co/600x400/png"
    },
    {
        title: "Task Management Tool",
        desc: "Kanban style task management app with drag and drop functionality and local storage persistence.",
        tech: ["React", "dnd-kit", "Zustand"],
        github: "#",
        image: "https://placehold.co/600x400/png"
    },

];

const Projects = () => {
    return (
        <section className="relative min-h-screen py-20 overflow-hidden bg-transparent text-white">

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Some of the projects I've built to demonstrate my skills in frontend and full-stack development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-accent transition-all duration-300"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 w-full relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] gap-4">
                                    <a href={project.github} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><FaGithub size={20} /></a>
                                    <button className="p-3 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"><FaExternalLinkAlt size={18} /></button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-800 rounded-md text-gray-300 border border-gray-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors border-b border-accent hover:border-white pb-1">
                        View more on GitHub <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
