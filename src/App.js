// React Portfolio for MKM Hari Haran with New Unique Theme & Full Resume Details (Fixed react-typed import)

import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaPython, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import profileImg from "./hariharan_profile.jpg"; // Make sure to add your profile image here

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#141421] to-[#0a0a0f] text-white font-sans">
      
      {/* Hero Section */}
      <section data-aos="fade-down" className="text-center py-20 px-6">
        <img
          src={profileImg}
          alt="MKM Hari Haran"
          className="w-36 h-36 mx-auto mb-6 rounded-full border-4 border-cyan-400 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-wider text-cyan-400">MKM Hari Haran</h1>
        <ReactTyped
          strings={[
            "Entry-Level Software Developer",
            "Python | HTML | CSS | MySQL",
            "Passionate About Full-Stack Projects"
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
          className="text-xl text-gray-300"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#summary" className="px-5 py-2 bg-cyan-500 rounded-full hover:bg-cyan-600 transition">Summary</a>
          <a href="#skills" className="px-5 py-2 bg-purple-500 rounded-full hover:bg-purple-600 transition">Skills</a>
          <a href="#projects" className="px-5 py-2 bg-pink-500 rounded-full hover:bg-pink-600 transition">Projects</a>
          <a href="#contact" className="px-5 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition">Contact</a>
          <a href="/MKM_Hari_Haran_Resume.pdf" download className="px-5 py-2 bg-green-500 rounded-full hover:bg-green-600 transition">
            📄 Download Resume
          </a>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" data-aos="fade-left" className="max-w-5xl mx-auto p-8 bg-white/5 rounded-xl shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 border-b border-cyan-400 pb-2">🧾 Career Objective</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          As a highly motivated fresher, I am seeking an entry-level software development role where I can apply my expertise in Python, HTML, CSS, and database management.
          With hands-on experience in full-stack projects, I am committed to continuous learning and contributing to innovative and impactful solutions in a growth-oriented organization.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12 border-b border-purple-500 pb-2">🧠 Skills</h2>
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <FaPython size={40} className="mx-auto text-yellow-400 mb-3" />
            <h3 className="font-semibold">Programming Languages</h3>
            <p>Python (Advanced), HTML (Advanced), CSS (Intermediate), SQL (Intermediate)</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <FaDatabase size={40} className="mx-auto text-green-400 mb-3" />
            <h3 className="font-semibold">Tools & Technologies</h3>
            <p>MySQL, Visual Studio, HTML, CSS</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            <FaHtml5 size={40} className="mx-auto text-orange-400 mb-3" />
            <h3 className="font-semibold">Soft Skills</h3>
            <p>Problem-Solving, Teamwork, Time Management, Adaptability, Critical Thinking</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-pink-400 mb-12 border-b border-pink-500 pb-2">🚀 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Password Strength Checker</h3>
            <p className="text-gray-300 mb-2">Tools: Python, Spring Boot, MySQL</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Evaluates password strength based on length, complexity, and uniqueness.</li>
              <li>Backend with Spring Boot & Spring Data JPA, frontend using HTML, CSS, JS, React.js.</li>
              <li>Improves cybersecurity awareness by highlighting weak passwords.</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Health & Fitness Tracker</h3>
            <p className="text-gray-300 mb-2">Tools: HTML, CSS, JavaScript</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Comprehensive web app for tracking health and fitness goals.</li>
              <li>Includes personalized profiles, activity tracking, and goal setting.</li>
              <li>Built with HTML, CSS, JavaScript, Bootstrap for responsive UI.</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl shadow hover:scale-105 transition" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Player Behavior Prediction</h3>
            <p className="text-gray-300 mb-2">Tools: HTML, CSS, JS, Python</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>ML model to predict player behavior and optimize in-game purchases.</li>
              <li>Uses advanced algorithms for data analysis and insights.</li>
              <li>Also includes a module for analyzing news authenticity.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12 border-b border-blue-500 pb-2">🎓 Education</h2>
        <div className="space-y-4">
          <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl shadow">
            <h3 className="font-semibold">B.Tech (CSE - AI) | Dr. M.G.R. Educational and Research Institute</h3>
            <p className="text-gray-300">2021 – 2025 | CGPA: 7.3</p>
          </div>
          <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl shadow">
            <h3 className="font-semibold">Intermediate (M.P.C) | Sri Chaitanya Jr. College</h3>
            <p className="text-gray-300">2019 – 2021 | Score: 640/1000</p>
          </div>
          <div data-aos="fade-up" className="bg-white/5 p-6 rounded-xl shadow">
            <h3 className="font-semibold">SSC | Ravindra Bharathi High School</h3>
            <p className="text-gray-300">2018 – 2019 | GPA: 7.7</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12 border-b border-yellow-500 pb-2">📜 Certifications</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2" data-aos="fade-up">
          <li>Python - RedHat (Chennai)</li>
          <li>HTML, CSS - Udemy (Chennai)</li>
          <li>Time Management - Xakal (Chennai)</li>
        </ul>
      </section>

      {/* Languages */}
      <section id="languages" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12 border-b border-green-500 pb-2">🌐 Languages Known</h2>
        <ul className="list-disc pl-6 text-gray-300 text-lg" data-aos="fade-up">
          <li>English</li>
          <li>Telugu</li>
          <li>Hindi</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-[#050505] via-[#0f0f1a] to-[#050505] text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:mkmhariharan6@gmail.com" className="hover:underline text-cyan-400">mkmhariharan6@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+919000641395" className="hover:underline text-cyan-400">+91 9000641395</a></p>
        <p>🌍 Hyderabad, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:mkmhariharan6@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:+919000641395" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
          <a href="https://www.linkedin.com/in/hari-haran-mkm-332a8a281" className="hover:text-yellow-300 transition" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
          <a href="#" className="hover:text-yellow-300 transition" target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
        </div>
      </section>

    </main>
  );
}
