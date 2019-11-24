import React, { Component } from 'react'
import Slider from "react-slick"
import sliderImg1 from '../img/slider-img-1.jpg'
import sliderImg2 from '../img/slider-img-2.jpg'
import sliderImg3 from '../img/slider-img-3.jpg'

export default class slider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 4000,
    };
    return (
      <Slider className="slider-wrapper" {...settings}>
        <div>
          <div className="slider-inner-content" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))' }}></div>
          <img src={sliderImg1} />
          <div class="carousel-caption">
            <h3 class="caption-title">Bohemian Rhapsody (2018)</h3>
            <p class="summary-text">
              Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead ...
            </p>
            <a href="" class="play-btn">Watch Now</a>
          </div>
        </div>
        <div>
          <div className="slider-inner-content" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))' }}></div>
          <img src={sliderImg2} />
          <div class="carousel-caption">
            <h3 class="caption-title">Bohemian Rhapsody (2018)</h3>
            <p class="summary-text">
              Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead ...
            </p>
            <a href="" class="play-btn">Watch Now</a>
          </div>
        </div>
        <div>
          <div className="slider-inner-content" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))' }}></div>
          <img src={sliderImg3} />
          <div class="carousel-caption">
            <h3 class="caption-title">Bohemian Rhapsody (2018)</h3>
            <p class="summary-text">
              Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead ...
            </p>
            <a href="" class="play-btn">Watch Now</a>
          </div>
        </div>
      </Slider>
    )
  }
}

