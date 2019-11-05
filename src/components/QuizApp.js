import React, { Component } from 'react';
import PropTypes from "prop-types";
import Question from "./Question";
import { questions } from "../questions";
import shuffleQuestions from "../shuffleQuestions";

const ShuffledQuestions = shuffleQuestions(questions);

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questions: ShuffledQuestions,
      points: 0,
      result: 0
    }
    this.handleAnswer = this.handleAnswer.bind(this);
    this.checkPoints = this.checkPoints.bind(this);
  }

  checkPoints() {
    let currentPoints = this.state.points;
    if (currentPoints === 0) { this.setState({ result: 10 })};
    if (currentPoints === 1) { this.setState({ result: 7 })};
    if (currentPoints === 2) { this.setState({ result: 4 })};
    if (currentPoints >= 3) { this.setState({ result: 1 })};
  }

  handleAnswer(answer, questionIndex, questionId, e) {
    const question = document.querySelector("#question-" + questionId);
    const isCorrect = this.state.questions[questionIndex].answers.indexOf(answer) === this.state.questions[questionIndex].correct;
    question.children[0].innerHTML = "  -------------->" + isCorrect;
    if(isCorrect) {
      this.checkPoints();
      setTimeout(() => {
        question.children[0].innerHTML = "--> Points: " + this.state.result;
      }, 0);
      this.setState({ points: 0 });
      e.target.classList.add("correct");
      setTimeout(() => {
        question.parentElement.classList.add("correct");
      }, 600);
    } else {
      e.target.style.pointerEvents = "none";
      e.target.classList.add("wrong");
      this.setState(() => ({ points: this.state.points + 1 }));
      this.checkPoints();
    }
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:"center", fontSize:"60px"}}>Quiz</h1>
        <div className="question-list">
          {Object.keys(this.state.questions).map((key, no) => {
            return (
              <Question key={key} index={key} no={no} details={this.state.questions[key]} handleAnswer={this.handleAnswer} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Quiz;
