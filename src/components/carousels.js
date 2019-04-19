import React, { Component } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./creative.css"

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true
    };
    
    return (
      <div align="center">

        <Slider {...settings}>
        <div className="carousels">
            <img src={require('./img/carousel/1.jpg')} width="640" height="360" alt=""/>

            <h5>My First Gatsby Post</h5>
    <p><h5>Posted by John Doe on 2018-04-07</h5></p>
    <p>This is my First post in Gatsby</p>
  </div>
          <div className="carousels">
            <img src={require('./img/carousel/2.jpg')} width="640" height="360" alt=""/>
 
            <h5>My Second Gatsby Post</h5>
    <p><h5>Posted by John Doe on 2018-04-11</h5></p>
    <p>This is my Second post in Gatsby</p>
  </div>
          <div className="carousels">
            <img src={require('./img/carousel/3.jpg')} width="640" height="360" alt=""/>
 
    <h5>My Third Gatsby Post</h5>
    <p><h5>Posted by John Doe on 2018-04-13</h5></p>
    <p>This is my third post in Gatsby</p>
  </div>
          <div className="carousels">
            <img src={require('./img/carousel/4.jpg')} width="640" height="360" alt=""/>

            <h5>My Fourth Gatsby Post</h5>
    <p><h5>Posted by John Doe on 2018-04-16</h5></p>
    <p>This is my Fourth post in Gatsby</p>
            </div>
          <div className="carousels">
            <img src={require('./img/carousel/5.jpg')} width="640" height="360" alt=""/>

            <h5>My fifth Gatsby Post</h5>
    <p><h5>Posted by John Doe on 2018-04-17</h5></p>
    <p>This is my fifth post in Gatsby</p>
  </div>
          <div className="carousels">
            <img src={require('./img/carousel/6.jpg')} width="640" height="360" alt=""/>

            <h5>My sixth Gatsby Post</h5>
    <p><h5>Posted by John Doe on 2018-04-19</h5></p>
    <p>This is my sixth post in Gatsby</p>
      </div>
          <div className="carousels">
            <img src={require('./img/carousel/7.jpg')}  width="640" height="360" alt=""/>

            <h5>My seventh Gatsby Post</h5>
    <p><h5>Posted by John Doe on 2018-04-23</h5></p>
    <p>This is my seventh post in Gatsby</p>
    
          </div>
        </Slider>
      </div>
    );
  }
}