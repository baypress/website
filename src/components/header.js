import { Link } from 'gatsby';
import React from "react";
import styled from 'styled-components';

import LogoSvg from '../images/icon.svg';
import NavBar from './navBar';
import { theme } from '../theme';

const Spacing = styled('div')`
  padding: ${theme.spacing.layout.padding};
  max-width: ${theme.spacing.layout.maxWidth};
  margin: ${theme.spacing.layout.margin};

  @media only screen
    and (max-width: 748px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const LogoAndContact = styled('div')`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerBtn = styled('div')`
  display: none;
  position: relative;

  height: 32px;
  width: 32px;

  &:hover {
    cursor: pointer;
  }

  @media only screen
    and (max-width: 748px) {
    display: block;
  }

  & > span {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 10%;

    transition: all 0.2s;
    background-color: #333231;

    &:nth-child(1) {
      top: 5px;
      transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(9px) rotate(45deg)' : ''};
    }

    &:nth-child(2) {
      top: 14px;
      display: ${({ isMenuOpen }) => isMenuOpen ? 'none' : 'block'};
    }

    &:nth-child(3) {
      top: 23px;
      transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(-9px) rotate(-45deg)' : ''};
    }
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

const Header = ({ setIsMenuOpen, isMenuOpen }) => {
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return null;

  return (
    <header>
      <Spacing>
        <LogoAndContact>
          <Link to="/">
            <LogoSvg />
          </Link>
          <Link to={paths.contact}>
            <ContactButton>Contact us</ContactButton>
          </Link>
          <HamburgerBtn isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </HamburgerBtn>
        </LogoAndContact>
        <NavBar />
      </Spacing>
    </header >
  );
};

export default Header
