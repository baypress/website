import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import ContentTemplate from '../components/contentTemplate';

const ImgContainer = styled('div')`
  display: flex;
  flex: 0 0 auto;
  scroll-snap-align: center;
  scroll-behavior: smooth;

  max-width: 350px;

  @media only screen
    and (max-width: 970px) {
    max-width: 100%;
  }
`;

const list = {
  columns: 2,
  items: [
    'Packaging design & testing',
    'Production',
    'Prototyping',
    'Pre-assembly',
    'Warehousing & J.I.T Delivery',
    'Inventory management',
  ]
} as const;

const carouselImages = [
  <ImgContainer key="b1"><StaticImage alt='box1' aspectRatio={3 / 2} src='../images/services/1.jpg' /></ImgContainer>,
  <ImgContainer key="b3"><StaticImage alt='box3' aspectRatio={3 / 2} src='../images/services/2.jpg' /></ImgContainer>,
  <ImgContainer key="b4"><StaticImage alt='box4' aspectRatio={3 / 2} src='../images/services/3.jpg' /></ImgContainer>,
  <ImgContainer key="b5"><StaticImage alt='box5' aspectRatio={3 / 2} src='../images/services/4.jpg' /></ImgContainer>,
];

const title = 'Services';
const description = `We offer end-to-end services from packaging design, ISTA testing, fast prototyping, mass production, assembly, to warehousing, inventory management and delivery. You can count on us from the ideation of a project through delivery of the final products.`;
const HeroImage = (
  <StaticImage
    src="../images/services/1.jpg"
    width={400}
    aspectRatio={3 / 2}
    quality={100}
    formats={['AUTO', 'WEBP', 'AVIF']}
    alt="Services"
  />
);

const Services = (props) => {
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

export default Services;
