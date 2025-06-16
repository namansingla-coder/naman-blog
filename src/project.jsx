import React, { useState, useEffect } from "react";
import { projects } from "./data/projects";
import Header from "./header";
import Footer from "./footer";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Extract unique categories
  const categories = ["all", ...new Set(projects.map(project => project.category.split(",")[0].trim()))];
  
  useEffect(() => {
    let result = projects;
    
    // Apply category filter
    if (filter !== "all") {
      result = result.filter(project => 
        project.category.toLowerCase().includes(filter.toLowerCase())
      );
    }
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
        
      );
    }
    
    setFilteredProjects(result);
  }, [filter, searchTerm]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <Header selected="projects" />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
            My Projects
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of work spanning AI, web development, and more
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          {/* Search Bar */}
          <motion.div 
            className="relative w-full md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-3 text-gray-400">
              🔍
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/80"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white/30 dark:bg-gray-900/30 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image with Overlay */}
                  <div className="relative overflow-hidden rounded-xl mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">Click to view details</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                        {project.date}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Description - Truncated */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          className="flex items-center gap-1 bg-gray-800 hover:bg-black text-white text-sm px-3 py-2 rounded-md shadow transition-all hover:shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm px-3 py-2 rounded-md shadow transition-all hover:shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">No projects found</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {setFilter("all"); setSearchTerm("");}}
                  className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 sm:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-500/80 text-white text-xs px-2 py-1 rounded-full">
                      {selectedProject.date}
                    </span>
                    <span className="bg-purple-500/80 text-white text-xs px-2 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                <button 
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Description</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-5 py-3 rounded-lg shadow transition-all hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      View Source Code
                    </a>
                  )}
                  {selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-3 rounded-lg shadow transition-all hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Visit Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;