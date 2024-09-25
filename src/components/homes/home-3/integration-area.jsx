import Image from "next/legacy/image";
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

// slider img import here
import slider_img_1_1 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-1.webp";
import slider_img_1_2 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-2.webp";
import slider_img_1_3 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-3.webp";
import slider_img_1_4 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-4.webp";
import slider_img_1_5 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-5.webp";
import slider_img_1_6 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-6.png";
import slider_img_2_1 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-7.webp";
import slider_img_2_2 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-8.webp";
import slider_img_2_3 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-13.webp";
import slider_img_2_4 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-10.webp";
import slider_img_2_5 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-11.webp";
import slider_img_2_6 from "../../../../public/assets/img/integration/Cloud-Solutions-Integrations-12.webp";

const integration_content ={
    sub_title: "Integrations",
    title: <>Easily Integrates With Your <span>Technology Stack</span></>,
    int_title: <>Integrated with Your Favourite Apps</>,
    btn_text: "Book A Call",
    bg_img: "/assets/img/integration/integration-bg.jpg"
}
const {sub_title, title, int_title, btn_text, bg_img}  = integration_content


const slider_one_data = [
    slider_img_1_1,
    slider_img_1_2,
    slider_img_1_3,
    slider_img_1_4,
    slider_img_1_5,
    slider_img_1_6,
]
const slider_two_data = [
    slider_img_2_1,
    slider_img_2_2,
    slider_img_2_3,
    slider_img_2_4,
    slider_img_2_5,
    slider_img_2_6,
    // slider_img_2_7,
]


// slider one setting 
const setting_one = {
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}

// slider two setting 
const setting_two = {
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}
 
const IntegrationArea = ({style_integraton}) => {
    return (
        <>
            <div className="tp-integration-area pb-110 tp-integration-mlr">
               <div className="container">
                  <div className="row align-items-end tp-integration-section-space">
                     <div className="col-xl-6 col-lg-8 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-integration-section-box">
                            {style_integraton ? 
                                <>
                                    <h5 className="tp-integration-subtitle">{sub_title}</h5>
                                    <h3 className="tp-section-title-3">{int_title}</h3>                                
                                </> 
                                : 
                                <>
                                    <h5 className="tp-integration-subtitle">{sub_title}</h5>
                                    <h3 className="tp-section-title-3">{title}</h3>                                
                                </>
                            }
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-4 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-integration-btn text-lg-end text-start">
                           <Link className="tp-btn-blue-lg tp-btn-hover alt-color-black" href="/">
                              <span>{btn_text}</span>
                              <b></b>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-integration-slider-wrapper pt-50 pb-50" 
                    style={{backgroundImage: `url(${bg_img})`}}>
                  <Slider {...setting_one} className="tp-integration-slider-active">
                    {slider_one_data.map((item, i)  => 
                        <div key={i} className="tp-integration-slider-main slick-slide">
                        <div className="tp-integration-slider-item">
                           <Image src={item} alt="theme-pure" class="custom_icon_integration" />
                        </div>
                     </div>
                    )}                     
                  </Slider>
                  <Slider {...setting_two} className="tp-integration-slider-active-2 carousel-rtl" dir="rtl">
                    {slider_two_data.map((item, i)  => 
                        <div key={i} className="tp-integration-slider-main slick-slide">
                        <div className="tp-integration-slider-item">
                           <Image src={item} alt="theme-pure" class="custom_icon_integration" />
                        </div>
                     </div>
                        
                    )} 
                  </Slider>
               </div>
            </div>
        </>
    );
};

export default IntegrationArea;