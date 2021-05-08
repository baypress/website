import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import ContentTemplate from '../components/contentTemplate';

const ImgContainer = styled('div')`
  display: flex;
  flex: 0 0 auto;
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
  <ImgContainer key="b1" ><StaticImage alt='box1' width={600} height={320} src='../images/supplies/1.jpg' /></ImgContainer>,
  <ImgContainer key="b2" ><StaticImage alt='box2' width={600} height={320} src='../images/supplies/2.jpg' /></ImgContainer>,
  <ImgContainer key="b3" ><StaticImage alt='box3' width={600} height={320} src='../images/supplies/3.jpg' /></ImgContainer>,
  <ImgContainer key="b4" ><StaticImage alt='box4' width={600} height={320} src='../images/supplies/4.jpg' /></ImgContainer>,
  <ImgContainer key="b5" ><StaticImage alt='box5' width={600} height={320} src='../images/supplies/5.jpg' /></ImgContainer>,
];

const title = 'Industrial Packaging';
const description = `Bay Press and Packaging has years of experience in product packaging, display, and printing services. We have many choices of material and technologies to satisfy our customer's needs.`;
const HeroImage = (
  <StaticImage
    src="../images/supplies/1.jpg"
    height={360}
    width={400}
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
