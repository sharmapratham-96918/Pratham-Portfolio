import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import UI from './components/UI'
import Skills from './components/Skills'

const App = () => {
  return (

        <div className="font-sans bg-white text-slate-800">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <UI />
          <Experience />
          <Contact />
          <Footer /> 
        </div>
  )
}

export default App
