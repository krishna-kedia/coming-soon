import styled, { keyframes } from "styled-components";

export const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0em;
  background-color: rgba(154, 211, 255, 0.3);
  @media screen and (min-width: 961px) {
    margin: 0em 2em;
  }
`;

export const Heading = styled.div`
  font-size: 2.5em;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0.5em;
  font-weight: 600;
`;

export const Text = styled.div`
  width: 70%;
  font-size: 1.25em;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`;
