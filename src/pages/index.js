import * as React from "react"
import Layout from "../components/layout"
import Scene from "../components/scene"
import SEO from "../components/seo"
import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <div className="home--text">
        <div>
          <h1>Design</h1>
          <h1>Develop</h1>
          <h1>Deploy</h1>
          <Link to="/projects" className="btn-action"> My Projects</Link>
        </div>
      </div>
      <div className="home--images">
        <img
          id="phone"
          src={require(`../images/phone.svg`).default}
          alt="phone" />
        <img
          id="desktop"
          src={require(`../images/desktop.svg`).default}
          alt="desktop" />
        <img
          id="server"
          src={require(`../images/server.svg`).default}
          alt="server" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
