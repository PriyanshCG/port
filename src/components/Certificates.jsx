import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaCertificate, FaMedal } from 'react-icons/fa';
import { SiCoursera, SiUdemy, SiFreecodecamp, SiGoogle } from 'react-icons/si';

const certs = [
    {
        title: 'React Developer Certification',
        org: 'Udemy',
        date: 'Jan 2025',
        color: '#00d4ff',
        icon: <SiUdemy />,
        badge: 'Frontend',
        link: '#',
    },
    {
        title: 'Full Stack Web Development',
        org: 'Coding Gita',
        date: 'Mar 2025',
        color: '#a855f7',
        icon: <FaCertificate />,
        badge: 'Full Stack',
        link: '#',
    },
    {
        title: 'JavaScript Algorithms & DS',
        org: 'freeCodeCamp',
        date: 'Nov 2024',
        color: '#39ff14',
        icon: <SiFreecodecamp />,
        badge: 'Algorithm',
        link: '#',
    },
    {
        title: 'Google UX Design',
        org: 'Google / Coursera',
        date: 'Aug 2024',
        color: '#f59e0b',
        icon: <SiGoogle />,
        badge: 'UI/UX',
        link: '#',
    },
    {
        title: 'Node.js Masterclass',
        org: 'Udemy',
        date: 'Dec 2024',
        color: '#00d4ff',
        icon: <SiUdemy />,
        badge: 'Backend',
        link: '#',
    },
    {
        title: 'MongoDB for Developers',
        org: 'Coursera',
        date: 'Feb 2025',
        color: '#a855f7',
        icon: <SiCoursera />,
        badge: 'Database',
        link: '#',
    },
];

/* Duplicate for seamless loop */
const TRACK = [...certs, ...certs, ...certs];

const CAR_W = 300; // px per card + gap
const GAP = 20;

const CertCard = ({ cert }) => (
    <div
        className="relative flex-shrink-0 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-md overflow-hidden group"
        style={{ width: CAR_W - GAP, padding: '24px 20px' }}
        onMouseEnter={e => {
            e.currentTarget.style.borderColor = cert.color + '55';
            e.currentTarget.style.boxShadow = `0 0 30px ${cert.color}22`;
            e.currentTarget.style.background = cert.color + '0a';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.borderColor = '';
            e.currentTarget.style.boxShadow = '';
            e.currentTarget.style.background = '';
        }}
    >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />

        {/* Badge */}
        <div className="flex items-center justify-between mb-4">
            <span
                className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
                style={{ color: cert.color, borderColor: cert.color + '40', background: cert.color + '12' }}
            >
                {cert.badge}
            </span>
            <a
                href={cert.link}
                onClick={e => cert.link === '#' && e.preventDefault()}
                className="text-slate-600 hover:text-white transition-colors text-xs opacity-0 group-hover:opacity-100"
            >
                <FaExternalLinkAlt />
            </a>
        </div>

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{ background: cert.color + '18', color: cert.color, border: `1px solid ${cert.color}30` }}>
            {cert.icon}
        </div>

        {/* Content */}
        <h4 className="text-sm font-bold text-white mb-1 leading-snug group-hover:text-white line-clamp-2">
            {cert.title}
        </h4>
        <p className="text-xs text-slate-500 mb-1">{cert.org}</p>
        <p className="text-[10px] font-mono" style={{ color: cert.color + 'bb' }}>{cert.date}</p>
    </div>
);

/* Auto-scroll carousel */
const Carousel = ({ direction = 1, speed = 0.6 }) => {
    const xRef = useRef(0);
    const trackRef = useRef(null);
    const [paused, setPaused] = useState(false);

    const TOTAL_W = certs.length * CAR_W; // one set width

    useAnimationFrame((_, delta) => {
        if (paused || !trackRef.current) return;
        xRef.current -= direction * speed * (delta / 16);
        if (Math.abs(xRef.current) >= TOTAL_W) xRef.current = 0;
        trackRef.current.style.transform = `translateX(${xRef.current}px)`;
    });

    return (
        <div
            className="overflow-hidden w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                ref={trackRef}
                className="flex"
                style={{ gap: GAP, willChange: 'transform' }}
            >
                {TRACK.map((cert, i) => (
                    <CertCard key={i} cert={cert} />
                ))}
            </div>
        </div>
    );
};

const Certificates = () => (
    <section className="relative py-32 overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] blur-[120px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #00d4ff, #a855f7)' }} />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
            {/* Section label */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-label mb-4"
            >
                <span>05 — Certificates</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-14"
            >
                <div className="flex items-center gap-4 mb-4">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-3xl"
                    >
                        <FaMedal className="text-yellow-400" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Certifications &amp; <span className="gradient-text">Achievements</span>
                    </h2>
                </div>
                <p className="text-slate-500 max-w-lg">
                    Continuous learning and skill validation across industry platforms.
                </p>
            </motion.div>
        </div>

        {/* Carousel rows */}
        <div className="space-y-5 pl-6">
            <Carousel direction={1} speed={0.55} />
            <Carousel direction={-1} speed={0.45} />
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 h-full w-24 pointer-events-none z-20"
            style={{ background: 'linear-gradient(to right, #050510, transparent)' }} />
        <div className="absolute top-0 right-0 h-full w-24 pointer-events-none z-20"
            style={{ background: 'linear-gradient(to left, #050510, transparent)' }} />
    </section>
);

export default Certificates;
