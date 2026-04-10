"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import dynamic from "next/dynamic";

const ProjectCard = dynamic(
  () => import("@/components/ProjectCard"),
  { loading: () => <div>Loading...</div> }
);

export default function ProjectsGrid() {
  return (
    <motion.div
      className="projects-grid"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
