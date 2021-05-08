import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';
import Layout from '../components/layout';
import Seo from '../components/seo';

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
  width: 530px;
  font-size: 3.2rem;
  color: ${theme.color.white};

  ${theme.font.heavy}
`;

const CardContainer = styled('section')`
  display: flex;
  justify-content: space-between;
`;

const Card = styled('div')`
  display: flex;
  flex-direction: column;
  height: 297px;
  width: 291px;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
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

const IndexPage = (props) => {
  return (
    <Layout>
      <Seo title="Home" />
      <div style={{ display: "grid" }}>
        <StaticImage
          // inline style because gatsby static image demands it :(
          style={{
            gridArea: "1/1",
            maxHeight: '710px',
          }}
          layout="fullWidth"
          alt="hero package"
          src="../images/home-hero.jpg"
          formats={["webp", "avif"]}
        />
        <ContentContainer>
          <Spacing>
            <Title>Custom packaging solutions & shipping supplies</Title>
            <CardContainer>
              <Card>
                <CardBG />
                <StaticImage alt="services" src="../images/designTestingWarehouse.svg" style={{ marginTop: '24px' }} />
                <CardText>End-to-end service including design, testing, warehousing, and J.I.T. Delivery.</CardText>
              </Card>
              <Card>
                <CardBG />
                <StaticImage alt="solutions" src="../images/solutions.svg" style={{ marginTop: '24px' }} />
                <CardText>Custom solutions for a variety of industries such as electronics, medical instruments, and food services.</CardText>
              </Card>
              <Card>
                <CardBG />
                <StaticImage alt="bay area" src="../images/bayArea.png" style={{ marginTop: '24px' }} />
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
