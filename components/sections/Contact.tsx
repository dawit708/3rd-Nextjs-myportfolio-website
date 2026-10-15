"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import { Send, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

// ====== TYPES ======
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface StatusState {
  type: 'success' | 'error' | '';
  message: string;
}

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<StatusState>({ type: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ===== EmailJS (Primary) =====
  const submitToEmailJS = async (): Promise<boolean> => {
    try {
      if (!formRef.current) return false;
      await emailjs.sendForm(
        'service_9xrmjuc',
        'template_dm0mpka',
        formRef.current,
        'yIlTZ7wRy6pysn3Mb'
      );
      return true;
    } catch (error) {
      console.error('EmailJS error:', error);
      return false;
    }
  };

  // ===== Web3Forms (Fallback) =====
  const submitToWeb3Forms = async (formData: FormData): Promise<boolean> => {
    try {
      const web3FormData = new FormData();
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("message", formData.message);
      web3FormData.append("access_key", "921fbc78-55ce-4982-b9e3-bc6bbeb7f3f3");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Web3Forms error:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    let success = await submitToEmailJS();
    if (!success) {
      console.log('EmailJS failed, trying Web3Forms...');
      success = await submitToWeb3Forms(form);
    }

    if (success) {
      setStatus({
        type: 'success',
        message: 'Thank you! I\'ll get back to you soon.',
      });
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email me directly.',
      });
    }
    setLoading(false);
  };

  // ===== Contact Info =====
  const contactInfo = [
    {
      icon: <FaPhone size={20} />,
      title: 'Phone',
      value: '+251 54 32 97 63',
      link: 'tel:+25154329763',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <FaEnvelope size={20} />,
      title: 'Email',
      value: 'dawittsigie3@gmail.com',
      link: 'mailto:dawittsigie3@gmail.com',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Location',
      value: 'Injibara, Ethiopia',
      link: 'https://maps.google.com/?q=Injibara,Ethiopia',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative z-10">

      {/* ===== CENTERED HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 max-w-3xl mx-auto"
      >
        <motion.span
          className="inline-block text-indigo-500 text-xs font-bold tracking-[0.25em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          05 / Let's Work Together
        </motion.span>

        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </motion.h2>

        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 128, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        <motion.p
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Have a question or want to work together? I'd love to hear from you.
        </motion.p>
      </motion.div>

      {/* ===== TWO COLUMN LAYOUT ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ===== LEFT: FORM ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Tell me what you have in mind.
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form and I'll respond within 24 hours.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="text-white text-sm font-semibold block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-white text-sm font-semibold block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-white text-sm font-semibold block mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* Status */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 p-4 rounded-xl text-sm ${
                      status.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    )}
                    {status.message}
                  </motion.div>
                )}

                {/* Gradient Send Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:shadow-lg hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </motion.button>

                <p className="text-gray-600 text-xs text-center">
                  Your details stay private. No spam, no surprises.
                </p>

              </form>
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT: CONTACT INFO + MAP ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >

          {/* Contact Info Cards */}
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative flex items-center gap-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <div
                className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
              >
                {item.icon}
              </div>
              <div className="relative flex-1">
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">
                  {item.title}
                </p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="relative text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </motion.a>
          ))}

          {/* ===== GOOGLE MAP FOR INJIBARA ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 p-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white">
                <FaMapMarkerAlt size={14} />
              </div>
              <div>
                <p className="text-xs text-gray-500 tracking-widest uppercase">
                  Based Here
                </p>
                <p className="text-white font-semibold text-sm">Injibara, Ethiopia</p>
              </div>
            </div>

            <div className="aspect-[16/10] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62857.40505393446!2d36.91098065!3d10.94945645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1646d12acf5a0a9f%3A0x7c2b8e2d1e6e6b6e!2sInjibara%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Injibara, Ethiopia Location"
              />
            </div>

            {/* Bottom caption */}
            <div className="px-4 py-3 border-t border-[var(--border)] flex items-center justify-between">
              <p className="text-xs text-gray-500 tracking-widest uppercase">
                Based here. Building everywhere.
              </p>
              <span className="flex items-center gap-1.5 text-xs text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available
              </span>
            </div>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5"
          >
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-4 text-center">
              Connect With Me
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/dawit708"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1da1f2] hover:border-[#1da1f2] transition-all duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ea4c89] hover:border-[#ea4c89] transition-all duration-300"
              >
                <FaDribbble size={18} />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};