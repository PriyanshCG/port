import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="relative min-h-screen py-20 overflow-hidden text-white">
            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-5xl font-bold">Get In <span className="text-accent">Touch</span></h2>
                    <p className="text-gray-400 text-lg max-w-md">
                        Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="flex items-center gap-4 text-xl group">
                        <div className="p-4 bg-gray-900 rounded-full group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                            <FaEnvelope />
                        </div>
                        <a href="mailto:priyansh.patel.a.cg@gmail.com" className="hover:text-accent transition-colors">
                            priyansh.patel.a.cg@gmail.com
                        </a>
                    </div>

                    <div className="flex gap-6 pt-6">
                        <SocialIcon href="https://github.com" icon={<FaGithub />} />
                        <SocialIcon href="https://linkedin.com/in/priyansh-patel-8140b73a1/" icon={<FaLinkedin />} />
                        <SocialIcon href="https://x.com/PriyanshPatel24504" icon={<FaTwitter />} />
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#0c0c0c] p-8 border border-gray-800 shadow-[20px_20px_0px_rgba(163,255,0,0.05)]"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <InputField label="Name" placeholder="John Doe" type="text" />
                            <InputField label="Email" placeholder="john@example.com" type="email" />
                        </div>
                        <InputField label="Subject" placeholder="Project Inquiry" type="text" />

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-2">Message</label>
                            <textarea
                                placeholder="Tell me about your project..."
                                rows="4"
                                className="w-full bg-black/40 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 174, 239, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-accent text-black font-bold py-4 hover:shadow-[0_0_20px_rgba(163,255,0,0.5)] transition-all uppercase tracking-widest"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

            </div>

            <footer className="absolute bottom-0 w-full text-center py-6 text-gray-500 text-sm relative z-10">
                <p>&copy; {new Date().getFullYear()} Priyansh Patel. All rights reserved.</p>
            </footer>
        </section>
    );
};

const InputField = ({ label, placeholder, type }) => (
    <div className="space-y-2">
        <label className="text-sm text-gray-400 ml-2">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-black/40 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
        />
    </div>
);

const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-gray-800 p-3 rounded-full hover:bg-accent"
    >
        {icon}
    </a>
);

export default Contact;
