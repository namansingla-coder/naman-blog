import React from "react";
import Header from "./header";
import { experiences } from "./data/experiences";
import Footer from "./footer";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Header */}
      <Header selected="work" />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 flex-grow">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          💼 Work Experience
        </motion.h2>

        {/* Experience List */}
        <div className="flex flex-col space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-blue-700 mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {exp.title}
              </motion.h3>
              <p className="text-lg text-gray-700 font-medium">{exp.company} - {exp.location}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.date}</p>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {exp.description.map((point, index) => (
                  <motion.li
                    key={index}
                    className="leading-relaxed"
                    whileHover={{ scale: 1.03 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default Experience;