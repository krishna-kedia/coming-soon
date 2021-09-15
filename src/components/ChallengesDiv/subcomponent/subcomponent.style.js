import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  flex-direction: ${(props) =>
    props.align === "left" ? "row" : "row-reverse"};

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    padding: 2em;
  }
`;

export const ImgContainer = styled.div`
  ${(props) =>
    props.align === "left" ? "padding-left: 5rem;" : "padding-right: 5rem;"}
  display: flex;
  align-items: center;
  ${(props) => (props.align === "right" ? "justify-content: flex-end;" : "")}
`;

export const Img = styled.img`
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const TextContainer = styled.div`
  width: 90%;
  padding: 1rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    width: 50%;
  }
`;

export const NumLineContainer = styled.div`
  width: 100%;
`;

export const NumLine = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Num = styled.span`
  font-size: 1.6rem;
`;

export const Line = styled.div`
  height: 5px;
  border-radius: 8px;
  width: 100px;
  background-color: #98caff;
  margin: 0.5rem;
`;

export const Heading = styled.h2`
  font-size: 2em;
`;

export const Para = styled.p`
  font-size: 1.4em;
  line-height: 2rem;
`;
