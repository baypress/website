import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';
import Layout from '../components/layout';
import Seo from '../components/seo';

import DesignSvg from '../images/designTestingWarehouse.svg';
import SolutionsSvg from '../images/solutions.svg';
import LocationSvg from '../images/location.svg';

const ContentContainer = styled('div')`
  grid-area: 1/1;
  position: relative;
  display: grid;
`;

const Spacing = styled('div')`
  width: 100%;
  padding: ${theme.spacing.layout.padding};
  max-width: ${theme.spacing.layout.maxWidth};
  margin: 60px auto;
`;

const Title = styled('h1')`
  max-width: 530px;
  font-size: 3.2rem;
  color: ${theme.color.white};

  ${theme.font.heavy}
`;

const CardContainer = styled('section')`
  display: flex;
  justify-content: space-between;

  @media only screen
    and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BgContainer = styled('div')`
  position: relative;
  grid-area: 1/1;
  max-height: max(710px, 100vh - 290px);

  @media only screen
    and (max-width: 970px) {
    display: none;
  }
`;

const Card = styled('div')`
  display: flex;
  flex-direction: column;
  height: 297px;
  width: 291px;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;

  @media only screen
    and (max-width: 970px) {
    margin-bottom: 20px;
  }
`;

const SmallScreenBG = styled('div')`
  position: absolute;
  display: none;
  height: 100%;
  width: 100%;
  background-color: black;

  @media only screen
    and (max-width: 970px) {
    display: block;
  }
`;

const CardBG = styled(Card)`
  position: absolute;
  background-color: #522E91;
  border-radius: 6px;
  opacity: 70%;
`;

const CardText = styled('p')`
  position: relative;
  margin-bottom: 24px;
  font-size: 16px;
  opacity: 100%;
  color: ${theme.color.white};

  ${theme.font.heavy}
`;

const iconStyle = `
  position: relative;
  margin-top: 24px;
`;

const DesignIcon = styled(DesignSvg)`
  ${iconStyle}
`;

const SolutionsIcon = styled(SolutionsSvg)`
  ${iconStyle}
`;

const LocationIcon = styled(LocationSvg)`
  ${iconStyle}
`;

const IndexPage = (props) => {
  return (
    <Layout>
      <Seo title="Bay Press and Packaging" />
      <div style={{ display: "grid", position: "relative" }}>
        <SmallScreenBG />
        <BgContainer>
          <StaticImage
            style={{
              gridArea: "1/1",
              maxHeight: 'max(710px, 100vh - 290px)',
              filter: 'brightness(62%) saturate(130%)',
            }}
            placeholder="blurred"
            layout="fullWidth"
            alt="hero package"
            src="../images/home-hero2.jpg"
            formats={["webp", "avif"]}
          />
        </BgContainer>
        <ContentContainer>
          <Spacing>
            <Title>Custom packaging solutions & shipping supplies</Title>
            <CardContainer>
              <Card>
                <CardBG />
                <DesignIcon />
                <CardText>End-to-end service including design, testing, warehousing, and J.I.T. Delivery.</CardText>
              </Card>
              <Card>
                <CardBG />
                <SolutionsIcon />
                <CardText>Custom solutions for a variety of industries such as electronics, medical instruments, and food services.</CardText>
              </Card>
              <Card>
                <CardBG />
                <LocationIcon />
                <CardText>Proudly serving the Bay Area since 1993.</CardText>
              </Card>
            </CardContainer>
          </Spacing>
        </ContentContainer>
      </div>
    </Layout>
  )
};

export default IndexPage;
