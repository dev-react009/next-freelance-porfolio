"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
    const featuredProjects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Next.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website with animations, dark mode, and interactive elements built with Next.js and Framer Motion.",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            liveUrl: "#",
            githubUrl: "#",
            featured: true
        }
    ];

    const otherProjects = [
        {
            title: "Weather Dashboard",
            description: "Real-time weather application with location-based forecasts and interactive maps.",
            technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Blog Platform",
            description: "A content management system for blogs with markdown support and SEO optimization.",
            technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Chat Application",
            description: "Real-time messaging app with user authentication and file sharing capabilities.",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Fitness Tracker",
            description: "Personal fitness tracking application with workout planning and progress analytics.",
            technologies: ["React Native", "Firebase", "Chart.js", "Expo"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Recipe Finder",
            description: "Recipe discovery app with search, filtering, and meal planning features.",
            technologies: ["React", "Spoonacular API", "Local Storage", "CSS Grid"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Expense Tracker",
            description: "Personal finance management app with budget tracking and expense categorization.",
            technologies: ["React", "Chart.js", "Local Storage", "PWA"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    return (
        <section
            id="projects"
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
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        A showcase of my best work, demonstrating technical skills and creative problem-solving.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="space-y-16 mb-20">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col lg:flex-row gap-8 items-center ${
                                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Project Image */}
                            <div className="lg:w-1/2">
                                <motion.div
                                    className="relative group cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl border border-gray-700/50 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                                            <span className="text-gray-400 text-lg font-medium">
                                                {project.title} Preview
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                                        <div className="flex gap-4">
                                            <motion.a
                                                href={project.liveUrl}
                                                className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href={project.githubUrl}
                                                className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Github className="w-5 h-5" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Project Content */}
                            <div className="lg:w-1/2 space-y-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            className="px-3 py-1 bg-gray-800/90 text-gray-300 text-sm rounded-full border border-gray-700/50"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (index * 0.2) + (techIndex * 0.1) }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-4">
                                    <motion.a
                                        href={project.liveUrl}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Live
                                        <ExternalLink className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800 rounded-full font-medium transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Code
                                        <Github className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Other Projects
                    </h3>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Additional projects showcasing various technologies and problem-solving approaches.
                    </p>
                </motion.div>

                {/* Other Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group bg-gray-800/90 rounded-2xl border border-gray-700/50 p-6 hover:border-gray-600/50 transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                                y: -5,
                                backgroundColor: "rgba(31, 41, 55, 0.95)"
                            }}
                        >
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-gray-700/90 text-gray-300 text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3 pt-2">
                                    <motion.a
                                        href={project.liveUrl}
                                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                                        whileHover={{ x: 2 }}
                                    >
                                        Live Demo
                                        <ExternalLink className="w-3 h-3" />
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors"
                                        whileHover={{ x: 2 }}
                                    >
                                        Code
                                        <Github className="w-3 h-3" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="bg-gray-800/90 rounded-2xl border border-gray-700/50 p-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Let&apos;s work together to bring your ideas to life. I&apos;m available for new projects and excited to help you achieve your goals.
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 