import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiFigma, SiVercel, SiNetlify } from 'react-icons/si';

const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
            { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-white" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
            { name: "REST API", icon: <span className="text-xs font-bold ring-2 ring-white rounded p-1">API</span> },
        ]
    },
    {
        category: "Tools & Others",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
            { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
        ]
    }
];

const Skills = () => {
    return (
        <section className="relative min-h-screen py-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    Skills & <span className="text-accent">Tooling</span>
                </motion.h2>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left: Journey Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <h3 className="text-2xl font-semibold border-l-4 border-accent pl-4">My Journey</h3>
                        <div className="space-y-8 pl-4 border-l border-gray-800 ml-0.5">
                            <TimelineItem
                                title="Frontend Development"
                                year="Start"
                                desc="Started with HTML, CSS, and JS. Mastered responsive design and modern UI principles."
                            />
                            <TimelineItem
                                title="React Ecosystem"
                                year="Growth"
                                desc="Deep dived into React, state management, and component-based architecture."
                            />
                            <TimelineItem
                                title="Full Stack"
                                year="Current"
                                desc="Expanding into backend with Node.js and database management."
                            />
                        </div>
                    </motion.div>

                    {/* Right: Skills Grid */}
                    <div className="lg:col-span-2 space-y-12">
                        {skillsData.map((group, groupIndex) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                            >
                                <h3 className="text-xl text-gray-400 mb-6">{group.category}</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                    {group.skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-[#0c0c0c] border border-gray-800 rounded p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 group cursor-default hover:border-[#a3ff00]"
                                        >
                                            <div className="text-4xl group-hover:animate-pulse transition-all duration-300 transform group-hover:-translate-y-1">
                                                {skill.icon}
                                            </div>
                                            <span className="font-medium text-gray-300 group-hover:text-white">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ title, year, desc }) => (
    <div className="relative pl-6">
        <span className="absolute -left-[25px] top-1 w-4 h-4 bg-accent border-4 border-black" />
        <span className="text-purple-400 text-sm font-mono mb-1 block">{year}</span>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default Skills;
