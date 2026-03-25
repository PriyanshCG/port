import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const COMMANDS = {
    help: {
        output: [
            { type: 'header', text: '╔══════════════════════════════════════════╗' },
            { type: 'header', text: '║        Available Commands                 ║' },
            { type: 'header', text: '╚══════════════════════════════════════════╝' },
            { type: 'cmd', label: 'about', desc: '→ Learn about Priyansh' },
            { type: 'cmd', label: 'skills', desc: '→ View tech skills' },
            { type: 'cmd', label: 'education', desc: '→ Academic background' },
            { type: 'cmd', label: 'projects', desc: '→ Featured projects' },
            { type: 'cmd', label: 'contact', desc: '→ Get in touch' },
            { type: 'cmd', label: 'clear', desc: '→ Clear the terminal' },
            { type: 'info', text: '💡 Hint: There might be some hidden commands...' },
        ]
    },
    about: {
        output: [
            { type: 'success', text: '▶ Priyansh Patel — Full Stack Developer' },
            { type: 'text', text: '' },
            { type: 'text', text: 'Passionate B.Tech CSE student who blends logic' },
            { type: 'text', text: 'with creativity to build modern web applications.' },
            { type: 'text', text: '' },
            { type: 'text', text: 'I enjoy solving real-world problems and constantly' },
            { type: 'text', text: 'exploring new technologies to stay ahead.' },
            { type: 'text', text: '' },
            { type: 'info', text: '🏏 Fun fact: Cricket is my second language.' },
        ]
    },
    skills: {
        output: [
            { type: 'success', text: '▶ Tech Stack [v2025]' },
            { type: 'text', text: '' },
            { type: 'category', text: '[ Frontend ]' },
            { type: 'skill', text: '  ⬡ HTML  ⬡ CSS  ⬡ JavaScript  ⬡ React.js  ⬡ Tailwind CSS' },
            { type: 'text', text: '' },
            { type: 'category', text: '[ Backend ]' },
            { type: 'skill', text: '  ⬡ Node.js  ⬡ Express.js' },
            { type: 'text', text: '' },
            { type: 'category', text: '[ Database ]' },
            { type: 'skill', text: '  ⬡ MongoDB  ⬡ Redis' },
            { type: 'text', text: '' },
            { type: 'category', text: '[ Tools ]' },
            { type: 'skill', text: '  ⬡ Git  ⬡ Figma  ⬡ Postman  ⬡ Vercel  ⬡ Netlify' },
        ]
    },
    education: {
        output: [
            { type: 'success', text: '▶ Academic Timeline' },
            { type: 'text', text: '' },
            { type: 'edu', year: '2023', text: '10th — Apollo International School, Gota' },
            { type: 'edu', year: '2025', text: '12th — St. Xaviers High School Loyola' },
            { type: 'edu', year: '2025–29', text: 'B.Tech CSE — Coding Gita × Swaminarayan University' },
            { type: 'text', text: '' },
            { type: 'info', text: '📚 Currently in 1st year — continuously leveling up.' },
        ]
    },
    projects: {
        output: [
            { type: 'success', text: '▶ Featured Projects' },
            { type: 'text', text: '' },
            { type: 'project', num: '01', name: 'CodeForge', tech: 'React.js, Tailwind CSS', url: 'https://art-park-code-forge-hackathon-virid.vercel.app/' },
            { type: 'project', num: '02', name: 'SkillSense AI', tech: 'React.js, Tailwind CSS', url: 'https://skillsense-ai-seven.vercel.app/' },
            { type: 'project', num: '03', name: 'Chrono24 Clone', tech: 'HTML, CSS', url: 'https://pri-chrono24-clone.netlify.app/' },
            { type: 'text', text: '' },
            { type: 'info', text: '→ Type "clear" to reset | Scroll section below for full details.' },
        ]
    },
    contact: {
        output: [
            { type: 'success', text: '▶ Contact Information' },
            { type: 'text', text: '' },
            { type: 'contact', label: 'Email   ', value: 'priyansh.patel.a.cg@gmail.com' },
            { type: 'contact', label: 'GitHub  ', value: 'github.com/PriyanshCG' },
            { type: 'contact', label: 'LinkedIn', value: 'linkedin.com/in/priyansh-patel-75264839a' },
            { type: 'contact', label: 'Twitter ', value: 'x.com/Priyanshhh_300' },
            { type: 'text', text: '' },
            { type: 'info', text: "✉️  Let's build something amazing together 🚀" },
        ]
    },
    // --- easter eggs ---
    cricket: {
        output: [
            { type: 'success', text: '🏏 CRICKET MODE ACTIVATED!' },
            { type: 'text', text: '' },
            { type: 'text', text: '  "The only way to bat is to trust your feet,"' },
            { type: 'text', text: '   and the only way to code is to trust your logic."' },
            { type: 'text', text: '' },
            { type: 'info', text: '  — Priyansh Patel, probably.' },
            { type: 'text', text: '' },
            { type: 'skill', text: '  Batting Average: 42.0 | Debugging Average: ∞' },
        ]
    },
    sudo: {
        output: [
            { type: 'error', text: '⚠️  Permission denied. (Nice try though!)' },
            { type: 'info', text: '   You are not in the sudoers file. This incident will be reported.' },
        ]
    },
    whoami: {
        output: [
            { type: 'success', text: 'You are: A curious visitor 👀' },
            { type: 'info', text: 'I am: Priyansh Patel, developer & cricket enthusiast.' },
        ]
    },
    matrix: {
        output: [
            { type: 'success', text: '🟩🟩🟩 ENTERING THE MATRIX... 🟩🟩🟩' },
            { type: 'text', text: '' },
            { type: 'skill', text: '01001000 01100101 01101100 01101100 01101111' },
            { type: 'skill', text: '01010111 01101111 01110010 01101100 01100100' },
            { type: 'text', text: '' },
            { type: 'info', text: '(Binary for "Hello World" — of course 🙂)' },
        ]
    },
};

