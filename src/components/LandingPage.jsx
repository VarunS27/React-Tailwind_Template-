import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            MERN Template
          </div>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Professional
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}MERN{" "}
            </span>
            Template
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Kickstart your next project with our production-ready MERN stack template. 
            Built with modern technologies and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 transition duration-300 shadow-2xl transform hover:scale-105"
            >
              Start Building Now
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-900 transition duration-300">
              View Demo
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-20 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Our Template?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Optimized for performance with modern build tools and best practices.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Production Ready</h3>
              <p className="text-gray-300">Enterprise-grade authentication and security features built-in.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Developer Friendly</h3>
              <p className="text-gray-300">Clean code structure with comprehensive documentation and examples.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Built With Modern Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', color: 'from-blue-400 to-cyan-400' },
              { name: 'Node.js', color: 'from-green-400 to-emerald-400' },
              { name: 'Express', color: 'from-gray-400 to-gray-600' },
              { name: 'MongoDB', color: 'from-green-500 to-green-700' },
            ].map((tech) => (
              <div key={tech.name} className="p-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg mx-auto mb-4`}></div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-pink-100 mb-8">
            Join thousands of developers who are building amazing applications with our template.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition duration-300 shadow-2xl transform hover:scale-105"
          >
            Create Your Account
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 MERN Pro Template. Built with ❤️ for developers.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
