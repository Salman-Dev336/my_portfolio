import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className="overflow-x-hidden bg-[#fffdfb] text-[#171717]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
