import React from "react";
import Header from "./header";
import { experiences } from "./data/experiences";
import Footer from "./footer";

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header selected="work" />

      {/* Main Content (Pushes Footer to Bottom) */}
      <div className="flex-grow container mx-auto px-6 md:px-12 lg:px-20 py-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-lg text-gray-600 font-medium">{exp.company} - {exp.location}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.date}</p>
              <ul className="list-disc list-inside text-gray-700">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
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