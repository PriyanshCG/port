import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaYoutube } from 'react-icons/fa';
import { useState, useRef } from 'react';

const featuredProjects = [
    {
        num: '01',
        title: 'SafeHer India',
        subtitle: 'Women-First Safety Platform (2025 – 2026)',
        desc: 'Developed a comprehensive safety platform with real-time mapping, SOS signals, and trusted guardian network. Features include live location tracking, emergency alerts, and community safety features.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Real-time APIs'],
        live: 'https://github.com/PriyanshCG',
        github: 'https://github.com/PriyanshCG',
        youtube: 'https://www.youtube.com/@PriyanshPatel-d7i',
        color: '#FFD700',
        gradient: 'from-[#FFD700]/20 to-transparent',
        image: '/codeforge.png',
        category: 'fullstack',
    },
    {
        num: '02',
        title: 'National Vulnerability Database',
        subtitle: 'Cybersecurity Analytics Platform (2025 – 2026)',
        desc: 'Full-stack vulnerability management platform built with MERN stack. Features dynamic dashboard, advanced search/filtering, and real-time cybersecurity analytics based on National Vulnerability Database.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Analytics', 'Dashboard'],
        live: 'https://github.com/PriyanshCG',
        github: 'https://github.com/PriyanshCG',
        youtube: 'https://www.youtube.com/@PriyanshPatel-d7i',
        color: '#FFFACD',
        gradient: 'from-[#FFFACD]/20 to-transparent',
        image: '/codeforge.png',
        category: 'fullstack',
    },
    {
        num: '03',
        title: 'SkillSense AI',
        subtitle: '3rd Position — SU_HACKATHON 2026',
        desc: 'AI-powered skill assessment and learning platform designed to help students escape tutorial hell. Platform analyzes technical skills, tracks learning progress, and identifies knowledge gaps.',
        tech: ['React.js', 'Tailwind CSS', 'AI Integration', 'Real-time Analytics'],
        live: 'https://skillsense-ai-seven.vercel.app/',
        github: 'https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-',
        youtube: 'https://www.youtube.com/@PriyanshPatel-d7i',
        color: '#FFD700',
        gradient: 'from-[#FFD700]/20 to-transparent',
        image: '/skillsense.png',
        category: 'fullstack',
    },
    {
        num: '04',
        title: 'NaturePulse',
        subtitle: 'Oregon Hacks | AI Environmental Platform (2025)',
        desc: 'AI-powered nature relationship platform with GreenWatch civic reporting engine. Users can discover local ecosystems via AI species vision, complete field missions, track 5D nature connection score, and report environmental issues.',
        tech: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML Integration'],
        live: 'https://github.com/PriyanshCG',
        github: 'https://github.com/PriyanshCG',
        youtube: 'https://www.youtube.com/@PriyanshPatel-d7i',
        color: '#FFFACD',
        gradient: 'from-[#FFFACD]/20 to-transparent',
        image: '/codeforge.png',
        category: 'fullstack',
    },
];

