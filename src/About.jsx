import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import Naman_Singla from "./assets/Naman's.pdf";
import { about } from "./data/about";


const About = () => {
  return (
    <>
      <Header selected="about" />
      <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          {/* Profile Section */}
          <div className="text-center">
            <img
              src={about.profile}
              alt={about.name}
              className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg mx-auto object-cover"
            />
            <h2 className="text-4xl font-bold text-gray-800 mt-4">{about.name}</h2>
            <p className="text-lg text-gray-600">
              {about.education.degree} at {about.education.university} ( {about.education.batch} ) | CGPA: {about.education.cgpa}
            </p>
            <p className="text-md text-gray-500">{about.location} • {about.email} • {about.phone}</p>
          </div>

          {/* About Section */}
          <div className="mt-8 text-gray-700 text-lg">
            <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">About Me</h3>
            <p>{about.description}</p>
          </div>

          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {about.skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Strengths</h3>
            <ul className="list-disc list-inside text-gray-700">
              {about.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          {/* Certifications Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Certifications</h3>
            <ul className="list-disc list-inside text-gray-700">
              {about.certifications.map((cert, index) => (
                <li key={index} className="mb-1">
                  <span className="font-semibold">{cert.title}</span> - {cert.issuer} ({cert.date})
                </li>
              ))}
            </ul>
          </div>

          {/* Awards Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Awards</h3>
            <ul className="list-disc list-inside text-gray-700">
              {about.awards.map((award, index) => (
                <li key={index} className="mb-2">
                  <span className="font-semibold">{award.title}</span> ({award.date})
                  <p className="text-sm text-gray-600">{award.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={about.linkedin}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              to={about.github}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <a
              href={Naman_Singla}
              download="Naman_Singla.pdf"
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;