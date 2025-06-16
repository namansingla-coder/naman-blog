import React, { useState } from 'react';
import Header from './header';
import { researchPapers } from './data/reserchPaper';
import Footer from './footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaDownload, 
  FaExternalLinkAlt, 
  FaFlask, 
  FaCalendarAlt, 
  FaBookOpen, 
  FaSearch,
  FaTags,
  FaQuoteRight,
  FaChevronRight
} from 'react-icons/fa';

const ResearchPage = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPapers = researchPapers.filter(paper => 
    paper.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    paper.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            Research Publications
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring new ideas and contributing to academic knowledge through innovative research.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-md mx-auto mb-10 relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search research papers..."
              className="w-full px-4 py-3 pl-10 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
          </div>
        </motion.div>

        {/* Research Papers Grid */}
        {filteredPapers.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPapers.map((paper, index) => (
              <ResearchCard 
                key={index} 
                paper={paper} 
                index={index} 
                onClick={() => setSelectedPaper(paper)}
              />
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
              No research papers found matching your search.
            </p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {/* Featured Research Section */}
        {filteredPapers.length > 0 && (
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 dark:border-blue-900/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <FaQuoteRight />
              </div>
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Research Impact</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My research focuses on applying advanced machine learning techniques to solve real-world problems in nutrition, supply chain management, and product classification. These publications represent my contribution to pushing the boundaries of what's possible with AI and data science.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Collaborate on Research <FaChevronRight />
            </a>
          </motion.div>
        )}
      </div>

      {/* Paper Detail Modal */}
      <AnimatePresence>
        {selectedPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPaper(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedPaper.title}</h2>
                {selectedPaper.date && (
                  <div className="flex items-center gap-2 text-blue-100">
                    <FaCalendarAlt />
                    <span>{selectedPaper.date}</span>
                  </div>
                )}
                <button 
                  className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
                  onClick={() => setSelectedPaper(null)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Abstract</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedPaper.description}
                  </p>
                  
                  {selectedPaper.keywords && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
                        <FaTags />
                        <h4 className="font-medium">Keywords</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedPaper.keywords.map((keyword, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  {selectedPaper.downloadable && (
                    <a
                      href={selectedPaper.downloadLink}
                      download
                      className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-colors"
                    >
                      <FaDownload /> Download Full Paper
                    </a>
                  )}
                  {selectedPaper.link && (
                    <a
                      href={selectedPaper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-colors"
                    >
                      <FaExternalLinkAlt /> View Online
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const ResearchCard = ({ paper, index, onClick }) => {
  return (
    <motion.div
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      onClick={onClick}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg text-white shadow-md">
            <FaBookOpen size={24} />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
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
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
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
      
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Click to view details</span>
        <div className="p-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
          <FaChevronRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchPage;