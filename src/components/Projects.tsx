"use client";

import { motion } from 'framer-motion';
import { projects } from "@/data/projects";
import { Project } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <motion.div 
      className="projects-grid"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ margin: "-100px"}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {projects.map((project: Project, index: number) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>

            {project.tech && (
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-item" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="project-links">
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
                    className="project-nuget-logo"
                  />
                  NuGet
                </a>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
