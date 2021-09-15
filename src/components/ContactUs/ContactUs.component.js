import React, { Component } from "react";
import {
  ContactUsDetailsDiv,
  ContactUsDiv,
  ContactUsFormDiv,
  ContactUsFormHeading,
  ContactUsDetailsDivHeading,
  ContactUsDetailsWrapper,
  ContactUsDetails,
  ContactUsDetailIcon,
  ContactUsDetailText,
  ContactUsFormSubtitle,
  ContactUsFormWrapper,
  ContactUsFormInput,
  ContactUsInputWrapper,
  ContactUsRadioButtonsDiv,
  ContactUsRadioInputWrapper,
  ContactUsFormMessageInput,
  ContactUsFormSubmitButton,
  ContactUsDetailsGraphicDiv,
  ContactUsDetailsGraphicIcons,
  ContactUsDetailsGraphic,
  Graphic1,
  Graphic2,
} from "./ContactUs.styles";
// import { GoogleSpreadsheet } from "google-spreadsheet";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import address from "../../assets/location.png";
import insta from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import quarter from '../../assets/quarter.png';
import circle from '../../assets/circle.png'

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: '',
        email: '',
        message: '',
        address: '',
        service: '',
        phone: ''
      }
    };
  }

  componentDidMount(){
  }

  // onSubmit = async(e) => {
  //   e.preventDefault();
  //   const doc = new GoogleSpreadsheet('1BEHFip4o3Lk1ztBYlDoOZw5jo1klWssMiWBoP5rFmfo')
  //   await doc.useServiceAccountAuth({
  //     client_email: "krishna@the-girl-code-315413.iam.gserviceaccount.com",
  //     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCOhKgeOiaMblk\nwGjEctSEDWdxzZuNgMvmvanJsIQS0fjp+uENXoqMbLNCh30GHiaY/tOGrtoq1008\nA8E/fY68kL9ioksjHse6lIXobOzNbShvSBpAz3UeIzZB57lzRntPCZ5lyvAPCaWI\nmDDnXh5I2dkESVZWRpffy5SyUbBTPRvYJuB2ON1tm6YmPLbTxJiGRWB6abBkIXb8\ndv0RHcTsh9zUAt8HQfXuzT7m43mySfMtU9XKKizt9bv+lPeyWBtu1P0VynwUNImf\ndY5+H1GGNKgoKKgogHX4Yn26Ulhj62dvYywDMJs2ZCnKK4XsS2q6LrBLr0smnOQy\nnal15mcXAgMBAAECggEAB1MYU7vrjbEVXELTUKFB+W7l+Uk3Nglm5x888XG6MVmA\nyRYgeZgYon4Q7o/ce6gUbY2inYAnkxkGfR5pIcNS6DKPPSGAsuTcxGEIgcDl10No\nFHZEIzCPqqDKUYbzG/FLAiqLMiyKjA6hkvqmUXtfqgCpKfu4CU3lOVfcljL1ctYY\nt4z8i4QAjwi3hMsVeGXV4PDFLTSpK0tIOpBo5ZBbQGQPFtQ+OLjogbQNFSjezzsr\ngA8TKDw1ra/k+jGU8SMeVGB2TBxM71rjL8z8RLlw3j+iBrgKTc5ZTDIN/oN2Yo4K\nU1W1+TlCcuP0z81lSeU07nCG1l5MmrgS65xNMr6qZQKBgQD3VwrtotiB8HfJihL5\nogTbpcacG1qvPYrEy/c+z70kOd6aZ78f7aVFFDFE/oIgtEWxsyalLBRJZGOzxK3R\nVSgZGL4F892/NzGrbzTDqtUS+gPZ8xsAEqR5CTuqFEaHM21qqjCWHLfwFsQgTrS2\nmUDpzNxqZEk2RVy76kQGz0i8AwKBgQDJBvdf5WUCxKJUFuVL7jwBkwBVpVrj8hQG\nx3QlbLMmItvcWwkqkZjVqlWqwApXymI7PRucTzj1ufymzJ55Tz/ph3exGrc7yRcd\nGCcY2g2JUDedBY39qLiavCdF8Wfb9cUBIjWb9285iBiizpD0YEzC8dTcG2HWazOp\nU0FDCnteXQKBgQC8Buqi3oISvdiCWLm2Fin1RF/ouo7E21cL5jaOBGS4DlogLTBJ\nOGLEUeZmmcgYzpKQ1S1SsWC2rl9xANpWYZM7COkkI1B2laHnvoFxIgQbCf81h68F\n7iYkcRVvZTx8eWb7iGepJinalaQBH3QXwAdt9TO2mYhifnZR0HRobNnROwKBgHC5\nLEukqSCFPHUkpY0PWKyVTpG3+CBrpRksDI/TxR00XM7SaXBqViYxrnnh16rkvHJ1\nUJ80uT7o/KhXguGJM9ByewZfcbHfj8truLixxPdjeNveuoErc+CoculAdbmctcxt\n71u2wrKjAxV/+T5fJYwG6RJHdHQ0hrKDEcxS+1ytAoGBAN9P8ixdH7fswpdLn5f8\n64a3Kx5HctCjofWFcOyQ4Ack4z7YT5Hyjln2k7juKuxCr4Fsa+IPZk30w4SMju7Z\nT3s38EInHXEsFTEcLgs0Ls9hKbxQz/XJ/Iya/iAEQlaphmDd6KOTJLpRUL6W5NMG\ncmBHxVeoME4BzU5wdP8IDmdn\n-----END PRIVATE KEY-----\n",
  //   }, console.log('hi'));
  //   //console.log(doc, 'doc')
  //   await doc.loadInfo();
  //   const sheet = doc.sheetsByIndex[0]
  //   console.log(sheet)
  //   await sheet.addRow({
  //     Name: this.state.data.name,
  //     Email: this.state.data.email,
  //     Service: this.state.data.service,
  //     Message: this.state.data.message,
  //     Phone: this.state.data.phone,
  //     Address: this.state.data.address
  //   })
  //   this.setState({
  //       name: '',
  //       email: '',
  //       message: '',
  //       address: '',
  //       service: '',
  //       phone: ''
  //   })
  // }


  onChange = (e) =>  {
    const {value, name} = e.target
    const data = this.state.data
      console.log(value, name)
      data[name] = value
      console.log(data)
      this.setState({data: data})
  }

  render() {
    return (
      <ContactUsDiv>
        <ContactUsDetailsDiv>
          <ContactUsDetailsDivHeading>Contact Us</ContactUsDetailsDivHeading>
          <ContactUsDetailsWrapper>
            <ContactUsDetails>
              <ContactUsDetailIcon src={phone} />
              <ContactUsDetailText>+91 99999999</ContactUsDetailText>
            </ContactUsDetails>
            <ContactUsDetails>
              <ContactUsDetailIcon src={email} />
              <ContactUsDetailText>contact@plutus.in</ContactUsDetailText>
            </ContactUsDetails>
            <ContactUsDetails>
              <ContactUsDetailIcon src={address} />
              <ContactUsDetailText>Unicorn World</ContactUsDetailText>
            </ContactUsDetails>
          </ContactUsDetailsWrapper>
          <ContactUsDetailsGraphicDiv>
              <ContactUsDetailsGraphicIcons>
                <ContactUsDetailIcon src = {insta} />
                <ContactUsDetailIcon src = {linkedin} />
              </ContactUsDetailsGraphicIcons>
              <ContactUsDetailsGraphic>
                <Graphic2 src = {circle} />
                <Graphic1 src = {quarter} />
              </ContactUsDetailsGraphic>
          </ContactUsDetailsGraphicDiv>
        </ContactUsDetailsDiv>
        <ContactUsFormDiv>
          <ContactUsFormHeading>LET'S TALK</ContactUsFormHeading>
          <ContactUsFormSubtitle>
            Any questions or remarks? Or just write us a message
          </ContactUsFormSubtitle>
          <ContactUsFormWrapper onChange={this.onChange}>
            <ContactUsInputWrapper>
              <ContactUsFormInput type="text" placeholder="Name" name="name" value = {this.state.data.name}/>
              <ContactUsFormInput
                type="text"
                placeholder="Phone Number"
                name="phone"
                value = {this.state.data.phone}
              />
              <ContactUsFormInput
                type="text"
                placeholder="Email"
                name="email"
                value = {this.state.data.email}
              />
              <ContactUsFormInput
                type="text"
                placeholder="Adress"
                name="address"
                value = {this.state.data.address}
              />
            </ContactUsInputWrapper>
            <ContactUsRadioInputWrapper>
              <h6>What services do you need?</h6>
              <ContactUsRadioButtonsDiv>
                <label htmlFor="web">
                  <input type="radio" id="web" name="service" value="Web Development" />
                  Web Development
                </label>
                <label htmlFor="design">
                  <input
                    type="radio"
                    id="design"
                    name="service"
                    value="design"
                  />
                  Web Design
                </label>
                <label htmlFor="graphic">
                  <input
                    type="radio"
                    id="graphic"
                    name="service"
                    value="graphic"
                  />
                  Graphic Design
                </label>
              </ContactUsRadioButtonsDiv>
            </ContactUsRadioInputWrapper>

            <ContactUsRadioInputWrapper>
              <h6>What services do you need?</h6>
              <ContactUsFormMessageInput
                type="text"
                placeholder="Write your message here!"
                name="message"
              />
            </ContactUsRadioInputWrapper>
            <ContactUsFormSubmitButton onClick={this.onSubmit}>SUBMIT</ContactUsFormSubmitButton>
          </ContactUsFormWrapper>
        </ContactUsFormDiv>
      </ContactUsDiv>
    );
  }
}
