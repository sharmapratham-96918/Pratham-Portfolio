import React from 'react';

const UI = () => {
  return (
        <section id="ui" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">UI Clones</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
          <img src="/images/coffee.png" alt="UI Clone 1" className="rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">coffee</h3>
          <a href="https://sharmapratham-96918.github.io/coffee-clone/" target="_blank" className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">View Project</a>
        </div>
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
          <img src="/images/medium.png" alt="UI Clone 2" className="rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">medium</h3>
          <a href="https://sharmapratham-96918.github.io/medium-ui/" target="_blank" className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">View Project</a>
        </div>
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
          <img src="/images/portfolio.png" alt="UI Clone 3" className="rounded mb-4" />
          <h3 className="text-xl font-semibold mb-2">Simple Portfolio Responsive UI </h3>
          <a href="https://sharmapratham-96918.github.io/portfolio/" target="_blank" className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default UI;
