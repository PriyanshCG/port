import { motion } from 'framer-motion';

const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#030014] pointer-events-none">
            {/* Dark base layer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 -left-1/4 w-full h-[600px] bg-purple-900/30 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob" />
            <div className="absolute top-0 -right-1/4 w-full h-[600px] bg-indigo-900/40 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/2 w-full h-[600px] bg-fuchsia-900/30 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob animation-delay-4000" />

            {/* Subtle noise overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>
    );
};

export default AuroraBackground;
