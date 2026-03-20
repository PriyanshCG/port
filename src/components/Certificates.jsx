import { motion } from 'framer-motion';

// Placeholder data - replace with actual certificate images
const certificates = [
    { title: "React Developer", org: "Udemy", date: "2024", id: 1, image: "https://placehold.co/600x400/png" },
    { title: "Full Stack Bootcamp", org: "Coding Gita", date: "2025", id: 2, image: "https://placehold.co/600x400/png" },
    { title: "JavaScript Mastery", org: "Coursera", date: "2023", id: 3, image: "https://placehold.co/600x400/png" },
    { title: "UI/UX Design", org: "Google", date: "2024", id: 4, image: "https://placehold.co/600x400/png" },
    { title: "Backend Engineering", org: "FreeCodeCamp", date: "2025", id: 5, image: "https://placehold.co/600x400/png" },
    { title: "Cloud Computing", org: "AWS", date: "2024", id: 6, image: "https://placehold.co/600x400/png" },
    // Duplicate for seamless loop if items are few
    { title: "React Developer", org: "Udemy", date: "2024", id: 11, image: "https://placehold.co/600x400/png" },
    { title: "Full Stack Bootcamp", org: "Coding Gita", date: "2025", id: 12, image: "https://placehold.co/600x400/png" },
    { title: "JavaScript Mastery", org: "Coursera", date: "2023", id: 13, image: "https://placehold.co/600x400/png" },
];

const Certificates = () => {
    return (
        <section className="relative min-h-screen py-20 overflow-hidden bg-transparent text-white">
            <div className="relative z-10 flex flex-col justify-center min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & <span className="text-accent">Achievements</span></h2>
                    <p className="text-gray-400">Continuous learning and validation of skills</p>
                </motion.div>

                {/* Auto-scrolling Carousel */}
                <div className="w-full overflow-hidden mb-20 relative">
                    <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-[#0c0c0c] to-transparent z-20" />
                    <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-[#0c0c0c] to-transparent z-20" />

                    <motion.div
                        className="flex gap-8 w-max px-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    >
                        {[...certificates, ...certificates].map((cert, idx) => (
                            <div
                                key={idx}
                                className="w-72 md:w-96 h-auto bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl p-4 flex flex-col justify-between hover:border-accent transition-colors duration-300 group shadow-lg"
                            >
                                <div className="h-48 w-full bg-gray-800/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold truncate group-hover:text-accent transition-colors">{cert.title}</h3>
                                    <p className="text-sm text-gray-400 flex justify-between">
                                        <span>{cert.org}</span>
                                        <span>{cert.date}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* All Certificates Grid Reveal */}
                <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-bold mb-8 border-l-4 border-accent pl-4">All Certificates</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.slice(0, 3).map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="flex items-center gap-4 bg-gray-900/40 p-4 rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                                <div className="w-16 h-12 rounded overflow-hidden shrink-0">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{cert.title}</h4>
                                    <p className="text-xs text-gray-400">{cert.org} • {cert.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
