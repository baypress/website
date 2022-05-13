import { Link } from 'gatsby';
import React from "react";
import styled from 'styled-components';

import { theme } from '../theme';
import BigLogoSvg from '../images/bigLogo.svg';

const Container = styled('div')`
  display: flex;
  align-items: center;
  height: 190px;
  padding: ${theme.spacing.layout.padding};
  width: 100%;
  max-width: ${theme.spacing.layout.maxWidth};
  margin: ${theme.spacing.layout.margin};
  background-color: ${theme.color.white};
  color: ${theme.color.darkPurple};

  @media only screen
    and (max-width: 748px) {
    flex-direction: column;
    align-items: start;
    padding: 30px;
    gap: 20px;
  }
`;

const LogoContainer = styled('div')`
  flex: 2;
  @media only screen
    and (max-width: 748px) {
    order: 1;
    padding-top: 20px;
  }
`;

const Address = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 3;
  font-size: 14px;

  @media only screen
    and (max-width: 748px) {
    order: 3;
    padding-bottom: 20px;
  }
`;

const Line1 = styled('div')`
  ${theme.font.heavy}
`;

const Line2 = styled('div')`
  ${theme.font.book}
`;

const Line3 = styled('div')`
  ${theme.font.book}
`;

const ContactContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const CallContainer = styled(ContactContainer)`
  @media only screen
    and (max-width: 748px) {
    order: 2;
  }
`;

const FaxContainer = styled(ContactContainer)`
  @media only screen
    and (max-width: 748px) {
    display: none;
  }
`;


const ContactTitle = styled('div')`
  font-size: 14px;
  margin-bottom: 12px;

  @media only screen
    and (max-width: 748px) {
    display: none;
  }

  ${theme.font.heavy}
`;

const ContactNumber = styled('div')`
  font-size: 20px;
  margin-bottom: 12px;

  ${theme.font.book}
`;

const Footer = ({ siteTitle }) => (
  <Container>
    <LogoContainer>
      <Link to="/">
        <BigLogoSvg />
      </Link>
    </LogoContainer>
    <Address>
      <Line1>Bay Press and Packaging, Inc.</Line1>
      <Line2>568 South Milpitas Blvd.</Line2>
      <Line3>Milpitas, CA 95035</Line3>
    </Address>
    <CallContainer>
      <ContactTitle>Call Us</ContactTitle>
      <ContactNumber>408-942-7088</ContactNumber>
    </CallContainer>
    <FaxContainer>
      <ContactTitle>Fax Us</ContactTitle>
      <ContactNumber>408-942-7319</ContactNumber>
    </FaxContainer>
  </Container>
);

export default Footer;
