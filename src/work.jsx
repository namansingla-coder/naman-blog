import React from "react";
import Header from "./header";
import { experiences } from "./data/experiences";
import Footer from "./footer";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header selected="work" />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 flex-grow">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">💼 Work Experience</h2>

        {/* Experience List */}
        <div className="flex flex-col space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-blue-700">{exp.title}</h3>
              <p className="text-lg text-gray-700 font-medium">{exp.company} - {exp.location}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.date}</p>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {exp.description.map((point, index) => (
                  <li key={index} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default Experience;