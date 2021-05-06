import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import ContentTemplate from '../components/contentTemplate';

const ImgContainer = styled('div')`
  display: flex;
  flex: 0 0 auto;
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
  <ImgContainer><StaticImage alt='box1' key="b1" width={600} height={320} src='../images/supplies/1.jpg' /></ImgContainer>,
  <ImgContainer><StaticImage alt='box2' key="b2" width={600} height={320} src='../images/supplies/2.jpg' /></ImgContainer>,
  <ImgContainer><StaticImage alt='box3' key="b3" width={600} height={320} src='../images/supplies/3.jpg' /></ImgContainer>,
  <ImgContainer><StaticImage alt='box4' key="b4" width={600} height={320} src='../images/supplies/4.jpg' /></ImgContainer>,
  <ImgContainer><StaticImage alt='box5' key="b5" width={600} height={320} src='../images/supplies/5.jpg' /></ImgContainer>,
];

const title = 'Shipping Supplies';
const description = `We have over 20 years experience in providing custom protective packaging products to clients in many industries such as  electronics, medical instruments, and food  services. We provide sensible packaging solutions and from superior services from design, testing, production, to warehousing and delivery.`;
const HeroImage = (
  <StaticImage
    src="../images/gatsby-astronaut.png"
    width={240}
    quality={100}
    flex={1}
    formats={['AUTO', 'WEBP', 'AVIF']}
    alt="A Gatsby astronaut"
    style={{ marginBottom: '1.2rem', flex: 1, padding: '1rem' }}
  />
);

const Supplies = (props) => {
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

export default Supplies;
