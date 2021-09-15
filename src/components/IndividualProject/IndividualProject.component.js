import React from "react";
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
} from "./IndividualProject.styles";
import project from "../../assets/project.png";
import projectleft from "../../assets/projectleft.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import tgc from "../../assets/tgctwodevice1.png";
import tanya from "../../assets/tanyatwodevice2.png";
import { Link } from "react-router-dom";

export default function IndividualProject(props) {
  return (
    <Container fluid style={{ padding: "0px" }}>
      <Row style={{ padding: "2em 0em", margin: "0" }}>
        <ProjectCol
          lg={{ span: 6, order: 2 }}
          md={{ span: 6, order: 2 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <ContentDiv align="flex-start">
            <ProjectTypeHeading>Complete Web Solutions</ProjectTypeHeading>
            <CompanyNameHeading>Tanya M Arora</CompanyNameHeading>
            <ProjectDescription align="left">
              Tanya M Arora is high end fashion boutique based in Delhi, India.
              The brand caters to all kinds of audiences needing trendy clothes
              at a good price point. We worked on this website from the start to
              finish. We conducted user research using her client base and came
              up with designs that suited her audience. Then we made a
              completely new digital presence for this brand.
            </ProjectDescription>

            <ViewProject>
              <Line />
              <Link
                to="portfolio/tanyamarora"
                style={{ textDecoration: "none", color: "black" }}
              >
                view project
              </Link>
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
            <Image src={tanya}></Image>
          </Alignment>
        </ProjectCol>
      </Row>

      <Row
        style={{ padding: "2em 0em", backgroundColor: "#F1F9FF", margin: "0" }}
      >
        <ProjectCol
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <ContentDiv align="flex-end">
            <ProjectTypeHeading>Complete Web Solutions</ProjectTypeHeading>
            <CompanyNameHeading>The Girl Code</CompanyNameHeading>
            <ProjectDescription align="right">
              The Girl Code is a non-profit organisation that aims to bridge the
              gender gap in the tech community by hosting free workshops for
              women. We revamped the organisation’s website to include all the
              recent changes and the impact they have made.
            </ProjectDescription>

            <ViewProject>
              <Line />
              <Link
                to="portfolio/thegirlcode"
                style={{ textDecoration: "none", color: "black" }}
              >
                view project
              </Link>
            </ViewProject>
          </ContentDiv>
        </ProjectCol>
        <ProjectCol
          lg={{ span: 6, order: 2 }}
          md={{ span: 6, order: 2 }}
          sm={12}
          xs={12}
        >
          <Alignment align="flex-end">
            <Image src={tgc}></Image>
          </Alignment>
        </ProjectCol>
      </Row>
    </Container>
  );
}
