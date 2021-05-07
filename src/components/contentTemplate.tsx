import React from 'react';
import styled from 'styled-components';

import Carousel from '../components/carousel';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Title = styled('h1')`
  font-size: 30px;

  ${({ theme }) => theme.font.heavy}
`;

const Description = styled('p')`
  font-size: 16px;

  ${({ theme }) => theme.font.book}
`;

const TopBlock = styled('section')`
  padding-top: 1.45rem;
  background-color: #333231;
  color: ${({ theme }) => theme.color.white};
`;

const HeaderContainer = styled('div')`
  display: flex;
  max-height: 10%;
`;

const ListBlock = styled('section')`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.purple};
`;

const List = styled('div')`
  display: grid;
  padding: 1.8rem 0 1.2rem;
  grid-template-columns: repeat(${({ columns }) => columns}, ${({ columns }) => 100 / columns}%);
  grid-template-rows: repeat(3, 40px);
  justify-content: space-between;
  font-size: 18px;

  ${({ theme }) => theme.font.heavy}
`;

const Spacing = styled('div')`
  padding: ${({ theme }) => theme.spacing.layout.padding};
  max-width: ${({ theme }) => theme.spacing.layout.maxWidth};
  margin: ${({ theme }) => theme.spacing.layout.margin};
`;

const ContentTemplate = (props) => {
  return (
    <Layout>
      <Seo title="Custom Packaging & Print" />
      <TopBlock>
        <Spacing>
          <HeaderContainer>
            <section style={{ flex: 1, marginRight: '1rem' }}>
              <Title>{props.title}</Title>
              <Description>{props.description}</Description>
            </section>
            {props.heroImage}
          </HeaderContainer>
        </Spacing>
      </TopBlock>
      <ListBlock>
        <Spacing>
          <List columns={props.list.columns}>
            {props.list.items.map(item =>
              <label key={item}>{item}</label>
            )}
          </List>
        </Spacing>
      </ListBlock>
      <Carousel images={props.carouselImages} />
    </Layout>
  )
};

export default ContentTemplate;
