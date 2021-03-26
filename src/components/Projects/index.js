import React from "react"
import Project from "./project"
import useProject from "../../hooks/use-projects"

function Projects() {
  const projects = useProject()
  return (
    <div>
      <h1>Projects</h1>
      <div className="prjs" >
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects