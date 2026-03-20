import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import profilePic from './pic.jpeg';

const Hero = ({ setIntroFinished }) => {
    // Notify app that intro is done since we removed the loading screen
    useEffect(() => {
        setIntroFinished(true);
    }, [setIntroFinished]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 pb-32">

            <div className="container mx-auto max-w-7xl relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 text-center lg:text-left z-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[#a3ff00]/30 bg-[#a3ff00]/5 backdrop-blur-md mb-8 rounded"
                    >
                        <span className="w-2 h-2 rounded bg-[#a3ff00] animate-pulse" />
                        <span className="text-sm font-medium text-slate-300">Available for new opportunities</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-white drop-shadow-2xl">
                        Designing the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3ff00] to-green-500">Future.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                        I'm Priyansh Patel, a creative engineer crafting premium, highly aesthetic web experiences and futuristic digital products.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-[#a3ff00] text-black font-bold rounded hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(163,255,0,0.3)] hover:shadow-[0_0_20px_rgba(163,255,0,0.6)] uppercase tracking-widest"
                        >
                            Let's Talk
                        </a>
                        <div className="flex gap-4">
                            <SocialIcon href="https://github.com/PriyanshCG" icon={<FaGithub />} />
                            <SocialIcon href="https://www.linkedin.com/in/priyansh-patel-75264839a/" icon={<FaLinkedin />} />
                            <SocialIcon href="https://x.com/Priyanshhh_300" icon={<FaTwitter />} />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Profile Image & Abstract Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex-1 flex justify-center lg:justify-end max-w-md lg:max-w-none"
                >
                    <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] p-2 bg-gradient-to-b from-[#a3ff00]/20 to-transparent border border-[#a3ff00]/30 backdrop-blur-3xl shadow-[0_0_30px_rgba(163,255,0,0.1)] group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#a3ff00]/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-700" />
                        <div className="relative w-full h-full overflow-hidden bg-black/40">
                            <img
                                src={profilePic}
                                alt="Priyansh Patel"
                                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000"
                            />
                            {/* Overlay glass sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
                onClick={() => {
                    const nextSection = document.getElementById('skills');
                    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <span className="text-xs tracking-widest font-medium text-slate-400 uppercase">
                    Scroll
                </span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <FaArrowDown className="text-white/60 text-sm" />
                </motion.div>
            </motion.div>

        </section>
    );
};

const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center text-xl text-slate-300 hover:text-[#a3ff00] bg-white/5 hover:bg-[#a3ff00]/10 border border-white/10 hover:border-[#a3ff00] rounded transition-all duration-300 backdrop-blur-md hover:scale-110"
    >
        {icon}
    </a>
);

export default Hero;
