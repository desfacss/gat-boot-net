/*
import React, {Component} from 'react'
import { graphql } from 'gatsby'

import './creative.css'



export default class Images extends Component {

  

  render() {
    
    const data = this.props.data;


    componentDidMount() {
      var req = require.context('../../public/static/images', false, /.*\.jpg$/);
      req.keys().forEach(function(key) {
        req(key);
      });
  

    return (
      

<div> 
  
  {data.allFile.edges.map(img => {
    return <img src={withPrefix(`images/${img.node.relativePath}`)} />;
  })}

</div>


    );
  }
}


export const query = graphql`
  query ImagesQuery {
    allFile {
      edges {
        node {
          extension
          dir
          modifiedTime
          relativePath
        }
      }
    }
  }
`;



let source = './img/' + props.imageSource;

  const style = {

    image : {

      width: '400pt',
      height: '400pt'
    }
  }

  return (

    <img src={source} role="presentation" style={style.image} />
  )
}



// webpack

componentDidMount() {
    var req = require.context("../path/to/my/directory", false, /.*\.svg$/);
    req.keys().forEach(function(key){
      req(key);
    });
 }
*/






