import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <img
            src="/images/Profile.jpg.jpeg"
            alt="Pratham Sharma"
            className="w-64 h-64 object-cover rounded-full border-4 border-indigo-300 shadow-lg mx-auto hover:scale-105 transition duration-300"
          />
          <p className="mt-4 text-lg font-semibold text-slate-700">Pratham Sharma</p>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            I'm a passionate full stack developer with experience in building scalable web applications using the MERN stack. I enjoy turning complex problems into simple, user-friendly interfaces
          </p>
          <p className="mb-4">
            My development philosophy is centered on writing clean, maintainable code while paying close attention to performance and responsiveness. Whether I'm working on a personal project or contributing
            to a team, I always focus on delivering polished, reliable solutions that solve real problems.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <a href="#projects">
               <div className="bg-indigo-50 rounded-xl p-4 text-center shadow">
              <h4 className="text-xl font-bold text-indigo-700">20+</h4>
              <p className="text-sm text-slate-600">Projects Completed</p>
            </div>
           </a>
           <a href="#experience">
              <div className="bg-indigo-50 rounded-xl p-4 text-center shadow">
              <h4 className="text-xl font-bold text-indigo-700">6 Months</h4>
              <p className="text-sm text-slate-600">Experience</p>
            </div>
           </a>
          </div>
      </div>
    </section>
  );
};

export default About;
