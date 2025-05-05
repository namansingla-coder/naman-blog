import React from 'react';
import Header from './header';
import { researchPapers } from './data/reserchPaper';
import Footer from './footer';
import { motion } from 'framer-motion';

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100">
      {/* Header */}
      <Header selected="blog" />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 flex-grow">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          📚 Research Papers
        </motion.h2>

        {/* Research Papers Full-Width Layout */}
        <motion.div
          className="w-full flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {researchPapers.length > 0 ? (
            researchPapers.map((paper, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-700">{paper.title}</h3>
                <p className="text-gray-600 mt-3 text-sm md:text-base">{paper.description}</p>

                {/* Buttons for Download / Read */}
                <div className="mt-4">
                  {paper.downloadable ? (
                    <a
                      href={paper.downloadLink}
                      download
                      className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                    >
                      ⬇ Download Paper
                    </a>
                  ) : paper.link ? (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                      📄 Read Full Paper
                    </a>
                  ) : (
                    <span className="text-gray-500">🚧 Coming Soon</span>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg">No research papers available.</p>
          )}
        </motion.div>
      </div>

      {/* Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default BlogPage;