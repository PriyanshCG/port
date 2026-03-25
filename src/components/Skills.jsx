import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiVercel, SiNetlify, SiRedis } from 'react-icons/si';

const skillGroups = [
    {
        category: 'Frontend',
        color: '#00d4ff',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3Alt /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        ],
        iconColors: ['text-orange-500', 'text-blue-400', 'text-yellow-400', 'text-cyan-400', 'text-cyan-300'],
    },
    {
        category: 'Backend',
        color: '#a855f7',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Redis', icon: <SiRedis /> },
        ],
        iconColors: ['text-green-500', 'text-slate-300', 'text-green-400', 'text-red-400'],
    },
    {
        category: 'Tools',
        color: '#39ff14',
        skills: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'Figma', icon: <FaFigma /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'Vercel', icon: <SiVercel /> },
            { name: 'Netlify', icon: <SiNetlify /> },
        ],
        iconColors: ['text-orange-400', 'text-pink-400', 'text-orange-300', 'text-white', 'text-teal-400'],
    },
];

/* Float keyframes injected once */
const floatStyle = `
@keyframes skillFloat {
  0%,100% { transform: translateY(0px) rotate(0deg); }
  33%      { transform: translateY(-6px) rotate(2deg); }
  66%      { transform: translateY(-3px) rotate(-1deg); }
}
@keyframes borderGlow {
  0%,100% { box-shadow: 0 0 8px rgba(0,0,0,0); }
  50%      { box-shadow: 0 0 18px var(--glow-color, #00d4ff); }
}
`;

const SkillCard = ({ skill, iconColor, index, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{
            duration: 0.5,
            delay: index * 0.07,
            ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ scale: 1.12, rotate: [-1, 1, -1, 0] }}
        className="relative flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/8 bg-white/[0.03] group cursor-default"
        style={{
            aspectRatio: '1 / 1',
            padding: '14px 8px',
            '--glow-color': color,
            animation: `skillFloat ${3.5 + index * 0.3}s ease-in-out ${index * 0.2}s infinite`,
        }}
        onMouseEnter={e => {
            e.currentTarget.style.borderColor = color + '60';
            e.currentTarget.style.background = color + '12';
            e.currentTarget.style.boxShadow = `0 0 24px ${color}30, inset 0 0 20px ${color}08`;
            e.currentTarget.style.animation = 'none';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.borderColor = '';
            e.currentTarget.style.background = '';
            e.currentTarget.style.boxShadow = '';
            e.currentTarget.style.animation = `skillFloat ${3.5 + index * 0.3}s ease-in-out ${index * 0.2}s infinite`;
        }}
    >
        {/* Corner accent dots */}
        <div className="absolute top-2 right-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: color }} />

        {/* Icon */}
        <div className={`text-3xl flex items-center justify-center w-full ${iconColor}
        group-hover:scale-110 transition-transform duration-300`}>
            {skill.icon}
        </div>

        {/* Label */}
        <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300
        transition-colors leading-tight text-center w-full px-1 truncate">
            {skill.name}
        </span>
    </motion.div>
);

const Skills = () => (
    <section className="relative py-32 px-6 overflow-hidden">
        {/* inject float keyframes */}
        <style>{floatStyle}</style>

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none"
            style={{ background: '#00d4ff' }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-[80px] opacity-10 pointer-events-none"
            style={{ background: '#a855f7' }} />

        <div className="container mx-auto max-w-6xl relative z-10">
            {/* Section label */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-label mb-4"
            >
                <span>03 — Skills</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    My <span className="gradient-text">Tech Stack</span>
                </h2>
                <p className="text-slate-500 max-w-lg">
                    Tools and technologies I use to bring ideas to life.
                </p>
            </motion.div>

            <div className="space-y-14">
                {skillGroups.map((group, gi) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: gi * 0.12 }}
                    >
                        {/* Category header */}
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                animate={{ boxShadow: [`0 0 8px ${group.color}60`, `0 0 20px ${group.color}cc`, `0 0 8px ${group.color}60`] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-6 rounded-full flex-shrink-0"
                                style={{ background: group.color }}
                            />
                            <h3 className="text-base font-semibold font-mono tracking-wider" style={{ color: group.color }}>
                                {group.category}
                            </h3>
                            <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${group.color}40, transparent)` }} />
                        </div>

                        {/* Icon grid — centered items */}
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 justify-items-center">
                            {group.skills.map((skill, i) => (
                                <SkillCard
                                    key={skill.name}
                                    skill={skill}
                                    iconColor={group.iconColors[i]}
                                    index={i}
                                    color={group.color}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
