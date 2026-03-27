import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BOOT_LINES = [
    '> Initializing kernel modules...',
    '> Loading neural interface...',
    '> Connecting to dev network...',
    '> Mounting portfolio filesystem...',
    '> All systems operational.',
    '> Welcome, visitor.',
];

const LoadingScreen = () => {
    const [lineIndex, setLineIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLineIndex(i => Math.min(i + 1, BOOT_LINES.length - 1));
            setProgress(p => Math.min(p + 100 / BOOT_LINES.length, 100));
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="loading-screen"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
                <div className="text-4xl font-bold font-mono gradient-text mb-2">
                    PP<span className="text-[#FFD700]">_</span>
                </div>
                <div className="text-xs font-mono text-[#475569] tracking-[4px] uppercase">
                    portfolio.exe
                </div>
            </motion.div>

            {/* Boot terminal */}
            <div
                className="font-mono text-sm space-y-1 text-left"
                style={{ width: 340, minHeight: 160 }}
            >
                {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className={i === lineIndex ? 'text-[#FFD700]' : 'text-[#475569]'}
                    >
                        {line}
                    </motion.div>
                ))}
            </div>

            {/* Progress bar */}
            <div className="w-80 h-[2px] bg-white/5 rounded-full mt-8 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: 'linear-gradient(90deg, #FFD700, #FFFACD)',
                        boxShadow: '0 0 10px #FFD700',
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                />
            </div>

            <div className="text-xs font-mono text-[#FFD700] mt-3">
                {Math.round(progress)}%
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
