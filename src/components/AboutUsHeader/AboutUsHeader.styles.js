import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const floating1 = keyframes`
    0%{
        transform: translatey(50px)
    }
    
    50%{
        transform: translatey(40px)
    }

    100%{
        transform: translatey(50px)
    }
`;

const floating2 = keyframes`
    0%{
        transform: translatey(-30px);
 
    }
    
    50%{
        transform: translatey(-20px);
       
    }

    100%{
        transform: translatey(-30px);
       
    }
`;

const floating3 = keyframes`
    0%{
        transform: translatey(20px)
     
    }
    
    50%{
        transform: translatey(10px)
        
    }

    100%{
        transform: translatey(20px)
        
    }
`;

export const Image = styled.img`
  animation: ${(props) => {
    if (props.animate === 1) {
      return floating1;
    } else if (props.animate === 2) {
      return floating2;
    } else if (props.animate === 3) {
      return floating3;
    }
  }};
  animation-duration: ${(props) => {
    if (props.animate === 1) {
      return "5s";
    } else if (props.animate === 2) {
      return "10s";
    } else if (props.animate === 3) {
      return "15s";
    }
  }};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  opacity: ${(props) => (props.type === "icon" ? "0.5" : "1")};
`;

export const HeaderImage = styled.img`
  width: 80%;
  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

export const HeaderAlignment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 992px) {
    align-items: ${(props) => props.bigalignment};
  }
`;

export const HeaderContainer = styled(Container)`
  @media screen and (min-width: 992px) {
    margin: 0;
    padding: 0;
  }
`;
