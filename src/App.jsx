import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blog from './blog'
import Work from './work'

function App() {
  
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
    </>
  )
}

export default App
