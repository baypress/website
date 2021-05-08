import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Seo from '../components/seo';

const ContentContainer = styled('div')`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  display: grid;
`;

const Title = styled('h1')`
  margin-top: 2rem;
  width: 530px;
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.font.heavy}
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
            // page height - height of header and footer
            height: 'calc(100vh - 290px)',
          }}
          layout="fullWidth"
          alt="hero package"
          src="../images/home-hero.jpg"
          formats={["webp", "avif"]}
        />
        <ContentContainer>
          <Title>Custom packaging solutions & shipping supplies</Title>
        </ContentContainer>
      </div>
    </Layout>
  )
};

export default IndexPage;
