import React from "react";
import map from "../../assets/map.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Heading, Circle, CircleAlignment } from "./ProjectColours.styles";

export default function ProjectColours(props) {
  return (
    <Container fluid style={{ marginTop: "5em", marginBottom: "5em" }}>
      <Row className="d-flex justify-content-center">
        <Heading>
          Colour pallette was carefully picked to compliment the company’s
          theme.
        </Heading>
      </Row>

      <Row className="d-flex justify-content-center">
        <CircleAlignment>
          {props.colors.map((color) => (
            <Circle color={color} />
          ))}
        </CircleAlignment>
      </Row>
    </Container>
  );
}
