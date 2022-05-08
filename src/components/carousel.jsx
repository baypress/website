import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import LeftChevronSvg from '../images/left-chevron.svg';
import RightChevronSvg from '../images/right-chevron.svg';

const Container = styled('div')`
  position: relative;
`;

const ScrollContainer = styled('div')`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  &::before, &::after {
    content: '';
    margin: auto;
  }
`;

const NavButton = styled(RightChevronSvg)`
  position: absolute;
  display: ${({ show }) => show ? 'block' : 'none'};
  top: 50%;
  transform: translateY(-50%);
  background: black;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const LeftNavBtn = styled(NavButton)`
  left: 5%;
  transform: translateY(-50%) rotate(180deg);
`;

const RightNavBtn = styled(NavButton)`
  right: 5%;
`;


const Carousel = ({ images }) => {
  const scrollContainerEl = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const handleScroll = useCallback((e) => {
    setScrollPosition(e.target.scrollLeft);
  }, [setScrollPosition]);

  const scrollForward = useCallback(e => {
    scrollContainerEl?.current?.scrollBy({ left: itemWidth / 2 + 1, top: 0, behavior: 'smooth' });
  }, [scrollContainerEl.current, itemWidth]);

  const scrollBack = useCallback(e => {
    scrollContainerEl?.current?.scrollBy({ left: -(itemWidth / 2 + 1), top: 0, behavior: 'smooth' });
  }, [scrollContainerEl.current, itemWidth]);

  useEffect(() => {
    scrollContainerEl.current?.addEventListener('scroll', handleScroll);

    setItemWidth(scrollContainerEl?.current?.children[1].offsetWidth);

    return () => scrollContainerEl.current?.removeEventListener('scroll', handleScroll);
  }, [scrollContainerEl.current]);

  const showLeftNav = scrollPosition > 0;
  const showRightNav = scrollPosition + scrollContainerEl?.current?.offsetWidth < scrollContainerEl?.current?.scrollWidth;

  return (
    <Container>
      <LeftNavBtn show={showLeftNav} onClick={scrollBack} />
      <ScrollContainer ref={scrollContainerEl}>
        {
          images.map(image => image)
        }
      </ScrollContainer>
      <RightNavBtn show={showRightNav} onClick={scrollForward}>right</RightNavBtn>
    </Container>
  )
};

export default Carousel;
