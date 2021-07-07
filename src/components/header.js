import * as React from "react"
import PropTypes from "prop-types"

const Header = () => (
  <header>

    <nav>

      <a href="#intro" className="logo">JT</a>

      <ol className="nav">
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ol>

      <a href="/ResumeCatalinIMolnar.pdf" className="btn btn-sm" rel="noopener noreferrer">
        Resume
      </a>
  
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header