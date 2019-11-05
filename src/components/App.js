import React, { Component, Fragment } from "react";
import Header from "./Header";
import Basket from "./Basket";
import Inventory from "./Inventory";
import StoreItem from "./StoreItem";
import base from "../base";
import sampleItems from "../sample-items";
import { cl } from "../helpers";

class App extends Component {

  state = {
    items: {},
    basket: {}
  }

  componentDidMount() {
    const { params } = this.props.match;
    // ref služi firebase-u za referencu na specifični point/url 
    this.ref = base.syncState(`${params.storeId}/items`, {
      context: this,
      state: "items"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSampleItems = () => {
    this.setState({ items: sampleItems });
  }

  addToBasket = (key) => {
    const basket = { ...this.state.basket };
    basket[key] = basket[key] + 1 || 1;
    this.setState({ basket });
  }

  addItem = (item) => {
    const items = { ...this.state.items };
    items[`item${Date.now()}`] = item;
    this.setState({ items: items });
  }

  updateItem = (key, updatedItem) => {
    const items = {...this.state.items};
    items[key] = updatedItem;
    this.setState({ items });
  }

  deleteItem = (key) => {
    const items = { ...this.state.items };
    // da bi firebase izbrisao item moramo ga postaviti na null
    items[key] = null;
    this.setState({ items });
  }

  deleteItemFromBasket = (key) => {
    const basket = { ...this.state.basket };
    delete basket[key];
    this.setState({ basket });
  }

  // goToAdmin = () => {
  //   this.props.history.push(`/AdminPanel`);
  // }

  render() {
    const data = this.props.location.state;
    return (
      <Fragment>
        <div className="store-name">
          <h1>{data}</h1>
          <span>store</span>
        </div>
        <button onClick={this.loadSampleItems}>Load sample items</button>
        <div className="box">
          <div className="store">
            <Header headerName="Store" />
            <hr />
            <ul className="store-list">
              {Object.keys(this.state.items).map((key, no) => (
                <StoreItem
                  key={key}
                  index={key}
                  no={no}
                  details={this.state.items[key]}
                  addToBasket={this.addToBasket}
                />
              ))}
            </ul>
          </div>
          <Basket
            items={this.state.items}
            basket={this.state.basket}
            deleteItemFromBasket={this.deleteItemFromBasket}
          />
          {/* <div className="btn-wrapper">
            <button className="btn" onClick={this.goToAdmin}>Admin</button>
          </div> */}
          <Inventory
            addItem={this.addItem}
            editItem={this.editItem}
            updateItem={this.updateItem}
            deleteItem={this.deleteItem}
            items={this.state.items}
            storeId={this.props.match.params.storeId}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
