import React from "react";
import {
  WaveImage,
  Quotes,
  Title,
  SubTitle,
  ContentDiv,
  TestimonialsDiv,
  TestimonialDiv,
  Alignment,
  TestimonialContent,
  TestimonialImage,
  ClientDiv,
  FullContainter,
} from "./Testimonials.styles";

import {
  ContactUsDetailsDiv,
  ContactUsDiv,
  ContactUsFormDiv,
  ContactUsFormHeading,
  ContactUsFormSubtitle,
  ContactUsFormWrapper,
  ContactUsFormInput,
  ContactUsInputWrapper,
  ContactUsRadioButtonsDiv,
  ContactUsRadioInputWrapper,
  ContactUsFormMessageInput,
  ContactUsFormSubmitButton,
  ContactUsFormText,
} from "./ContactUs.styles";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import waveone from "../../assets/wave4.png";
import wavetwo from "../../assets/wave6.png";
import quotes from "../../assets/quotes.png";
import face from "../../assets/face.png";

class ContactUs2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: "",
        email: "",
        message: "",
        address: "",
        service: "",
        phone: "",
      },
      height: "",
    };
  }

  componentDidMount() {
    const height = document.getElementById("container").clientHeight;
    this.setState({ height: height });
  }

  render() {
    console.log(this.state.height);
    return (
      <FullContainter fluid id="container">
        <WaveImage
          big={false}
          style={{ background: `url(${waveone})` }}
          className="wave1"
          height={this.state.height + "px"}
        />
        <WaveImage
          big={true}
          style={{ background: `url(${wavetwo})` }}
          className="wave2"
          height={this.state.height + "px"}
        />
        <Row>
          <Col xl={6} lg={6} md={12} style={{}}>
            <ContentDiv>
              <div>
                <Quotes src={quotes} />
              </div>
              <div>
                <Title>What Our Clients Say About Us.</Title>
                <SubTitle>
                  Dont stop me now I am having such a good time I am having ball{" "}
                </SubTitle>
              </div>
            </ContentDiv>
          </Col>

          <Col xl={6} lg={6} md={12} style={{}}>
            <TestimonialsDiv>
              <Alignment align="end">
                <TestimonialDiv>
                  <TestimonialContent>
                    The team is very dedicated. They are fully involved with the
                    product from designing to coding to even ideating new
                    features. I will be working with them long term.
                    <ClientDiv>
                      - Tanya Arora, Founder of Tanya M Arora
                    </ClientDiv>
                  </TestimonialContent>
                </TestimonialDiv>
              </Alignment>

              <Alignment align="start">
                <TestimonialDiv>
                  <TestimonialContent>
                    Everyone is very efficient. They make themseleves available
                    all the time to fully grasp the product. Finished the
                    website ahead of time.
                    <ClientDiv>- Harpreet, Director of TGC</ClientDiv>
                  </TestimonialContent>
                </TestimonialDiv>
              </Alignment>

              <Alignment align="end">
                <TestimonialDiv>
                  <TestimonialContent>
                    I love ideating and brainstorming with the team. They are a
                    very positive bunch of people to work with! Excited for
                    what's brewing.
                    <ClientDiv>- Mike, Ongoing project</ClientDiv>
                  </TestimonialContent>
                </TestimonialDiv>
              </Alignment>
            </TestimonialsDiv>
          </Col>
        </Row>

        {/* <Row lg={12} style={{ margin: "3em 0em" }}>
          <Col
            lg={12}
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <ContactUsFormDiv>
              <ContactUsFormHeading>LET'S TALK</ContactUsFormHeading>
              <ContactUsFormSubtitle>
                Any questions or remarks? Or just write us a message
              </ContactUsFormSubtitle>
              <ContactUsFormWrapper onChange={this.onChange}>
                <ContactUsInputWrapper>
                  <ContactUsFormInput
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={this.state.data.name}
                  />
                  <ContactUsFormInput
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={this.state.data.phone}
                  />
                  <ContactUsFormInput
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.data.email}
                  />
                  <ContactUsFormInput
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={this.state.data.address}
                  />
                </ContactUsInputWrapper>
                <ContactUsRadioInputWrapper>
                  <ContactUsFormText>
                    {" "}
                    What services do you need?{" "}
                  </ContactUsFormText>
                  <ContactUsRadioButtonsDiv>
                    <label htmlFor="web">
                      <input
                        type="radio"
                        id="web"
                        name="service"
                        value="Web Development"
                        style={{ marginRight: "0.5em" }}
                      />
                      Web Development
                    </label>
                    <label htmlFor="design">
                      <input
                        type="radio"
                        id="design"
                        name="service"
                        value="design"
                        style={{ marginRight: "0.5em" }}
                      />
                      Web Design
                    </label>
                    <label htmlFor="graphic">
                      <input
                        type="radio"
                        id="graphic"
                        name="service"
                        value="graphic"
                        style={{ marginRight: "0.5em" }}
                      />
                      Graphic Design
                    </label>
                  </ContactUsRadioButtonsDiv>
                </ContactUsRadioInputWrapper>

                <ContactUsRadioInputWrapper>
                  <ContactUsFormText> Leave A Message</ContactUsFormText>
                  <ContactUsFormMessageInput
                    type="text"
                    placeholder="Write your message here!"
                    name="message"
                  />
                </ContactUsRadioInputWrapper>

                <ContactUsFormSubmitButton onClick={this.onSubmit}>
                  SUBMIT
                </ContactUsFormSubmitButton>
              </ContactUsFormWrapper>
            </ContactUsFormDiv>
          </Col>
        </Row> */}
      </FullContainter>
    );
  }
}

export default ContactUs2;
