import React, { Component } from "react";

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
import tanya from "../../assets/tanyatwodevice3.png";
import image from "../../assets/tanyatwodevice4.png";
import phone1 from "../../assets/tanyaphone4.png";
import phone2 from "../../assets/tanyaphone3.png";
import Aos from "aos";
import "aos/dist/aos.css";

class TanyaProject extends Component {
  constructor() {
    super();
    this.state = {
      path: "",
    };
    this.contactRef = React.createRef();
  }
  componentDidMount() {
    const path = this.props.match.path;
    this.setState({ path: path });
    window.scrollTo(0, 0);
    Aos.init({ duration: 3000 });
  }
  scrollToContact = () => {
    console.log("contact", this.contactRef);
    this.contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <>
        <ProjectHeader
          title="Tanya M Arora"
          subtitle="High-end Fashion Boutique Website"
          companyname="Tanya M Arora"
          des="Tanya M Arora is high end fashion boutique based in Delhi, India.
          The brand caters to all kinds of audiences needing trendy clothes
          at a good price point. We worked on this website from the start to
          finish. We conducted user research using her client base and came
          up with designs that suited her audience. Then we made a
          completely new digital presence for this brand."
          contact={this.scrollToContact}
          image={tanya}
        />
        <div data-aos="fade-up">
          <ProjectColours
            colors={[
              "linear-gradient(rgba(71, 20, 61, 0.50), rgba(71, 20, 61, 1))",
              "linear-gradient(rgba(174,92,0, 0.50), rgba(174,92,0,  1))",
              "linear-gradient(rgba(107,102,102, 0.50), rgba(107,102,102,  1))",
            ]}
          />
        </div>

        <div data-aos="fade-up">
          <ProjectSlider image={image} />
        </div>
        <div data-aos="fade-up">
          <ChallengesDiv images={[phone1, phone2]} />
        </div>

        <TechUsed />
        <ContactUs2 />
        <div ref={this.contactRef}>
          <Footer />
        </div>
      </>
    );
  }
}

export default TanyaProject;
