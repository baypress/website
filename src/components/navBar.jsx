import { Link } from 'gatsby';
import React from "react";
import styled from 'styled-components';

import { theme } from '../theme';

const LinkContainer = styled('div')`
  display: flex;

  @media only screen
    and (max-width: 748px) {
    display: ${({ isMenuOpen }) => isMenuOpen ? 'grid' : 'none'};
    margin: 40px 20px;
    grid-gap: 30px;
  }
`;

const NavButton = styled('button')`
  margin-right: 30px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  ${theme.font.heavy}
  color: ${({ selected }) => selected ? '#6e26ec' : '#4b463e'};

  @media only screen
    and (max-width: 900px) {
    margin-right: 1rem;
  }

  @media only screen
    and (max-width: 790px) {
    margin-right: 0.5rem;
  }

  @media only screen
    and (max-width: 748px) {
    background-color: #333231;
    color: ${({ selected }) => selected ? '#6e26ec' : 'white'};
    font-size: 1.2rem;
  }

  &:hover {
    color: #6e26ec;
  }
`;

const paths = {
  contact: '/contact',
  custom: '/custom',
  industrial: '/industrial',
  supplies: '/supplies',
  services: '/services',
  about: '/about',
}

const NavBar = ({ siteTitle, setIsMenuOpen, isMenuOpen }) => {
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return null;

  const currentPath = window.location.pathname;

  return (
    <LinkContainer isMenuOpen={isMenuOpen}>
      <Link to={paths.custom}>
        <NavButton selected={currentPath === paths.custom}>Custom Packaging & Print</NavButton>
      </Link>
      <Link to={paths.industrial}>
        <NavButton selected={currentPath === paths.industrial}>Industrial Packaging</NavButton>
      </Link>
      <Link to={paths.supplies}>
        <NavButton selected={currentPath === paths.supplies}>Shipping Supplies</NavButton>
      </Link>
      <Link to={paths.services}>
        <NavButton selected={currentPath === paths.services}>Services</NavButton>
      </Link>
      <Link to={paths.about}>
        <NavButton selected={currentPath === paths.about}>About Us</NavButton>
      </Link>
    </LinkContainer>
  );
};

export default NavBar;
