import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./data/projects";
import Header from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Extract unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on search and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(filter.toLowerCase()) || 
                         project.description.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <Header selected="projects" />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-16 flex-grow">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, machine learning, and more.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <motion.div 
              className="relative w-full md:w-64"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <p className="text-white text-sm">{project.category}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
            <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
              {project.date}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Tags */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.slice(0, 3).map((tech, i) => (
              <span 
                key={i} 
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.github !== "#" && (
            <a
              href={project.github}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.live !== "#" && (
            <a
              href={project.live}
              className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;