import styled from "styled-components";

export const OurServicesTitle = styled.div`
  font-weight: 600;
  font-size: 3em;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    font-size: 2.5rem;
  }
`;

export const OurServicesSubtitle = styled.div`
  padding: 0.5em 0;
  font-size: 1.5em;
  color: #000000;
  // font-family: Roboto, Helvetica, sans-serif;
`;

export const ServiceCard = styled.div`
  text-align: center;
  background-color: white;
  width: ${(props) => (props.size === "big" ? "80%" : "70%")};
  border-radius: 10px;
  padding: ${(props) => (props.size === "big" ? "2em" : "1.5em")};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) {
    width: 90%;
    padding: ${(props) => (props.size === "big" ? "1.5em" : "1em")};
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 1em 0;
  }
`;

export const ServicesCardImg = styled.img`
  height: 4em;
`;

export const ServicesCardTitle = styled.div`
  font-size: ${(props) => (props.size === "big" ? "1.3em" : "1em")};
  font-weight: ${(props) => (props.size === "big" ? "600" : "500")};
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

export const ServicesCardSubtitle = styled.div`
  font-size: ${(props) => (props.size === "big" ? "1em" : "0.9em")};
  color: grey;
  margin: 1em 0em;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;
