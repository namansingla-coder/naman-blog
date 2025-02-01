import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import Naman_Singla from "./assets/Naman_Singla.pdf";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import Footer from "./footer";

function Home() {
  return (
    <>
      <Header selected="home" />
      <div className="flex flex-col items-center text-center gap-8 mx-6 mt-8 md:mt-24 md:gap-20 md:mx-36 md:text-left">
        <div className="gap-5 flex flex-col md:gap-8 text-center">
          <h1 className="font-bold text-5xl text-gray-900 leading-tight">Hi, I am Naman Singla</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            B.Tech student with strong coding skills, database expertise, and front-end development experience. Adept at back-end and front-end tasks, seeking an internship to enhance skills.
          </p>
          <div className="flex justify-center gap-4">
            <a href={Naman_Singla} download="Naman_Singla.pdf">
              <button className="bg-red-500 px-6 py-3 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                Download Resume
              </button>
            </a>
            <Link to="/projects">
              <button className="bg-blue-600 px-6 py-3 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-14 md:mt-16 flex flex-col bg-blue-50 pb-12">
        <div className="mx-6 md:mx-36">
          <h3 className="text-center py-5 text-gray-900 font-bold text-2xl">Education</h3>
        </div>
        <div className="mx-3 md:mx-36 flex flex-col gap-6">
          {[{
            title: "B.Tech in Computer Science Engineering",
            institution: "Bennett University",
            year: "2022 - 2026",
            details: "Focused on software development, deep learning, and full-stack web development. CGPA: 9.14"
          }, {
            title: "Class XII (CBSE)",
            institution: "MDN Public School",
            year: "2021 - 2022",
            details: "Completed higher secondary education with a strong foundation in mathematics and computer science."
          }].map((edu, index) => (
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