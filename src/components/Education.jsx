import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaSchool, FaBuilding } from 'react-icons/fa';

const timeline = [
    {
        year: '2023',
        title: '10th Grade',
        school: 'Apollo International School, Gota',
        desc: 'Completed secondary education with strong foundation in Mathematics and Science.',
        icon: <FaSchool />,
        color: '#FFD700',
    },
    {
        year: '2025',
        title: '12th Grade',
        school: 'St. Xaviers High School Loyola',
        desc: 'Completed higher secondary with focus on Computer Science and core sciences.',
        icon: <FaSchool />,
        color: '#FFFACD',
    },
    {
        year: '2025 – 2029',
        title: 'B.Tech Computer Science Engineering',
        school: 'Coding Gita × Swaminarayan University, Kalol',
        desc: 'Pursuing B.Tech CSE with focus on full-stack development, algorithms, and modern software engineering practices.',
        icon: <FaGraduationCap />,
        color: '#FFD700',
        current: true,
    },
];

const TimelineItem = ({ item, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const isLeft = index % 2 === 0;

    return (
        <div ref={ref} className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-0 mb-12`}>
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-[calc(50%-40px)] glass-card p-6 border transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,215,0,0.15)] hover:bg-white/[0.05] ${item.current ? 'border-[--card-color]/50' : 'border-white/5 hover:border-[--card-color]/30'}`}
                style={{ '--card-color': item.color }}
            >
                {item.current && (
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                        <span className="text-xs font-mono" style={{ color: item.color }}>Currently enrolled</span>
                    </div>
                )}

                <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <div className="text-xs font-mono mb-1" style={{ color: item.color }}>{item.year}</div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm"
                        style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}
                    >
                        {item.icon}
                    </div>
                </div>

                <div className="text-[#FFD700]/70 text-sm font-medium mb-2">{item.school}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>

            {/* Center column spacer for desktop */}
            <div className="hidden md:flex flex-col items-center" style={{ width: 80, flexShrink: 0 }}>
                {/* Dot */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className="timeline-dot"
                    style={{
                        background: item.color,
                        boxShadow: `0 0 12px ${item.color}, 0 0 24px ${item.color}50`,
                    }}
                />
            </div>

            {/* Empty space on the other side (desktop only) */}
            <div className="hidden md:block w-[calc(50%-40px)]" />
        </div>
    );
};

const Education = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-label mb-4"
                >
                    <span>05 — Education</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Academic <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-slate-500 max-w-lg">
                        The foundation that shaped my thinking and problem-solving approach.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line (desktop center) */}
                    <div className="hidden md:block timeline-line" />

                    {timeline.map((item, i) => (
                        <TimelineItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
