"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    const services = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Web Development",
            description: "Full-stack web applications with modern frameworks and best practices.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile Development",
            description: "Cross-platform mobile apps using React Native and progressive web apps.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Backend Development",
            description: "Scalable APIs and database design with Node.js, Python, and cloud services.",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "UI/UX Design",
            description: "Beautiful, intuitive interfaces with modern design systems and animations.",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "DevOps & Deployment",
            description: "CI/CD pipelines, cloud infrastructure, and production deployment.",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance Optimization",
            description: "Speed optimization, SEO, and technical performance improvements.",
            color: "from-yellow-500 to-yellow-600"
        }
    ];

    const experience = [
        { number: "2+", label: "Years Experience" },
        { number: "15+", label: "Projects Completed" },
        { number: "5+", label: "Technologies Mastered" },
        { number: "100%", label: "Client Satisfaction" }
    ];

    return (
        <>
            <section
                id="about"
                className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            A passionate full-stack developer with 2+ years of enterprise experience, 
                            transitioning from full-time to freelance to deliver exceptional digital solutions.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group relative p-6 bg-gray-800/90 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ 
                                    y: -5,
                                    backgroundColor: "rgba(31, 41, 55, 0.95)"
                                }}
                            >
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Experience Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {experience.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Expand Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.button
                            onClick={() => setIsExpanded(true)}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More About Me
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Expanded Modal */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(false)}
                    >
                        <div className="absolute inset-0 bg-black/80" />
                        
                        <motion.div
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="sticky top-0 p-6 border-b border-gray-700 bg-gray-900/95 rounded-t-2xl">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold text-white">About Sriram Garapati</h3>
                                    <motion.button
                                        onClick={() => setIsExpanded(false)}
                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-8">
                                {/* Story */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-4">My Journey</h4>
                                    <div className="text-gray-300 space-y-4 leading-relaxed">
                                        <p>
                                            I started my journey as a passionate developer with a love for creating 
                                            digital experiences that make a difference. With 2+ years of enterprise 
                                            experience under my belt, I&apos;ve worked on complex projects that have 
                                            shaped my understanding of scalable architecture and user-centered design.
                                        </p>
                                        <p>
                                            Now, I&apos;m transitioning from full-time employment to freelance work, 
                                            bringing the same level of professionalism and expertise to every 
                                            project I take on. My goal is to help businesses and individuals 
                                            bring their digital visions to life with clean, efficient, and 
                                            beautiful code.
                                        </p>
                                        <p>
                                            I believe in continuous learning and staying up-to-date with the 
                                            latest technologies and best practices. This commitment to growth 
                                            ensures that every project I deliver is built with modern, 
                                            maintainable, and future-proof solutions.
                                        </p>
                                    </div>
                                </div>

                                {/* Approach */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-4">My Approach</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-4 bg-gray-800/90 rounded-xl border border-gray-700/50">
                                            <h5 className="font-semibold text-white mb-2">Collaborative</h5>
                                            <p className="text-gray-300 text-sm">
                                                I work closely with clients to understand their vision and 
                                                ensure every detail meets their expectations.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-800/90 rounded-xl border border-gray-700/50">
                                            <h5 className="font-semibold text-white mb-2">Quality-Focused</h5>
                                            <p className="text-gray-300 text-sm">
                                                Every line of code is written with performance, security, 
                                                and maintainability in mind.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-800/90 rounded-xl border border-gray-700/50">
                                            <h5 className="font-semibold text-white mb-2">Timely Delivery</h5>
                                            <p className="text-gray-300 text-sm">
                                                I respect deadlines and ensure projects are delivered on time 
                                                without compromising quality.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-800/90 rounded-xl border border-gray-700/50">
                                            <h5 className="font-semibold text-white mb-2">Ongoing Support</h5>
                                            <p className="text-gray-300 text-sm">
                                                My relationship with clients doesn&apos;t end at delivery - 
                                                I provide ongoing support and maintenance.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Values */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-4">Core Values</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h5 className="font-semibold text-white">Innovation</h5>
                                                <p className="text-gray-300 text-sm">
                                                    Embracing new technologies and creative solutions to solve complex problems.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h5 className="font-semibold text-white">Excellence</h5>
                                                <p className="text-gray-300 text-sm">
                                                    Striving for the highest quality in every project, no matter the size.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h5 className="font-semibold text-white">Integrity</h5>
                                                <p className="text-gray-300 text-sm">
                                                    Building trust through honest communication and reliable delivery.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
} 