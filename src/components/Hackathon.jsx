import { motion } from 'framer-motion';
import { FaTrophy, FaImages } from 'react-icons/fa';

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
                            animate={{ rotate: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="text-3xl"
                        >
                            <FaTrophy className="text-[#FFD700]" />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Hackathon <span className="gradient-text">Participation</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 max-w-2xl text-lg">
                        Highlights from competitive programming and hackathons.
                    </p>
                </motion.div>

                <div className="glass-card relative overflow-hidden group cursor-default p-8 md:p-10 border border-white/5 bg-black/40 backdrop-blur-md">
                    {/* Background glow */}
                    <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[120px] rounded-full opacity-20 pointer-events-none"
                        style={{ background: hackathonData.color }}
                    />

                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        {/* Text Content */}
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-sm font-mono mb-6">
                                <FaTrophy /> {hackathonData.position}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {hackathonData.title}
                            </h3>
                            <p className="text-slate-400 font-mono text-sm mb-6">
                                @ {hackathonData.org}
                            </p>
                            <p className="text-slate-300 leading-relaxed max-w-xl text-lg mb-8">
                                {hackathonData.desc}
                            </p>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="mt-8">
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
                                    className={`relative overflow-hidden rounded-xl border border-white/10 group/img bg-black/50 ${idx === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[250px]' : 'aspect-video'
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
        </section>
    );
};

export default Hackathon;
