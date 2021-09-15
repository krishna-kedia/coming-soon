import React from "react";
import * as tag from "./subcomponent.style";
import LeftImage from "../../../assets/mobImageLeft.png";
import RightImage from "../../../assets/mobImageRight.png";

const Subcomponent = (props) => {
  let image = props.align === "left" ? LeftImage : RightImage;

  return (
    <tag.Container align={props.align} call={props.first}>
      <tag.TextContainer call={props.first}>
        <tag.NumLineContainer>
          <tag.NumLine>
            <tag.Num>{props.num}</tag.Num>
            <tag.Line />
          </tag.NumLine>
        </tag.NumLineContainer>
        <tag.Heading>{props.question}</tag.Heading>
        <tag.Para>
          {props.statement}
         
        </tag.Para>
        <br />
        <tag.Para>
          {props.solution}
          
        </tag.Para>
      </tag.TextContainer>
      <tag.ImgContainer align={props.align} call={props.first}>
        <tag.Img src={props.image} call={props.first} />
      </tag.ImgContainer>
    </tag.Container>
  );
};

export default Subcomponent;
