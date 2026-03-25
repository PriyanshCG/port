import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import profilePic from './pic.jpeg';

const TYPING_LINES = [
    "Hi, I'm Priyansh Patel 👋",
    "Ask me anything about code & cricket 🏏",
    "I build fast, modern & interactive web experiences ⚡",
];

const TypingText = () => {
    const [lineIdx, setLineIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [displayed, setDisplayed] = useState('');
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) {
            const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 1800);
            return () => clearTimeout(t);
        }
        const speed = deleting ? 30 : 55;
        const t = setTimeout(() => {
            const line = TYPING_LINES[lineIdx];
            if (!deleting) {
                if (charIdx < line.length) {
                    setDisplayed(line.slice(0, charIdx + 1));
                    setCharIdx(c => c + 1);
                } else {
                    setPaused(true);
                }
            } else {
                if (charIdx > 0) {
                    setDisplayed(line.slice(0, charIdx - 1));
                    setCharIdx(c => c - 1);
                } else {
                    setDeleting(false);
                    setLineIdx(i => (i + 1) % TYPING_LINES.length);
                }
            }
        }, speed);
        return () => clearTimeout(t);
    }, [charIdx, deleting, lineIdx, paused]);

    return (
        <div className="h-10 flex items-center">
            <span className="text-xl md:text-2xl font-mono text-[#00d4ff]">
                {displayed}
                <span className="inline-block w-[2px] h-[1.2em] bg-[#00d4ff] ml-1 align-middle animate-pulse" />
            </span>
        </div>
    );
};

const Hero = () => {
    const scrollDown = () => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32 px-6">
            {/* Corner accents */}
            <div className="absolute top-20 left-6 w-16 h-16 border-t-2 border-l-2 border-[#00d4ff]/30 pointer-events-none" />
            <div className="absolute top-20 right-6 w-16 h-16 border-t-2 border-r-2 border-[#a855f7]/30 pointer-events-none" />
            <div className="absolute bottom-8 left-6 w-16 h-16 border-b-2 border-l-2 border-[#a855f7]/30 pointer-events-none" />
            <div className="absolute bottom-8 right-6 w-16 h-16 border-b-2 border-r-2 border-[#00d4ff]/30 pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* ─── Text content ─── */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 text-center lg:text-left"
                >
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#00d4ff]/20 bg-[#00d4ff]/5 rounded-full backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_8px_#39ff14]" />
                        <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Typing animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-4"
                    >
                        <TypingText />
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
                    >
                        Building the{' '}
                        <span className="gradient-text">Future</span>
                        <br />
                        with <span className="text-white/90">Code.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                    >
                        B.Tech CSE student at Coding Gita × Swaminarayan University who blends{' '}
                        <span className="text-[#00d4ff]">logic with creativity</span> to craft modern,
                        high-performance web applications.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
                    >
                        <motion.a
                            href="#projects"
                            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="btn-neon-blue px-7 py-3.5 rounded font-semibold text-sm tracking-wider uppercase font-mono"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="#contact"
                            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="btn-neon-purple px-7 py-3.5 rounded font-semibold text-sm tracking-wider uppercase font-mono"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-center justify-center lg:justify-start gap-4"
                    >
                        {[
                            { icon: <FaGithub />, href: 'https://github.com/PriyanshCG', label: 'GitHub' },
                            { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/priyansh-patel-75264839a/', label: 'LinkedIn' },
                            { icon: <FaTwitter />, href: 'https://x.com/Priyanshhh_300', label: 'Twitter' },
                        ].map(({ icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-11 h-11 flex items-center justify-center text-lg text-slate-400 hover:text-[#00d4ff] border border-white/10 hover:border-[#00d4ff]/50 rounded transition-all duration-300 backdrop-blur-sm hover:bg-[#00d4ff]/5 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ─── Profile image ─── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex-shrink-0 float-anim"
                >
                    {/* Glow rings */}
                    <div className="absolute inset-[-20px] rounded-full border border-[#00d4ff]/10 animate-[spin_12s_linear_infinite]" />
                    <div className="absolute inset-[-40px] rounded-full border border-[#a855f7]/8 animate-[spin_18s_linear_infinite_reverse]" />

                    {/* Image frame */}
                    <div className="relative w-72 h-80 sm:w-80 sm:h-96">
                        {/* Outer border with gradient */}
                        <div className="absolute inset-0 rounded-2xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(168,85,247,0.3))',
                                padding: '1.5px',
                            }}
                        >
                            <div className="w-full h-full rounded-2xl bg-[#050510]" />
                        </div>

                        {/* Actual image */}
                        <div className="absolute inset-[1.5px] rounded-2xl overflow-hidden">
                            <img
                                src={profilePic}
                                alt="Priyansh Patel"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent" />
                        </div>

                        {/* Floating badge – top */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                            className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-lg border border-[#00d4ff]/20 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#39ff14] rounded-full animate-pulse shadow-[0_0_6px_#39ff14]" />
                                <span className="text-xs font-mono text-[#00d4ff]">Open to work</span>
                            </div>
                        </motion.div>

                        {/* Floating badge – bottom */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6 }}
                            className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-lg border border-[#a855f7]/20 backdrop-blur-xl"
                        >
                            <div className="text-xs font-mono">
                                <span className="text-slate-500">{'> '}</span>
                                <span className="text-[#a855f7]">Full-Stack Dev</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                onClick={scrollDown}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-[#00d4ff] transition-colors group"
                aria-label="Scroll down"
            >
                <span className="text-xs font-mono tracking-[3px] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <FaChevronDown className="text-sm group-hover:text-[#00d4ff] transition-colors" />
                </motion.div>
            </motion.button>
        </section>
    );
};

export default Hero;
