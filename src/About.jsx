import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Naman_Singla from "./assets/Naman.pdf";
import { about } from "./data/about";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaDownload, FaGraduationCap, FaCode, FaMedal, FaCertificate, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Header selected="about" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Profile */}
          <motion.div 
            className="relative mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={about.profile}
                      alt={about.name}
                      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700"
                    />
                  </motion.div>
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                      {about.name}
                    </h1>
                    <div className="flex items-center mt-3 text-gray-700 dark:text-gray-300">
                      <FaGraduationCap className="mr-2" />
                      <p className="text-lg font-medium">
                        {about.education.degree} @ {about.education.university} ({about.education.batch})
                      </p>
                    </div>
                    <div className="mt-1 text-gray-600 dark:text-gray-400">
                      <p>CGPA: <span className="font-semibold text-blue-600 dark:text-blue-400">{about.education.cgpa}</span></p>
                    </div>
                    <div className="mt-4 text-gray-600 dark:text-gray-400">
                      <p>{about.location} • {about.email} • {about.phone}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {about.description}
                      </p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <SocialIconButton icon={<FaLinkedin />} link={about.linkedin} label="LinkedIn" bgColor="bg-[#0077b5]" />
                      <SocialIconButton icon={<FaGithub />} link={about.github} label="GitHub" bgColor="bg-[#333]" />
                      <SocialIconButton icon={<FaTwitter />} link={about.twitter} label="Twitter" bgColor="bg-[#1DA1F2]" />
                      <SocialIconButton icon={<FaInstagram />} link={about.instagram} label="Instagram" bgColor="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]" />
                      <SocialIconButton icon={<FaDownload />} link={Naman_Singla} label="Resume" bgColor="bg-emerald-600" download={true} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <ContentSection 
              title="Technical Skills" 
              icon={<FaCode className="text-blue-500" />}
              delay={0.3}
            >
              <div className="flex flex-wrap gap-3">
                {about.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </ContentSection>

            {/* Strengths */}
            <ContentSection 
              title="Strengths" 
              icon={<FaLightbulb className="text-yellow-500" />}
              delay={0.4}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {about.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700 text-center"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.3 }}
                  >
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">{strength}</h4>
                  </motion.div>
                ))}
              </div>
            </ContentSection>

            {/* Certifications */}
            <ContentSection 
              title="Certifications" 
              icon={<FaCertificate className="text-green-500" />}
              delay={0.5}
            >
              <div className="space-y-4">
                {about.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 * index, duration: 0.4 }}
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ContentSection>

            {/* Awards */}
            <ContentSection 
              title="Awards" 
              icon={<FaMedal className="text-amber-500" />}
              delay={0.6}
            >
              <div className="space-y-4">
                {about.awards.map((award, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 * index, duration: 0.4 }}
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{award.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{award.date}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{award.description}</p>
                  </motion.div>
                ))}
              </div>
            </ContentSection>
          </div>
        </div>
      </div>
    </>
  );
};

/* Content Section Component */
const ContentSection = ({ title, icon, children, delay = 0 }) => (
  <motion.div
    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="flex items-center gap-2 mb-5">
      <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600">
        {title}
      </h3>
    </div>
    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

/* Social Icon Button Component */
const SocialIconButton = ({ icon, link, label, bgColor, download = false }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    {download ? (
      <a
        href={link}
        download="Naman_Singla.pdf"
        className={`${bgColor} text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 font-medium transition-all duration-200`}
      >
        {icon} {label}
      </a>
    ) : (
      <Link
        to={link}
        className={`${bgColor} text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 font-medium transition-all duration-200`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon} {label}
      </Link>
    )}
  </motion.div>
);

export default About;