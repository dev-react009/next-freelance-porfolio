"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
}

const emailConfig: EmailConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const RESET_DELAY = 3000;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Clear any previous errors
        setError(null);
        setIsLoading(true);

        try {
            const templateParams = {
                from_name: formData.name.trim(),
                from_email: formData.email.trim(),
                subject: formData.subject.trim(),
                message: formData.message.trim(),
                // Optional: Add timestamp
                sent_at: new Date().toLocaleString(),
            };
            
            // Send email using the config object or direct env variables
            const response = await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams,
                emailConfig.publicKey
            );

            // Check if email was sent successfully
            if (response.status === 200) {
                setIsSubmitted(true);
                
                // Reset form after delay
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                }, RESET_DELAY);
            }

        } catch (error) {
            console.error("Error sending email:", error);
            setError("Failed to send message. Please try again later.");
        } finally {
            setIsLoading(false);
        }
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
            value: "sriram.garapati16@gmail.com",
            link: "mailto:sriram.garapati16@gmail.com" // Fixed the link
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
            url: "https://github.com/dev-react009",
            color: "hover:text-blue-400"
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
            url: "https://x.com/sriram_gsr16",
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
                        Ready to start your next project? Let&apos;s discuss how I can help bring your ideas to life.
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
                            
                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-300"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {error}
                                </motion.div>
                            )}
                            
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
                                    <p className="text-gray-300">Thank you for reaching out. I&apos;ll get back to you soon.</p>
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
                                                disabled={isLoading}
                                                className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                                disabled={isLoading}
                                                className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                            disabled={isLoading}
                                            className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                            disabled={isLoading}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>
                                    
                                    <motion.div
                                        whileHover={{ scale: isLoading ? 1 : 1.02 }}
                                        whileTap={{ scale: isLoading ? 1 : 0.98 }}
                                    >
                                        <Button 
                                            type="submit"
                                            disabled={isLoading}
                                            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                                                isLoading 
                                                    ? 'bg-gray-600 cursor-not-allowed' 
                                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer'
                                            } text-white`}
                                        >
                                            {isLoading ? (
                                                <div className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </div>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Send Message
                                                </>
                                            )}
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
                                    I&apos;m currently accepting new freelance opportunities. 
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