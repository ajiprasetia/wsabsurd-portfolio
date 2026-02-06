import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Logo Minecraft Server zenyland ",
      category: "Graphic Design",
      image: "/project1.jpg",
      fullDescription: "Zenyland is the top 100 best Minecraft server in the world, I was entrusted to create the logo for this server, which is the main logo and their store logo.",
      skills: ["Logo Design", "Logomark", "Art & Design"],
      projectUrl: "https://www.instagram.com/p/C9K3cgiSPcp/?igsh=ZmtoYzU3dmt0dnd1"
    },
    {
      id: 2,
      title: "Vape Coil Business Logo Flappy",
      category: "Graphic Design",
      image: "/project2.jpg",
      fullDescription: "I was given the trust to design the logo for a coil business in Indonesia with the brand name Flappy, this brand is quite well-known in Pekanbaru, Indonesia.",
      skills: ["Logo Design", "Mascot Logo", "Corporate Branding"],
      projectUrl: "https://www.instagram.com/p/DJecFQcS9tk/?igsh=eXNkeGN3Ymgybjk5"
    },
    {
      id: 3,
      title: "Content Shader MCPE",
      category: "Content Creation",
      image: "/project4.jpg",
      fullDescription: "TOP BEST 3 SHADERS ULTRA REALISTIC TERBAIK RINGAN - Di Minecraft PE 1.21 + dan 1.21.100/101 Chase the Skies MCPE shader Render Dragon  for Low End Device | Shader MCPE MIRIP RTX 1.21/1.22",
      skills: ["Video Production", "Content Creation", "YouTube SEO", "Thumbnail Design", "Gaming Content"],
      projectUrl: "https://www.youtube.com/watch?v=x_WOq-idsYc"
    },
    {
      id: 4,
      title: "Video Trailer Zenyland",
      category: "Video Editing",
      video: "/project3.mp4",
      fullDescription: "Zenyland is the top 100 Minecraft server in the world, I was trusted to make the server opening video and server banner",
      skills: ["Video Editing", "Video Advertising", "Banner Ad Design", "2D Animation", "Logo Animation"],
      projectUrl: "https://www.instagram.com/reel/DAyY1aoMVuB/"
    },
    {
      id: 5,
      title: "Theotown Plugin",
      category: "Content Creation",
      video: "/project5.mp4",
      fullDescription: "Merubah grafis theotown menjadi lebih HD realistis dan aesthetic menggunakan plugin",
      skills: ["Video Editing", "Gaming", "Tutorial"],
      projectUrl: "https://vt.tiktok.com/ZSavvMMrk/"
    },
    {
      id: 6,
      title: "Redesign Logo Content",
      category: "Content Creation",
      video: "/project6.mp4",
      fullDescription: "Redesign logo brand skincare terkenal : Rebrand Concept",
      skills: ["Video Editing", "Redesign Logo", "Corporate Branding", "Logomark", "Logo Animation"],
      projectUrl: "https://vt.tiktok.com/ZSaceHhos/"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="project" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of my recent work showcasing video editing, graphic design, and content creation
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/9] object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500/90 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-center font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  className="w-full h-full object-cover rounded-t-2xl"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              )}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="text-white" size={24} />
              </button>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              {/* Project Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Project Description
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Skills Used */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <a
                href={selectedProject.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                View Project
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
