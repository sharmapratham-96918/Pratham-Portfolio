import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-indigo-50 to-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Pratham Sharma</h1>
      <h2 className="text-2xl md:text-3xl text-indigo-600 mb-6">"Turning ideas into reality through lines of code..."</h2>

      <p className="max-w-xl text-gray-600 mb-8"> Every project is an opportunity to learn and improve, delivering high-quality, scalable solutions that stand the test of time."I build scalable and responsive web applications using the latest technologies.</p>

      <div className="flex gap-4">
        <a href="/resume.docx.pdf" download className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">Download Resume</a>
        <a href="#contact" className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-100 transition">Contact Me</a>
      </div>
      <div className="flex gap-6 mt-8 text-2xl text-indigo-600">
        <a href="https://github.com/sharmapratham-96918" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pratham-sharma-9b8709344/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Hero;
