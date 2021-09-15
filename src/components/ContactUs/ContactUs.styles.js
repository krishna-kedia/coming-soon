import styled from 'styled-components'

export const ContactUsDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const ContactUsDetailsDiv = styled.div`
    background-color: #81ABCB;
    width: 30%;
`;

export const ContactUsFormDiv = styled.div`
    background-color:white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    z-index:3;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactUsDetailsDivHeading = styled.h2`
color: white;
text-align: center;
padding: 0.9em 0;
`;

export const ContactUsFormHeading = styled(ContactUsDetailsDivHeading)`
color: black;
padding: 0.9em 0 0 0;
`;

export const ContactUsDetailsWrapper = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ContactUsDetails = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`;

export const ContactUsDetailIcon = styled.img`
    height: 2em;
    color: black
`;

export const ContactUsDetailText = styled.div`
    color: white;
`;

export const ContactUsFormSubtitle = styled.div`
    text-align: center;
    color: grey;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
`;

export const ContactUsFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    align-items: center;
    margin: 1em 0 0 0;
`;

export const ContactUsInputWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 80%;
justify-content: space-between;
align-items: center;
`;

export const ContactUsFormInput = styled.input`
    width: 40%;
    margin: 1em 0;
    border: none;
    border-bottom: 1px solid black
`;

export const ContactUsRadioInputWrapper = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 1em 0;
`;

export const ContactUsRadioButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.6em 0;
`;

export const ContactUsFormMessageInput = styled.textarea`
    width: 80%;
    margin: 1em 0;
    border: none;
    border-bottom: 1px solid black
`;

export const ContactUsFormSubmitButton = styled.button`
    padding: 0.8em;
    color: white;
    background-color: #92B4FF;
    border: none;
    margin: 1em 0;
`;

export const ContactUsDetailsGraphicDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContactUsDetailsGraphicIcons = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
`;

export const ContactUsDetailsGraphic = styled.div`
    justify-self: flex-end;
`;


export const Graphic1 = styled.img`
    position: relative;
    height: 8em;
`;

export const Graphic2 = styled.img`
    position: absolute;
    height: 4em;
`;





