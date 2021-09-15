import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectDisplayArrow = styled.img`
  width: 4em;
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ProjectDisplaySolidCircle = styled.div`
  height: 25em;
  width: 25em;
  border-radius: 100%;
  background-color: rgba(173, 220, 255, 0.9);
  z-index: 1;
  position: absolute;
  margin-right: 5em;
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
  }
`;

export const ProjectDisplayLinedCircle = styled.div`
  height: 25em;
  width: 25em;
  border-radius: 100%;
  border: 5px dashed #92aaff;
  margin-left: 10em;
  position: absolute;
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
  }
`;

export const ProjectDisplayDiv = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 992px) {
    flex-direction: row-reverse;
  }
`;

export const ProjectDisplayImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (min-width: 992px) {
    flex: 0.6;
  }
`;

export const ProjectDisplayContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2em;
  @media screen and (min-width: 992px) {
    flex: 0.4;
    align-items: flex-start;
    margin-top: 4em;
  }
`;

export const ProjectDisplayGraphic = styled.img`
  width: 100%;
  z-index: 2;
  margin-bottom: 0.5em;
`;

export const ProjectDisplayProgress = styled.div`
  width: 50%;
  height: 0.25em;
  background-color: grey;
  margin-bottom: 1em;
  display: flex;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const ProjectDisplayhalf = styled.div`
  flex: 0.5;
  height: 0.25em;
  background-color: ${(props) => props.color};
  margin-bottom: 1em;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const ProjectDisplayTitle = styled.div`
  font-weight: 600;
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.2em;

  @media screen and (min-width: 992px) {
    text-align: left;
    line-height: 1em;
  }
`;

export const ProjectDisplaySubTitle = styled.div`
  font-size: 1.25em;
  margin-bottom: 0.5em;
  @media screen and (min-width: 992px) {
    text-align: left;
  }
`;

export const ProjectDisplayLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  @media screen and (min-width: 992px) {
    font-size: 1.25em;
    font-weight: 600;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const ProjectDescription = styled.div`
  width: 90%;
  height: 90%;
  font-size: 1.25em;
  margin-bottom: 0.5em;
  text-align: center;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
