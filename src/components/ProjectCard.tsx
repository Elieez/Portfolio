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
      document.body.style.overflow = "hidden"; 
      document.addEventListener("keydown", handleKeyDown);
    }
    else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; 
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
          <motion.img
            src={project.image}
            alt={project.title}
            className="project-image w-full object-cover"
            layoutId={`image-${layoutId}`}
          />
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
              className="bg-card-bg rounded-lg p-8 overflow-auto max-w-2xl w-full mx-4"
              layoutId={layoutId}
              onClick={(e) => e.stopPropagation()} 
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full object-cover rounded-lg"
                layoutId={`image-${layoutId}`}
              />
              <h3 className="font-bold mt-4 text-2xl">{project.title}</h3>
              <p className="mt-2 text-base">
                {project.longDescription 
                ? project.longDescription 
                : project.description}
              </p>

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
