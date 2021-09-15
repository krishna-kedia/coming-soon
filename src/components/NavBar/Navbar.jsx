import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Hamburger,
  Navbar,
  NavContent,
  NavItem,
  NavItems,
  NavLink,
  NavLogo,
  NavLinkButton,
} from "./Navbar.styles";

const NavBar = ({ active, contact }) => {
  const [isNavVisible, setNavVisible] = useState(false);
  console.log(active);
  return (
    <Navbar>
      <NavLogo>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          PLUTUS
        </Link>
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
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <NavLink href="/" active={active === "Home"}>
                Home
              </NavLink>
            </Link>
          </NavItem>

          <NavItem active={isNavVisible} order={2}>
            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "black" }}
            >
              <NavLink href="/" active={active === "About"}>
                About
              </NavLink>
            </Link>
          </NavItem>

          <NavItem active={isNavVisible} order={3}>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "black" }}
            >
              <NavLink
                active={isNavVisible}
                href="/"
                active={active === "Portfolio"}
              >
                Portfolio
              </NavLink>
            </Link>
          </NavItem>

          <NavItem active={isNavVisible} order={5}>
            <NavLinkButton onClick={contact}>Let's Talk</NavLinkButton>
          </NavItem>
        </NavItems>
      </NavContent>
    </Navbar>
  );
};

export default NavBar;
