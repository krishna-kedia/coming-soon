import React, { Component } from "react";
import Header from "../../components/Header/Header.component";
import OurServices from "../../components/OurServices/OurServices.component";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay.component";
import ChangingTextBox from "../../components/ChangingTextBox/ChangingTextBox.component";

import ContactUs from "../../components/ContactUs/ContactUs.component";
import Footer from "../../components/Footer/Footer.component";
import ContactUs2 from "../../components/ContactUs2/Testimonials.component";
import PortfolioHeader from "../../components/PortfolioHeader/PortfolioHeader.component";
import IndividualProject from "../../components/IndividualProject/IndividualProject.component";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader.component";
import ProjectColours from "../../components/ProjectColours/ProjectColours.component";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider.component";
import TechUsed from "../../components/TechUsed/TechUsed.component";
import ChallengesDiv from "../../components/ChallengesDiv/challengesDiv.component";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      path: "",
    };
  }
  componentDidMount() {
    const path = this.props.match.path;
    this.setState({ path: path });
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <ProjectHeader
          title="The Girl Code"
          subtitle="Lorem ipsum before this is amazing and now is too"
        />
        <ProjectColours />
        <ProjectSlider />
        <ChallengesDiv />
        <TechUsed />
        <ContactUs2 />
        <Footer />
      </>
    );
  }
}

export default Project;
