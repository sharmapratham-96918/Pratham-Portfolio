import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {["Intern @ Eskills"]
          .map((job, idx) => (
            <div key={idx} className="border-l-4 border-indigo-500 pl-4">
              <h4 className="text-xl font-semibold">{job}</h4>
              <p className="text-slate-600 text-sm">December-2024- Present</p>
              <p className="mt-1">Worked on frontend/backend features, collaborated with teams, delivered full-stack apps.</p>
            </div>
          ))}
      </div>
    </section>)
}

export default Experience
