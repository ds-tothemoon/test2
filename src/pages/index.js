import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";

import GalleryPhoto0 from "../assets/photo/photo0.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);
    
    // 오른쪽 클릭 막기
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Wrapper>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Helmet>
        <title>대성❤️승아 결혼합니다 🎉</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="대성❤️승아 결혼합니다 🎉" />
        <meta property="og:description" content="10월 26일 오전 12시 10분" />
        <meta property="og:site_name" content="대성❤️승아 결혼합니다 🎉" />
        <meta property="og:image" content={GalleryPhoto0} />
      </Helmet>
      <Title />
      <Greeting />
      <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2025 Moon Daeseong
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;
