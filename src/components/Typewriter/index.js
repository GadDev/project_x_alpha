import "./typewriter.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

class Typewriter extends Component {
  state = {
    text: "",
    currentItemIndex: 0
  };

  componentDidMount() {
    this.typeText(this.state.currentItemIndex);
  }

  typeText(currentItemIndex) {
    const { options } = this.props;
    this.setState({ currentItemIndex }, () => {
      this.showText(options[currentItemIndex]);
    });
  }

  showText(text, timeDisplaySpeed = 200, delayhideText = 2500) {
    let charCount = 0;
    this.timer = setInterval(() => {
      this.setState({ text: text.substr(0, charCount) }, () => {
        if (charCount === text.length) {
          if (text !== "continue..") {
            clearInterval(this.timer);
            setTimeout(() => this.hideText(text), delayhideText);
          }
          clearInterval(this.timer);
        }

        charCount++;
      });
    }, timeDisplaySpeed);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  hideText(text) {
    const { options, loop } = this.props;
    let charCount = text.length;
    this.timer = setInterval(() => {
      this.setState({ text: text.substr(0, charCount) }, () => {
        if (charCount === 0) {
          clearInterval(this.timer);
          let currentItemIndex = this.state.currentItemIndex + 1;
          if (currentItemIndex === options.length) {
            if (loop) {
              currentItemIndex = 0;
              setTimeout(() => this.typeText(currentItemIndex), 1000);
            } else {
              console.log("non loop");
              this.showText("continue..");
              return false;
            }
          }
          setTimeout(() => this.typeText(currentItemIndex), 1000);
        }
        charCount--;
      });
    }, 150);
  }

  render() {
    return (
      <div className="typewriter">
        <div className="typewriter__type">{this.state.text}</div>
        <div className="typewriter__cursor" />
      </div>
    );
  }
}

Typewriter.propTypes = {
  loop: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

Typewriter.defaultProps = {
  loop: true
};

export default Typewriter;
