import React from "react";
import { ContentDiv, Heading, Text } from "./BlueTextDiv.styles";
import laptop from "../../assets/laptop.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function BlueTextDiv(props) {
  return (
    <Container
      fluid
      style={{ padding: "0px", display: "flex", justifyContent: "center" }}
    >
      <ContentDiv>
        <Heading>{props.heading}</Heading>
        <Text>{props.text}</Text>
      </ContentDiv>
    </Container>
  );
}
