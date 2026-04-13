"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  
  const layoutId = `card-${project.id}`;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    }, [isExpanded]);

  return (
    <>
      {/* Collapsed Card */}
      <div onClick={toggleExpand} className="cursor-pointer">
        <motion.div
          className="project-card overflow-hidden bg-card-bg"
          layoutId={layoutId}
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div layoutId={`image-${layoutId}`} className="w-full">
            <Image
              src={project.image}
              alt={project.title}
              className="project-image w-full"
              width={400} 
              height={300}  
            />
          </motion.div>
          <h3 className="font-bold mt-2 text-xl">{project.title}</h3>
          <p>{project.description}</p>
          
          {/* Tech details */}
          {project.tech && (
            <div className="project-tech mt-2 flex flex-wrap gap-1">
              {project.tech.map((tech, i) => (
                <span 
                className="tech-item text-xs bg-gray-200 rounded px-2 py-1"
                 key={i}
                 >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Project links */}
          <div className="project-links mt-2 space-x-3">
            {project.github && (
              <a 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {project.githubBackend && (
              <a 
              href={project.githubBackend}
              target="_blank" 
              rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Backend
              </a>
            )}
            {project.githubFrontend && (
              <a 
              href={project.githubFrontend}
              target="_blank" 
              rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Frontend
              </a>
            )}
            {project.website && (
              <a 
              href={project.website} 
              target="_blank" 
              rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> Website
              </a>
            )}
            {project.nuget && (
              <a 
              href={project.nuget} 
              target="_blank" 
              rel="noopener noreferrer">
                <Image
                  src="/images/nuget_128.png"
                  alt="NuGet"
                  width={20}
                  height={20}
                  className="project-nuget-logo inline-block"
                />
                NuGet
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
           className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut"}}
            onClick={toggleExpand}
          >
            <motion.div
              className="bg-[#16161a]/30 backdrop-blur-md rounded-lg pt-4 px-8 pb-8 overflow-y-auto max-h-[85vh] max-w-4xl w-full mx-4 md:[&::-webkit-scrollbar]:hidden"
              layoutId={layoutId}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-2 md:hidden">
                <button
                  onClick={toggleExpand}
                  className="text-white/60 hover:text-white text-2xl leading-none p-1"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <motion.div layoutId={`image-${layoutId}`} className="w-full max-w-xl mx-auto">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full object-cover rounded-lg"
                width={400}
                height={300}
              />
              </motion.div>
              <h3 className="font-bold mt-4 text-3xl text-white">{project.title}</h3>
              <div className="mt-3 text-lg leading-relaxed text-white/90 space-y-3">
                {(project.longDescription ?? project.description)
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
              </div>

              {project.tech && (
                <div className="project-tech mt-4">
                  {project.tech.map((tech, i) => (
                    <span 
                    className="tech-item mr-1"
                    key={i}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-links mt-4">
                {project.github && (
                  <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
                {project.githubBackend && (
                  <a 
                  href={project.githubBackend} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Backend
                  </a>
                )}
                {project.githubFrontend && (
                  <a 
                  href={project.githubFrontend} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Frontend
                  </a>
                )}
                {project.website && (
                  <a 
                  href={project.website} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Website
                  </a>
                )}
                {project.nuget && (
                  <a 
                  href={project.nuget} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    <Image
                    src="/images/nuget_128.png"
                    alt="NuGet"
                    width={20}
                    height={20}
                    className="project-nuget-logo inline-block"
                  />
                    NuGet
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
