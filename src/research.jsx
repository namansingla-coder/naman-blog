import React from 'react';
import Header from './header';
import { researchPapers } from './data/reserchPaper';
import Footer from './footer';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaFlask, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';

const ResearchPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <Header selected="research" />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-16 flex-grow">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 bg-clip-text text-transparent">
            Research Papers
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring new ideas and contributing to academic knowledge through research.
          </p>
        </motion.div>

        {/* Research Papers Grid */}
        {researchPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchPapers.map((paper, index) => (
              <ResearchCard key={index} paper={paper} index={index} />
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaFlask className="mx-auto text-gray-400 dark:text-gray-600 text-5xl mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No research papers available at the moment.
            </p>
            <p className="text-gray-500 dark:text-gray-500 mt-2">
              Check back later for updates on my research work.
            </p>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const ResearchCard = ({ paper, index }) => {
  return (
    <motion.div
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
            <FaBookOpen size={24} />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {paper.title}
            </h3>
            
            {paper.date && (
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                <FaCalendarAlt />
                <span>{paper.date}</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {paper.description}
        </p>
        
        {paper.keywords && (
          <div className="flex flex-wrap gap-2 mb-4">
            {paper.keywords.map((keyword, i) => (
              <span 
                key={i}
                className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs"
              >
                {keyword}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700">
        {paper.downloadable ? (
          <a
            href={paper.downloadLink}
            download
            className="flex items-center justify-center gap-2 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            <FaDownload /> Download Paper
          </a>
        ) : paper.link ? (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <FaExternalLinkAlt /> Read Full Paper
          </a>
        ) : (
          <div className="flex items-center justify-center gap-2 w-full py-2 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg cursor-not-allowed">
            Coming Soon
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ResearchPage;