import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";
import Naman_Singla from "./assets/Naman__Singla.pdf";

const about = {
  name: "Naman Singla",
  education: "B.Tech in Computer Science Engineering at Bennett University",
  cgpa: 9.14,
  description:
    "Passionate software developer skilled in full-stack development, deep learning, and problem-solving. Enthusiastic about innovation and technology.",
  skills: [
    "React", "Tailwind CSS", "JavaScript", "Python", "Machine Learning", "MySQL",
    "AdonisJs", "Redux", "HTML", "Java", "C++"
  ],
  strengths: ["Teamwork", "Problem-solving", "Communication", "Leadership"],
  links: {
    linkedin: "https://linkedin.com/in/namansingla7642",
    github: "https://github.com/namansingla-coder",
  },
};

const About = () => {
  return (
    <>
      <Header selected="about" />
      <div className="flex justify-center items-center min-h-screen px-6 md:px-12 lg:px-20 bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl w-full text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="flex flex-col items-center gap-6">
            <img
              src={profile}
              alt={about.name}
              className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg object-cover"
            />
            <div className="text-gray-700 max-w-2xl text-lg">
              <p className="mb-2">
                Hi, I'm <span className="font-semibold">{about.name}</span>, a {about.education} student with a CGPA of <span className="font-semibold">{about.cgpa}</span>.
              </p>
              <p className="mb-2">{about.description}</p>
              <p className="mb-2">
                Skilled in: <span className="font-semibold">{about.skills.join(", ")}</span>.
              </p>
              <p className="mb-4">
                Strengths: <span className="font-semibold">{about.strengths.join(", ")}</span>.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  to={about.links.linkedin}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                <Link
                  to={about.links.github}
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