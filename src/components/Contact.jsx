import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiSololearn } from 'react-icons/si';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Credentials ───────────────────────────────────────
// Replace these with your actual EmailJS credentials:
const EMAILJS_SERVICE_ID = 'service_6tk81ec';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_11mphcm'; // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'IKbqUEe-vu3L7DpC_';    // e.g. 'aBcDeFgHiJkLmN'
// ────────────────────────────────────────────────────────────────

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setError('');

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
            },
            EMAILJS_PUBLIC_KEY,
        )
            .then(() => {
                setSending(false);
                setSent(true);
                setForm({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSent(false), 5000);
            })
            .catch((err) => {
                setSending(false);
                setError('Failed to send message. Please try again.');
                console.error('EmailJS Error:', err);
                setTimeout(() => setError(''), 5000);
            });
    };

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] rounded-full pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(ellipse, #FFD700, #FFFACD)' }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-label mb-4"
                >
                    <span>06 — Contact</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's build something{' '}
                        <span className="gradient-text">amazing together</span> 🚀
                    </h2>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        Have a project in mind or just want to say hi? My inbox is always open.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        {/* Email card */}
                        <div className="glass-card p-6 flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700]/20 transition-colors">
                                <FaEnvelope className="text-[#FFD700]" />
                            </div>
                            <div>
                                <div className="text-xs font-mono text-slate-500 mb-0.5">Email</div>
                                <a
                                    href="mailto:priyansh30407@gmail.com"
                                    className="text-sm text-slate-300 hover:text-[#FFD700] transition-colors font-mono"
                                >
                                    priyansh30407@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Social links */}
                        <div>
                            <div className="text-xs font-mono text-slate-500 mb-4 tracking-widest uppercase">Socials</div>
                            <div className="space-y-3">
                                {[
                                    { icon: <FaGithub />, label: 'GitHub', handle: 'PriyanshCG', href: 'https://github.com/PriyanshCG', color: '#ffffff' },
                                    { icon: <FaLinkedin />, label: 'LinkedIn', handle: 'priyansh-patel-291377410', href: 'https://www.linkedin.com/in/priyansh-patel-291377410/', color: '#0077b5' },
                                    { icon: <FaXTwitter />, label: 'X', handle: 'Priyanshhh_300', href: 'https://x.com/Priyanshhh_300', color: '#ffffff' },
                                    { icon: <FaYoutube />, label: 'YouTube', handle: 'PriyanshPatel-d7i', href: 'https://www.youtube.com/@PriyanshPatel-d7i', color: '#ff0000' },
                                    { icon: <SiSololearn />, label: 'Sololearn', handle: '35528286', href: 'https://www.sololearn.com/en/profile/35528286', color: '#27B885' },
                                    { icon: <SiLeetcode />, label: 'LeetCode', handle: 'priyanshhh30', href: 'https://leetcode.com/u/priyanshhh30/', color: '#FFA116' },
                                ].map(s => (
                                    <motion.a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 glass-card p-4 group"
                                        whileHover={{ x: 4 }}
                                        style={{ '--s-color': s.color }}
                                    >
                                        <span className="text-lg text-slate-500 group-hover:text-white transition-colors">{s.icon}</span>
                                        <div>
                                            <div className="text-xs text-slate-500">{s.label}</div>
                                            <div className="text-sm font-mono text-slate-300 group-hover:text-white transition-colors">@{s.handle}</div>
                                        </div>
                                        <span className="ml-auto text-xs text-slate-600 group-hover:text-[#FFD700] transition-colors">→</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-dot bg-[#ff5f57]" />
                                <div className="terminal-dot bg-[#ffbd2e]" />
                                <div className="terminal-dot bg-[#28c840]" />
                                <span className="text-xs font-mono text-slate-500 ml-2">new_message.exe</span>
                            </div>

                            <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-mono text-slate-500 mb-1.5 block">
                                            <span className="text-[#FFD700]">const</span> name
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Priyansh Patel"
                                            className="contact-input"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-mono text-slate-500 mb-1.5 block">
                                            <span className="text-[#FFD700]">const</span> email
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                            className="contact-input"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-mono text-slate-500 mb-1.5 block">
                                        <span className="text-[#FFFACD]">let</span> subject
                                    </label>
                                    <input
                                        name="subject"
                                        type="text"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project Collaboration"
                                        className="contact-input"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-mono text-slate-500 mb-1.5 block">
                                        <span className="text-[#FFFACD]">let</span> message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your project..."
                                        className="contact-input resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={sending || sent}
                                    whileHover={!sent && !sending ? { scale: 1.02 } : {}}
                                    whileTap={!sent && !sending ? { scale: 0.98 } : {}}
                                    className={`w-full py-4 rounded font-mono font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300 ${sent
                                        ? 'bg-[#FFD700]/20 border border-[#FFD700]/40 text-[#FFD700]'
                                        : 'btn-neon-blue'
                                        }`}
                                >
                                    {sending ? (
                                        <>
                                            <motion.span
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                className="inline-block w-4 h-4 border-2 border-[#FFD700] border-t-transparent rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : sent ? (
                                        <>
                                            ✅ Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> Send Message
                                        </>
                                    )}
                                </motion.button>

                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center text-sm font-mono text-red-400 bg-red-400/10 border border-red-400/20 rounded px-4 py-2"
                                    >
                                        ⚠️ {error}
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className="container mx-auto max-w-6xl mt-24 pt-8 border-t border-white/5 text-center">
                <p className="text-slate-600 text-sm font-mono">
                    <span className="text-[#FFD700]">©</span> {new Date().getFullYear()}{' '}
                    <span className="text-slate-400">Priyansh Patel</span>
                    {' '}· Built with{' '}
                    <span className="text-[#FFFACD]">React</span> +{' '}
                    <span className="text-[#FFD700]">Tailwind CSS</span> +{' '}
                    <span className="text-[#FFD700]">💚</span>
                </p>
            </div>
        </section>
    );
};

export default Contact;
