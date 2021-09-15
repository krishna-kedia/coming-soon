import React, { Component } from "react";
import {
  HeaderButtonsDiv,
  HeaderButton,
  HeaderGraphic,
  HeaderGraphicImg,
  HeaderLined,
  HeaderSolid,
  HeaderSubtitle,
  HeaderText,
  HeaderTitle,
} from "./Header.styles";
import laptop from "../../assets/laptop.png";
import graphic1 from "../../assets/tgcgraphic1.png";
import graphic2 from "../../assets/tgcgraphic2.png";
import graphic3 from "../../assets/tanyagraphic5.png";
import graphic4 from "../../assets/tanyagraphic4.png";

import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [graphic1, graphic3, graphic2, graphic4],
      imgIndex: 0,
      numberImages: 4,
    };
  }

  componentDidMount(props) {
    this.interval = setInterval(this.nextImage, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    this.setState((prevState) => {
      if (prevState.imgIndex === this.state.numberImages - 1) {
        return { imgIndex: 0 };
      } else {
        return { imgIndex: prevState.imgIndex + 1 };
      }
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <NavBar active="Home" contact={this.props.contact}></NavBar>
        </Row>

        <Row className="align-items-center" style={{ padding: "4em 2em" }}>
          <Col
            lg={{ span: 6, order: 1 }}
            md={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
          >
            <HeaderText>
              <HeaderTitle>PLUTUS TECH SOLUTIONS</HeaderTitle>
              <HeaderSubtitle>INNOVATIVE. FUTURISTIC. FAST.</HeaderSubtitle>
              <HeaderButtonsDiv>
                <HeaderButton type="normal" onClick={this.props.contact}>
                  CONTACT US
                </HeaderButton>
                <Link to="/portfolio">
                  <HeaderButton type="inverse"> PORTFOLIO</HeaderButton>
                </Link>
              </HeaderButtonsDiv>
            </HeaderText>
          </Col>

          <Col
            lg={{ span: 6, order: 2 }}
            md={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
          >
            <HeaderGraphic>
              <HeaderLined />
              <HeaderSolid />
              <HeaderGraphicImg src={this.state.images[this.state.imgIndex]} />
            </HeaderGraphic>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
