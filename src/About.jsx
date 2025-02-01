import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";
import Naman_Singla from "./assets/Naman_Singla.pdf";

const About = () => {
  return (
    <>
      <Header selected="about" />
      <div className="flex justify-center items-center min-h-screen px-6 md:px-12 lg:px-20 bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl w-full text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="flex flex-col items-center gap-10">
            <img
              src={profile}
              alt="Naman Singla"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg object-cover"
            />
            <div className="text-gray-700 max-w-2xl">
              <p className="mb-4 text-lg">
                Hi, I'm <span className="font-semibold">Naman Singla</span>, a B.Tech student in Computer Science Engineering at <span className="font-semibold">Bennett University</span> with a CGPA of 9.14. I specialize in software development, deep learning, and full-stack web development.
              </p>
              <p className="mb-4 text-lg">
                I have experience working with modern technologies like <span className="font-semibold">React, Tailwind CSS, JavaScript, Python, Machine Learning, and MySQL</span>. Passionate about problem-solving and innovation, I actively participate in hackathons and coding competitions.
              </p>
              <p className="mb-4 text-lg">
                My strengths include <span className="font-semibold">teamwork, problem-solving, and a positive attitude</span>. I'm always eager to learn and explore new technologies.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  to="https://linkedin.com/in/namansingla7642"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                <Link
                  to="https://github.com/namansingla-coder"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
                <a
                  href={Naman_Singla}
                  download="Naman_Singla.pdf"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;