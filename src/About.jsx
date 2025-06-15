import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Naman_Singla from "./assets/Naman.pdf";
import { about } from "./data/about";

const About = () => {
  return (
    <>
      <Header selected="about" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-5xl mx-auto bg-white/30 dark:bg-gray-900/40 backdrop-blur-xl p-10 shadow-2xl rounded-2xl border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Profile Section */}
          <div className="text-center">
            <motion.img
              src={about.profile}
              alt={about.name}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-400 dark:border-purple-600 mx-auto object-cover shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mt-4">
              {about.name}
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200 mt-2 font-medium">
              {about.education.degree} @ {about.education.university} ({about.education.batch}) | CGPA: {about.education.cgpa}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {about.location} • {about.email} • {about.phone}
            </p>
          </div>

          {/* About Me Section */}
          <Section title="About Me">
            <p>{about.description}</p>
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills">
            <div className="flex flex-wrap gap-3">
              {about.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Section>

          {/* Strengths */}
          <Section title="Strengths">
            <ul className="list-disc list-inside space-y-2">
              {about.strengths.map((strength, index) => (
                <motion.li key={index} whileHover={{ x: 8 }} className="text-purple-800 dark:text-purple-300 font-medium">
                  {strength}
                </motion.li>
              ))}
            </ul>
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <ul className="list-disc list-inside space-y-2">
              {about.certifications.map((cert, index) => (
                <motion.li key={index} whileHover={{ x: 8 }}>
                  <span className="text-pink-700 dark:text-pink-300 font-semibold">{cert.title}</span> - {cert.issuer} ({cert.date})
                </motion.li>
              ))}
            </ul>
          </Section>

          {/* Awards */}
          <Section title="Awards">
            <ul className="list-disc list-inside space-y-4">
              {about.awards.map((award, index) => (
                <motion.li key={index} whileHover={{ x: 8 }}>
                  <span className="text-red-600 dark:text-red-300 font-semibold">{award.title}</span> ({award.date})
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{award.description}</p>
                </motion.li>
              ))}
            </ul>
          </Section>

          {/* Social Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SocialButton link={about.linkedin} color="bg-blue-600 hover:bg-blue-700" label="LinkedIn" />
            <SocialButton link={about.github} color="bg-gray-800 hover:bg-black" label="GitHub" />
            <DownloadButton />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

/* Reusable Section Component */
const Section = ({ title, children }) => (
  <div className="mt-10">
    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-4">
      {title}
    </h3>
    <div className="text-gray-800 dark:text-gray-200 leading-relaxed">{children}</div>
  </div>
);

/* Social Button Component */
const SocialButton = ({ link, color, label }) => (
  <Link
    to={link}
    className={`${color} text-white px-5 py-2 rounded-lg shadow-md text-center font-medium transition-all duration-200`}
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
    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md text-center font-medium transition-all duration-200"
  >
    Download Resume
  </a>
);

export default About;