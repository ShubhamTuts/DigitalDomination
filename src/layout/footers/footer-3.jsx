import Brwoser from '@/common/brwoser';
import { CopyRight } from '@/common/social-links';
import EmailIcon from '@/svg/email';
import EmailTwo from '@/svg/email-2';
import PhoneTwo from '@/svg/phone-2';
import RightArrow from '@/svg/right-arrow';
import Image from "next/legacy/image";
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

import footer_logo from  "../../../public/assets/img/logo/logo-dark.svg";

const footer_content = {
    bg_img: "/assets/img/footer/overly.png",
    title: <>Get Early Access to  Digital Domination . <br /> <span>Close Your Books Faster and Grow.</span></>,
    btn_text: "Try it on Browser",
    phone: "+1 888 543 4316",
    email: "support@digitaldomination.io",
    description: <>Our B2B sales strategy is perfect for SaaS and Software companies with established products, services and strong case studies.</>,

    footer_lisks : [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3",
            cls_2: "footer-col-3-2",
            title: "Useful links",
            delay: ".7s",
            links: [
                {name: "About", link: "/about-us"},
                {name: "Pricing", link: "/pricing"},
                {name: "Career", link: "career"},
                {name: "Terms & Conditions", link: "/terms-and-conditions"},
                {name: "Privacy Policy", link: "/privacy-policy"},
                {name: "Refund Policy", link: "/refund-policy"},
                { link: "/contact", name: "Contact" },
                { link: "/account-setup-services", name: "Account Setup Services" },
            ]
        },
        {
            id: 2,
            cls_1: "col-xl-2 col-lg-2",
            cls_2: "footer-col-3-3",
            title: "Additional",
            delay: ".9s",
            links: [
                
                { link: "/email-outreach", name: "Email Outreach" },
                { link: "/linkedin-outreach", name: "Linkedin Outreach" },
                { link: "/ai-appointment-setting", name: "AI Appointment Setting" },
                { link: "/marketing-automation", name: "Marketing Automation" },
                { link: "https://www.prdomination.com/", name: "PR Services" },
                { link: "https://www.digitaldomination.io/blog", name: "Blogs" },
                { link: "https://www.digitaldomination.io/case-studies", name: "Case Study" },
            ]
        },

    ],

    social_links : [
        {
          link: "https://in.linkedin.com/company/digitaldomination-io",
          target: "_blank",
          icon: "fab fa-linkedin-in", 
        }, 
      ], 
}
const {bg_img, title, btn_text, footer_lisks, social_links, phone , email, description}  = footer_content


// footer slider data 
const footer_slider_data = [
    "Free trial",
    "Lightning-fast onboarding.",
    "All-in-one CRM",
    "Cards for your whole team.",
    "Free trial",
    "Free migrations",
    "Incredible support",
    "Lightning-fast onboarding.",
    "Cards for your whole team.",
    "Free trial",
    "Free migrations", 
]
// slider setting
const setting = {
    speed: 7000,
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


const FooterThree = () => {
    return (
        <>
        <div className="footer-bottom-content tp-browser-bg-shape"
             style={{backgroundImage: `url(${bg_img})`}}>
                
            <div className="tp-browser-details-area pt-110 pb-30 p-relative">
            {/* <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-9 col-lg-9">
                        <div className="tp-browser-section-box d-flex justify-content-between align-items-center mb-30">
                        <h3 className="tp-section-title-3">{title}</h3>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="tp-browser-btn text-lg-end text-start mb-40">
                        <Link className="tp-btn-blue-lg tp-btn-hover" href="#">
                            <span>{btn_text}</span>
                            <b></b>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-hero-browser-wrapper footer-browser-item d-flex align-items-center">
                            <Brwoser /> 
                        </div>
                    </div>
                </div>
            </div> */}
            </div>

            <footer> 

            {/* <div className="tp-footer-slide pb-80">
                <div className="container-fluid g-0">
                    <div className="row g-0 justify-content-center">
                        <Slider {...setting} className="footer-slide-active">
                        {footer_slider_data.map((item, i)  => 
                            <div key={i} className="footer-slide-wrapper">
                            <div className="footer-slide-item">
                                <i className="fal fa-check"></i>
                                <span>{item}</span>
                            </div>
                        </div>
                        )}
                        
                        </Slider> 
                    </div>
                </div>
            </div>  */}


            <div className="tp-footer__pl-pr">
                <div className="tp-footer__area tp-footer__tp-border-bottom">
                    <div className="container">
                        <div className="row">

                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30 pt-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div className="tp-footer__widget footer-widget-3 footer-col-3-1">
                                <div className="tp-footer__logo mb-25">
                                    <Link href="/">
                                    <Image src={footer_logo} alt="" /> 
                                    </Link>
                                </div>
                                <div className="tp-footer__contact-info">
                                    <p>{description}</p>
                                    <ul>
                                    <li>
                                        <span>
                                            <PhoneTwo /> 
                                        </span>
                                        <Link className="first-child" href={`tel:${phone}`}>{phone}</Link>
                                    </li>
                                    <li>
                                        <span> 
                                            <EmailTwo /> 
                                        </span>
                                        <Link href={`mailto:${email}`}>{email}</Link>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {footer_lisks.map((item, i)  => 
                            <div key={i} className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay=".7s">
                            <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                                <h4 className="tp-footer__widget-title">{item.title}</h4>
                                <div className="tp-footer__content">
                                    <ul>
                                        {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li>)} 
                                    </ul>
                                </div>
                            </div>
                        </div>
                            )
                        } 

                        <div className="col-xl-4 col-lg-4 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                            <div className="tp-footer__widget footer-widget-3 footer-col-3-4">
                                <h4 className="tp-footer__widget-title">Our newsletter</h4>
                                <div className="tp-footer__input mb-35 p-relative">
                                    <form  onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Business email adress" />
                                    <span>
                                        <EmailIcon /> 
                                    </span>
                                    <button>
                                        <RightArrow />  
                                    </button>
                                    </form>
                                </div>
                                <div className="tp-footer__social-3">
                                    <h4>Social media</h4>
                                    {social_links.map((l, i) => (
                                        <Link
                                        key={i}
                                        href={l.link} 
                                        target={l.target ? l.target : ""}
                                        >
                                        <i className={l.icon}></i>
                                        </Link>
                                    ))} 
                                     
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>


                <div className="tp-copyright__area pt-25 pb-40">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="tp-copyright__text tp-copyright__text-3 text-center">
                               <span> <CopyRight /></span> 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </div>
        </>
    );
};

export default FooterThree;