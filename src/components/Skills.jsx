import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDocker, FaNpm,
    FaServer, FaShieldAlt, FaBolt, FaCloud, FaDesktop, FaCodeBranch
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiNextdotjs, SiRedis, SiCplusplus,
    SiExpress, SiMysql, SiPostman, SiVercel, SiNetlify, SiRender
} from 'react-icons/si';

const skillCategories = [
    { key: 'all', label: 'All Skills' },
    { key: 'languages', label: 'Languages' },
    { key: 'frameworks', label: 'Frameworks & Libraries' },
    { key: 'web', label: 'Web Tech' },
    { key: 'backend', label: 'Backend & DB' },
    { key: 'tools', label: 'Tools & Platforms' },
    { key: 'competencies', label: 'Core Competencies' },
];

const skillsData = [
    // Languages
    { name: 'JavaScript (ES6+)', category: 'languages', icon: <FaJs color="#F7DF1E" />, color: '#F7DF1E', level: 'Advanced' },
    { name: 'C++', category: 'languages', icon: <SiCplusplus color="#00599C" />, color: '#00599C', level: 'Intermediate' },

    // Frameworks & Libraries
    { name: 'React.js', category: 'frameworks', icon: <FaReact color="#61DAFB" />, color: '#61DAFB', level: 'Advanced' },
    { name: 'React Native', category: 'frameworks', icon: <FaReact color="#61DAFB" />, color: '#61DAFB', level: 'Intermediate' },
    { name: 'Next.js', category: 'frameworks', icon: <SiNextdotjs color="#FFFFFF" />, color: '#FFFFFF', level: 'Intermediate' },
    { name: 'Tailwind CSS', category: 'frameworks', icon: <SiTailwindcss color="#38BDF8" />, color: '#38BDF8', level: 'Advanced' },

    // Web Technologies
    { name: 'HTML5', category: 'web', icon: <FaHtml5 color="#E44D26" />, color: '#E44D26', level: 'Advanced' },
    { name: 'CSS3', category: 'web', icon: <FaCss3Alt color="#264DE4" />, color: '#264DE4', level: 'Advanced' },

    // Backend & Databases
    { name: 'Node.js', category: 'backend', icon: <FaNodeJs color="#339933" />, color: '#339933', level: 'Advanced' },
    { name: 'Express.js', category: 'backend', icon: <SiExpress color="#EEEEEE" />, color: '#EEEEEE', level: 'Advanced' },
    { name: 'MongoDB', category: 'backend', icon: <SiMongodb color="#47A248" />, color: '#47A248', level: 'Advanced' },
    { name: 'MySQL', category: 'backend', icon: <SiMysql color="#4479A1" />, color: '#4479A1', level: 'Intermediate' },
    { name: 'Mongoose', category: 'backend', icon: <SiMongodb color="#880000" />, color: '#880000', level: 'Advanced' },
    { name: 'Redis', category: 'backend', icon: <SiRedis color="#DC382D" />, color: '#DC382D', level: 'Intermediate' },
    { name: 'REST APIs', category: 'backend', icon: <FaServer color="#FFD700" />, color: '#FFD700', level: 'Advanced' },

    // Tools & Platforms
    { name: 'Git', category: 'tools', icon: <FaGitAlt color="#F05032" />, color: '#F05032', level: 'Advanced' },
    { name: 'GitHub', category: 'tools', icon: <FaGithub color="#FFFFFF" />, color: '#FFFFFF', level: 'Advanced' },
    { name: 'Postman', category: 'tools', icon: <SiPostman color="#FF6C37" />, color: '#FF6C37', level: 'Advanced' },
    { name: 'npm', category: 'tools', icon: <FaNpm color="#CB3837" />, color: '#CB3837', level: 'Advanced' },
    { name: 'Vercel', category: 'tools', icon: <SiVercel color="#FFFFFF" />, color: '#FFFFFF', level: 'Advanced' },
    { name: 'Netlify', category: 'tools', icon: <SiNetlify color="#00C7B7" />, color: '#00C7B7', level: 'Advanced' },
    { name: 'Render', category: 'tools', icon: <SiRender color="#46E3B7" />, color: '#46E3B7', level: 'Intermediate' },
    { name: 'Figma', category: 'tools', icon: <FaFigma color="#F24E1E" />, color: '#F24E1E', level: 'Intermediate' },
    { name: 'Docker', category: 'tools', icon: <FaDocker color="#2496ED" />, color: '#2496ED', level: 'Intermediate' },
];

