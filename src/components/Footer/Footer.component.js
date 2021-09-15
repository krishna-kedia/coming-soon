import React from "react";
import {
  FooterButton,
  FooterDiv,
  FooterIcon,
  FooterIconDiv,
  FooterNameDiv,
  FooterText,
  PlutusIcon,
  PlutusName,
  FooterLink,
} from "./Footer.styles";
import plutus from "../../assets/plutus.png";
import git from "../../assets/Github.png";
import twitter from "../../assets/Twitter.png";
import behance from "../../assets/Behance.png";
import dribble from "../../assets/Dribbble.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterDiv>
      <FooterNameDiv>
        <PlutusName>PLUTUS</PlutusName>
      </FooterNameDiv>
      <FooterText>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <FooterLink>Home</FooterLink>
        </Link>

        <Link to="/aboutus" style={{ textDecoration: "none", color: "black" }}>
          <FooterLink>About Us</FooterLink>
        </Link>

        <Link
          to="/portfolio"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FooterLink>Portfolio</FooterLink>
        </Link>
      </FooterText>
      <FooterButton>
        <a
          href={`mailto:plutus.websolutions@gmail.com`}
          style={{ textDecoration: "none", color: "white" }}
        >
          plutus.websolutions@gmail.com
        </a>
      </FooterButton>
      {/* <FooterIconDiv>
        <FooterIcon src={git} />
        <FooterIcon src={twitter} />
        <FooterIcon src={behance} />
        <FooterIcon src={dribble} />
      </FooterIconDiv> */}
    </FooterDiv>
  );
}
