import React from "react";
import {
  Image,
  HeaderAlignment,
  HeaderImage,
  HeaderContainer,
} from "./AboutUsHeader.styles";
import laptop from "../../assets/laptop.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from '../NavBar/Navbar'
import { HeaderTitle, HeaderSubtitle } from "../Header/Header.styles";
import headerImage from "../../assets/team.png";

export default function AboutUsHeader({ contact }) {
  return (
    <Container fluid>
      <Row>
        <NavBar active="About" contact={contact}></NavBar>
      </Row>

      <HeaderContainer>
        <Row style={{ height: "90%", padding: "0" }}>
          <Col lg={6} sm={12}>
            <HeaderAlignment bigalignment="flex-start">
              <HeaderImage src={headerImage} />
            </HeaderAlignment>
          </Col>

          <Col lg={6} sm={12}>
            <HeaderAlignment bigalignment="center">
              <HeaderTitle>About Us</HeaderTitle>
              <HeaderSubtitle>
                We are a team of four amazing people!
              </HeaderSubtitle>
            </HeaderAlignment>
          </Col>
        </Row>

        {/* <Row>
          <Col
            lg={{ offset: 1, span: 5 }}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={icon3} animate={1} type="icon" />
            <Image src={icon4} animate={2} type="icon" />
            <Image src={person3} animate={3} />
            <Image src={icon6} animate={2} type="icon" />
            <Image src={icon5} animate={1} type="icon" />
          </Col>
          <Col
            lg={5}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={icon6} animate={1} type="icon" />
            <Image src={icon1} animate={2} type="icon" />
            <Image src={person4} animate={3} />
            <Image src={icon4} animate={2} type="icon" />
            <Image src={icon5} animate={1} type="icon" />
          </Col>
        </Row> */}
      </HeaderContainer>
    </Container>
  );
}
