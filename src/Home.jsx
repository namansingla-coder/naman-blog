import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import {education} from "./data/education";
import Footer from "./footer";
import {about } from "./data/about";
function Home() {
  return (
    <>
      <Header selected="home" />
      <div className="bg-gray-50 py-16 md:py-24">
  <div className="flex flex-col items-center text-center gap-8 mx-6 md:mx-36">
    <div className="flex flex-col md:flex-row gap-8 items-center">
      {/* Profile Picture Section (Optional) */}
      <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full border-2 border-gray-300 shadow-sm">
        {/* You can replace the below with an <img /> tag if you have an avatar */}
        <span className="text-xl font-semibold text-gray-700"><img className="w-40 h-40 rounded-full shadow-lg object-cover"src={about.profile}/></span>
      </div>

      <div className="gap-5 flex flex-col text-center md:text-left">
        <h1 className="font-bold text-4xl text-gray-900 leading-tight shadow-sm">Hi, I am {about.name}</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
          {about.description}
        </p>

        {/* Call to Action Button */}
        <Link
          to="/about"
          className="mt-6 inline-block px-6 py-3 text-white bg-gray-700 hover:bg-gray-800 rounded-full text-lg font-semibold shadow-md transition duration-300"
        >
          About Me
        </Link>
      </div>
    </div>
  </div>
</div>
      <div className="mt-14 md:mt-16 flex flex-col bg-blue-50 pb-12">
        <div className="mx-6 md:mx-36">
          <h3 className="text-center py-5 text-gray-900 font-bold text-2xl">Education</h3>
        </div>
        <div className="mx-3 md:mx-36 flex flex-col gap-6">
          {education.slice(0, 2).map((edu, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-blue-500">
              <h4 className="text-2xl font-semibold text-gray-900">{edu.title}</h4>
              <p className="text-gray-600 text-sm">{edu.institution} | {edu.year}</p>
              <p className="text-gray-700 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-5 py-6 flex flex-col gap-5 md:mx-36">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-900 font-bold text-2xl">Featured Projects</h3>
          <Link to="/projects" className="text-blue-600 font-semibold text-lg hover:underline">See All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <div key={project.id} className="bg-white p-6 shadow-lg rounded-lg border-t-4 border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{project.date} • {project.category}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-5 py-6 flex flex-col gap-5 md:mx-36">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-900 font-bold text-2xl">Work Experience</h3>
          <Link to="/work" className="text-blue-600 font-semibold text-lg hover:underline">See All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.slice(0, 2).map((exp) => (
            <div key={exp.id} className="bg-white p-6 shadow-lg rounded-lg border-t-4 border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{exp.company} • {exp.date}</p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;