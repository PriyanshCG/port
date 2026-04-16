import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTrophy, FaImages, FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import img1 from '../assets/hackathon/image1.png';
import img2 from '../assets/hackathon/image2.jpg';
import img3 from '../assets/hackathon/image3.jpg';
import img4 from '../assets/hackathon/image4.jpg';
import img5 from '../assets/hackathon/image5.png';
import img6 from '../assets/hackathon/image6.jpg';

const hackathonData = {
    title: 'SU Hackathon 2026',
    org: 'Sangam University, Bhilwara',
    position: '3rd Place',
    desc: 'Participated in the SU Hackathon 2026 with my team, delivering an innovative solution that secured us the 3rd position overall.',
    projectName: 'SkillSense AI',
    projectGithub: 'https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-',
    projectLive: 'https://skillsense-ai-seven.vercel.app/',
    images: [
        img1,
        img2,
        img6,
        img3,
        img4,
        img5,
    ],
    color: '#FFD700',
};

const Hackathon = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const openImg = (idx) => setSelectedImg(idx);
    const closeImg = () => setSelectedImg(null);
    const prevImg = () => setSelectedImg(i => (i === 0 ? hackathonData.images.length - 1 : i - 1));
    const nextImg = () => setSelectedImg(i => (i === hackathonData.images.length - 1 ? 0 : i + 1));

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-label mb-4"
                >
                    <span>07 — Hackathon</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="text-3xl"
                        >
                            <FaTrophy className="text-[#FFD700]" />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Hackathon <span className="gradient-text">Experience</span>
                        </h2>
                    </div>
                </motion.div>

                <div className="glass-card overflow-hidden border border-white/10 rounded-2xl hover:border-[#FFD700]/20 transition-colors duration-500">
                    <div className="p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <FaTrophy className="text-[#FFD700] text-2xl" />
                            <div>
                                <h3 className="text-2xl font-bold text-white">{hackathonData.title}</h3>
                                <p className="text-sm font-mono text-[#FFD700]">{hackathonData.position}</p>
                            </div>
                        </div>
                        <p className="text-slate-400 font-mono text-sm mb-6">
                            @ {hackathonData.org}
                        </p>
                        <p className="text-slate-300 leading-relaxed max-w-xl text-lg mb-6">
                            {hackathonData.desc}
                        </p>
                        <div className="text-sm font-mono text-[#FFD700] mb-3">Project: {hackathonData.projectName}</div>
                        <div className="flex items-center gap-4">
                            <a href={hackathonData.projectGithub} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded hover:border-[#FFD700]/30">
                                <FaGithub /> GitHub Repo
                            </a>
                            <a href={hackathonData.projectLive} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded hover:border-[#FFD700]/30">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="mt-8 px-8 pb-8">
                        <div className="flex items-center gap-2 text-white/50 mb-4 font-mono text-sm">
                            <FaImages /> Event Gallery
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {hackathonData.images.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    onClick={() => openImg(idx)}
                                    className={`relative overflow-hidden rounded-xl border border-white/10 group/img bg-black/50 cursor-pointer ${idx === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[250px]' : 'aspect-video'
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={img}
                                        alt={`Hackathon ${idx + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-screen Image Viewer Modal */}
            <AnimatePresence>
                {selectedImg !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8"
                        onClick={closeImg}
                    >
                        {/* Left arrow */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImg(); }}
                            className="absolute left-4 md:left-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-colors"
                        >
                            <FaChevronLeft />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedImg}
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="relative max-w-4xl max-h-[85vh] w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeImg}
                                className="absolute -top-3 -right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-colors"
                            >
                                <FaTimes />
                            </button>

                            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={hackathonData.images[selectedImg]}
                                    alt={`Hackathon ${selectedImg + 1}`}
                                    className="w-full h-auto max-h-[80vh] object-contain bg-black"
                                />
                            </div>

                            {/* Image counter */}
                            <div className="mt-3 text-center text-sm font-mono text-slate-400">
                                {selectedImg + 1} / {hackathonData.images.length}
                            </div>
                        </motion.div>

                        {/* Right arrow */}
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImg(); }}
                            className="absolute right-4 md:right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-colors"
                        >
                            <FaChevronRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hackathon;

