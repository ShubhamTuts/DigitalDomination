import AnswerQuestion from '@/common/answer-question';
import Image from "next/legacy/image";
import Link from 'next/link';
import React from 'react';

import img from "../../../../public/assets/img/faq/faq-1.png" 

const faq_content = {
    sub_title: "Why Us",
    title: <>Let's turn your vision into a masterpiece.</>,
    description: <>We understand how crucial it is to stay ahead of the curve in the digital industry. To offer our clients innovative solutions that give them a competitive edge, we conduct ongoing research into new technologies, techniques, and strategies. Not only will you receive a service, but also a partner committed to your company's growth.</>,
    btn_text: "Book a Call",
}
const {sub_title, title, description, btn_text }  = faq_content

const FaqArea = ({style_service}) => {
    return (
        <>
            <div className="tp-faq-area pt-140 pb-120 fix">
               <div className="container">
                  <div className="row"> 
                     <div className={`col-xl-6 col-lg-6 ${style_service && "wow tpfadeLeft"}`} 
                        data-wow-duration={style_service && ".9s"} 
                        data-wow-delay={style_service && ".4s"}>
                        <div className="tp-faq-left-wrapper p-relative">
                           <div className={`tp-faq-section-box ${style_service && "tp-inner-font tp-inner-faq-box"} pb-20`}>
                              <h4 className={`${style_service ? "inner-section-subtitle" : "tp-section-subtitle-2"}`}>{sub_title}</h4>
                              <h3 className={`${style_service ? "tp-section-title" : "tp-section-title-lg"}`}>{title}</h3>
                              <p>{description}</p>
                           </div>
                           <div className="tp-faq-btn">
                              <Link className={`${style_service ? "tp-btn-inner tp-btn-hover alt-color-black" : "tp-btn-green"} `} 
                                  href="/schedule">
                                    {btn_text}
                              </Link>
                           </div>
                           {/* <div className="tp-faq-img" data-parallax='{"x": -50, "smoothness": 30}'>
                              <Image src={img} alt="" />
                           </div> */}
                        </div>
                     </div>

                     <div className="col-xl-6 col-lg-6">
                        <AnswerQuestion /> 
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default FaqArea;