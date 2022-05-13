import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from 'styled-components';

import Footer from './footer';
import Header from './header';
import NavBar from './navBar';

import "./layout.css";

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;

  overflow-x: hidden;
  overflow-y: ${({ isMenuOpen }) => isMenuOpen ? 'hidden' : 'visible'};

  @media only screen
    and (max-width: 748px) {
    // allows us to prevent scroll when hamburger menu is open
    height: ${({ isMenuOpen }) => isMenuOpen ? '100vh' : 'inherit'};
  }
`;

const Main = styled('main')`
  flex: 1;
`;

const HamburgerMenu = styled('div')`
  position: fixed;
  height: calc(100% - 64px);
  width: 100%;
  top: 64px;
  left: ${({ isMenuOpen }) => isMenuOpen ? '0' : '100%'};

  background-color: #333231;
  transition: all 0.2s;
  z-index: 2;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Header
        isMenuOpen={isMenuOpen}
        siteTitle={data.site.siteMetadata?.title || `Title`}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HamburgerMenu isMenuOpen={isMenuOpen}>
        <NavBar isMenuOpen={isMenuOpen} />
      </HamburgerMenu>
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout
