"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            value: "sriram@example.com",
            link: "mailto:sriram@example.com"
        },
        {
            icon: <Phone className="w-5 h-5" />,
            title: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Location",
            value: "Remote / Worldwide",
            link: null
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Availability",
            value: "Available for new projects",
            link: null
        }
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github className="w-5 h-5" />,
            url: "https://github.com/sriramgarapati",
            color: "hover:text-gray-300"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            url: "https://linkedin.com/in/sriramgarapati",
            color: "hover:text-blue-400"
        },
        {
            name: "Twitter",
            icon: <Twitter className="w-5 h-5" />,
            url: "https://twitter.com/sriramgarapati",
            color: "hover:text-blue-400"
        }
    ];

    return (
        <section
            id="contact"
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
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Ready to start your next project? Let's discuss how I can help bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gray-800/90 rounded-2xl border border-gray-700/50 p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                            
                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-8"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="w-16 h-16 text-green-400 mx-auto mb-4">
                                        <Send className="w-16 h-16" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Project inquiry"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>
                                    
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button 
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
                                        >
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </Button>
                                    </motion.div>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Contact Details */}
                        <div className="bg-gray-800/90 rounded-2xl border border-gray-700/50 p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                            <div className="text-white">
                                                {info.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">{info.title}</h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-gray-300 hover:text-blue-400 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-300">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-800/90 rounded-2xl border border-gray-700/50 p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                            
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-gray-700/90 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50`}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="bg-gray-800/90 rounded-2xl border border-gray-700/50 p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Current Status</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-gray-300">Available for new projects</span>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    I'm currently accepting new freelance opportunities. 
                                    Typical response time is within 24 hours.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 