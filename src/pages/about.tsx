import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { theme } from '../theme';
import BigLogoSvg from '../images/bigLogo.svg';

const Title = styled('h1')`
  width: 260px;
  font-size: 30px;

  ${theme.font.heavy}
`;

const Description = styled('p')`
  font-size: 14px;
  padding-right: 4.2rem;
  margin-bottom: 1rem;

  @media only screen
    and (max-width: 600px) {
    padding-right: 0;
  }

  ${theme.font.book}
`;

const TopBlock = styled('section')`
  background-color: #ebeaee;
  color: ${theme.color.black};
`;

const HeaderContainer = styled('div')`
  display: flex;
  padding: 60px 0;
`;

const TextBlock = styled('div')`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
`;

const Spacing = styled('div')`
  padding: ${theme.spacing.layout.padding};
  max-width: ${theme.spacing.layout.maxWidth};
  margin: ${theme.spacing.layout.margin};
`;

const LogoIcon = styled(BigLogoSvg)`
  flex: 1;
  width: 300px;
  height: 300px;
  opacity: 0.4;

  @media only screen
    and (max-width: 600px) {
    display: none;
  }
`;

const AboutUs = (props) => {
  return (
    <Layout>
      <Seo title="About us" />
      <TopBlock>
        <Spacing>
          <HeaderContainer>
            <TextBlock>
              <Title>About us</Title>
              <Description>Bay Press and Packaging believes that our customers come first.</Description>
              <Description>Since our founding in 1993, we have cultivated a corporate culture of professionalism, dedication, and flexibility to meet and exceed our customers’ expectations every day.</Description>
              <Description>We know it is just the beginning when our products leave the shipping dock. We pay close attention to feedback and respond swiftly to our customers' needs. Consistency and constant improvement are the keys to our long-term business relationships. Customers find us through our great reputation in the marketplace, but our ability to meet their needs and our culture of responsiveness keep them coming back.</Description>
            </TextBlock>
            <LogoIcon />
          </HeaderContainer>
          <StaticImage
            alt="building"
            src="../images/building.png"
            placeholder="blurred"
            style={{
              marginBottom: '40px'
            }}
          />
        </Spacing>
      </TopBlock>
    </Layout>
  )
};

export default AboutUs;
