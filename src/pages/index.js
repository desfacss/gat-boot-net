    
import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import '../components/creative.css'

const IndexPage = ({ data }) => {
 
  return (
    <Layout />
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`