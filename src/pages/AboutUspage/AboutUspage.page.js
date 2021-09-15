import React, { Component } from "react";
import Header from "../../components/Header/Header.component";
import OurServices from "../../components/OurServices/OurServices.component";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay.component";
import ChangingTextBox from "../../components/ChangingTextBox/ChangingTextBox.component";

import ContactUs from "../../components/ContactUs/ContactUs.component";
import Footer from "../../components/Footer/Footer.component";
import ContactUs2 from "../../components/ContactUs2/Testimonials.component";
import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader.component";
import BlueTextDiv from "../../components/BlueTextDiv/BlueTextDiv.component";
import TeamDiv from "../../components/TeamDiv/TeamDiv.component";
import Aos from "aos";
import "aos/dist/aos.css";

class AboutUspage extends Component {
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
        <AboutUsHeader contact={this.scrollToContact} />
        <div data-aos="fade-up">
          <BlueTextDiv
            heading="OUR MISSION"
            text="At plutus, we aim to enable every startup, every company out there to have a digital presence. We are motivated to help you with all your technical needs, be it design, development, deployment, service and maintenance, at a fair price. Our highly motivated team ensures that no client misses out no business due to the lack of a digital presence!"
          />
        </div>
        <div data-aos="fade-up">
          <ChangingTextBox Bgcolor="white" />
        </div>
        <div data-aos="fade-up">
          <TeamDiv />
        </div>
        <div data-aos="fade-up">
          <OurServices />
        </div>
        <ContactUs2 />
        <div ref={this.contactRef}>
          <Footer />
        </div>
      </>
    );
  }
}

export default AboutUspage;
