"use client";

import { motion } from "framer-motion";
import { Code, Database, Palette, Smartphone, Globe, Zap } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Code className="w-6 h-6" />,
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "Tailwind CSS", level: 90 },
                { name: "JavaScript", level: 95 }
            ],
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Backend Development",
            icon: <Database className="w-6 h-6" />,
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Python", level: 75 },
                { name: "Express.js", level: 80 },
                { name: "PostgreSQL", level: 70 },
                { name: "MongoDB", level: 75 }
            ],
            color: "from-green-500 to-green-600"
        },
        {
            title: "Mobile & PWA",
            icon: <Smartphone className="w-6 h-6" />,
            skills: [
                { name: "React Native", level: 70 },
                { name: "Progressive Web Apps", level: 80 },
                { name: "Mobile Optimization", level: 75 },
                { name: "Responsive Design", level: 90 }
            ],
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Design & UX",
            icon: <Palette className="w-6 h-6" />,
            skills: [
                { name: "UI/UX Design", level: 75 },
                { name: "Figma", level: 70 },
                { name: "User Research", level: 65 },
                { name: "Prototyping", level: 70 }
            ],
            color: "from-pink-500 to-pink-600"
        },
        {
            title: "DevOps & Tools",
            icon: <Globe className="w-6 h-6" />,
            skills: [
                { name: "Git & GitHub", level: 85 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
                { name: "CI/CD", level: 70 },
                { name: "Vercel", level: 80 }
            ],
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Performance & SEO",
            icon: <Zap className="w-6 h-6" />,
            skills: [
                { name: "Performance Optimization", level: 80 },
                { name: "SEO", level: 75 },
                { name: "Analytics", level: 70 },
                { name: "Testing", level: 75 }
            ],
            color: "from-yellow-500 to-yellow-600"
        }
    ];

    return (
        <section
            id="skills"
            className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black"
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
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        A comprehensive skill set developed through hands-on experience and continuous learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="bg-gray-800/90 rounded-2xl border border-gray-700/50 p-6 hover:border-gray-600/50 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            whileHover={{ 
                                y: -5,
                                backgroundColor: "rgba(31, 41, 55, 0.95)"
                            }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                    <div className="text-white">
                                        {category.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="space-y-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ 
                                                    duration: 1, 
                                                    delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                                                    ease: "easeOut"
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="bg-gray-800/90 rounded-2xl border border-gray-700/50 p-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Always Learning
                        </h3>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Technology evolves rapidly, and I&apos;m committed to staying current with the latest 
                            trends and best practices. I regularly explore new frameworks, tools, and methodologies 
                            to deliver cutting-edge solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 