import React from 'react';
import FlashSale from "./images/flash_sale1.jpg"
import BannerPink from "./images/bambaska.jpg"
import Modal from "./images/banner_pink.png"
import Modal1 from "./images/bambaska6.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
  };

const BannerOne = () => {
    return (
        <div className="containerOne">

        <div className="banner__container">


            <div className="slide__show">
                <Slider {...settings}>
                    <div className="slide__item">
                        <img src={BannerPink} alt="картинка"/>
                    </div>
                    <div className="slide__item">
                        <img src={Modal} alt="картинка"/>
                    </div>
                    <div className="slide__item">
                        <img src={Modal1} alt="картинка"/>
                    </div>
                </Slider>
            </div>
          <div className="banner__content">
            <img src={FlashSale} alt="" className="banner__image"/>
          </div>
        </div>
    </div>
    )
}

export default BannerOne;