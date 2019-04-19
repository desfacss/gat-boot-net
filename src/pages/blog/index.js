import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
// import Carousel from './carousels'

const BlogPage = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
 
  slidesToShow: 3,  
  slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false
};
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  const posts1 = posts.splice(0,4)
  const posts2 = posts
  
  return (
    <Layout>
      <Container>
    
  
        
          <Slider {...settings}>
          {posts1.map(({ node: post }) => (
          <div className="carousels">
          <Card style={{marginBottom: 10}} key={post.id}>
            <CardBody>
              <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
              <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
              <CardText>{post.excerpt}</CardText>
            </CardBody>
          </Card>
          </div>
          

        ))}
                  </Slider>

         <div>length = {posts1.length}</div>

         <Slider {...settings}>
          {posts2.map(({ node: post }) => (
          <div className="carousels">
          <Card style={{marginBottom: 10}} key={post.id}>
            <CardBody>
              <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
              <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
              <CardText>{post.excerpt}</CardText>
            </CardBody>
          </Card>
          </div>
          
          
         
        ))}
         </Slider>
         <div>length = {posts2.length}</div>
       <div>length = {data.allMarkdownRemark.edges.length}</div>

      </Container>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
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
