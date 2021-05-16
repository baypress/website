import * as React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';
import Carousel from '../components/carousel';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Title = styled('h1')`
  width: 260px;
  font-size: 30px;

  ${theme.font.heavy}
`;

const Description = styled('p')`
  font-size: 16px;

  ${theme.font.book}
`;

const TopBlock = styled('section')`
  background-color: #333231;
  color: ${theme.color.white};
`;

const HeaderContainer = styled('div')`
  display: flex;
  max-height: 10%;
`;

const TextBlock = styled('div')`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
`;

const ListBlock = styled('section')`
  color: ${theme.color.white};
  background-color: ${theme.color.purple};
`;

const List = styled('div')`
  display: grid;
  padding: 1.8rem 0 1.2rem;
  grid-template-columns: repeat(${({ columns }) => columns}, ${({ columns }) => 100 / columns}%);
  grid-template-rows: repeat(3, 40px);
  justify-content: space-between;
  font-size: 18px;

  ${theme.font.heavy}
`;

const Spacing = styled('div')`
  padding: ${theme.spacing.layout.padding};
  max-width: ${theme.spacing.layout.maxWidth};
  margin: ${theme.spacing.layout.margin};
`;

const ContentTemplate = (props) => {
  return (
    <Layout>
      <Seo title={props.title} />
      <TopBlock>
        <Spacing>
          <HeaderContainer>
            <TextBlock>
              <Title>{props.title}</Title>
              <Description>{props.description}</Description>
            </TextBlock>
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
      <Carousel images={props.carouselImages} height={props.imageHeight} />
    </Layout>
  )
};

export default ContentTemplate;
