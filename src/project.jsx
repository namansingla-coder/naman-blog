import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./data/projects";
import Header from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <Header selected="projects" />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 flex-grow">
        <motion.h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-300 dark:border-gray-700"
              />

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 mb-3">
                {project.date} • {project.category}
              </p>

              {/* Description */}
              <p className="text-gray-800 dark:text-gray-200 mb-4">{project.description}</p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    className="bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-md shadow hover:shadow-lg transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 GitHub
                  </a>
                )}
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md shadow hover:shadow-lg transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌍 Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;