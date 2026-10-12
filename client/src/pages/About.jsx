import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <h1 className="text-3xl font-bold lg:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Srush's Blog
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-gray-500 sm:text-base">
          Welcome to my blog! I'm a Full Stack Developer passionate about
          building modern web applications, exploring Generative AI, and
          sharing my knowledge with the developer communityy.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button gradientDuoTone="purpleToBlue" as={Link} to="/projects">
            Explore My Projects
          </Button>

          <Button color="light" as={Link} to="/">
            Back to Home
          </Button>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
            <div className="rounded-lg bg-white p-8 dark:bg-gray-900">
              <FaCode className="mb-4 text-4xl text-purple-500" />

              <h2 className="mb-4 text-2xl font-bold">Who Am I?</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I'm a Full Stack Developer with 3+ years of experience
                building responsive and user-friendly applications using
                React, Node.js, Angular, and React Native.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                I'm also interested in Generative AI and Agentic AI,
                exploring how intelligent systems can solve real-world
                problems and improve user experiences.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold">
              What I Do
            </h2>

            <div className="mb-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-600 dark:text-purple-400">
                Full Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building scalable web applications, REST APIs, secure
                authentication systems, and interactive user interfaces.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-600 dark:text-purple-400">
                Generative AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Exploring LLM applications, Retrieval-Augmented Generation
                (RAG), embeddings, and AI-powered application development.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-purple-600 dark:text-purple-400">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learning new technologies, experimenting with projects,
                and sharing practical development knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-100 px-4 py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-3xl font-bold">
            Technologies I Work With
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React.js",
              "React Native",
              "Next.js",
              "Angular",
              "Node.js",
              "Express.js",
              "Python",
              "MongoDB",
              "REST APIs",
              "Generative AI",
              "RAG",
              "LangChain",
              "LangGraph",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:text-purple-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="px-4 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Let's Connect!
        </h2>

        <p className="mx-auto mb-6 max-w-xl text-gray-500 dark:text-gray-400">
          Thanks for visiting my blog. Feel free to explore my work,
          connect with me, and follow my journey in software development
          and AI.
        </p>

        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-3xl text-gray-700 transition hover:text-purple-600 dark:text-gray-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-3xl text-gray-700 transition hover:text-purple-600 dark:text-gray-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}