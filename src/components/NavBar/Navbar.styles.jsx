import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  background: #fff;
  padding: 1.4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
`;

export const NavLogo = styled.a`
  font-weight: 550;
  font-size: 2em;
  color: black;
  text-decoration: none;
  &:hover {
    color: #9ad3ff;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Hamburger = styled.div`
  width: 1.6rem;
  z-index: 1;

  div {
    width: 1.6rem;
    height: 2px;
    border: 1px solid #9ad3ff;
    background-color: #9ad3ff;
    margin-bottom: 5px;
    border-radius: 5px;
    transition: all ease-in 300ms;
  }

  div:nth-child(3) {
    margin: 0;
  }

  ${(props) =>
    props.active &&
    css`
      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(1) {
        border-color: #9ad3ff;
        background-color: #9ad3ff;
        -webkit-transform: translateY(13px) rotate(45deg);
        -ms-transform: translateY(13px) rotate(45deg);
        -o-transform: translateY(13px) rotate(45deg);
        transform: translateY(13px) rotate(45deg);
        margin-top: -5px;
      }

      div:nth-child(3) {
        border-color: #9ad3ff;
        background-color: #9ad3ff;
        -webkit-transform: translateY(-13px) rotate(-45deg);
        -ms-transform: translateY(-13px) rotate(-45deg);
        -o-transform: translateY(-13px) rotate(-45deg);
        transform: translateY(-13px) rotate(-45deg);
        margin-top: 17px;
      }
    `}

  @media(min-width:991px) {
    display: none;
  }
`;

export const NavContent = styled.div`
  -webkit-clip-path: circle(0% at 96.5% 4%);
  clip-path: circle(0% at 96.5% 4%);
  position: absolute;
  background: white;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transition: all 0.5s cubic-bezier(0.23, 0.93, 0.23, 0.93);

  ${(props) =>
    props.active &&
    css`
      -webkit-clip-path: circle(140% at 96.5% 4%);
      clip-path: circle(140% at 96.5% 4%);
      transition: all 0.7s cubic-bezier(0.23, 0.93, 0.23, 0.93);
    `}

  @media(min-width:991px) {
    position: relative;
    background: none;
    clip-path: none;
    height: 100%;
    opacity: 1;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;

  height: 100vh;
  list-style: none;
  padding: 3.125rem 2rem;

  @media (min-width: 991px) {
    height: 100%;
    padding: 0;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const CircleAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(9px) rotate(2deg);
    }
    100% {
        opacity: 1;
    }    
`;

export const NavItem = styled.li`
  padding: 1rem 1rem;

  ${(props) => {
    return (
      props.active &&
      css`
        animation: ${CircleAnimation} 360ms ease-in-out
          calc(${props.order} * 100ms) both;
      `
    );
  }};

  @media (min-width: 991px) {
    margin: auto 0;
    padding: 0 1rem;
  }
`;

export const NavLink = styled.a`
  font-size: 1.5em;
  text-decoration: none;
  color: #7e82f4;
  text-transform: uppercase;

  @media (min-width: 991px) {
    font-size: 1em;
    color: black;
    border-bottom: ${(props) =>
      props.active ? " #9ad3ff 1.5px solid" : "none"};
    padding: 0.25em 0.25em;

    &:hover {
      color: #9ad3ff;
      text-decoration: none;
    }
  }
`;

export const NavLinkButton = styled.div`
  font-size: 1.5em;
  text-decoration: none;
  color: #7e82f4;
  text-transform: uppercase;
  @media (min-width: 991px) {
    font-size: 1em;
    border: 2px solid #9ad3ff;
    padding: 0.5em 1em;
    transition: all 0.2s;
    color: black;

    &:hover {
      background-color: #9ad3ff;
      text-decoration: none;
      color: white;
      border-radius: 1px;
    }
  }
`;
