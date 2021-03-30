import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">

      <div id="hero">
        <p>Hi there, I'm Jhahspu. I develop apps for the web, desktop and mobile.</p>
        <Link to="/projects" id="btn-action">My Projects</Link>
      </div>
      
      
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
  </Layout>
)

export default IndexPage
