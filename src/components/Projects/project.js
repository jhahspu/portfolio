import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Project({ project, index }) {
  const { title, image, description, tech, live, code } = project
  let te = tech.split(",")

  return (
    <article className={`project ${index % 2 !== 0 ? 'right': 'left'}`}>

        <div className="image" >
          <GatsbyImage image={getImage(image)} alt={title} />
        </div>

        <div className="description">
          
          <p className="highlight">Featured Project</p>
          
          <h3>{title}</h3>
          
          <p className="prj-desc">
            {description}
          </p>
          
          <ul>
            {te.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>

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

        </div>

    </article>
  )
}

export default Project