import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiRedis } from 'react-icons/si';

// Use standard Tailwind colors and specific branding colors
const SkillNode = ({ icon, name }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center justify-center w-24 h-24 sm:w-[110px] sm:h-[110px] rounded-3xl bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/5 shadow-2xl group hover:border-[#FFD700]/50 hover:bg-[#111] hover:shadow-[0_10px_40px_rgba(255,215,0,0.15)] transition-all duration-300 z-10 relative cursor-default"
    >
        <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-md">
            {icon}
        </div>
        <span className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
            {name}
        </span>
    </motion.div>
);

// Vertical line component
const VLine = ({ height = "h-12", classes = "" }) => (
    <div className={`w-[2px] bg-[#1e1e2d] mx-auto ${height} ${classes}`} />
);

// Horizontal bracket component Top-Down (splits one into many)
const HSplit = ({ width = "w-[240px]" }) => (
    <div className="flex flex-col items-center w-full relative">
        <VLine height="h-6" />
        <div className={`${width} h-6 border-t-2 border-l-2 border-r-2 border-[#1e1e2d] rounded-t-xl`} />
    </div>
);

// Horizontal bracket component Bottom-Up (merges many into one)
const HMerge = ({ width = "w-[160px]" }) => (
    <div className="flex flex-col items-center w-full relative">
        <div className={`${width} h-6 border-b-2 border-l-2 border-r-2 border-[#1e1e2d] rounded-b-xl`} />
        <VLine height="h-6" />
    </div>
);

const Skills = () => {
    return (
        <section className="relative py-32 px-4 sm:px-6 overflow-hidden flex flex-col items-center bg-[var(--bg)]">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none grid-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-[#FFD700]/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10 max-w-2xl mx-auto"
            >
                <h2 className="text-xs sm:text-sm tracking-[0.2em] text-slate-400 uppercase font-bold mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    THE <span className="text-4xl sm:text-5xl tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE4B5] to-white font-extrabold capitalize filter drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">Skills</span> BEHIND THE MAGIC
                </h2>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-6">
                    I enjoy creating beautiful, intuitive, and performant web applications with cutting-edge technologies.
                </p>
            </motion.div>

            {/* Tree Structure */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-4xl flex flex-col items-center"
            >

                {/* ---------- ROW 1 ---------- */}
                <div className="flex justify-center gap-16 sm:gap-[120px] relative z-10 w-full">
                    <SkillNode icon={<FaHtml5 color="#E44D26" />} name="HTML" />
                    <SkillNode icon={<FaCss3Alt color="#264DE4" />} name="CSS" />
                </div>

                {/* Connecting Logic 1 -> 2 */}
                {/* The width must match the distance between centers of HTML and CSS.
                    Centers overlap the elements. Each item is ~110px. Gap is 120px. 
                    Distance = 110/2 + 120 + 110/2 = 230px. 
                    Let's use a class to perfectly align it. */}
                <div className="w-[160px] sm:w-[230px] -mt-1 z-0 relative">
                    <div className="h-6 border-b-2 border-l-2 border-r-2 border-[#1e1e2d] rounded-b-xl" />
                    <VLine height="h-6" />
                </div>

                {/* ---------- ROW 2 ---------- */}
                <div className="flex justify-center relative z-10">
                    <SkillNode icon={<FaJs color="#F7DF1E" />} name="JavaScript" />
                </div>

                {/* Connecting Logic 2 -> 3 */}
                {/* Splits into 3. Total width between outer items.
                    React to Tailwind center distance:
                    React (110), Next (110), Tailwind (110)
                    Gaps: 60px * 2 = 120. Width = 110 + 60 + 110 + 60 + 110 = 450 total.
                    Centers distance = (110/2 + 60 + 110 + 60 + 110/2) = 340px! 
                */}
                <div className="w-[256px] sm:w-[340px] -mt-1 z-0 relative">
                    <VLine height="h-6" />
                    <div className="h-6 border-t-2 border-l-2 border-r-2 border-[#1e1e2d] rounded-t-xl" />
                    {/* The middle vertical drop */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 h-6 w-[2px] bg-[#1e1e2d]" />
                </div>

                {/* ---------- ROW 3 ---------- */}
                {/* 110px items + 60px gap = 170px center-to-center. For mobile 24*4=96px + 32px gap = 128px! */}
                <div className="flex justify-center gap-8 sm:gap-[60px] relative z-10 w-full mb-0">
                    <SkillNode icon={<FaReact color="#61DAFB" />} name="React" />
                    <SkillNode icon={<SiNextdotjs color="#ffffff" />} name="Next.js" />
                    <SkillNode icon={<SiTailwindcss color="#38BDF8" />} name="Tailwind" />
                </div>

                {/* Connecting Logic 3 -> 4 */}
                <div className="flex justify-center gap-8 sm:gap-[60px] w-full z-0 relative -mt-1">
                    <div className="w-[96px] sm:w-[110px] flex justify-center"><VLine height="h-10" /></div>
                    <div className="w-[96px] sm:w-[110px] flex justify-center"><VLine height="h-10" /></div>
                    <div className="w-[96px] sm:w-[110px] flex justify-center"><VLine height="h-10" /></div>
                </div>

                {/* ---------- ROW 4 ---------- */}
                <div className="flex justify-center gap-8 sm:gap-[60px] relative z-10 w-full -mt-1">
                    <SkillNode icon={<SiRedis color="#DC382D" />} name="Redis" />
                    <SkillNode icon={<SiMongodb color="#47A248" />} name="MongoDB" />
                    <SkillNode icon={<FaNodeJs color="#339933" />} name="Node.js" />
                </div>

            </motion.div>
        </section>
    );
};

export default Skills;
