import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-50">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <img src="/images/Dailly Dabba.png" alt="Project 1" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Daily-Dabba</h3>
            <p className="text-sm text-slate-600 mt-2">Daily Dabba is a food delivery app that offers users a simple way to browse, order, and manage their daily meals online. Built using React,Mongo DB , Express , Tailwind CSS, etc.</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#" target="_blank" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-center">Visit Project</a>
            <div className="flex justify-between text-sm">
              <a href="#" className="text-indigo-600 hover:underline">Live Site</a>
              <a href="https://github.com/sharmapratham-96918" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <img src="/images/pokemon.png" alt="Project 2" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Guess The Pokemon</h3>
            <p className="text-sm text-slate-600 mt-2">"Guess The Pokémon is a React game where the user guesses the names of Pokémon by matching their silhouettes." Built using React, Tailwind CSS, etc.</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a href="https://pokemon-game-gray.vercel.app/" target="_blank" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-center">Visit Project</a>
            <div className="flex justify-between text-sm">
              <a href="https://pokemon-game-gray.vercel.app/" className="text-indigo-600 hover:underline">Live Site</a>
              <a href="https://github.com/sharmapratham-96918" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <img src="/images/khatabook.png" alt="Project 3" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Khata-Book</h3>
            <p className="text-sm text-slate-600 mt-2">Khata-Book is a simpel transaction management system, Tailwind CSS, etc.</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a href="https://quote-app-react-six.vercel.app/" target="_blank" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-center">Visit Project</a>
            <div className="flex justify-between text-sm">
              <a href="https://quote-app-react-six.vercel.app/" className="text-indigo-600 hover:underline">Live Site</a>
              <a href="https://github.com/sharmapratham-96918" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>  )
}

export default Projects
