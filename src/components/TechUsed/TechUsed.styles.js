import styled from "styled-components";

export const TechUsedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f9ff;
  padding: 3em;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TechUsedText = styled.div`
  flex: 0.3;
  text-align: left;
  font-size: 2em;
`;

export const TechUsedContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TechDiv = styled.div`
  flex: 0.8;
  flex-wrap: wrap;
  /* background-color: #f2f2f2; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TechImg = styled.img`
  height: 5em;
  padding: 0.5em;
`;