const WELCOME = [
    { type: 'header', text: '╔════════════════════════════════════════════════╗' },
    { type: 'header', text: '║   Priyansh Patel — Interactive Terminal v1.0   ║' },
    { type: 'header', text: '╚════════════════════════════════════════════════╝' },
    { type: 'text', text: '' },
    { type: 'info', text: "Type 'help' to see available commands." },
    { type: 'text', text: '' },
];

const LineRenderer = ({ line }) => {
    switch (line.type) {
        case 'header':
            return <div className="text-[#00d4ff]/60 text-xs">{line.text}</div>;
        case 'success':
            return <div className="text-[#39ff14] font-bold">{line.text}</div>;
        case 'error':
            return <div className="text-red-400">{line.text}</div>;
        case 'info':
            return <div className="text-[#a855f7]">{line.text}</div>;
        case 'category':
            return <div className="text-[#00d4ff] font-semibold mt-1">{line.text}</div>;
        case 'skill':
            return <div className="text-slate-300">{line.text}</div>;
        case 'cmd':
            return (
                <div className="flex gap-3">
                    <span className="text-[#00d4ff] w-16 flex-shrink-0">{line.label}</span>
                    <span className="text-slate-400">{line.desc}</span>
                </div>
            );
        case 'edu':
            return (
                <div className="flex gap-4 items-start">
                    <span className="text-[#a855f7] font-mono w-14 flex-shrink-0">[{line.year}]</span>
                    <span className="text-slate-300">{line.text}</span>
                </div>
            );
        case 'contact':
            return (
                <div className="flex gap-3">
                    <span className="text-[#00d4ff] w-20 flex-shrink-0">{line.label}</span>
                    <span className="text-slate-300">{line.value}</span>
                </div>
            );
        case 'project':
            return (
                <div className="flex gap-3 items-start">
                    <span className="text-[#a855f7]">[{line.num}]</span>
                    <div>
                        <span className="text-[#00d4ff] font-semibold">{line.name}</span>
                        <span className="text-slate-500 text-xs ml-2">— {line.tech}</span>
                        {line.url && (
                            <a href={line.url} target="_blank" rel="noopener noreferrer"
                                className="block text-xs text-slate-500 hover:text-[#00d4ff] transition-colors mt-0.5 ml-0 font-mono truncate">
                                → {line.url}
                            </a>
                        )}
                    </div>
                </div>
            );
        default:
            return <div className="text-slate-400">{line.text || ''}</div>;
    }
};

