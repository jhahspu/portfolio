import React from "react"
import Project from "./project"
import useProject from "../../hooks/use-projects"

function Projects() {
  const projects = useProject()
  return (
    <section id="projects">

      <h3 className="heading">
        <span className="heading-index">01. </span>
        <span className="heading-text">Some of the things I've built.</span>
      </h3>
      
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
      
    </section>
  )
}

export default Projects