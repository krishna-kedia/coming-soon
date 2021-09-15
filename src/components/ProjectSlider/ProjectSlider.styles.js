import styled, { keyframes } from "styled-components";
export const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2em 0em;
  @media screen and (min-width: 992px) {
    text-align: left;
    margin: 0;
  }
`;

export const Title = styled.div`
  width: 80%;
  font-size: 2em;
  margin-bottom: 0.5em;
  color: black;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 2.5em;
  }
`;

export const Subtitle = styled.div`
  width: 80%;
  font-size: 1.5em;
  color: black;
`;

export const SliderDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstImage = styled.img`
  height: 70%;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: auto;
    margin: 2em 0em;
  }
`;

export const SecondImage = styled.img``;
