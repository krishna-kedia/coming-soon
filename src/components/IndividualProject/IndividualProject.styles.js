import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 2em;
  }
`;

export const Alignment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  overflow-y: hidden;

  justify-content: ${(props) => props.align};
`;

export const ContentDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: ${(props) => props.align};
  }
`;

export const ProjectTypeHeading = styled.div`
  font-size: 1.25em;
  color: black;
`;

export const CompanyNameHeading = styled.div`
  font-size: 2.5em;
  color: black;
  font-weight: 600;
`;

export const ProjectDescription = styled.div`
  font-size: 1em;
  color: black;
  margin-bottom: 1em;
  @media screen and (min-width: 768px) {
    text-align: ${(props) => props.align};
  }
`;

export const Line = styled.div`
  width: 3em;
  height: 0.1em;
  background-color: black;
`;

export const ViewProject = styled.div`
  width: 50%;
  font-size: 0.9em;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 991px) {
    width: 30%;
  }

  &:hover {
    opacity: 80%;
  }
`;
