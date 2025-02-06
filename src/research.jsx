import React from 'react';
import Header from './header';
import { researchPapers } from './data/reserchPaper';
import Footer from './footer';

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header selected="blog" />

      {/* Main Content (Pushes Footer to Bottom) */}
      <div className="flex-grow container mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center mb-6">Research Papers</h2>
        <div className="space-y-6">
          {researchPapers.map((paper, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-blue-600">{paper.title}</h3>
              <p className="text-gray-700 mt-2">{paper.description}</p>
              {paper.downloadable ? (
                <a
                  href={paper.downloadLink}
                  download
                  className="text-indigo-600 mt-4 inline-block hover:text-indigo-800"
                >
                  Download Paper
                </a>
              ) : paper.link ? (
                <a
                  href={paper.link}
                  className="text-indigo-600 mt-4 inline-block hover:text-indigo-800"
                >
                  Read Full Paper
                </a>
              ) : (
                <span className="text-gray-600 mt-4 inline-block">Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer (Always at Bottom) */}
      <Footer />
    </div>
  );
};

export default BlogPage;