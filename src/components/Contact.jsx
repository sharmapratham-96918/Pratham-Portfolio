import React from 'react'
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTelegramPlane } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4 md:px-24 text-black">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-700 mt-2">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
                    <h3 className="text-2xl font-semibold">Contact Information</h3>
          <a href="mailto:prathams96918@gmail.com" className="block bg-white p-4 rounded-md flex items-center gap-4 shadow hover:bg-blue-50 transition">
            <FaEnvelope className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p>prathams96918@gmail.com</p>
            </div>
          </a>
          <a href="tel:+919691861400" className="block bg-white p-4 rounded-md flex items-center gap-4 shadow hover:bg-blue-50 transition">
            <FaPhone className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-medium">Phone</h4>
              <p>+91 9691861400</p>
            </div>
          </a>
          <a href="https://www.google.com/maps/place/Indore,+India" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-md flex items-center gap-4 shadow hover:bg-blue-50 transition">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-medium">Location</h4>
              <p>Indore, India</p>
            </div>
          </a>

          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/sharmapratham-96918" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition shadow">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pratham-sharma-9b8709344/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition shadow">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-8 rounded-md shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:outline-none" placeholder="Full Name" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:outline-none" placeholder="Email Address" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:outline-none" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded text-white font-semibold hover:opacity-90 transition">
            <span className="inline-flex items-center justify-center gap-2">
              <FaTelegramPlane />
              Send Message
            </span>
          </button>
        </motion.form>
      </div>
    </div>
 )
}

export default Contact
