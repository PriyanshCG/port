import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTerminal } from 'react-icons/fa';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Hackathon', href: '#hackathon' },
    { name: 'Education', href: '#education' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
            const sections = navItems.map(i => i.href.substring(1));
            const pos = window.scrollY + 200;
            for (const sec of [...sections].reverse()) {
                const el = document.getElementById(sec);
                if (el && el.offsetTop <= pos) { setActiveSection(sec); break; }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'navbar-glass' : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={e => scrollTo(e, '#home')}
                    className="flex items-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="w-8 h-8 border border-[#FFD700]/50 flex items-center justify-center group-hover:border-[#FFD700] transition-colors">
                        <FaTerminal className="text-[#FFD700] text-xs" />
                    </div>
                    <span className="font-mono text-xl font-bold tracking-tighter flex items-center gap-1 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] transition-all duration-300">
                        <span className="text-[#FFD700]">&lt;</span>
                        <span className="text-white">Priyansh</span>
                        <span className="text-[#FFFACD]">/</span>
                        <span className="text-[#FFD700]">&gt;</span>
                    </span>
                </motion.a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map(item => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={e => scrollTo(e, item.href)}
                                    className={`relative px-4 py-2 text-sm font-mono transition-all duration-300 block rounded ${isActive
                                        ? 'text-[#FFD700]'
                                        : 'text-slate-400 hover:text-[#FFD700]'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 bg-[#FFD700]/8 rounded border border-[#FFD700]/20"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                    {isActive && (
                                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FFD700] rounded-full shadow-[0_0_6px_#FFD700]" />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {[0, 1, 2].map(i => (
                        <motion.span
                            key={i}
                            className="block h-[1.5px] bg-[#FFD700] rounded"
                            style={{ width: i === 1 ? 20 : 26 }}
                            animate={mobileOpen
                                ? i === 0 ? { rotate: 45, y: 5 } : i === 2 ? { rotate: -45, y: -5 } : { opacity: 0 }
                                : { rotate: 0, y: 0, opacity: 1 }
                            }
                            transition={{ duration: 0.2 }}
                        />
                    ))}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden navbar-glass border-t border-[#FFD700]/10 px-6 pb-4"
                    >
                        {navItems.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={e => scrollTo(e, item.href)}
                                className={`block py-3 text-sm font-mono border-b border-white/5 transition-colors ${activeSection === item.href.substring(1)
                                    ? 'text-[#FFD700]' : 'text-slate-400'
                                    }`}
                            >
                                <span className="text-[#FFD700]/50">~/</span> {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
