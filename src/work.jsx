import React, { useState } from "react";
import Header from "./header";
import { experiences } from "./data/experiences";
import Footer from "./footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaChevronDown,
  FaChevronUp,
  FaLinkedin,
  FaFileDownload
} from "react-icons/fa";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <Header selected="work" />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-16 flex-grow">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career path.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-md hover:shadow-lg"
            >
              <FaLinkedin />
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition shadow-md hover:shadow-lg"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-violet-600 rounded-full hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={exp.id} 
                experience={exp} 
                index={index}
                isLeft={index % 2 === 0}
                isExpanded={expandedId === exp.id}
                toggleExpand={() => toggleExpand(exp.id)}
              />
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 dark:border-blue-900/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">Looking for new opportunities</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm currently open to new challenges and opportunities where I can apply my skills and continue growing professionally.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const TimelineItem = ({ experience, index, isLeft, isExpanded, toggleExpand }) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline Dot */}
      <div className="hidden md:block w-20 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-blue-500 z-10"></div>
      </div>
      
      {/* Content Card */}
      <motion.div 
        className={`w-full md:w-[calc(50%-20px)] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700 overflow-hidden ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
        whileHover={{ y: -5 }}
      >
        {/* Card Header */}
        <div 
          className="p-6 cursor-pointer"
          onClick={toggleExpand}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white shadow-md">
              <FaBriefcase size={24} />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {experience.title}
                </h3>
                <button className="text-blue-500 dark:text-blue-400 p-1">
                  {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt />
                  <span>{experience.company}, {experience.location}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <span>{experience.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <div className="p-6 pt-4">
                <div className="space-y-3">
                  {experience.description.map((point, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <FaCheckCircle className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{point}</p>
                    </motion.div>
                  ))}
                </div>
                
                {experience.skills && (
                  <motion.div 
                    className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Experience;