import React from 'react'
import Layout from "../../components/layout"
import Projects from '../../components/Projects'
import SEO from "../../components/seo"


const PorjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
      <Projects />
  </Layout>
)

export default PorjectsPage