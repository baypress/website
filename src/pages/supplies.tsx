import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import ContentTemplate from '../components/contentTemplate';

const ImgContainer = styled('div')`
  display: flex;
  flex: 0 0 auto;
  scroll-snap-align: center;
  scroll-behavior: smooth;

  max-width: 250px;

  @media only screen
    and (max-width: 970px) {
    max-width: 100%;
  }
`;

const list = {
  columns: 4,
  items: [
    'Stock boxes & mailers',
    'Carton sealing tapes',
    'Bubble wraps',
    'Poly bags',
    'Tubes & folders',
    'Stretch wraps',
    'Rolled foams',
    'ESD shielding bags',
    'Bulk containers',
    'Strappings',
    'Strapping guards',
    'Edge protectors',
  ]
} as const;

const carouselImages = [
  <ImgContainer key="s1"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/1.jpg' /></ImgContainer>,
  <ImgContainer key="s2"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/2.jpg' /></ImgContainer>,
  <ImgContainer key="s3"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/3.jpg' /></ImgContainer>,
  <ImgContainer key="s4"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/4.jpg' /></ImgContainer>,
  <ImgContainer key="s5"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/5.jpg' /></ImgContainer>,
  <ImgContainer key="s6"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/6.jpg' /></ImgContainer>,
  <ImgContainer key="s7"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/7.jpg' /></ImgContainer>,
  <ImgContainer key="s8"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/8.jpg' /></ImgContainer>,
  <ImgContainer key="s9"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/9.jpg' /></ImgContainer>,
  <ImgContainer key="s10"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/10.jpg' /></ImgContainer>,
  <ImgContainer key="s11"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/11.jpg' /></ImgContainer>,
  <ImgContainer key="s12"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/12.jpg' /></ImgContainer>,
  <ImgContainer key="s13"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/13.jpg' /></ImgContainer>,
  <ImgContainer key="s14"><StaticImage alt='' aspectRatio={3 / 2} src='../images/supplies/14.jpg' /></ImgContainer>,
];

const title = 'Shipping Supplies';
const description = `As a one-stop source, we stock and distribute a full array of quality supplies to meet your packaging and shipping needs, all while providing competitive pricing and fast delivery.`
const HeroImage = (
  <StaticImage
    src="../images/supplies/1.jpg"
    height={300}
    placeholder='blurred'
    aspectRatio={3 / 2}
    quality={100}
    formats={['AUTO', 'WEBP', 'AVIF']}
    alt="Services"
  />
);

const Supplies = (props) => {
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

export default Supplies;