const competencies = [
    { title: 'Full-Stack Web App Development', icon: <FaServer className="text-[#FFD700]" />, desc: 'End-to-end modern web applications with seamless frontend UI & robust backend architecture.' },
    { title: 'RESTful API Design & Dev', icon: <FaBolt className="text-[#FFFACD]" />, desc: 'Building scalable, secure, and clean API endpoints with express routing and JSON responses.' },
    { title: 'Authentication & Security', icon: <FaShieldAlt className="text-[#FFD700]" />, desc: 'Implementing JWT authentication, OAuth integrations, bcrypt hashing, and protected routes.' },
    { title: 'Real-Time Applications', icon: <FaBolt className="text-[#FFFACD]" />, desc: 'Real-time bidirectional communication using WebSockets, socket.io, and live mapping/signals.' },
    { title: 'Cloud Deployment', icon: <FaCloud className="text-[#FFD700]" />, desc: 'Deploying full stack production apps to Vercel, Netlify, Render, and managing cloud environments.' },
    { title: 'Responsive UI/UX Design', icon: <FaDesktop className="text-[#FFFACD]" />, desc: 'Crafting pixel-perfect, mobile-first design with smooth micro-animations and accessibility.' },
    { title: 'Performance Optimization', icon: <FaBolt className="text-[#FFD700]" />, desc: 'Lazy loading, state management tuning, bundle minimization, and high Lighthouse scores.' },
    { title: 'Version Control (Git Workflows)', icon: <FaCodeBranch className="text-[#FFFACD]" />, desc: 'Branch management, pull requests, release tagging, and collaborative GitHub repository management.' },
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredSkills = activeTab === 'all'
        ? skillsData
        : activeTab === 'competencies'
            ? []
            : skillsData.filter(s => s.category === activeTab);

    return (
        <section className="relative py-32 px-4 sm:px-6 overflow-hidden flex flex-col items-center bg-[var(--bg)]">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none grid-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 relative z-10 max-w-3xl mx-auto"
            >
                <h2 className="text-xs sm:text-sm tracking-[0.2em] text-slate-400 uppercase font-bold mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    TECHNICAL <span className="text-4xl sm:text-5xl tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE4B5] to-white font-extrabold capitalize filter drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">Skills</span> &amp; EXPERTISE
                </h2>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4">
                    A comprehensive set of modern technologies, frameworks, backend systems, and tools I use to craft scalable full-stack applications.
                </p>
            </motion.div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-12 relative z-10">
                {skillCategories.map(cat => (
                    <motion.button
                        key={cat.key}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab(cat.key)}
                        className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border ${activeTab === cat.key
                            ? 'bg-[#FFD700]/15 border-[#FFD700]/50 text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.15)]'
                            : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200'
                            }`}
                    >
                        {cat.label}
                    </motion.button>
                ))}
            </div>

            {/* Tech Skills Grid */}
            {activeTab !== 'competencies' && (
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-5xl relative z-10 mb-16"
                >
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.03 }}
                            whileHover={{ scale: 1.04, y: -4 }}
                            className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center group hover:border-[#FFD700]/40 transition-all duration-300 relative overflow-hidden cursor-default"
                        >
                            {/* Hover background glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                                style={{ background: skill.color }}
                            />

                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                                {skill.icon}
                            </div>
                            <span className="text-sm font-semibold text-white group-hover:text-[#FFD700] transition-colors mb-1">
                                {skill.name}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full border border-white/10">
                                {skill.level}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {/* Core Competencies Section */}
            {(activeTab === 'all' || activeTab === 'competencies') && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-5xl relative z-10 mt-6"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            Core <span className="gradient-text">Competencies</span>
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-slate-400">
                            Key engineering methodologies &amp; architectural proficiencies
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {competencies.map((comp, idx) => (
                            <motion.div
                                key={comp.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                                        {comp.icon}
                                    </div>
                                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                                        {comp.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {comp.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Skills;

