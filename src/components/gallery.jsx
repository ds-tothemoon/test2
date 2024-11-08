import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Divider } from "antd";
import styled from "styled-components";
import photos from "../common/photos";

const Wrapper = styled.div`
  padding-top: 42px;
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

const PhotoGallery = styled.div`
  margin-left: 8px;
`;

const WeddingGallery = () => {
  const [index, setIndex] = useState(-1);
  const currentImage = photos[index];
  const nextIndex = (index + 1) % photos.length;
  const nextImage = photos[nextIndex] || currentImage;
  const prevIndex = (index + photos.length - 1) % photos.length;
  const prevImage = photos[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32, width: "70%" }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <PhotoGallery>
        <Gallery
          images={photos}
          onClick={handleClick}
          enablephotoselection={false}
          rowHeight={120}
        />
        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcsrc={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcsrc={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcsrc={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
            enableZoom={false}
          />
        )}
      </PhotoGallery>
    </Wrapper>
  );
};

export default WeddingGallery;
