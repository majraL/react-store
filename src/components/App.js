import React, { Component } from "react";
import Basket from "./Basket";
import StoreItem from "./StoreItem";
import sampleItems from "../sample-items";

class App extends Component {
  
  state = {
    items: {},
    basket: {}
  }

  componentDidMount() {
    this.loadSampleItems();
  }

  loadSampleItems = () => {
    this.setState({ items: sampleItems });
  }

  addToBasket = (key) => {
    // console.log(item.props.details);
    const basket = { ...this.state.basket }
    basket[key] = basket[key] + 1;
    this.setState({ basket: basket });
  }

  goToAdmin = () => {
    this.props.history.push(`/AdminPanel`);
  }

  render() {
    return (
      <div className="box">
        <div className="store">
          <h2 className="title main">Store</h2>
          <hr />
          <ul className="store-list">
            {Object.keys(this.state.items).map((key, isus) => (
              <StoreItem key={key} index={key} no={isus} details={this.state.items[key]} addToBasket={this.addToBasket} />
            ))}
          </ul>
        </div>
        <Basket />
        <div className="btn-wrapper"><button className="btn" onClick={this.goToAdmin}>Admin</button></div>
      </div>
    );
  }
}

export default App;
