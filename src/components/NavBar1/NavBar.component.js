import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavHeading, NavLink, NavLinks, NavLinkButton } from "./NavBar.styles";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = ({ active, contact }) => {
  return (
    <>
      <Container fluid style={{ padding: "1em" }}>
        <Row>
          <Col lg={7} md={6} sm={3} xs={3}>
            <NavHeading>PLUTUS</NavHeading>
          </Col>

          <Col lg={5} md={6} sm={9} xs={9}>
            <NavLinks className="align-items-center">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <NavLink active={active === "Home"}>Home</NavLink>
              </Link>

              <Link
                to="/aboutus"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLink active={active === "About"}>About Us</NavLink>
              </Link>

              <Link
                to="/portfolio"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLink active={active === "Portfolio"}>Portfolio</NavLink>
              </Link>

              <NavLinkButton onClick={contact}>Let's Talk</NavLinkButton>
            </NavLinks>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBar;
