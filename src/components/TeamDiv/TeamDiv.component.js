import React from "react";
import {
  TeamWrapperDiv,
  PictureDiv,
  NameDiv,
  TitleDiv,
} from "./TeamDiv.styles";
import person from "../../assets/person.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import krishna from "../../assets/k.png";
import japnit from "../../assets/j.png";
import utkarsh from "../../assets/u.png";
import jaskeerat from "../../assets/jas.png";

export default function TeamDiv(props) {
  return (
    <Container fluid style={{ marginBottom: "5em" }}>
      <Row>
        <Col lg={3} style={{ padding: "0" }}>
          <TeamWrapperDiv>
            <PictureDiv>
              <img src={krishna} style={{ height: "100%" }} />
            </PictureDiv>
            <NameDiv>Krishnagopal Kedia</NameDiv>
            <TitleDiv>Head of Technology</TitleDiv>
          </TeamWrapperDiv>
        </Col>

        <Col lg={3} style={{ padding: "0" }}>
          <TeamWrapperDiv>
            <PictureDiv>
              <img src={japnit} style={{ height: "100%" }} />
            </PictureDiv>
            <NameDiv>Japnit Kaur Ahuja</NameDiv>
            <TitleDiv>Head of Technology</TitleDiv>
          </TeamWrapperDiv>
        </Col>

        <Col lg={3} style={{ padding: "0" }}>
          <TeamWrapperDiv>
            <PictureDiv>
              <img src={jaskeerat} style={{ height: "100%" }} />
            </PictureDiv>
            <NameDiv>Jaskeerat Singh Ahuja</NameDiv>
            <TitleDiv>Head of Marketing & Design </TitleDiv>
          </TeamWrapperDiv>
        </Col>

        <Col lg={3} style={{ padding: "0" }}>
          <TeamWrapperDiv>
            <PictureDiv>
              <img src={utkarsh} style={{ height: "100%" }} />
            </PictureDiv>
            <NameDiv>Utkarsh Punia</NameDiv>
            <TitleDiv>Head of Design</TitleDiv>
          </TeamWrapperDiv>
        </Col>
      </Row>
    </Container>
  );
}
