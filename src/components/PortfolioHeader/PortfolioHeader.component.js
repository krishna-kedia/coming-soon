import React from "react";
import {
  Image,
  HeaderAlignment,
  HeaderImage,
  HeaderContainer,
} from "./PortfolioHeader.styles";
import map from "../../assets/map.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../Navbar/Navbar";
import { HeaderTitle, HeaderSubtitle } from "../Header/Header.styles";
import headerImage from "../../assets/portfolio.png";

export default function PortfolioHeader({ contact }) {
  return (
    <Container fluid>
      <Row>
        <NavBar contact={contact} active="Portfolio"></NavBar>
      </Row>

      <HeaderContainer>
        <Row style={{ height: "90%", padding: "0", marginBottom: "3em" }}>
          <Col lg={6} sm={12}>
            <HeaderAlignment bigalignment="flex-start">
              <HeaderImage src={headerImage} />
            </HeaderAlignment>
          </Col>

          <Col lg={6} sm={12}>
            <HeaderAlignment bigalignment="center">
              <HeaderTitle>Our Clients</HeaderTitle>
              <HeaderSubtitle>
                We have worked in a variety of industries!
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
