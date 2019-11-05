import React from "react";
import PropTypes from "prop-types";

class Answer extends React.Component {
  static propTypes = {
    answer: PropTypes.string
  }
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleAnswer(this.props.answer, this.props.questionIndex, this.props.questionId, e);
  }
  
  render() {
    return (
      <li className="answer" onClick={this.handleClick}>{this.props.answer}</li>
    )
  }
}

export default Answer;
