import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto0 from "../assets/photo/photo0.jpeg";
import GalleryPhoto1 from "../assets/photo/photo1.jpg";
import GalleryPhoto2 from "../assets/photo/photo2.png";
import GalleryPhoto3 from "../assets/photo/photo3.jpg";
import GalleryPhoto4 from "../assets/photo/photo4.jpg";
import GalleryPhoto5 from "../assets/photo/photo5.jpg";
import GalleryPhoto6 from "../assets/photo/photo6.jpeg";
import GalleryPhoto7 from "../assets/photo/photo7.jpeg";
import GalleryPhoto8 from "../assets/photo/photo8.jpg";
import GalleryPhoto9 from "../assets/photo/photo9.jpg";
import GalleryPhoto10 from "../assets/photo/photo10.jpg";
import GalleryPhoto11 from "../assets/photo/photo11.jpg";
import GalleryPhoto12 from "../assets/photo/photo12.jpeg";
import GalleryPhoto13 from "../assets/photo/photo13.jpeg";
const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto0,
    thumbnail: GalleryPhoto0,
  },
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
