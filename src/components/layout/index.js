import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../header.js'
import Navbar from '../navbar/menu.js'
import Footer from '../footer.js'
// import Carousel from '../carousels.js'
import '../creative.css'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />
        {/*<div className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <Container>
            <Link to='/' className='navbar-brand'>{data.site.siteMetadata.title}</Link>
            <ul className='nav navbar-nav'>
              {user && (
                <li className='nav-item'>
                  <a href='/admin' className='nav-link'>Admin</a>
                </li>
              )}
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
              </li>
            </ul>
          </Container>
              </div>*/}
        <Navbar />
        <Header />
        <div className='pageContent'>{children}</div>

      
        <Footer />
      </div>
    )} />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper