import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaTimes, FaEye, FaDownload } from 'react-icons/fa';
import { useState } from 'react';

const RESUME_URL = '/priyansh-resume.pdf';

const Resume = () => {
    const [showViewer, setShowViewer] = useState(false);

    return (
        <section className="relative py-20 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-label mb-4"
                >
                    <span>08 — Resume</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Resume</span>
                    </h2>
                    <p className="text-slate-500 max-w-lg">
                        A snapshot of my skills, experience, and education.
                    </p>
                </motion.div>

                {/* View Resume Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setShowViewer(true)}
                        className="btn-neon-blue px-8 py-4 rounded font-mono text-sm font-semibold flex items-center gap-3"
                    >
                        <FaEye /> View Resume
                    </motion.button>
                    <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href={RESUME_URL}
                        download="Priyansh_Patel_Resume.pdf"
                        className="px-8 py-4 rounded font-mono text-sm font-semibold flex items-center gap-3 border border-[#FFD700]/30 text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                    >
                        <FaDownload /> Download Resume
                    </motion.a>
                </motion.div>
            </div>

            {/* Full-screen PDF Viewer Modal */}
            <AnimatePresence>
                {showViewer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
                        onClick={() => setShowViewer(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="relative w-full max-w-5xl h-[85vh] glass-card border border-white/10 rounded-xl overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Modal header */}
                            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/60">
                                <div className="flex items-center gap-3">
                                    <FaFileAlt className="text-[#FFD700]" />
                                    <span className="font-mono text-sm text-slate-300">priyansh-resume.pdf</span>
                                </div>
                                <button
                                    onClick={() => setShowViewer(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* PDF embed */}
                            <iframe
                                src={`${RESUME_URL}#toolbar=0&navpanes=0`}
                                title="Priyansh Patel Resume"
                                className="w-full h-[calc(85vh-48px)]"
                                style={{ border: 'none' }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Resume;
