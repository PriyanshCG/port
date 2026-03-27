import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ to, label, suffix = '+' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1400;
        const step = Math.ceil(to / (duration / 16));
        const interval = setInterval(() => {
            start = Math.min(start + step, to);
            setCount(start);
            if (start >= to) clearInterval(interval);
        }, 16);
        return () => clearInterval(interval);
    }, [inView, to]);

    return (
        <div ref={ref} className="stat-card rounded-xl p-6 text-center">
            <div className="text-4xl font-bold font-mono gradient-text mb-1">
                {count}{suffix}
            </div>
            <div className="text-xs text-slate-500 font-mono tracking-wider uppercase">{label}</div>
        </div>
    );
};

const About = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Side decoration */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#FFD700]/30 to-transparent" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-label mb-4"
                >
                    <span>01 — About</span>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            More than just<br />
                            <span className="gradient-text">a developer</span>
                        </h2>

                        <div className="space-y-5 text-slate-400 leading-relaxed">
                            <p>
                                Passionate <span className="text-[#FFD700] font-medium">B.Tech CSE student</span> who blends logic with
                                creativity to build modern web applications. I enjoy solving real-world problems and
                                constantly exploring new technologies to stay ahead.
                            </p>
                            <p>
                                When I'm not coding, you'll find me on the cricket pitch — the same
                                <span className="text-[#FFFACD] font-medium"> strategic thinking</span> that makes
                                a good batsman also makes a great engineer. I believe in playing both long innings.
                            </p>
                            <p>
                                Currently studying at <span className="text-[#FFD700]">Coding Gita × Swaminarayan University, Kalol</span>,
                                building full-stack projects and contributing to the open-source ecosystem.
                            </p>
                        </div>

                        <motion.a
                            href="#terminal"
                            onClick={e => { e.preventDefault(); document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="inline-flex items-center gap-2 mt-8 mb-8 text-sm font-mono text-[#FFD700] hover:text-white transition-colors border-b border-[#FFD700]/30 hover:border-white pb-1"
                            whileHover={{ x: 4 }}
                        >
                            <span className="text-[#FFFACD]">{'>'}</span> Try the interactive terminal
                        </motion.a>
                    </motion.div>

                    {/* Right: stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <Counter to={10} label="Tech Stack" suffix="+" />
                            <Counter to={6} label="Projects Built" suffix="+" />
                            <Counter to={2} label="Hackathons" suffix="x" />
                            <Counter to={100} label="Learner Mindset" suffix="%" />
                        </div>

                        {/* Terminal-style info box */}
                        <div className="terminal-window p-4 mt-6">
                            <div className="terminal-header mb-3">
                                <div className="terminal-dot bg-[#ff5f57]" />
                                <div className="terminal-dot bg-[#ffbd2e]" />
                                <div className="terminal-dot bg-[#28c840]" />
                                <span className="text-xs font-mono text-slate-500 ml-2">about.config</span>
                            </div>
                            <div className="font-mono text-xs space-y-1.5 p-2">
                                {[
                                    ['name', '"Priyansh Patel"'],
                                    ['role', '"Full Stack Developer"'],
                                    ['university', '"Coding Gita × SU"'],
                                    ['passion', '["code", "cricket", "design"]'],
                                    ['status', '"Available for work"'],
                                ].map(([key, val]) => (
                                    <div key={key}>
                                        <span className="text-[#FFFACD]">{key}</span>
                                        <span className="text-slate-500">{': '}</span>
                                        <span className="text-[#FFD700]">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
