import React, { Component } from 'react';
import PropTypes from "prop-types";
import Answer from "./Answer";

class Question extends Component {
  static propTypes = {
    details: PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string
    }),
    no: PropTypes.number,
    index: PropTypes.string,
    handleAnswer: PropTypes.func
  }

  render() {
    const { question, answers } = this.props.details;
    return (
      <div className="question-wrapper">
        <div id={"question-"+this.props.no} className="question" style={{fontWeight:700}}>
          {question}<span></span>
        </div>
        <ul className="answer-list" style={{marginTop:10+"px", marginBottom:10+"px"}}>
          {answers.map((answer, index) => {
            return (
              <Answer key={answer} index={index} questionIndex={this.props.index} questionId={this.props.no} answer={answer} handleAnswer={this.props.handleAnswer} />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Question;
