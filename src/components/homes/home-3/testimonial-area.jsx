import React, {useRef} from 'react';
import Slider from 'react-slick';

import testimonial_img_1 from "../../../../public/assets/img/testimonial/testi-3-2.png"
import testimonial_img_2 from "../../../../public/assets/img/testimonial/testi-3-3.png"
import testimonial_img_3 from "../../../../public/assets/img/testimonial/testi-3-4.png"
import testimonial_img_4 from "../../../../public/assets/img/testimonial/testi-3-5.png"
import Image from 'next/image';


const testimonial_content  = {
    bg_img: "/assets/img/testimonial/testi-bg-3-1.png",
    title: <><span>Kind Words</span><br />from our Customers</>
}
const {bg_img , title}  = testimonial_content


// slider setting
const settings = {	
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false, 
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
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


// testimonial data
const testimonial_data = [
    {
        id: 1, 
        img: testimonial_img_1, 
        name: "Stacy Stubblefield",
        // job_title: "Founder & CEO Dulalix",
        description: <>Biswajit has been excellent to work with! He's extremely detail oriented and hard working and has helped our company immensely. He takes the time to deeply understand the projects he's working on and gives great feedback and advice on the projects. He's also extremely skilled and is an expert in his domain. Anyone would be lucky to work with Biswajit!</>,

    },
    {
        id: 2, 
        img: testimonial_img_2, 
        name: "Laura Thain",
        // job_title: "Founder & CEO Dulalix",
        description: <>I hired Biswajit to set up my ESP’s and DNS records to ensure that everything was set right for highest email deliverability for effective marketing campaigns and customer nurture sequences.

        He was extremely fast, attentive and patient with my queries and I felt very safe handing him the keys to do what he does best. An area in which I know very little, yet he left me more educated than before.
        
        Highly recommend him for your digital marketing needs.</>,

    },
    {
        id: 3, 
        img: testimonial_img_3, 
        name: "Adam Simpson",
        // job_title: "Founder & CEO Dulalix",
        description: <>Biswajit is an expert at lead generation and cold email. I can highly recommend him and his team to anyone in need, thank you so much.</>,

    },
    {
        id: 4, 
        img: testimonial_img_4, 
        name: "Dabia Belote",
        job_title: "Founder & CEO Dulalix",
        description: <>Biswajit did everything well. He setup my emailing system properly and it's working efficiently. He also did not milk the clock but did everything in a timely professional manner, I would call it a top of the line service at an affordable price. I would diffidently reorder with Biswajit again and again for his expertise and professionalism, and the most important of all, he gets the job done right! I would highly recommend his service to anyone</>,

    },
    {
        id: 4, 
        img: testimonial_img_4, 
        name: "Roshan Jonah",
        job_title: "Founder & CEO Dulalix",
        description: <>You can't find a more skillful person to work with than Biswajit. He is a rare find, and we will continue working with him for a long time to come. He is fast, efficient, a great communicator, and most of all, gets the job done. If he doesn't find the answer, he will look up and educates himself to get the job done. Highly recommended.</>,

    },
]


const TestimonialArea = () => {
    const sliderRef = useRef(null);
    return (
        <>
            <div className="tp-testimonial-area tp-testimonial-3-mlr pb-110">
               <div className="tp-testimonial-3-bg pt-110 fix" 
               style={{backgroundImage: `url(${bg_img})`}}
               >
                  <div className="container">
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-testimonial-3-section-box d-flex justify-content-between align-items-end mb-60">
                              <h3 className="tp-section-title-3 text-white">{title}</h3>
                              <div className="tp-test-arrow d-flex pb-10">
                                <button
                                  onClick={() => sliderRef.current?.slickPrev()}
                                  type="button" className="slick-prev"><i className="fal fa-angle-left"></i></button>
                                <button
                                  onClick={() => sliderRef.current?.slickNext()}
                                  type="button" className="slick-next"><i className="fal fa-angle-right"></i></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-testimonial-3-slider-wrapper">
                     <div className="container-fluid g-0">
                        <div className="row g-0">
                           <div className="col-12"> 
                                <Slider 
                                ref={sliderRef} {...settings}
                                className="tp-testimonial-3-slider-active"
                                >                                
                                {testimonial_data.map((item, i)  => 
                                    <div key={i} className="tp-testimonial-wrapper">
                                    <div className="tp-testimonial-3-item d-flex justify-content-between align-items-center">
                                       <div className="tp-testimonial-3-content-box">
                                          <div className="tp-testimonial-3-review">
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                             <span><i className="fas fa-star"></i></span>
                                          </div>
                                          <p>{item.description}</p>
                                          <div className="tp-testimonial-3-author-info d-flex align-items-center">
                                             <div className="tp-testimonial-3-sm-thumb d-md-none">
                                                <Image src={item.img} alt={item.name} />
                                             </div>
                                             <div>
                                                <h5>{item.name}</h5>
                                                <span>{item.job_title}</span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="tp-testimonial-3-thumb d-none d-md-block">
                                          <Image src={item.img} alt="theme-pure" />
                                       </div>
                                    </div>
                                 </div>
                                    )
                                }
                                </Slider> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default TestimonialArea;