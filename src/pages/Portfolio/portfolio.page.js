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
import Aos from "aos";
import "aos/dist/aos.css";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      path: "",
    };
    this.contactRef = React.createRef();
  }

  scrollToContact = () => {
    console.log("contact", this.contactRef);
    this.contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    const path = this.props.match.path;
    this.setState({ path: path });
    window.scrollTo(0, 0);
    Aos.init({ duration: 3000 });
  }

  render() {
    console.log("path,", this.state.path);
    return (
      <>
        <PortfolioHeader contact={this.scrollToContact} />

        <div data-aos="fade-up">
          <OurServices />
        </div>
        <div data-aos="fade-up">
          <IndividualProject />
        </div>
        <ContactUs2 />
        <div ref={this.contactRef}>
          <Footer />
        </div>
      </>
    );
  }
}

export default Portfolio;
