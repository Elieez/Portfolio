"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  
  // Use a layoutId for shared layout animations.
  const layoutId = `card-${project.id || project.title}`;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }  
    };

    if (isExpanded) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when expanded
    }
    else {
      document.body.style.overflow = "auto"; // Allow scrolling when collapsed
    }

    if (isExpanded) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
    }, [isExpanded]);

  return (
    <>
      {/* Collapsed Card */}
      <div onClick={toggleExpand} className="cursor-pointer">
        <motion.div
          className="project-card overflow-hidden rounded-lg bg-card-bg p-4"
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
          <h3 className="font-bold mt-2">{project.title}</h3>
          <p>{project.description}</p>
          
          {/* Tech details */}
          {project.tech && (
            <div className="project-tech mt-2">
              {project.tech.map((tech, i) => (
                <span className="tech-item mr-1" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Project links */}
          <div className="project-links mt-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> Website
              </a>
            )}
            {project.nuget && (
              <a href={project.nuget} target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/nuget_128.png"
                  alt="NuGet"
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
            onClick={toggleExpand} // Close modal when clicking the backdrop
          >
            <motion.div
              className="bg-card-bg rounded-lg p-8 overflow-auto max-w-xl w-full mx-4"
              layoutId={layoutId}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
                layoutId={`image-${layoutId}`}
              />
              <h3 className="font-bold mt-4 text-2xl">{project.title}</h3>
              <p className="mt-2">
                {project.longDescription ? project.longDescription : project.description}
              </p>

              {/* Tech details in expanded view */}
              {project.tech && (
                <div className="project-tech mt-4">
                  {project.tech.map((tech, i) => (
                    <span className="tech-item mr-1" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Project links in expanded view */}
              <div className="project-links mt-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Website
                  </a>
                )}
                {project.nuget && (
                  <a href={project.nuget} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/nuget_128.png"
                      alt="NuGet"
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
