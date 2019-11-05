import React, { Component } from 'react';
import Header from './Header';
import { formatPrice, cl } from "../helpers";

class Basket extends Component {
  renderBasket = key => {
    const item = this.props.items[key];
    const count = this.props.basket[key];
    const isAvailable = item && item.status === "available";
    if (!isAvailable) {
      return (
        <li key={key}>Sorry {item ? item.name : "Item"} is not available.</li>
      );
    }
    return (
      <li className="basket-item" key={key}>
        x{count} - {item.name}{" "}
        <span className="price">{formatPrice(item.price)}</span>
        <span className="remove" onClick={() => this.props.deleteItemFromBasket(key)}>&times;</span>
      </li>
    );
  };

  render() {
    const basketIds = Object.keys(this.props.basket);
    const total = basketIds.reduce((prevTotal, key) => {
      const item = this.props.items[key];
      const count = this.props.basket[key];
      const isAvailable = item && item.status === "available";
      if (isAvailable) {
        return prevTotal + count * item.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="basket">
        <Header headerName="Basket" />
        <hr />
        <div className="basket-content">
          <ul className="basket-list">{basketIds.map(this.renderBasket)}</ul>
          <div className="basket-total">
            <strong>Total: </strong>
            {formatPrice(total)}
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
