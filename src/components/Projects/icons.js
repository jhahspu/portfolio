import React from "react"

function Icons({ tech }) {
  let icons = tech.split(",")

  return (
    <div>
      {icons.map(icon =>
        icon !== "" ? (
          <img
            key={icon}
            src={require(`../../images/ico/tech/${icon}.svg`).default}
            alt={icon} />
        ) : (
          ""
        )
      )}
    </div>
  )
}

export default Icons