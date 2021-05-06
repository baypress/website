import React, { useState } from "react";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const Spacing = styled('div')`
  padding: ${({ theme }) => theme.spacing.layout.padding};
  max-width: ${({ theme }) => theme.spacing.layout.maxWidth};
  margin: ${({ theme }) => theme.spacing.layout.margin};
`;

const LogoAndContact = styled('div')`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = styled('div')`
`;

const NavButton = styled('button')`
  background-color: white;
  border: none;
  cursor: pointer;
  color: ${({ selected }) => selected ? '#6e26ec' : '#4b463e'};

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

const Header = ({ siteTitle }) => {
  const [currentPath, setPath] = useState(window.location.pathname);

  return (
    <header>
      <Spacing>
        <LogoAndContact>
          <Link to="/">
            <StaticImage src={'../images/icon.svg'} width={61} height={42} formats={['AUTO', 'WEBP', 'AVIF', 'SVG']} />
          </Link>
          <Link to={paths.contact}>
            <button>Contact us</button>
          </Link>
        </LogoAndContact>
        <NavBar>
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
        </NavBar>
      </Spacing>
    </header >
  );
};

export default Header
