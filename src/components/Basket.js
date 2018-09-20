import React, { Component } from 'react';
import { formatPrice, cl } from "../helpers";

class Basket extends Component {
  render() {
    const itemId = Object.keys(this.props.basket);
    const total = itemId.reduce((prevTotal, key) => {
      const item = this.props.item[key];
      const count = this.props.basket[key];
      const isAvailable = item && item.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * item.price);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="basket">
        <h2 className="title main">Basket</h2>
        <hr/>
        <div className="basket-content">
          <ul className="basket-list">
            {Object.keys(this.props.basket).map((item, key) => {
              return (
                <li key={key} className="basket-item">
                  <strong>{this.props.item[item].name}</strong>{this.props.basket[item]+0}
                </li>
              )
            })}
          </ul>
          <div className="basket-total">
            <strong>Total: </strong>{formatPrice(total)}
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
