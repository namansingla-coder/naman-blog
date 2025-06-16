import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUser, 
  FaEnvelope, 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaGithub,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import { about } from './data/about';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [activeTab, setActiveTab] = useState('message'); // 'message' or 'connect'
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    // Get form data
    const formElement = e.target;
    const formData = new FormData(formElement);
    
    // Submit to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
      // Also submit to Formspree for email notifications
      return fetch("https://formspree.io/f/myzjjdlb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
    })
    .then(() => {
      // Success handling
      setSubmitStatus({ 
        success: true, 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      // Error handling
      console.error(error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send the message. Please try again later.' 
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header selected="contact" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-16 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question, project idea, or just want to say hello? I'd love to hear from you!
          </p>
        </motion.div>

        

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'message' ? (
              <motion.div
                key="message-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-8"
              >
                {/* Contact Info */}
                <motion.div
                  className="md:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                    <span className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                      <FaMapMarkerAlt />
                    </span>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <ContactInfoItem 
                      icon={<FaMapMarkerAlt />} 
                      title="Location" 
                      content={about.location} 
                    />
                    <ContactInfoItem 
                      icon={<FaEnvelope />} 
                      title="Email" 
                      content={about.email} 
                      isLink={`mailto:${about.email}`}
                    />
                    <ContactInfoItem 
                      icon={<FaPhone />} 
                      title="Phone" 
                      content={about.phone} 
                      isLink={`tel:${about.phone}`}
                    />
                  </div>
                  
                  {/* Quick Connect */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Quick Connect</h3>
                    <div className="flex gap-4">
                      <SocialButton href={about.linkedin} icon={<FaLinkedin size={18} />} label="LinkedIn" color="bg-blue-600" />
                      <SocialButton href={about.twitter} icon={<FaTwitter size={18} />} label="Twitter" color="bg-sky-500" />
                      <SocialButton href={about.github} icon={<FaGithub size={18} />} label="GitHub" color="bg-gray-800" />
                      <SocialButton href={about.instagram} icon={<FaInstagram size={18} />} label="Instagram" color="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700" />
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  className="md:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                    <span className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                      <FaPaperPlane />
                    </span>
                    Send Me a Message
                  </h2>
                  
                  <AnimatePresence>
                    {submitStatus.message && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                          submitStatus.success 
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" 
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                      >
                        <div className="mt-0.5">
                          {submitStatus.success ? <FaCheckCircle /> : <FaExclamationTriangle />}
                        </div>
                        <div>
                          {submitStatus.message}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <form 
                    name="contact"
                    method="POST"
                    action="/"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <input name="bot-field" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        label="Name"
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        icon={<FaUser />}
                        placeholder="Your name"
                      />
                      
                      <FormField
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        icon={<FaEnvelope />}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <FormField
                      label="Subject"
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                    />
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Your message here..."
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                          rows="5"
                        />
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-md flex items-center gap-2 disabled:opacity-70 ml-auto"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </div>
                        ) : (
                          <>
                            <FaPaperPlane /> Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="connect-options"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                    <span className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                      <FaLinkedin />
                    </span>
                    Connect With Me
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ConnectCard 
                      icon={<FaLinkedin size={24} />} 
                      title="LinkedIn" 
                      description="Let's connect professionally" 
                      link={about.linkedin}
                      color="from-blue-500 to-blue-700"
                    />
                    <ConnectCard 
                      icon={<FaTwitter size={24} />} 
                      title="Twitter" 
                      description="Follow me for updates" 
                      link={about.twitter}
                      color="from-sky-400 to-sky-600"
                    />
                    <ConnectCard 
                      icon={<FaGithub size={24} />} 
                      title="GitHub" 
                      description="Check out my code" 
                      link={about.github}
                      color="from-gray-700 to-gray-900"
                    />
                    <ConnectCard 
                      icon={<FaInstagram size={24} />} 
                      title="Instagram" 
                      description="Follow my journey" 
                      link={about.instagram}
                      color="from-pink-500 to-purple-600"
                    />
                  </div>
                  
                  <div className="mt-10 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-200/50 dark:border-blue-900/50">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">Looking to collaborate?</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    </p>
                    <button 
                      onClick={() => setActiveTab('message')}
                      className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                    >
                      <FaPaperPlane /> Send a Direct Message
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const TabButton = ({ active, onClick, icon, text }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
      active 
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
        : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/80"
    }`}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    {icon}
    {text}
  </motion.button>
);

const ContactInfoItem = ({ icon, title, content, isLink }) => (
  <motion.div 
    className="flex items-start gap-4"
    whileHover={{ x: 5 }}
  >
    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-gray-800 dark:text-gray-200">{title}</h3>
      {isLink ? (
        <a 
          href={isLink} 
          target={isLink.startsWith('http') ? "_blank" : undefined}
          rel={isLink.startsWith('http') ? "noopener noreferrer" : undefined}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      )}
    </div>
  </motion.div>
);

const SocialButton = ({ href, icon, label, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${color} p-3 rounded-full text-white shadow-md hover:shadow-lg transition-all`}
    whileHover={{ y: -3 }}
    whileTap={{ y: 0 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

const ConnectCard = ({ icon, title, description, link, color }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
    whileHover={{ y: -5 }}
  >
    <div className={`bg-gradient-to-r ${color} p-6 text-white flex justify-center`}>
      {icon}
    </div>
    <div className="p-6 text-center">
      <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  </motion.a>
);

const FormField = ({ label, id, name, type, value, onChange, icon, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 dark:placeholder-gray-500`}
      />
    </div>
  </div>
);

export default ContactPage;