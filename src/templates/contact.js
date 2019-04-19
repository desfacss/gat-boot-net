import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import Carousel from '../components/carousels'
import About from '../components/about'
import Services from '../components/services'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div>
        <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
        <Container>
          <h1 className='display-3'>{post.frontmatter.title}</h1>
        </Container>
        <Container dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
        
      <About />
      
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export const contactPageQuery = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
