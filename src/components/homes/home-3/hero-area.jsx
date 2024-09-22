import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import useTitleAnimation from '@/hooks/useTitleAnimation';
import Brwoser from '@/common/brwoser';
import BounceLine from '@/svg/bounce-line';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useContext, useRef } from 'react';

import left_shape from "../../../../public/assets/img/hero/hero-left-shape-3-1.png";
import img_1 from "../../../../public/assets/img/hero/hero-img-3-1.png";
import img_2 from "../../../../public/assets/img/hero/hero-img-3-1-3.png";
import Link from 'next/link';
import { ThemeContext } from '@/context/ThemeContext';

const hero_content = { 
   title_1: <>We fill your <span>Sales</span></>,
   title_2: "Pipeline with Qualified Prospects!",
   info: <>Your first two qualified appointments are on us!</>,
   btn_1: "Get Started",
   btn_2: "Book A Free Consultation",
};

const { title_1, title_2, info, btn_1, btn_2 } = hero_content;

const HeroArea = () => {
   const { theme } = useContext(ThemeContext);
   let info_anim = useRef(null);

   useIsomorphicLayoutEffect(() => {
      let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
      tl.to(".hero-text-anim i.child-1", { y: "0px", duration: 1, opacity: 1, stagger: 0.3, delay: 0.5 });
   }, []);

   return (
      <>
         <div className={`tp-hero-area tp-hero-pt pt-170 pb-70 p-relative ${theme === 'dark' ? 'hero-dark' : 'hero-light'}`}>
            <div className="tp-hero-left-shape">
               <Image src={left_shape} alt="them-pure" />
            </div>
            {/* Optional: Only show this background image for light theme */}
            {theme === 'light' && (
              <div className="tp-hero-gradient-bg">
                  <Image src={img_2} alt="gradient" />
              </div>
            )}
            <div className="container">
               <div className="row justify-content-center z-index-3">
                  <div className="col-xl-11">
                     <div className="tp-hero-title-box text-center">
                        <h2 className={`tp-hero-title-3 hero-text-anim pb-5 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                           <i><i className="child-1">{title_1}</i></i>
                           <i><i className="child-1">{title_2}</i></i>
                        </h2>
                        <p className={`tp-char-animation-2 wow tpfadeUp ${theme === 'dark' ? 'text-white' : 'text-black'}`} data-wow-duration=".9s" data-wow-delay=".7s">
                           {info}
                        </p>
                     </div>
                     <div className="tp-hero-btn-3 text-center wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".9s">
                        <Link className={`tp-btn-blue-lg tp-btn-hover alt-color-black ${theme === 'dark' ? 'tp-btn-dark' : 'tp-btn-light'}`} href="#">
                           <span>{btn_1}</span>
                           <b></b>
                        </Link>
                        <Link className={`tp-btn-border tp-btn-hover alt-color-black ${theme === 'dark' ? 'tp-btn-dark' : 'tp-btn-light'}`} href="#">
                           <span>{btn_2}</span>
                           <b></b>
                        </Link>
                     </div>
                     <div className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                        <Brwoser />
                     </div>
                     <div className="tp-hero-3-wrapper p-relative">
                        <div className="tp-hero-3-border-wrap d-none d-md-block">
                           <span className="redius-shape-1"></span>
                           <span className="redius-shape-2"></span>
                           <span className="redius-shape-3"></span>
                        </div>
                        <div className="tp-hero-3-main-thumb z-index-5">
                           <Image src={img_1} alt="them-pure" />
                        </div>
                        <div className="tp-hero-3-shape-5 d-none d-lg-block wow frist-img animated">
                           <Image src={img_2} alt="them-pure" />
                        </div>
                        <div className="tp-hero-3-shape-6 d-none d-lg-block">
                           <span> <BounceLine /> </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HeroArea;
