import React from "react";
import { Link } from "react-router-dom";

 import { projects } from "./data/projects";
import Header from "./header";
import Footer from "./footer";



const Projects = () => {
    
  return (
    < >
        <Header selected="projects" />
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{project.date} • {project.category}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.github !== "#" && (
                  <Link to={project.github} className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900" target="_blank">
                    GitHub
                  </Link>
                )}
                {project.live !== "#" && (
                  <Link to={project.live} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700" target="_blank">
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;