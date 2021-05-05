import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about--page">

      <section>

        <p className="intro">
          <q>We're all travelling through time together, every day of our lives. All we can do is, do our best to relish this remarkable ride.</q> - Richard Curtis
        </p>
      </section>


      <section>
        <h2>Tech</h2>

        <article>
          <h3>High interest:</h3>
          <div className="ico">
            <img
              key="vanilla"
              src={require(`../../images/ico/tech/vanilla.svg`).default}
              alt="vanilla" />
            <img
              key="ts"
              src={require(`../../images/ico/tech/ts.svg`).default}
              alt="ts" />
            <img
              key="ng"
              src={require(`../../images/ico/tech/ng.svg`).default}
              alt="ng" />
            <img
              key="svelte"
              src={require(`../../images/ico/tech/svelte.svg`).default}
              alt="svelte" />
            <img
              key="go"
              src={require(`../../images/ico/tech/go.svg`).default}
              alt="go" />
            <img
              key="python"
              src={require(`../../images/ico/tech/python.svg`).default}
              alt="python" />
            <img
              key="sass"
              src={require(`../../images/ico/tech/sass.svg`).default}
              alt="sass" />
            <img
              key="flutter"
              src={require(`../../images/ico/tech/flutter.svg`).default}
              alt="flutter" />
            <img
              key="docker"
              src={require(`../../images/ico/tech/docker.svg`).default}
              alt="docker" />
            <img
              key="git"
              src={require(`../../images/ico/tech/git.svg`).default}
              alt="git" />
          </div>
        </article>

        <article>
          <h3>Familiar with:</h3>
          <div className="ico">
            <img
              key="php"
              src={require(`../../images/ico/tech/php.svg`).default}
              alt="php" />
            <img
              key="flask"
              src={require(`../../images/ico/tech/flask.svg`).default}
              alt="flask" />
            <img
              key="django"
              src={require(`../../images/ico/tech/django.svg`).default}
              alt="django" />
            <img
              key="node"
              src={require(`../../images/ico/tech/node.svg`).default}
              alt="node" />
            <img
              key="vue"
              src={require(`../../images/ico/tech/vue.svg`).default}
              alt="vue" />
            <img
              key="rxjs"
              src={require(`../../images/ico/tech/rxjs.svg`).default}
              alt="rxjs" />
            <img
              key="react"
              src={require(`../../images/ico/tech/react.svg`).default}
              alt="react" />
            <img
              key="gatsby"
              src={require(`../../images/ico/tech/gatsby.svg`).default}
              alt="gatsby" />
            <img
              key="sql"
              src={require(`../../images/ico/tech/sql.svg`).default}
              alt="sql" />
            <img
              key="graphql"
              src={require(`../../images/ico/tech/graphql.svg`).default}
              alt="graphql" />
            <img
              key="materialize"
              src={require(`../../images/ico/tech/materialize.svg`).default}
              alt="materialize" />
            <img
              key="bs"
              src={require(`../../images/ico/tech/bs.svg`).default}
              alt="bs" />
          </div>
        </article>

      </section>


      <section>
        <h2>Contact:</h2>

        <article>
          <ul>
            <li>
              <img
                key="mail"
                src={require(`../../images/ico/mail.svg`).default}
                alt="mail" />
              <a  href="mailto:jhahspu@gmail.com">
                jhahspu@gmail.com
              </a>
            </li>

            <li>
              <img
                key="github"
                src={require(`../../images/ico/github.svg`).default}
                alt="github" />
              <a
                href="https://github.com/jhahspu"
                target="_blank"
                rel="noopener noreferrer" >
                  github.com/jhashpu
              </a>
            </li>

            <li>
              <img
                key="linkedin"
                src={require(`../../images/ico/linkedin.svg`).default}
                alt="linkedin" />
              <a
                href="https://linkedin.com/in/jhahspu"
                target="_blank"
                rel="noopener noreferrer" >
                  linkedin.com/in/jhashpu
              </a>
            </li>
          </ul>
        </article>

      </section>

    </div>
  </Layout>
)

export default AboutPage