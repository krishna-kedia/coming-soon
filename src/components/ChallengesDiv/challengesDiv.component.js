import React from "react";
import * as tag from "./challengesDiv.style";
import Subcomponent from "./subcomponent/subcomponent.component";

const ChallengesDiv = (props) => {
  return (
    <tag.Container>
      <tag.Heading>Challenges</tag.Heading>
      {/* <Subcomponent quesiton={props.question} solution={props.solution} statement={props.statement} align="left" num="01" first="yes" image={props.images[0]} /> */}
      <Subcomponent question={props.question} solution={props.solution} statement={props.statement} align="right" num="01" first="no" image={props.images[1]} />
    </tag.Container>
  );
};

export default ChallengesDiv;
