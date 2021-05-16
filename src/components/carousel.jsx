import React from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::before, &::after {
    content: '';
    margin: auto;
  }
`;

const Carousel = ({ images }) => {
  return (
    <Container>
      {
        images.map(image => image)
      }
    </Container>
  )
};

export default Carousel;
