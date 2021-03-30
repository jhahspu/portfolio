import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about--page">

      <section>
        <h2>About</h2>
        
          <p className="intro">I am genuinely interested in all there is about computers, networks, peripherals and gadgets.</p>
        
      </section>


      <section>
        <h2>Skills</h2>

        <article>
          <h3>Frontend</h3>
          <div className="ico">
            <img
              key="ng"
              src={require(`../../images/ico/tech/ng.svg`).default}
              alt="ng" />
            <img
              key="gatsby"
              src={require(`../../images/ico/tech/gatsby.svg`).default}
              alt="gatsby" />
            <img
              key="vuejs"
              src={require(`../../images/ico/tech/vuejs.svg`).default}
              alt="vuejs" />
            <img
              key="js"
              src={require(`../../images/ico/tech/js.svg`).default}
              alt="js" />
            <img
              key="node"
              src={require(`../../images/ico/tech/node.svg`).default}
              alt="node" />
            <img
              key="sass"
              src={require(`../../images/ico/tech/sass.svg`).default}
              alt="sass" />
          </div>
        </article>

        <article>
          <h3>Backend</h3>
          <div className="ico">
            <img
              key="php"
              src={require(`../../images/ico/tech/php.svg`).default}
              alt="php" />
            <img
              key="python"
              src={require(`../../images/ico/tech/python.svg`).default}
              alt="python" />
            <img
              key="go"
              src={require(`../../images/ico/tech/go.svg`).default}
              alt="go" />
            <img
              key="fire"
              src={require(`../../images/ico/tech/fire.svg`).default}
              alt="fire" />
          </div>
        </article>

        <article>
          <h3>DB</h3>
          <div className="ico">
            <img
              key="no-sql"
              src={require(`../../images/ico/tech/no-sql.svg`).default}
              alt="no-sql" />
            <img
              key="mysql"
              src={require(`../../images/ico/tech/mysql.svg`).default}
              alt="mysql" />
            <img
              key="graphql"
              src={require(`../../images/ico/tech/graphql.svg`).default}
              alt="graphql" />
          </div>
        </article>

        <article>
          <h3>Mobile</h3>
          <div className="ico">
            <img
              key="flutter"
              src={require(`../../images/ico/tech/flutter.svg`).default}
              alt="flutter" />
          </div>
        </article>
      </section>


      <section>
        <h2>Contact</h2>

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
                key="linkedin"
                src={require(`../../images/ico/linkedin.svg`).default}
                alt="linkedin" />
              <a
                href="https://linkedin.com/in/catalinim"
                target="_blank"
                rel="noopener noreferrer" >
                  linkedin.com/in/catalinim
              </a>
            </li>
          </ul>
        </article>

      </section>

    </div>
  </Layout>
)

export default AboutPage


// ABOUT

// Highly motivated, full stack software developer with a passion for delivering high quality, requirements-driven software.

// I have over 7 years of experience as a full stack software engineer and have worked at both small startups and large organizations. As a software developer, I enjoy putting my obsessive attention to detail to use building out user friendly frontend components and scalable backend services.

// I have an insatiable interest in learning new technologies as well as a strong desire to build modular, maintainable, and well-tested applications. I am constantly sharpening my skills and keeping up with the latest trends in web development and cloud computing.



// EXPERIENCE

// COMPANY NAME | POSITION

// Innovative, software consulting firm implementing cutting-edge solutions combining technology, strategy, and change management to meet and exceed client needs

// CLIENT PRODUCT DEVELOPMENT
// Contribute core features to a client requested video streaming progressive web application (PWA)
// Collaborated with agile team to build front-end of PWA using React
// Researched and determined best third party video streaming software to fit client needs
// Lead developer on building out AWS lambda functions to handle streaming using AWS SDK
// Tools: React, Typescript, SASS // Node.js, Typescript, Go, MySQL // AWS
// May 2019 - Present | Chicago, IL


// SKILLS

// FRONT END

// BACKEND


// CONTACT
