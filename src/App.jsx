import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blog from './blog'
import Work from './work'
import About from './About'
import Projects from './project'
import ContactPage from './contact'

function App() {
  
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        
      </Routes>
    </>
  )
}

export default App
