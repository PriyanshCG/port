import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaExternalLinkAlt, FaCertificate, FaMedal, FaTimes } from 'react-icons/fa';

const certs = [
    {
        title: 'Introduction to C',
        org: 'Sololearn',
        date: 'Dec 2025',
        color: '#FFD700',
        icon: <FaCertificate />,
        badge: 'Programming',
        link: '#',
        image: '/cert_c.jpg',
    },
    {
        title: 'Introduction to HTML',
        org: 'Sololearn',
        date: 'Mar 2026',
        color: '#FFFACD',
        icon: <FaCertificate />,
        badge: 'Web Basics',
        link: '#',
        image: '/cert_html.jpg',
    },
    {
        title: 'Tech for Everyone',
        org: 'Sololearn',
        date: 'Mar 2026',
        color: '#FFD700',
        icon: <FaCertificate />,
        badge: 'Technology',
        link: '#',
        image: '/cert_tech.jpg',
    },
    {
        title: 'Introduction to Generative AI',
        org: 'upGrad',
        date: 'Feb 2026',
        color: '#ff4b4b',
        icon: <FaCertificate />,
        badge: 'Artificial Intelligence',
        link: '#',
        image: '/cert_genai.jpg',
    },
    {
        title: 'SU Hackathon 2026 - 3rd Position',
        org: 'Sangam University - iTBI',
        date: 'Mar 2026',
        color: '#4b7bff',
        icon: <FaMedal />,
        badge: 'Hackathon Achievement',
        link: '#',
        image: '/cert_hackathon.png',
        rotate: true,
    },
];

const TiltCertCard = ({ cert }) => {
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
            className="glass-card relative overflow-hidden group cursor-default h-full flex flex-col"
        >
            {/* Dynamic glow follow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(200px circle at ${glowPos.x}% ${glowPos.y}%, ${cert.color}18, transparent 70%)`,
                }}
            />

            {/* Image Section */}
            <div className="w-full h-40 flex-shrink-0 overflow-hidden relative border-b border-white/5">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-colors duration-500" />
                <img src={`${import.meta.env.BASE_URL}${cert.image.startsWith('/') ? cert.image.slice(1) : cert.image}`} alt={cert.title} className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${cert.rotate ? '-rotate-90 scale-150' : ''}`} />
                <div className="absolute bottom-0 left-0 w-full h-[2px] z-20" style={{ background: `linear-gradient(90deg, ${cert.color}80, transparent)` }} />
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-black/50 backdrop-blur-md"
                    style={{ color: cert.color, border: `1px solid ${cert.color}30` }}>
                    {cert.icon}
                </div>
            </div>

            <div className="p-6 relative z-10 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3 gap-2">
                    <div>
                        <div className="text-[10px] font-mono mb-2 px-2.5 py-1 inline-block rounded-full border" style={{ color: cert.color, borderColor: cert.color + '40', background: cert.color + '12' }}>
                            {cert.badge}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors leading-tight">
                            {cert.title}
                        </h3>
                    </div>
                </div>

                <p className="text-slate-400 text-sm mb-4">{cert.org}</p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs font-mono" style={{ color: cert.color + 'bb' }}>{cert.date}</span>
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        onClick={e => cert.link === '#' && e.preventDefault()}
                    >
                        <FaExternalLinkAlt className="text-[10px]" />
                        Verify
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section className="relative py-32 overflow-hidden px-6">
            {/* ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] blur-[120px] rounded-full opacity-10 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, #FFD700, #FFFACD)' }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-label mb-4"
                >
                    <span>06 — Certificates</span>
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
                            <FaMedal className="text-[#FFD700]" />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Certifications &amp; <span className="gradient-text">Achievements</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 max-w-lg">
                        Continuous learning and skill validation across industry platforms, showcasing theoretical knowledge and practical application.
                    </p>
                </motion.div>

                {/* Grid display */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, i) => (
                        <div key={i} onClick={() => setSelectedCert(cert)} className="cursor-pointer">
                            <TiltCertCard cert={cert} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-screen Certificate Viewer Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="relative max-w-4xl w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-3 -right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-colors"
                            >
                                <FaTimes />
                            </button>

                            {/* Certificate image */}
                            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={`${import.meta.env.BASE_URL}${selectedCert.image.startsWith('/') ? selectedCert.image.slice(1) : selectedCert.image}`}
                                    alt={selectedCert.title}
                                    className={`w-full h-auto object-contain bg-white ${selectedCert.rotate ? '-rotate-90' : ''}`}
                                />
                            </div>

                            {/* Certificate info bar */}
                            <div className="mt-4 glass-card p-4 rounded-xl border border-white/10 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
                                    <p className="text-sm font-mono" style={{ color: selectedCert.color }}>{selectedCert.org} · {selectedCert.date}</p>
                                </div>
                                <span className="text-xs font-mono px-3 py-1 rounded-full border" style={{ color: selectedCert.color, borderColor: selectedCert.color + '40', background: selectedCert.color + '12' }}>
                                    {selectedCert.badge}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
