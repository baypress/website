import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from 'styled-components';

import { theme } from '../theme';

const Spacing = styled('div')`
  padding: ${theme.spacing.layout.padding};
  max-width: ${theme.spacing.layout.maxWidth};
  margin: ${theme.spacing.layout.margin};
`;

const LogoAndContact = styled('div')`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavButton = styled('button')`
  margin-right: 30px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  ${theme.font.heavy}
  color: ${({ selected }) => selected ? '#6e26ec' : '#4b463e'};

  &:hover {
    color: #6e26ec;
  }
`;

const ContactButton = styled('button')`
  padding: 7px 18px;
  background-color: ${theme.color.orange};
  color: ${theme.color.white};
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.activeOrange};
  }

  ${theme.font.heavy}
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
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return null;

  const currentPath = window.location.pathname;

  return (
    <header>
      <Spacing>
        <LogoAndContact>
          <Link to="/">
            <StaticImage alt="logo" src={'../images/icon.svg'} width={61} height={42} formats={['AUTO', 'WEBP', 'AVIF', 'SVG']} />
          </Link>
          <Link to={paths.contact}>
            <ContactButton>Contact us</ContactButton>
          </Link>
        </LogoAndContact>
        <div>
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
        </div>
      </Spacing>
    </header >
  );
};

export default Header