const Terminal = () => {
    const [history, setHistory] = useState(WELCOME);
    const [input, setInput] = useState('');
    const [cmdHistory, setCmdHistory] = useState([]);
    const [histIdx, setHistIdx] = useState(-1);
    const inputRef = useRef(null);
    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, [history]);

    const execute = (cmd) => {
        const trimmed = cmd.trim().toLowerCase();
        const entry = [{ type: 'prompt', text: `priyansh@dev:~$ ${cmd}` }];

        if (trimmed === 'clear') {
            setHistory(WELCOME);
            setCmdHistory(h => [trimmed, ...h]);
            setHistIdx(-1);
            return;
        }

        let output;
        if (COMMANDS[trimmed]) {
            output = COMMANDS[trimmed].output;
        } else if (trimmed === '') {
            output = [];
        } else {
            output = [
                { type: 'error', text: `bash: ${trimmed}: command not found` },
                { type: 'info', text: "Type 'help' to list available commands." },
            ];
        }

        setHistory(h => [...h, ...entry, ...output, { type: 'text', text: '' }]);
        setCmdHistory(h => [trimmed, ...h]);
        setHistIdx(-1);
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            execute(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const newIdx = Math.min(histIdx + 1, cmdHistory.length - 1);
            setHistIdx(newIdx);
            setInput(cmdHistory[newIdx] || '');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const newIdx = Math.max(histIdx - 1, -1);
            setHistIdx(newIdx);
            setInput(newIdx === -1 ? '' : cmdHistory[newIdx] || '');
        }
    };

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-label mb-4"
                >
                    <span>02 — Terminal</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Interactive <span className="gradient-text">Terminal</span>
                    </h2>
                    <p className="text-slate-500 font-mono text-sm">
                        {'>'} Type commands to explore my portfolio
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="terminal-window"
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* Title bar */}
                    <div className="terminal-header">
                        <div className="terminal-dot bg-[#ff5f57]" />
                        <div className="terminal-dot bg-[#ffbd2e]" />
                        <div className="terminal-dot bg-[#28c840]" />
                        <span className="text-xs font-mono text-slate-500 ml-2">
                            priyansh@dev:~ — terminal
                        </span>
                    </div>

                    {/* Body */}
                    <div ref={bodyRef} className="terminal-body">
                        <div className="space-y-0.5 text-xs font-mono">
                            {history.map((line, i) => (
                                <div key={i}>
                                    {line.type === 'prompt' ? (
                                        <div className="text-[#00d4ff] mt-2">{line.text}</div>
                                    ) : (
                                        <LineRenderer line={line} />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Input line */}
                        <div className="terminal-input-line mt-3">
                            <span className="text-[#00d4ff] text-xs font-mono flex-shrink-0">
                                priyansh@dev:~$
                            </span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKey}
                                className="terminal-input text-xs"
                                autoFocus
                                autoComplete="off"
                                autoCapitalize="off"
                                spellCheck={false}
                                placeholder="type a command..."
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Quick commands hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-2 mt-6"
                >
                    {['help', 'about', 'skills', 'projects', 'contact'].map(cmd => (
                        <button
                            key={cmd}
                            onClick={() => { execute(cmd); inputRef.current?.focus(); }}
                            className="px-3 py-1.5 text-xs font-mono text-slate-500 border border-white/8 rounded hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all"
                        >
                            {cmd}
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Terminal;
