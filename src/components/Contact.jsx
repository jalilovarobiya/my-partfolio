import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTelegram, FaLinkedin, FaCog } from 'react-icons/fa';
import AdminMessages from './AdminMessages';
import AdminLogin from './AdminLogin';
import { useAdmin } from '../contexts/AdminContext';

const Contact = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isAuthenticated } = useAdmin();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/jalilovarobiya',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:shadow-gray-500/25'
    },
    {
      name: 'Telegram',
      icon: <FaTelegram />,
      url: 'https://t.me/iamdjalilova_r',
      color: 'from-[#00C6FF] to-[#005BEA]',
      hoverColor: 'hover:shadow-[#00C6FF]/40'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/robiya-jalilova-12535a37b/',
      color: 'from-[#0A66C2] to-[#004182]',
      hoverColor: 'hover:shadow-[#0A66C2]/40'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-cyan-900/10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group max-w-md" // mx-auto olib tashlandi
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect With Me</h3>
            <div className="grid gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`group flex items-center gap-4 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white transition-all duration-300 ${social.hoverColor} hover:shadow-xl`}
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">{social.name}</span>
                    <p className="text-sm opacity-90">Follow me on {social.name}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isAdminOpen && (
          <AdminMessages
            isOpen={isAdminOpen}
            onClose={() => setIsAdminOpen(false)}
          />
        )}
        {isLoginOpen && (
          <AdminLogin
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;