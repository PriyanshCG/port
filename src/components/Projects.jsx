import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { useState, useRef } from 'react';

const featuredProjects = [
    {
        num: '01',
        title: 'CodeForge',
        subtitle: 'Hackathon Project',
        desc: 'A dynamic hackathon-driven web platform built to solve real-world problems with speed and innovation.',
        tech: ['React.js', 'Tailwind CSS'],
        live: 'https://art-park-code-forge-hackathon-virid.vercel.app/',
        github: 'https://github.com/HARSHILL2023/ArtPark_CodeForge_Hackathon',
        color: '#FFD700',
        gradient: 'from-[#FFD700]/20 to-transparent',
        image: '/codeforge.png',
    },
    {
        num: '02',
        title: 'SkillSense AI',
        subtitle: 'AI-Powered Platform',
        desc: 'An AI-powered platform designed to enhance user skills through intelligent insights and interactive experience.',
        tech: ['React.js', 'Tailwind CSS'],
        live: 'https://skillsense-ai-seven.vercel.app/',
        github: 'https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-',
        color: '#FFFACD',
        gradient: 'from-[#FFFACD]/20 to-transparent',
        image: '/skillsense.png',
    },
    {
        num: '03',
        title: 'Chrono24 Clone',
        subtitle: 'UI Precision Project',
        desc: 'A pixel-perfect luxury marketplace clone focused on UI precision, responsiveness, and clean design.',
        tech: ['HTML', 'CSS'],
        live: 'https://pri-chrono24-clone.netlify.app/',
        github: 'https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/web1',
        color: '#FFD700',
        gradient: 'from-[#FFD700]/20 to-transparent',
        image: '/chrono24.png',
    },
];

const moreProjects = [
    {
        title: 'Razer Clone',
        caption: 'Gaming accessories brand landing page with immersive dark mode.',
        desc: 'High-end gaming UI clone with premium aesthetics and responsive design.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/webb3',
        live: 'https://pri-razer-clone.netlify.app/',
        color: '#FFD700',
        image: '/razer.png',
    },
    {
        title: 'Polygon Clone',
        caption: 'Modern tech news website with grid-based layout structure.',
        desc: 'Clean, responsive UI design focused on layout precision and visual hierarchy.',
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/web6',
        live: 'https://pri-polygon-clone.netlify.app/polygon',
        color: '#FFFACD',
        image: '/polygon.png',
    },
    {
        title: 'Drop Clone',
        caption: 'Cloud storage landing page focusing on minimal layout.',
        desc: 'Cloud platform UI clone showcasing modern SaaS design patterns.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/web5',
        live: 'https://pri-drop-clone.netlify.app/',
        color: '#FFD700',
        image: '/drop.png',
    },
];

const TiltCard = ({ project }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

    const onMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        setTilt({ x: -dy * 10, y: dx * 10 });
        setGlowPos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    const onMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setGlowPos({ x: 50, y: 50 });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease, box-shadow 0.3s ease',
            }}
            className="glass-card relative overflow-hidden group cursor-default"
        >
            {/* Dynamic glow follow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(200px circle at ${glowPos.x}% ${glowPos.y}%, ${project.color}18, transparent 70%)`,
                }}
            />

            {/* Image Section */}
            <div className="w-full h-40 overflow-hidden relative border-b border-white/5">
                <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-black/10 duration-500" />
                <img src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] z-20" style={{ background: `linear-gradient(90deg, ${project.color}80, transparent)` }} />
            </div>

            <div className="p-8 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <div className="text-xs font-mono mb-1" style={{ color: project.color }}>
                            {project.subtitle}
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                            {project.title}
                        </h3>
                    </div>
                    <span className="text-5xl font-bold font-mono opacity-10 group-hover:opacity-20 transition-opacity" style={{ color: project.color }}>
                        {project.num}
                    </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                        <span
                            key={t}
                            className="text-xs px-3 py-1 rounded font-mono border"
                            style={{
                                color: project.color,
                                borderColor: `${project.color}40`,
                                background: `${project.color}0a`,
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        style={{ '--hover-color': project.color }}
                    >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                        <FaGithub />
                        Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const SmallCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card flex flex-col [perspective:1000px] cursor-default border border-transparent overflow-hidden group"
        style={{ '--card-color': project.color }}
    >
        {/* Image Section */}
        {project.image && (
            <div className="w-full h-40 overflow-hidden relative border-b border-white/5">
                <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-black/10 duration-500" />
                <img src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] z-20" style={{ background: `linear-gradient(90deg, ${project.color}80, transparent)` }} />
            </div>
        )}

        <div className="p-6 flex flex-col flex-grow relative z-10">
            <div className="flex items-start justify-between mb-4">
                <FaCode className="text-xl" style={{ color: project.color }} />
            </div>
            <h4 className="font-bold text-white mb-2">{project.title}</h4>
            <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">{project.desc}</p>

            <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded font-mono text-slate-400 border border-white/8">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                        <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                    </a>
                )}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    onClick={e => project.github === '#' && e.preventDefault()}
                >
                    <FaGithub className="text-[10px]" /> Source Code
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-label mb-4"
                >
                    <span>04 — Projects</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-500 max-w-lg">
                        Real-world applications built with modern tools and high attention to detail.
                    </p>
                </motion.div>

                {/* Featured 3D tilt cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {featuredProjects.map(p => <TiltCard key={p.num} project={p} />)}
                </div>

                {/* More projects */}
                {showMore && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
                    >
                        {moreProjects.map((p, i) => <SmallCard key={p.title} project={p} index={i} />)}
                    </motion.div>
                )}

                {/* View more toggle */}
                <div className="text-center mb-10">
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setShowMore(s => !s)}
                        className="btn-neon-blue px-8 py-3.5 rounded font-mono text-sm font-semibold"
                    >
                        {showMore ? '[ View Less Projects ]' : '[ View More Projects ]'}
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
