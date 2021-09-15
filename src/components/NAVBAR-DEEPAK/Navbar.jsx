import React, { useState } from "react";

import {
  Hamburger,
  Navbar,
  NavContent,
  NavItem,
  NavItems,
  NavLink,
  NavLogo,
} from "./Navbar.styles";

const NavBar = ({contact}) => {
  const [isNavVisible, setNavVisible] = useState(false);

  return (
    <Navbar>
      <NavLogo>
        <NavLink href='/'>
        PLUTUS
        </NavLink>
        </NavLogo>
      <Hamburger
        active={isNavVisible}
        onClick={() => setNavVisible(!isNavVisible)}
      >
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <NavContent active={isNavVisible}>
        <NavItems>
          <NavItem active={isNavVisible} order={1}>
            <NavLink href="/">Home</NavLink>
          </NavItem>

          <NavItem active={isNavVisible} order={2}>
            <NavLink href="/aboutus">About Us</NavLink>
          </NavItem>

          <NavItem active={isNavVisible} order={3}>
            <NavLink active={isNavVisible} href="/portfolio">
              Portfolio
            </NavLink>
          </NavItem>

          <NavItem onClick={contact} active={isNavVisible} order={4}>
            Let's Talk
          </NavItem>

        </NavItems>
      </NavContent>
    </Navbar>
  );
};

export default NavBar;
