import React, { Component } from "react";
import Footer from "../../components/Footer/Footer.component";
import ContactUs2 from "../../components/ContactUs2/Testimonials.component";
import PortfolioHeader from "../../components/PortfolioHeader/PortfolioHeader.component";
import IndividualProject from "../../components/IndividualProject/IndividualProject.component";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader.component";
import ProjectColours from "../../components/ProjectColours/ProjectColours.component";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider.component";
import TechUsed from "../../components/TechUsed/TechUsed.component";
import ChallengesDiv from "../../components/ChallengesDiv/challengesDiv.component";
import image from "../../assets/tgctwodevice2.png";
import phone1 from "../../assets/tgcphone1.png";
import phone2 from "../../assets/tgcphone2.png";
import twophones from "../../assets/tgctwodevice3.png";
import phone3 from "../../assets/tgcphone3.png";
import Aos from "aos";
import "aos/dist/aos.css";

class TGCProject extends Component {
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
          title="The Girl Code"
          companyname="The Girl Code"
          subtitle="Revamped the organisation's website!"
          des="The Girl Code is a non-profit organisation that aims to bridge the
          gender gap in the tech community by hosting free workshops for
          women. We revamped the organisation’s website to include all the
          recent changes and the impact they have made."
          contact={this.scrollToContact}
          image={image}
        />
        <div data-aos="fade-up">
          <ProjectColours
            colors={[
              "linear-gradient(rgba(255,122,158, 0.50), rgba(255,122,158, 1))",
              "linear-gradient(rgba(120,81,169, 0.50), rgba(120,81,169, 1))",
              "linear-gradient(rgba(51,77,170, 0.50), rgba(51,77,170,  1))",
            ]}
          />
        </div>

        <div data-aos="fade-up">
          <ProjectSlider image={twophones} />
        </div>
        <div data-aos="fade-up">
          <ChallengesDiv images={[phone3, phone2]} />
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

export default TGCProject;
