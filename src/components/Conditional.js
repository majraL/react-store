import React from "react";

class Conditional extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    console.log("ušo");
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    })); // ili
    // this.setState(prevState => {
    //   return {
    //     isLoggedIn: !prevState.isLoggedIn
    //   }
    // });
  }

  render() {
    // ili
    // let buttonText = this.state.isLoggedIn ? "Log out" : "Log in";
    // let displayText = this.state.isLoggedIn ? "Logged out" : "Logged in";
    // i dole iskoristit varijable
    return (
      <div>
        <div>{this.state.isLoggedIn ? "Logged in!" : "logged out!"}</div>
        <button onClick={this.changeState}>
          {this.state.isLoggedIn ? "Log out" : "Log in"}
        </button>
      </div>
    )
  }
}

export default Conditional;
