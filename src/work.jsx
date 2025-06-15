import React from "react";
import Header from "./header";
import { experiences } from "./data/experiences";
import Footer from "./footer";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
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
            Work Experience
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career path.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={exp.id} 
                experience={exp} 
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const TimelineItem = ({ experience, index, isLeft }) => {
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
      <div className={`w-full md:w-[calc(50%-20px)] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
            <FaBriefcase size={24} />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {experience.title}
            </h3>
            
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
            
            <div className="mt-4 space-y-2">
              {experience.description.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            
            {experience.skills && (
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;