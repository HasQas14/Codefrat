import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousal extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div class="carousel-head">
          <br /><br /><br /><br /><br /><br />
        <h2>People Working On this Project</h2>
        <Slider {...settings}>
          <div>
          <h4>Qaseem Hasan<br /><span>4th Year BBDNITM</span></h4>
          </div>
          <div>
          <h4>Saurav Pratap Singh<br /><span>4th Year BBDNITM</span></h4>
          </div>
          <div>
          <h4>Shivansh Srivastava <br /><span>4th Year BBDNITM</span></h4>
          </div>
          <div>
          <h4>Shashank Dwivedi<br /><span>4th Year BBDNITM</span></h4>
          </div>
        </Slider>
      </div>
    );
  }
}