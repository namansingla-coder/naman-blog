import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaProjectDiagram, FaBriefcase, FaArrowRight, FaCode, FaLaptopCode, FaGithub, FaLinkedin, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaUniversity, FaMedal, FaBook } from "react-icons/fa";
import Header from "./header";
import Footer from "./footer";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { education } from "./data/education";
import { about } from "./data/about";

const Home = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header selected="home" />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-28 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Profile Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md opacity-70 animate-pulse"></div>
              <img
                src={about.profile}
                alt="Profile"
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full shadow-xl object-cover border-4 border-white dark:border-gray-800"
              />
            </motion.div>

            {/* Content */}
            <div className="text-center md:text-left md:flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{about.name}</span> 👋
                </h1>
                
                <h2 className="mt-3 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                  {about.education.degree} Student
                </h2>
                
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  {about.description}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link
                    to="/about"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg flex items-center gap-2 font-medium transition-all duration-300"
                  >
                    Learn More About Me <FaArrowRight className="text-sm" />
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition-all duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
                
                {/* Social Links */}
                <div className="mt-6 flex gap-4 justify-center md:justify-start">
                  <motion.a 
                    href={about.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a 
                    href={about.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Skills Pills */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center md:justify-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {about.skills.slice(0, 8).map((skill, index) => (
              <motion.span
                key={index}
                className="px-3 py-1.5 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Project Section */}
      <div className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Check out some of my recent work
            </p>
          </motion.div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <img 
                  src={projects[currentProjectIndex].image} 
                  alt={projects[currentProjectIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{projects[currentProjectIndex].title}</h3>
                  <p className="text-gray-200 mb-4 max-w-2xl">{projects[currentProjectIndex].description}</p>
                  <div className="flex gap-4">
                    {projects[currentProjectIndex].github !== "#" && (
                      <a
                        href={projects[currentProjectIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors flex items-center gap-2"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                    {projects[currentProjectIndex].live !== "#" && (
                      <a
                        href={projects[currentProjectIndex].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600/90 hover:bg-blue-700 backdrop-blur-sm rounded-lg transition-colors flex items-center gap-2"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Project Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentProjectIndex === index 
                      ? "bg-white scale-125" 
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-500 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
            >
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center gap-3">
              <div className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md">
                <FaGraduationCap className="text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              My academic background and qualifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-sm"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      {index === 0 ? <FaUniversity size={24} /> : <FaBook size={24} />}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {edu.title}
                      </h3>
                      
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-blue-500 dark:text-blue-400" />
                          <span>{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          <FaCalendarAlt className="text-blue-500 dark:text-blue-400" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-700 dark:text-gray-300">
                        {edu.details}
                      </p>
                      
                      {index === 0 && (
                        <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                          <FaMedal className="text-amber-500" /> CGPA: {edu.cgpa}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center gap-3">
              <div className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md">
                <FaBriefcase className="text-emerald-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              My professional journey and work experience
            </p>
          </motion.div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-teal-500 dark:from-emerald-700 dark:to-teal-900"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-8 relative">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 dark:border-emerald-400 z-10"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`relative pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:w-1/2' : 'md:pl-12 md:w-1/2 md:ml-auto'}`}>
                    <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-300 dark:bg-emerald-700"></div>
                    <div className="md:hidden absolute left-0 top-8 w-3 h-3 rounded-full bg-white border-2 border-emerald-500 dark:border-emerald-400"></div>
                    
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {exp.title}
                      </h3>
                      
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-emerald-500 dark:text-emerald-400" />
                          <span>{exp.company}, {exp.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          <FaCalendarAlt className="text-emerald-500 dark:text-emerald-400" />
                          <span>{exp.date}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        {exp.description.map((point, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <FaCheckCircle className="text-emerald-500 dark:text-emerald-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-700 dark:text-gray-300 text-sm">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-lg font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
            >
              View Full Experience <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default Home;