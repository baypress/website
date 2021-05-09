import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from 'styled-components';

import Footer from './footer';
import Header from "./header";

import "./layout.css";

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled('main')`
  flex: 1;
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

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout
