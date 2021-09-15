import styled, { css, keyframes } from "styled-components";


export const NavHeading = styled.div`
  font-weight: 550;
  font-size: 2em;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const NavLink = styled.div`
  color: black;
  border-bottom: ${(props) => (props.active ? " #9ad3ff 1.5px solid" : "none")};
  padding: 0.25em 0.25em;

  &:hover {
    color: #9ad3ff;
    text-decoration: none;
  }
`;

export const NavLinkButton = styled.div`
  border: 2px solid #9ad3ff;
  padding: 0.5em 1em;
  transition: all 0.2s;

  &:hover {
    background-color: #9ad3ff;
    text-decoration: none;
    color: white;
    border-radius: 1px;
  }
`;

export const Hamburger = styled.div`
  width: 1.6rem;
  z-index: 1;

  div {
    width: 1.6rem;
    height: 2px;
    border: 1px solid #000;
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
        border-color: #000;
        -webkit-transform: translateY(13px) rotate(45deg);
        -ms-transform: translateY(13px) rotate(45deg);
        -o-transform: translateY(13px) rotate(45deg);
        transform: translateY(13px) rotate(45deg);
        margin-top: -5px;
      }

      div:nth-child(3) {
        border-color: #000;
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
  background: #fff;
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
  padding: 0.5rem 1rem;
  border-bottom: ${(props) => (props.active ? " #9ad3ff 1.5px solid" : "none")};

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

// export const NavLink = styled.a`
//   font-size: 2rem;
//   text-decoration: none;
//   color: #7e82f4;
//   text-transform: uppercase;

//   @media (min-width: 991px) {
//     color: #000;
//     font-size: 1.2rem;
//   }
// `;
