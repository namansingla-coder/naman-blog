import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Naman_Singla from "./assets/NamanSingla.pdf";
import { about } from "./data/about";

const About = () => {
  return (
    <>
      <Header selected="about" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-6 md:px-12 lg:px-20">
        <motion.div 
          className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg p-10 shadow-2xl rounded-xl border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Section */}
          <div className="text-center">
            <motion.img
              src={about.profile}
              alt={about.name}
              className="w-44 h-44 md:w-52 md:h-52 rounded-full shadow-lg border-4 border-gray-300 dark:border-gray-600 mx-auto object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mt-4">{about.name}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
              {about.education.degree} at {about.education.university} ({about.education.batch}) | CGPA: {about.education.cgpa}
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400">{about.location} • {about.email} • {about.phone}</p>
          </div>

          {/* About Me Section */}
          <Section title="About Me">
            <p className="text-gray-700 dark:text-gray-300">{about.description}</p>
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills">
            <div className="flex flex-wrap gap-3">
              {about.skills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-4 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Section>

          {/* Strengths */}
          <Section title="Strengths">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {about.strengths.map((strength, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  {strength}
                </motion.li>
              ))}
            </ul>
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {about.certifications.map((cert, index) => (
                <motion.li key={index} className="mb-2" whileHover={{ x: 5 }}>
                  <span className="font-semibold">{cert.title}</span> - {cert.issuer} ({cert.date})
                </motion.li>
              ))}
            </ul>
          </Section>

          {/* Awards */}
          <Section title="Awards">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {about.awards.map((award, index) => (
                <motion.li key={index} className="mb-2" whileHover={{ x: 5 }}>
                  <span className="font-semibold">{award.title}</span> ({award.date})
                  <p className="text-sm text-gray-500 dark:text-gray-400">{award.description}</p>
                </motion.li>
              ))}
            </ul>
          </Section>

          {/* Social Links */}
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SocialButton link={about.linkedin} color="bg-blue-600 hover:bg-blue-700" label="LinkedIn" />
            <SocialButton link={about.github} color="bg-gray-800 hover:bg-gray-900" label="GitHub" />
            <DownloadButton />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

/* Reusable Section Component */
const Section = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 border-b pb-2 mb-4">{title}</h3>
    {children}
  </div>
);

/* Social Button Component */
const SocialButton = ({ link, color, label }) => (
  <Link
    to={link}
    className={`${color} text-white px-5 py-2 rounded-lg shadow-md text-center font-medium transition`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </Link>
);

/* Download Resume Button */
const DownloadButton = () => (
  <a
    href={Naman_Singla}
    download="Naman_Singla.pdf"
    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md text-center font-medium transition"
  >
    Download Resume
  </a>
);

export default About;