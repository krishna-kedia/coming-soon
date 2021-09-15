import styled from "styled-components";

export const ContactUsFormDiv = styled.div`
  background-color: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 4em 2em;
  width: 90%;
  height: auto;
`;

export const ContactUsFormHeading = styled.div`
  font-size: 2em;
  color: black;
`;

export const ContactUsFormSubtitle = styled.div`
  text-align: center;
  color: grey;
  font-family: "Roboto", sans-serif;
  font-size: 1em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContactUsFormText = styled.div`
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 0.9em;
  font-weight: 600;
  margin: 0.5em 0em;

  &:focus {
    border: none;
  }
`;

export const ContactUsFormWrapper = styled.form`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const ContactUsInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 990px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ContactUsFormInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 1em;
  @media screen and (min-width: 990px) {
    width: 40%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ContactUsRadioInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContactUsRadioButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 990px) {
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 1em;
  }
`;

export const ContactUsFormMessageInput = styled.textarea`
  width: 100%;
  border: none;
  background-color: #f1f9ff;
  padding: 1em;
`;

export const ContactUsFormSubmitButton = styled.button`
  width: 100%;
  padding: 0.8em;
  margin-top: 0.5em;
  color: white;
  background-color: #92b4ff;
  border: none;
  align-self: center;
  @media screen and (max-width: 768px) {
    padding: 0.25em;
  }
`;
