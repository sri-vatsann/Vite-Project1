import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-16">
        <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/05/What-is-Coding.jpg" alt="" className="mx-auto h-50 rounded-lg shadow-lg " />
        <h2 className="text-3xl font-bold mt-4 ">🎨 Build Amazing UIs with React & Vite</h2>
        <p className="text-gray-600 mt-2 ">Fast, lightweight, and modern frontend development</p>
        <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition text-white mt-4">🚀Get Started</button>
    </section>
  )
}

export default Hero