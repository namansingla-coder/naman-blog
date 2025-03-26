import React from 'react';
import Header from './header';
import { researchPapers } from './data/reserchPaper';
import Footer from './footer';

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header (Fixed, so added top padding) */}
      <Header selected="blog" />

      {/* Main Content (Grows to push footer down) */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 flex-grow">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">📚 Research Papers</h2>

        {/* Research Papers Row (Flex Format with Scroll) */}
        <div className="flex space-x-6 overflow-x-auto px-4 py-4 scrollbar-hide">
          {researchPapers.length > 0 ? (
            researchPapers.map((paper, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-blue-700">{paper.title}</h3>
                <p className="text-gray-600 mt-3">{paper.description}</p>

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
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg">No research papers available.</p>
          )}
        </div>
      </div>

      {/* Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default BlogPage;