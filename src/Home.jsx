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

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20 text-gray-900 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/stars-pattern.svg')] bg-cover opacity-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.img
            src={about.profile}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover border-4 border-gray-300 mx-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.h1
            className="mt-6 text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I’m <span className="text-blue-600">{about.name}</span> 👋
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mt-3 text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {about.description}
          </motion.p>

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

      <Section
        title="Education 🎓"
        icon={<FaGraduationCap className="text-blue-600 text-4xl" />}
        data={education}
        link="/education"
        bg="bg-blue-50"
      />

      <CarouselSection
        title="Projects 🚀"
        icon={<FaProjectDiagram className="text-purple-600 text-4xl" />}
        data={projects}
        link="/projects"
        bg="bg-purple-50"
      />

      <CarouselSection
        title="Experience 💼"
        icon={<FaBriefcase className="text-green-600 text-4xl" />}
        data={experiences}
        link="/work"
        bg="bg-green-50"
      />

      <Footer />
    </>
  );
};

const Section = ({ title, icon, data, link, bg }) => (
  <div className={`py-16 ${bg} relative`}>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('/dots-pattern.svg')] bg-contain opacity-10 animate-fade"></div>

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
        <p className="text-gray-600 mt-2">
          Explore my {title.split(" ")[0].toLowerCase()} journey!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            className="bg-white h-64 p-6 rounded-xl shadow-lg border-t-4 border-gray-300 hover:border-gray-600 hover:shadow-2xl transition transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-gray-900">
              {item.title || item.name}
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              {item.institution || item.company || item.date}
            </p>
            <p className="text-gray-700 mt-2">
              {item.details || item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to={link}
          className="text-blue-500 font-semibold hover:underline"
        >
          See More →
        </Link>
      </div>
    </div>
  </div>
);

const CarouselSection = ({ title, icon, data, link, bg }) => (
  <div className={`py-16 ${bg} relative overflow-hidden`}>
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
        <p className="text-gray-600 mt-2">
          Explore my {title.split(" ")[0].toLowerCase()} journey!
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="overflow-x-auto overflow-y-hidden">
        <motion.div
          className="flex gap-6 cursor-grab px-2 snap-x snap-mandatory"
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[80%] md:min-w-[60%] lg:min-w-[40%] h-64 bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-300 hover:border-purple-600 transition transform hover:scale-105 snap-start"
            >
              <h4 className="text-xl font-semibold text-gray-900">
                {item.title || item.name}
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                {item.institution || item.company || item.date}
              </p>
              <p className="text-gray-700 mt-2">
                {item.details || item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <Link
          to={link}
          className="text-purple-600 font-semibold hover:underline"
        >
          See More →
        </Link>
      </div>
    </div>
  </div>
);

export default Home;