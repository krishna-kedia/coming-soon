import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #d7edff;
  padding: 1em 0;
`;

export const FooterNameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PlutusIcon = styled.img`
  height: 2em;
`;

export const PlutusName = styled.div`
  text-align: center;
  font-size: 2em;
`;

export const FooterText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.5em;

  @media screen and (min-width: 961px) {
    flex-direction: row;
  }
`;

export const FooterLink = styled.div``;

export const FooterButton = styled.button`
  background-color: #11253e;
  color: white;
  padding: 0.5em 2em;
  border: none;
  border-radius: 20px;
  margin: 1em 0em;
  transition: all 0.1s;

  &:hover {
    font-weight: 600;
    padding: 0.55em 2em;
    background-color: #1c3b61;
  }
`;

export const FooterIconDiv = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-evenly;
`;

export const FooterIcon = styled.img`
  height: 1.5em;
`;
