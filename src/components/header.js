import * as React from "react";
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

const Header = ({ siteTitle }) => (
  <header>
    <Spacing>
      <LogoAndContact>
        <Link to="/">
          <StaticImage src={'../images/icon.svg'} width={61} height={42} formats={['AUTO', 'WEBP', 'AVIF', 'SVG']} />
        </Link>
        <Link to="/contact">
          <label>Contact us</label>
        </Link>
      </LogoAndContact>
      <NavBar>
        <Link to="/custom">
          <button>Custom Packaging & Print</button>
        </Link>
        <Link to="/industrial">
          <button>Industrial Packaging</button>
        </Link>
        <Link to="/supplies">
          <button>Shipping Supplies</button>
        </Link>
        <Link to="/services">
          <button>Services</button>
        </Link>
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </NavBar>
    </Spacing>
  </header >
)

export default Header
