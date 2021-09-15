import React from "react";
import * as tag from "./challengesDiv.style";
import Subcomponent from "./subcomponent/subcomponent.component";

const ChallengesDiv = (props) => {
  return (
    <tag.Container>
      <tag.Heading>Challenges</tag.Heading>
      <Subcomponent align="left" num="01" first="yes" image={props.images[0]} />
      <Subcomponent align="right" num="02" first="no" image={props.images[1]} />
    </tag.Container>
  );
};

export default ChallengesDiv;
