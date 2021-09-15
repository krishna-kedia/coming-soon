import React, { Component } from "react";
import Header from "../../components/Header/Header.component";
import OurServices from "../../components/OurServices/OurServices.component";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay.component";
import ChangingTextBox from "../../components/ChangingTextBox/ChangingTextBox.component";

import ContactUs from "../../components/ContactUs/ContactUs.component";
import Footer from "../../components/Footer/Footer.component";
import ContactUs2 from "../../components/ContactUs2/Testimonials.component";
import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "../../components/NAVBAR-DEEPAK/Navbar";

class Homepage extends Component {
  constructor(props) {
    super(props);
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
    console.log(this.contactRef);
    return (
      <>
      <NavBar />
        <Header contact={this.scrollToContact} />
        <div data-aos="fade-up">
          <OurServices />
        </div>
        <div data-aos="fade-up">
          <ProjectDisplay data-aos="fade-up" />
        </div>
        <div>
          <ChangingTextBox Bgcolor="rgba(154,211,255,0.3)" />
        </div>
        <ContactUs2 />
        <div ref={this.contactRef}>
          <Footer />
        </div>
      </>
    );
  }
}

export default Homepage;
