import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const ProjectRow = styled(Row)`
  padding: 2em 0em;
  margin: 0;

  background-color: #f1f9ff;

  @media screen and (min-width: 768px) {
    margin: 0em 3em;
  }
`;
export const ProjectCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 3em;
  color: black;
  text-align: center;
`;

export const HeaderSubtitle = styled.div`
  margin: 1em;
  font-size: 1.5em;
  text-align: center;
`;
