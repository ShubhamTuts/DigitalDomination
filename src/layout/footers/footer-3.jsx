import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import footer_logo from "../../../public/assets/img/logo/logo-black.webp";
import Brwoser from '@/common/brwoser';
import { CopyRight } from '@/common/social-links';
import EmailIcon from '@/svg/email';
import EmailTwo from '@/svg/email-2';
import PhoneTwo from '@/svg/phone-2';
import RightArrow from '@/svg/right-arrow';

const footer_content = {
    bg_img: "/assets/img/footer/overly.png",
    title: <>Get Early Access to Digital Domination.<br /><span>Close Your Books Faster and Grow.</span></>,
    btn_text: "Try it on Browser",
    phone: "+1 888 543 4316",
    email: "support@digitaldomination.io",
    description: <>Our B2B sales strategy is perfect for SaaS and Software companies with established products, services and strong case studies.</>,

    footer_links: [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3",
            cls_2: "footer-col-3-2",
            title: "Navigation",
            links: [
                { name: "Home", link: "#" },
                { name: "About", link: "/" },
                { name: "Services", link: "/" },
                { name: "Blog", link: "/" },
                { name: "Contact", link: "/" },
            ]
        },
        {
            id: 2,
            cls_1: "col-xl-2 col-lg-2",
            cls_2: "footer-col-3-3",
            title: "Other Pages",
            links: [
                { link: "/#", name: "Email Account Setup" },
                { link: "/#", name: "Email Outreach" },
                { link: "/#", name: "PR Services" },
                { link: "/#", name: "Linkedin Outreach" },
                { link: "/#", name: "AI Appointment Setting" },
                { link: "/#", name: "Automation Services" },
            ]
        },
    ],

    social_links: [
        {
            link: "https://in.linkedin.com/company/digitaldomination-io",
            target: "_blank",
            icon: "fab fa-linkedin-in",
        },
    ],
};

// Slider settings
const sliderSettings = {
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
};

const FooterThree = () => {
    const { theme } = useContext(ThemeContext);

    const footerStyles = {
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
    };

    return (
        <div className="footer-bottom-content tp-browser-bg-shape" style={{ backgroundColor: footerStyles.backgroundColor }}>
            <div className="tp-browser-details-area pt-110 pb-30 p-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-9 col-lg-9">
                            <h3 className="tp-section-title-3" style={{ color: footerStyles.color }}>
                                {footer_content.title}
                            </h3>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <Link className="tp-btn-blue-lg tp-btn-hover" href="#">
                                <span style={{ color: footerStyles.color }}>{footer_content.btn_text}</span>
                                <b></b>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-hero-browser-wrapper footer-browser-item d-flex align-items-center">
                                <Brwoser />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="tp-footer-slide pb-80">
                    <div className="container-fluid g-0">
                        <div className="row g-0 justify-content-center">
                            <Slider {...sliderSettings} className="footer-slide-active">
                                {/* Slider items */}
                                {footer_content.footer_links.map((linkGroup, index) => (
                                    <div key={index} className="footer-slide-wrapper">
                                        <div className="footer-slide-item">
                                            <i className="fal fa-check"></i>
                                            <span>{linkGroup.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="tp-footer__pl-pr">
                    <div className="tp-footer__area tp-footer__tp-border-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 pb-30">
                                    <div className="tp-footer__widget footer-widget-3 footer-col-3-1">
                                        <div className="tp-footer__logo mb-25">
                                            <Link href="/">
                                                <Image src={footer_logo} alt="" />
                                            </Link>
                                        </div>
                                        <div className="tp-footer__contact-info" style={{ color: footerStyles.color }}>
                                            <p>{footer_content.description}</p>
                                            <ul>
                                                <li>
                                                    <span><PhoneTwo /></span>
                                                    <Link href={`tel:${footer_content.phone}`} style={{ color: footerStyles.color }}>{footer_content.phone}</Link>
                                                </li>
                                                <li>
                                                    <span><EmailTwo /></span>
                                                    <Link href={`mailto:${footer_content.email}`} style={{ color: footerStyles.color }}>{footer_content.email}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {footer_content.footer_links.map((item, i) => (
                                    <div key={i} className={`${item.cls_1} col-md-6 pb-30`}>
                                        <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                                            <h4 className="tp-footer__widget-title" style={{ color: footerStyles.color }}>{item.title}</h4>
                                            <ul>
                                                {item.links.map((link, j) => (
                                                    <li key={j}>
                                                        <Link href={link.link} style={{ color: footerStyles.color }}>{link.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}

                                <div className="col-xl-4 col-lg-4 col-md-6 pb-30">
                                    <div className="tp-footer__widget footer-widget-3 footer-col-3-4">
                                        <h4 className="tp-footer__widget-title" style={{ color: footerStyles.color }}>Our Newsletter</h4>
                                        <div className="tp-footer__input mb-35 p-relative">
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <input type="text" placeholder="Business email address" style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: footerStyles.color }} />
                                                <span><EmailIcon /></span>
                                                <button style={{ color: footerStyles.color }}><RightArrow /></button>
                                            </form>
                                        </div>
                                        <div className="tp-footer__social-3">
                                            <h4 style={{ color: footerStyles.color }}>Social Media</h4>
                                            {footer_content.social_links.map((link, i) => (
                                                <Link key={i} href={link.link} target={link.target}>
                                                    <i className={link.icon} style={{ color: footerStyles.color }}></i>
                                                </Link>
                                            ))}
                                        </div>
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
                                <div className="tp-copyright__text tp-copyright__text-3 text-center" style={{ color: footerStyles.color }}>
                                    <span><CopyRight /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterThree;
