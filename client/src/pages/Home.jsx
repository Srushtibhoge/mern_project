import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPython, SiMongodb, SiNextdotjs } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center
        justify-between gap-10 max-w-6xl mx-auto px-6 py-20">

        <div className="flex-1">
          <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-3">
            Hello, I'm Srushti 👋
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight
            text-gray-800 dark:text-white">
            Full Stack Developer
            <span className="block bg-gradient-to-r from-indigo-500
              via-purple-500 to-pink-500 bg-clip-text text-transparent">
              & Generative AI Developer
            </span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg
            max-w-2xl leading-relaxed">
            I build scalable web and mobile applications using React,
            Node.js, Angular, Python and modern Generative AI technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/projects">
              <Button gradientDuoTone="purpleToBlue">
                View My Projects
              </Button>
            </Link>

            <Link to="/about">
              <Button color="gray">
                About Me
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-8 text-2xl text-gray-600
            dark:text-gray-300">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r
              from-indigo-500 via-purple-500 to-pink-500
              rounded-full blur-2xl opacity-30">
            </div>

            <img
              src="https://via.placeholder.com/350"
              alt="Srushti"
              className="relative w-64 h-64 md:w-80 md:h-80
                rounded-full object-cover border-8 border-white
                dark:border-gray-800 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center
            text-gray-800 dark:text-white">
            Technologies I Work With
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-3">
            Building modern web, mobile and AI-powered applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">

            <Skill icon={<FaReact />} name="React.js" />
            <Skill icon={<FaNodeJs />} name="Node.js" />
            <Skill icon={<SiNextdotjs />} name="Next.js" />
            <Skill icon={<SiPython />} name="Python" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiMongodb />} name="Express.js" />


          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center
          text-gray-800 dark:text-white">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <ServiceCard
            title="Full Stack Development"
            description="Develop responsive and scalable web applications using React, Node.js, Angular and MongoDB."
          />

          <ServiceCard
            title="Mobile Development"
            description="Build cross-platform mobile applications using React Native and Ionic."
          />

          <ServiceCard
            title="Generative AI"
            description="Build AI-powered applications using LLMs, RAG, embeddings, APIs and agentic workflows."
          />

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-500
        via-purple-500 to-pink-500 py-16">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Build Something Together
          </h2>

          <p className="text-white/90 mt-4">
            Interested in working together or have an opportunity?
            I'd love to hear from you.
          </p>

          <Link to="/about">
            <Button color="light" className="mx-auto mt-6">
              Get In Touch
            </Button>
          </Link>

        </div>
      </section>

    </div>
  );
}


/* Skill Component */
function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center justify-center
      p-6 bg-white dark:bg-gray-800 rounded-xl shadow
      hover:scale-105 transition">

      <div className="text-4xl text-purple-600 dark:text-purple-400">
        {icon}
      </div>

      <p className="mt-3 font-medium text-gray-700 dark:text-gray-200">
        {name} 
      </p>
    </div>
  );
}


/* Service Component */
function ServiceCard({ title, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow
      hover:shadow-lg transition">

      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

    </div>
  );
}