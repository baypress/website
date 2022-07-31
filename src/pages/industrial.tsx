import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import ContentTemplate from '../components/contentTemplate';

const ImgContainer = styled('div')`
  display: flex;
  flex: 0 0 auto;
  scroll-snap-align: center;
  scroll-behavior: smooth;

  max-width: 600px;
  max-height: 400px;

  @media only screen
    and (max-width: 970px) {
    max-width: 100%;
  }
`;

const list = {
  columns: 2,
  items: [
    'Corrugated Boxes',
    'DST and sleeve',
    'Foam cushion',
    'Wooden floated crates',
    'Partitions',
    'Pallets',
  ]
} as const;

const carouselImages = [
  <ImgContainer key="b1" ><StaticImage alt='box1' placeholder='blurred' aspectRatio={3 / 2} src='../images/industrial/1.jpg' /></ImgContainer>,
  <ImgContainer key="b2" ><StaticImage alt='box2' placeholder='blurred' aspectRatio={3 / 2} src='../images/industrial/2.jpg' /></ImgContainer>,
  <ImgContainer key="b3"><StaticImage alt='box3' placeholder='blurred' aspectRatio={3 / 2} src='../images/industrial/3.jpg' /></ImgContainer>,
  <ImgContainer key="b5" ><StaticImage alt='box5' placeholder='blurred' aspectRatio={3 / 2} src='../images/industrial/41.jpg' /></ImgContainer>,
  <ImgContainer key="b6" ><StaticImage alt='box6' placeholder='blurred' aspectRatio={3 / 2} src='../images/industrial/6.jpg' /></ImgContainer>,
];

const title = 'Industrial Packaging';
const description = `With the ability to design multi-material packaging systems, we provide our clients with sensible solutions optimized for each project, including product transportation, material handling, or storage. We provide complete services from design, prototyping, ISTA testing, manufacturing, kitting, to inventory management.`;
const HeroImage = (
  <StaticImage
    src="../images/industrial/1.jpg"
    height={360}
    width={400}
    placeholder='blurred'
    quality={100}
    formats={['AUTO', 'WEBP', 'AVIF']}
    alt="Services"
  />
);

const CCP = (props) => {
  return (
    <ContentTemplate
      {...props}
      carouselImages={carouselImages}
      list={list}
      title={title}
      description={description}
      heroImage={HeroImage}
    />
  )
};

export default CCP;
