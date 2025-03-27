import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaProjectDiagram, FaBriefcase } from "react-icons/fa";
import Header from "./header";
import Footer from "./footer";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { education } from "./data/education";
import { about } from "./data/about";

const Home = () => {
  return (
    <>
      <Header selected="home" />

      {/* Hero Section with Gradient & Overlay */}
      {/* Introduction Section with Simple Background */}
<div className="relative bg-gray-100 py-20 text-gray-900 text-center">
  <div className="max-w-4xl mx-auto px-6">
    {/* Profile Image */}
    <motion.img
      src={about.profile}
      alt="Profile"
      className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover border-4 border-gray-300 mx-auto"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />

    {/* Name & Intro */}
    <motion.h1
      className="mt-6 text-4xl md:text-5xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hi, I’m <span className="text-blue-600">{about.name}</span> 👋
    </motion.h1>

    {/* Description */}
    <motion.p
      className="text-lg md:text-xl mt-3 text-gray-700 leading-relaxed"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {about.description}
    </motion.p>

    {/* Call-to-Action Button */}
    <motion.div
      className="mt-6"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to="/about"
        className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold shadow-md transition"
      >
        Learn More About Me
      </Link>
    </motion.div>
  </div>
</div>

      {/* Dynamic Sections with Colorful Backgrounds */}
      <Section title="Education 🎓" icon={<FaGraduationCap className="text-blue-600 text-4xl" />} data={education} link="/education" bg="bg-blue-50" />
      <Section title="Projects 🚀" icon={<FaProjectDiagram className="text-purple-600 text-4xl" />} data={projects} link="/projects" bg="bg-purple-50" />
      <Section title="Experience 💼" icon={<FaBriefcase className="text-green-600 text-4xl" />} data={experiences} link="/work" bg="bg-green-50" />

      <Footer />
    </>
  );
};

/* Reusable Section Component */
const Section = ({ title, icon, data, link, bg }) => {
  return (
    <div className={`py-16 ${bg} relative`}>
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/dots-pattern.svg')] bg-contain opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center gap-3">
            {icon}
            <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          </div>
          <p className="text-gray-600 mt-2">Explore my {title.split(" ")[0].toLowerCase()} journey!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-300 hover:border-gray-600 hover:shadow-2xl transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-semibold text-gray-900">{item.title || item.name}</h4>
              <p className="text-gray-600 text-sm mt-1">{item.institution || item.company || item.date}</p>
              <p className="text-gray-700 mt-2">{item.details || item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to={link} className="text-blue-500 font-semibold hover:underline">
            See More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;