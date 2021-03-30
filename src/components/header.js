import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="logo">
        <Link to="/">{siteTitle}</Link>
      </div>
      
      <div className="links">
        <Link to="/projects" activeClassName="active">Projects</Link>
        <Link to="/about" activeClassName="active">About</Link>
      </div>
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
