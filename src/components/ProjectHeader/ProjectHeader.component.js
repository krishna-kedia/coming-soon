import React from "react";
import map from "../../assets/map.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../Navbar/Navbar";
import {
  HeaderTitle,
  HeaderSubtitle,
  ProjectRow,
} from "./ProjectHeader.styles";
import {
  Image,
  Line,
  Alignment,
  ContentDiv,
  ProjectTypeHeading,
  CompanyNameHeading,
  ProjectDescription,
  ViewProject,
  ProjectCol,
} from "../IndividualProject/IndividualProject.styles";
import project from "../../assets/project.png";
import projectleft from "../../assets/projectleft.png";
import tgc from "../../assets/tgc.png";
import { Link } from "react-router-dom";

export default function ProjectHeader(props) {
  return (
    <Container fluid>
      <Row>
        <NavBar active="Portfolio" contact={props.contact}></NavBar>
      </Row>

      <Row
        style={{
          margin: "3em 0em",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <HeaderTitle>{props.title}</HeaderTitle>
          <HeaderSubtitle>{props.subtitle}</HeaderSubtitle>
        </div>
      </Row>

      <ProjectRow>
        <ProjectCol
          lg={{ span: 6, order: 2 }}
          md={{ span: 6, order: 2 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <ContentDiv align="flex-start">
            <ProjectTypeHeading>Web Design</ProjectTypeHeading>
            <CompanyNameHeading>{props.companyname}</CompanyNameHeading>
            <ProjectDescription align="left">{props.des}</ProjectDescription>

            <ViewProject>
              <Line /> <a>view website</a>
            </ViewProject>
          </ContentDiv>
        </ProjectCol>
        <ProjectCol
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          sm={12}
          xs={12}
        >
          <Alignment align="flex-start">
            <Image src={props.image}></Image>
          </Alignment>
        </ProjectCol>
      </ProjectRow>
    </Container>
  );
}
