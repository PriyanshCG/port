import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Home', href: '#home', color: 'bg-white/20' },
    { name: 'Skills', href: '#skills', color: 'bg-white/20' },
    { name: 'Projects', href: '#projects', color: 'bg-white/20' },
    { name: 'Certificates', href: '#certificates', color: 'bg-white/20' },
    { name: 'Contact', href: '#contact', color: 'bg-white/20' },
];

const Navbar = ({ introFinished }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [hoveredTab, setHoveredTab] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 300;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={introFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div className="bg-[#0c0c0c]/80 backdrop-blur-2xl border border-[#a3ff00]/20 px-4 py-3 shadow-[0_0_20px_rgba(163,255,0,0.1)] flex items-center">
                <ul className="flex items-center gap-1 md:gap-2">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        const isHovered = hoveredTab === item.name;

                        return (
                            <li
                                key={item.name}
                                onMouseEnter={() => setHoveredTab(item.name)}
                                onMouseLeave={() => setHoveredTab(null)}
                                className="relative"
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className={`relative z-10 px-4 py-2 rounded-md font-mono text-sm font-medium transition-all duration-300 block ${isActive ? 'text-[#a3ff00] drop-shadow-[0_0_8px_rgba(163,255,0,0.8)]' : 'text-gray-400 hover:text-[#a3ff00]'
                                        }`}
                                >
                                    {item.name}

                                    {/* Active State Indicator - Underline Dot */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-dot"
                                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#a3ff00] shadow-[0_0_10px_#a3ff00]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}

                                    {/* Hover State Background */}
                                    {!isActive && isHovered && (
                                        <motion.div
                                            layoutId="hover-pill"
                                            className="absolute inset-0 rounded-full -z-10 bg-white/10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
