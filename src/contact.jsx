import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaLinkedin } from 'react-icons/fa';
import { about } from './data/about';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  
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

    // Form will be handled by Netlify
    // This is just for UX feedback
    setTimeout(() => {
      setSubmitStatus({ 
        success: true, 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Header selected="contact" />
      <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
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
                <ContactInfoItem 
                  icon={<FaLinkedin />} 
                  title="LinkedIn" 
                  content="Connect with me" 
                  isLink={about.linkedin}
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Send Me a Message
              </h2>
              
              {submitStatus.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.success 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" 
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              
              <form 
                name="contact"
                method="POST"
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
                      <>Sending...</>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

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

const FormField = ({ label, id, name, type, value, onChange, icon, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
      />
    </div>
  </div>
);

export default ContactPage;