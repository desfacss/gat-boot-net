import React, {Component} from 'react'
import './creative.css'

export default class Portfolio extends Component {

  render() {
    return (



        <div className="portfoliosection">  
              <section id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href={require("./img/portfolio/fullsize/1.jpg")}>
                <img className="img-fluid" src={require("./img/portfolio/fullsize/1.jpg")} alt= "" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href={require("./img/portfolio/fullsize/2.jpg")}>
                <img className="img-fluid" src={require("./img/portfolio/fullsize/2.jpg")} alt= "" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href={require("./img/portfolio/fullsize/3.jpg")}>
                <img className="img-fluid" src={require("./img/portfolio/fullsize/3.jpg")} alt= "" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href={require("./img/portfolio/fullsize/4.jpg")}>
                <img className="img-fluid" src={require("./img/portfolio/fullsize/4.jpg")} alt= "" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href={require("./img/portfolio/fullsize/5.jpg")}>
                <img className="img-fluid" src={require("./img/portfolio/thumbnails/5.jpg")} alt= "" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href={require("./img/portfolio/fullsize/6.jpg")}>
                <img className="img-fluid" src={require("./img/portfolio/fullsize/6.jpg")} alt= "" />
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    
        </div>





    );
  }
}








