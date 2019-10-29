import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Typewriter extends Component {
  state = {
    text: "",
    currentItemIndex: 0,
    displayCursor: false
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
    const { loop, options, triggerEnd } = this.props;
    const { currentItemIndex } = this.state;
    let charCount = 0;
    this.timer = setInterval(() => {
      this.setState({ text: text.substr(0, charCount) }, () => {
        if (charCount === text.length) {
          if (!loop && currentItemIndex + 1 === options.length) {
            this.setState({ displayCursor: true });
            triggerEnd();
            clearInterval(this.timer);
            return false;
          }

          clearInterval(this.timer);
          setTimeout(() => this.hideText(text), delayhideText);
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
            loop && (currentItemIndex = 0);
          }
          setTimeout(() => this.typeText(currentItemIndex), 1000);
        }
        charCount--;
      });
    }, 100);
  }

  render() {
    const { displayCursor } = this.state;
    const classCursor = classNames({
      typewriter__cursor: true,
      hidden: displayCursor
    });
    return (
      <div className="typewriter">
        <div className="typewriter__type">{this.state.text}</div>
        <div className={classCursor} />
      </div>
    );
  }
}

Typewriter.propTypes = {
  loop: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  triggerEnd: PropTypes.func
};

Typewriter.defaultProps = {
  loop: false,
  triggerEnd: () => {}
};

export default Typewriter;