const moreProjects = [
    {
        title: 'CodeForge',
        caption: 'Hackathon web platform built to solve real-world problems.',
        desc: 'A dynamic hackathon-driven web platform built to solve real-world problems with speed and innovation.',
        tech: ['React.js', 'Tailwind CSS'],
        github: 'https://github.com/HARSHILL2023/ArtPark_CodeForge_Hackathon',
        live: 'https://art-park-code-forge-hackathon-virid.vercel.app/',
        youtube: 'https://www.youtube.com/@PriyanshPatel-d7i',
        color: '#FFD700',
        image: '/codeforge.png',
        category: 'fullstack',
    },
    {
        title: 'Chrono24 Clone',
        caption: 'Luxury marketplace clone with pixel-perfect precision.',
        desc: 'A pixel-perfect luxury marketplace clone focused on UI precision, responsiveness, and clean design.',
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/web1',
        live: 'https://pri-chrono24-clone.netlify.app/',
        youtube: 'https://youtu.be/ss5Y4wo_m3k?si=FtSfdFjAaQwQwyoT',
        color: '#FFD700',
        image: '/chrono24.png',
        category: 'clones',
    },
    {
        title: 'Razer Clone',
        caption: 'Gaming accessories brand landing page with immersive dark mode.',
        desc: 'Pixel-perfect Razer website clone built with HTML, CSS, JavaScript showcasing responsive frontend design.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/webb3',
        live: 'https://pri-razer-clone.netlify.app/',
        youtube: 'https://youtu.be/1ITU4w0NNoo?si=Wx12fVLMCqeAxDrD',
        color: '#FFD700',
        image: '/razer.png',
        category: 'clones',
    },
    {
        title: 'Polygon Clone',
        caption: 'Fully responsive Polygon platform clone with modern tech news aesthetics.',
        desc: 'Fully responsive Polygon platform clone with modern frontend technologies and crisp grid layouts.',
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/web6',
        live: 'https://pri-polygon-clone.netlify.app/polygon',
        youtube: 'https://youtu.be/fTuqEF0bDGg?si=mbmFJsOZovGg7R26',
        color: '#FFFACD',
        image: '/polygon.png',
        category: 'clones',
    },
    {
        title: 'Drop Clone',
        caption: 'Cloud storage landing page focusing on minimal layout.',
        desc: 'Cloud platform UI clone showcasing modern SaaS design patterns.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/sem1-assignments/tree/main/CSS/website%20clone/web5',
        live: 'https://pri-drop-clone.netlify.app/',
        youtube: 'https://youtu.be/XAni0st0kZM?si=TeJulnBnaqT2zGeg',
        color: '#FFD700',
        image: '/drop.png',
        category: 'clones',
    },
    {
        title: 'Forterra Clone',
        caption: 'Responsive corporate brand website clone.',
        desc: 'Clean corporate website clone focusing on modern layout structure and typography.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG',
        live: 'https://github.com/PriyanshCG',
        color: '#FFFACD',
        image: '/polygon.png',
        category: 'clones',
    },
    {
        title: 'Whack-a-Mole',
        caption: 'Classic arcade game built with vanilla JavaScript.',
        desc: 'Fun and interactive whack-a-mole game with score tracking and timer.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/VS_CODE/tree/main/coding-gita/js/games/whack-a-mole-game',
        live: 'https://priyansh-whack-a-mole.netlify.app/',
        color: '#FFD700',
        image: '/whack-a-mole.png',
        category: 'games',
    },
    {
        title: 'Typing Speed',
        caption: 'Test and improve your typing speed in real-time.',
        desc: 'A typing speed test game that measures WPM and accuracy with live feedback.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/VS_CODE/tree/main/coding-gita/js/games/typing-speed',
        live: 'https://priyansh-typing-speed.netlify.app/',
        image: '/typing-speed.png',
        color: '#FFFACD',
        category: 'games',
    },
    {
        title: 'Click Counter',
        caption: 'How fast can you click? Challenge yourself!',
        desc: 'A simple yet addictive click counter game to test your clicking speed.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/VS_CODE/tree/main/coding-gita/js/games/clickcounter',
        live: 'https://priyansh-click-counter.netlify.app/',
        color: '#FFD700',
        image: '/click-counter.png',
        category: 'games',
    },
    {
        title: 'Color Picker',
        caption: 'Guess the correct color from the RGB value.',
        desc: 'An interactive color guessing game that sharpens your RGB color knowledge.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/VS_CODE/tree/main/coding-gita/js/games/colorpicker',
        live: 'https://priyansh-color-picker.netlify.app/',
        color: '#FFFACD',
        image: '/color-picker.png',
        category: 'games',
    },
    {
        title: 'Memory Flip Card',
        caption: 'Match the pairs in this classic memory card game.',
        desc: 'A memory card flip game with smooth animations and win detection.',
        tech: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/PriyanshCG/VS_CODE/tree/main/coding-gita/js/games/Memory%20Flip%20Card',
        live: 'https://priyansh-memory-flip-card.netlify.app/',
        color: '#FFD700',
        image: '/memory-flip.png',
        category: 'games',
    },
];

const categories = [
    { key: 'all', label: 'All' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'clones', label: 'Clones' },
    { key: 'games', label: 'Games' },
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
                    {project.youtube && (
                        <a
                            href={project.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        >
                            <FaYoutube className="text-red-500" />
                            Watch Video
                        </a>
                    )}
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
                {project.youtube && (
                    <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                        <FaYoutube className="text-[10px] text-red-500" /> Video
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredFeatured = activeCategory === 'all'
        ? featuredProjects
        : featuredProjects.filter(p => p.category === activeCategory);

    const filteredMore = activeCategory === 'all'
        ? moreProjects
        : moreProjects.filter(p => p.category === activeCategory);

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
                    className="mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-500 max-w-lg">
                        Real-world applications built with modern tools and high attention to detail.
                    </p>
                </motion.div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map(cat => (
                        <motion.button
                            key={cat.key}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { setActiveCategory(cat.key); setShowMore(false); }}
                            className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border ${activeCategory === cat.key
                                ? 'bg-[#FFD700]/15 border-[#FFD700]/50 text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.15)]'
                                : 'border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300'
                                }`}
                        >
                            {cat.label}
                        </motion.button>
                    ))}
                </div>

                {/* Featured 3D tilt cards */}
                {filteredFeatured.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {filteredFeatured.map(p => <TiltCard key={p.num} project={p} />)}
                    </div>
                )}

                {/* More projects */}
                {(showMore || activeCategory !== 'all') && filteredMore.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
                    >
                        {filteredMore.map((p, i) => <SmallCard key={p.title} project={p} index={i} />)}
                    </motion.div>
                )}

                {/* View more toggle — only show in 'all' category */}
                {activeCategory === 'all' && (
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
                )}

                {filteredFeatured.length === 0 && filteredMore.length === 0 && (
                    <div className="text-center py-16 text-slate-500 font-mono text-sm">
                        No projects in this category yet.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
