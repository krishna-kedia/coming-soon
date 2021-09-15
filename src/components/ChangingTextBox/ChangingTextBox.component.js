import React from "react";
import { Title, HighlightedWord } from "./ChangingTextBox.styles";
import icon from "../../assets/icon.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class ChangingTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["PLUTUS.", "DETERMINISTIC.", "FUTURISTIC.", "INNOVATIVE."],
      index: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      let temp = this.state.index;
      if (temp === this.state.words.length - 1) {
        temp = 0;
      } else {
        temp += 1;
      }
      this.setState({ index: temp });
    }, 5000);
  }

  render() {
    let { index, words } = this.state;
    let { Bgcolor } = this.props;

    return (
      <Container
        fluid
        className="d-flex justify-content-center"
        style={{ backgroundColor: `${Bgcolor}` }}
      >
        <Row style={{ padding: "3em 1em" }}>
          <Title>
            We are <HighlightedWord>{words[index]}</HighlightedWord>
          </Title>
        </Row>
      </Container>
    );
  }
}

export default ChangingTextBox;
