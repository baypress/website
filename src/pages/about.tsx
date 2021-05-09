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
              <Description>We have built a corporate culture of professionalism, dedication, and exibility, so that we can meet and exceed our customers’ expectations consistently. Continuing improvement is an indispensable factor in a long-term business relationship.</Description>
              <Description>Since founded in 1993, we know it is just the beginning when products leave our shipping dock, so we pay special attention to customers’ feedback and take prompt action to respond to their needs. Our great reputation brings us customers, but our ability to meet their needs and our culture of responsiveness keep them coming back.</Description>
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
