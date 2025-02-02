import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";
import { about } from "./data/about"; // assuming the about object is imported from aboutData.js
import Naman_Singla from "./assets/Naman__Singla.pdf";
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
              alt={about.Name}
              className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg object-cover"
            />
            <div className="text-gray-700 max-w-2xl">
              <p className="mb-4 text-lg">
                Hi, I'm <span className="font-semibold">{about.Name}</span>, a B.Tech student in Computer Science Engineering at <span className="font-semibold">{about.University}</span> with a CGPA of <span className="font-semibold">{about.CGPA}</span>. I specialize in software development, deep learning, and full-stack web development.
              </p>
              {about.Bio.map((bio, index) => (
                <p key={index} className="mb-4 text-lg">{bio}</p>
              ))}
              <p className="mb-4 text-lg">
                I have experience working with modern technologies like <span className="font-semibold">{about.Skills.Tech.join(", ")}</span>. Passionate about problem-solving and innovation, I actively participate in hackathons and coding competitions.
              </p>
              <p className="mb-4 text-lg">
                My strengths include <span className="font-semibold">{about.Skills.Soft.join(", ")}</span>. I'm always eager to learn and explore new technologies.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  to={about.SocialLinks.LinkedIn}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                <Link
                  to={about.SocialLinks.GitHub}
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