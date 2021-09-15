import React from "react";
import map from "../../assets/map.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  ContentDiv,
  Subtitle,
  Title,
  SliderDiv,
  FirstImage,
  SecondImage,
} from "./ProjectSlider.styles";
import device from "../../assets/device.png";
import phone1 from "../../assets/tanyaphone1.png";

class ProjectSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#F1F9FF" }}>
        <Row>
          <Col lg={6}>
            <ContentDiv>
              <Title> One stop shop for all your needs!</Title>
              <Subtitle>
                At Plutus we aim to fullfill all your agency needs! From web
                design to development to grpahic design, all under one roof.
              </Subtitle>
            </ContentDiv>
          </Col>

          <Col lg={6} style={{ padding: "0" }}>
            <SliderDiv>
              <FirstImage src={this.props.image} />
            </SliderDiv>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectSlider;
