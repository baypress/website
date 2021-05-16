import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import ContentTemplate from '../components/contentTemplate';

const ImgContainer = styled('div')`
  display: flex;
  flex: 0 0 auto;

  width: 600px;
  height: 400px;
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
  <ImgContainer key="b3"><StaticImage alt='box3' placeholder='blurred' height={300} width={900} objectPosition='60%' src='../images/industrial/3.jpg' /></ImgContainer>,
  <ImgContainer key="b4" ><StaticImage alt='box4' placeholder='blurred' style={{
    filter: 'brightness(110%) saturation(120%)',
  }} height={400} width={800} objectPosition='60%' src='../images/industrial/4.jpg' /></ImgContainer>,
  <ImgContainer key="b5" ><StaticImage alt='box5' placeholder='blurred' height={450} width={900} objectPosition='40% 20%' src='../images/industrial/5.jpg' /></ImgContainer>,
];

const title = 'Industrial Packaging';
const description = `With multi-material packaging design ability, we provide our clients with sensible packaging solutions optimized for each project no matter if it is for product transportation, material handling, or storage. We provide complete services from design, prototyping, ISTA testing, manufacturing, kitting, to inventory management.`;
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
      carouselImages={carouselImages}
      list={list}
      title={title}
      description={description}
      heroImage={HeroImage}
    />
  )
};

export default CCP;
