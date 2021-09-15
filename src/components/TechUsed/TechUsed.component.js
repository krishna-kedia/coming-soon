import React from "react";
import {
  TechDiv,
  TechImg,
  TechUsedDiv,
  TechUsedText,
  TechUsedContainer,
} from "./TechUsed.styles";
import react from "../../assets/react.png";
import bootstrap from "../../assets/bootstrap.png";
import figma from "../../assets/figma.png";
import node from "../../assets/node.png";
import mongo from "../../assets/mongo.png";

export default function TechUsed() {
  return (
    <TechUsedDiv>
      <TechUsedText>Technologies Used</TechUsedText>
      <TechUsedContainer>
        <TechDiv>
          <TechImg src={figma} />
          <TechImg src={react} />
          <TechImg src={bootstrap} />
          <TechImg src={node} />
          <TechImg src={mongo} />
        </TechDiv>
      </TechUsedContainer>
    </TechUsedDiv>
  );
}
