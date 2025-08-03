import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-slate-900 text-white py-6 text-center">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://github.com/sharmapratham-96918" className="hover:text-indigo-400">GitHub</a>
        <a href="https://www.linkedin.com/in/pratham-sharma-9b8709344/" className="hover:text-indigo-400">LinkedIn</a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Pratham Sharma. All Rights Reserved. Built with Tailwind CSS & React.</p>
    </footer>
  )
}

export default Footer
