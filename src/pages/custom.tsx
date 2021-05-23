import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import ContentTemplate from '../components/contentTemplate';

const ImgContainer = styled('div')`
  display: flex;
  flex: 0 0 auto;
  scroll-snap-align: center;
  scroll-behavior: smooth;

  width: 750px;
  height: 500px;
`;

const list = {
  columns: 4,
  items: [
    'Litho Print',
    'Litho Lamination',
    'Corrugated Boxes',
    'Labels',
    'Flexo Print',
    'Die-Cut',
    'Inner Pack',
    'Manuals',
    'Digital Print',
    'Rigid Boxes',
    'Plastic Clam-Shell',
  ]
} as const;

const carouselImages = [
  <ImgContainer key="c1"><StaticImage alt='' placeholder='blurred' aspectRatio={3 / 2} src='../images/custom/1.jpg' /></ImgContainer>,
  <ImgContainer key="c2"><StaticImage alt='' placeholder='blurred' aspectRatio={3 / 2} src='../images/custom/2.jpg' /></ImgContainer>,
  <ImgContainer key="c3"><StaticImage alt='' placeholder='blurred' aspectRatio={3 / 2} src='../images/custom/3.jpg' /></ImgContainer>,
  <ImgContainer key="c4"><StaticImage alt='' placeholder='blurred' aspectRatio={3 / 2} src='../images/custom/4.jpg' /></ImgContainer>,
];

const title = 'Custom Packaging & Print';
const description = `Bay Press and Packaging has decades of experience in product packaging, display, and printing services. We have many choices of materials and technologies to satisfy our customers' needs.`;
const HeroImage = (
  <StaticImage
    src="../images/custom/1.jpg"
    height={300}
    aspectRatio={3 / 2}
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
