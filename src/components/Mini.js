import React, { Component } from 'react';
import { cl } from '../helpers';

class Mini extends Component {

  state = {
    count: 0
  }

  incNew = () => {
    return this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  increment = () => {
    this.incNew();
    
    // this.setState({ count: this.state.count + 1 })

    // ukoliko želimo više puta, moramo poslat funkciju kao argument unutar setState()
    // this.setState((prevState) => ({ count: prevState.count + 1 }))
    // this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>increase</button>
        <button onClick={this.decrement}>decrease</button>
      </div>
    );
  }
}

export default Mini;
