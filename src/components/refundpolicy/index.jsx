import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import FooterThree from "@/layout/footers/footer-3";
import HeroBanner from "@/common/hero-banner";
import HeaderSix from "@/layout/headers/header-6";
import ContentArea from "./contentarea";
import React from "react"; 

const refundpolicy = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"Refund"} title_bottom={"Policy"} />
            {/* <HeroBanner title="Privacy" subtitle="Policy" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" /> */}
            <ContentArea /> 
          </main>
          <FooterThree/>
        </div>
      </div>
    </>
  );
};

export default refundpolicy;
