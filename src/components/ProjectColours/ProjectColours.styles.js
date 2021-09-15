import styled, { keyframes } from "styled-components";
export const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.75em;
  color: black;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 70%;
    font-size: 2em;
  }
`;
export const CircleAlignment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1em;
`;

export const Circle = styled.div`
  width: 6em;
  height: 6em;
  border-radius: 6em;
  background: ${(props) => props.color};

  margin: 1em;
  @media screen and (min-width: 768px) {
    width: 5em;
    height: 5em;
    border-radius: 5em;
  }
`;
