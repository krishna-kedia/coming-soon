import React from "react";
import {
  OurServicesTitle,
  OurServicesSubtitle,
  ServiceCard,
  ServicesCardImg,
  ServicesCardTitle,
  ServicesCardSubtitle,
} from "./OurServices.styles";
import icon from "../../assets/icon.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class OurServices extends React.Component {
  constructor() {
    super();
    this.state = {
      sizes: ["small", "big", "small"],
    };
  }

  handleOnHover = (e) => {
    let { key } = e.target.dataset;
    console.log(key);
    let temp = this.state.sizes;
    temp.map((index, value) => {
      if (index === key && value === "small") {
        temp[index] = "big";
      } else {
        temp[index] = "small";
      }
    });

    this.setState({
      sizes: temp,
    });
  };

  render() {
    console.log(this.state.sizes);
    return (
      <Container
        fluid
        style={{
          backgroundColor: "rgba(154,211,255,0.2)",
          // "linear-gradient(to bottom, #ffffff, #fcfcff, #f7f9ff, #f1f6ff, #eaf4ff, #eaf4ff, #eaf4ff, #eaf4ff, #f1f6ff, #f7f9ff, #fcfcff, #ffffff)",
          // "linear-gradient(rgba(0,0,0,0),rgba(154,211,255,0.2),rgba(0,0,0,0))",
        }}
      >
        <Row style={{ padding: "4em 2em 5em 2em" }}>
          <Col lg={12}>
            <OurServicesTitle className="text-center">
              How Can We Help?
            </OurServicesTitle>
          </Col>
          <Col lg={12}>
            <OurServicesSubtitle className="text-center">
              We can help you with all your tech needs. <br />
              Why hire us? Cause we are young, motivated and very quick!
            </OurServicesSubtitle>
          </Col>
        </Row>

        <Row className="align-items-center" style={{ padding: "0 0 2em 0" }}>
          <Col
            className="d-flex justify-content-center"
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <ServiceCard data-key="0" id="0" size={this.state.sizes[0]}>
              <ServicesCardImg src={icon} size={this.state.sizes[0]} />
              <ServicesCardTitle size={this.state.sizes[0]}>
                UI/UX
              </ServicesCardTitle>
              <ServicesCardSubtitle size={this.state.sizes[0]}>
                We innovate and act upon new ideas to engage the user better and
                to enhance the look of the website.
              </ServicesCardSubtitle>
            </ServiceCard>
          </Col>
          <Col
            className="d-flex justify-content-center"
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <ServiceCard data-key="1" id="1" size={this.state.sizes[1]}>
              <ServicesCardImg size={this.state.sizes[1]} src={icon} />
              <ServicesCardTitle size={this.state.sizes[1]}>
                Web Development
              </ServicesCardTitle>
              <ServicesCardSubtitle size={this.state.sizes[1]}>
                Get your website developed and deployed in no time, using MERN
                stack (the fastest out there). Servicing for 3 months is on us!
              </ServicesCardSubtitle>
            </ServiceCard>
          </Col>
          <Col
            className="d-flex justify-content-center"
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <ServiceCard data-key="2" id="2" size={this.state.sizes[2]}>
              <ServicesCardImg size={this.state.sizes[2]} src={icon} />
              <ServicesCardTitle size={this.state.sizes[2]}>
                Custom Designs
              </ServicesCardTitle>
              <ServicesCardSubtitle size={this.state.sizes[2]}>
                Whether it be your social media posts or your branding we got
                you covered.
              </ServicesCardSubtitle>
            </ServiceCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OurServices;
