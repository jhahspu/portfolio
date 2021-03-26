import * as React from "react"
import Layout from "../components/layout"
import Scene from "../components/scene"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="playground">
      <Scene />
    </section>
  </Layout>
)

export default IndexPage
