import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./data/projects";
import Header from "./header";
import Footer from "./footer";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header selected="projects" />

      {/* Main Content (Ensures Footer Stays at Bottom) */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 flex-grow">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">🚀 Projects</h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Project Details */}
              <h3 className="text-2xl font-semibold text-blue-700">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-1 mb-3">{project.date} • {project.category}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Buttons for GitHub & Live Demo */}
              <div className="flex gap-4">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 GitHub
                  </a>
                )}
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌍 Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default Projects;