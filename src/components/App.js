import React, { Component, Fragment } from "react";
import Header from "./Header";
import Basket from "./Basket";
import Inventory from "./Inventory";
import StoreItem from "./StoreItem";
import sampleItems from "../sample-items";
import { cl } from "../helpers";

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
    const basket = { ...this.state.basket };
    basket[key] = basket[key] + 1 || 1;
    this.setState({ basket: basket });
  }

  // goToAdmin = () => {
  //   this.props.history.push(`/AdminPanel`);
  // }

  render() {
    const data = this.props.location.state;
    return (
      <Fragment>
        <div className="store-name">
          <span>store</span>
          <h1>{data}</h1>
        </div>
        <div className="box">
          <div className="store">
            <Header headerName="Store" />
            <hr />
            <ul className="store-list">
              {Object.keys(this.state.items).map((key, no) => (
                <StoreItem key={key} index={key} no={no} details={this.state.items[key]} addToBasket={this.addToBasket} />
              ))}
            </ul>
          </div>
          <Basket item={this.state.items} basket={this.state.basket} />
          {/* <div className="btn-wrapper">
            <button className="btn" onClick={this.goToAdmin}>Admin</button>
          </div> */}
          <Inventory />
        </div>
      </Fragment>
    );
  }
}

export default App;
