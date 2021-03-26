import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Icons from "./icons"

function Project({ project, index }) {
  const { title, image, description, tech, live, code, time } = project

  return (
    <div className="prj">

      <div className="prj-descr">
        <h2>{title}</h2>
        <h3>{time}</h3>
        <p>{description}</p>
        <div className="links">
          {live !== null ? (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          ) : (  "" )}
          {code !== null ? (
            <a href={code} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          ) : ( "" )}
        </div>
        <div className="prj-tech">
          {tech !== null ? <Icons tech={tech} /> : ""}
        </div>
      </div>

      <div className="prj-img" >
        <GatsbyImage image={getImage(image)} alt={title} />
      </div>
    </div>
  )
}

export default Project