import React from "react";
import {
  ProjectDisplayGraphic,
  ProjectDisplayLinedCircle,
  ProjectDisplaySolidCircle,
  ProjectDisplayContent,
  ProjectDisplayDiv,
  ProjectDisplayLink,
  ProjectDisplaySubTitle,
  ProjectDisplayTitle,
  ProjectDisplayImage,
  ProjectDisplayProgress,
  ProjectDisplayArrow,
  ProjectDescription,
  ProjectDisplayhalf,
} from "./ProjectDisplay.styles";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import laptop from "../../assets/laptop.png";
import arrow from "../../assets/Arrow.png";
import projects from "./projectData";

class ProjectDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projects,
      index: 0,
      numberImages: 2,
    };
  }

  componentDidMount(props) {
    this.interval = setInterval(this.nextProject, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextProject = () => {
    this.setState((prevState) => {
      if (prevState.index === this.state.numberImages - 1) {
        return { index: 0 };
      } else {
        return { index: prevState.index + 1 };
      }
    });
  };

  prevProject = () => {
    this.setState((prevState) => {
      if (prevState.index === 0) {
        return { index: this.state.numberImages - 1 };
      } else {
        return { index: prevState.index - 1 };
      }
    });
  };

  render() {
    const { index, projects } = this.state;
    return (
      <Container fluid style={{ padding: "10em 2em" }}>
        <Row>
          <Col
            xl={3}
            lg={2}
            md={2}
            sm={1}
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{ padding: "0em" }}
          >
            <ProjectDisplayArrow
              src={arrow}
              style={{ transform: "rotate(180deg)" }}
              onClick={this.prevProject}
            />
          </Col>

          <Col
            xl={6}
            lg={8}
            md={8}
            sm={10}
            xs={10}
            className="d-flex justify-content-center align-items-center"
            style={{ padding: "0em" }}
          >
            <ProjectDisplaySolidCircle />
            <ProjectDisplayLinedCircle />
            <ProjectDisplayDiv>
              <ProjectDisplayImage>
                <ProjectDisplayGraphic src={projects[index].image} />
              </ProjectDisplayImage>
              <ProjectDisplayContent>
                <ProjectDisplayTitle>
                  {projects[index].title}
                </ProjectDisplayTitle>
                <ProjectDisplaySubTitle>
                  {projects[index].subtitle}
                </ProjectDisplaySubTitle>
                <ProjectDisplayLink to={projects[index].link}>
                  View Project
                </ProjectDisplayLink>
                <ProjectDisplayProgress>
                  <ProjectDisplayhalf
                    color={
                      index === 0
                        ? "rgba(173, 220, 255, 1)"
                        : "rgba(0, 0, 0,0.2)"
                    }
                  />
                  <ProjectDisplayhalf
                    color={
                      index === 1
                        ? "rgba(173, 220, 255, 1)"
                        : "rgba(0, 0, 0, 0.2)"
                    }
                  />
                </ProjectDisplayProgress>
                <ProjectDescription>{projects[index].desc}</ProjectDescription>
              </ProjectDisplayContent>
            </ProjectDisplayDiv>
          </Col>

          <Col
            xl={3}
            lg={2}
            md={2}
            sm={1}
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{
              padding: "0em",
            }}
          >
            <ProjectDisplayArrow src={arrow} onClick={this.nextProject} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectDisplay;
