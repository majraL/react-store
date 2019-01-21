import React, { Component } from "react";
import { formatPrice, cl } from "../helpers";

class StoreItem extends Component {
  
  handleOrder = () => {
    this.props.addToBasket(this.props.index);
  }

  render() {
    // cl(this);
    // cl(this.props);
    const { name, image, desc, price, status } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className={"store-item " + (isAvailable ? "" : "disabled")}>
        <div className="store-item_box">
          <div className="store-item_img">
            <img src={image} alt={name} />
          </div>
          <div className="store-item_info">
            <h2 className="title item">
              {name}<span className="price">{formatPrice(price)}</span>
            </h2>
            <p className="desc">{desc}</p>
          </div>
          <div className="btn-wrapper">
            <button className="btn btn-primary" disabled={!isAvailable} onClick={this.handleOrder}>
              {isAvailable ? "Add to card" : "Sold out"}
            </button>
          </div>
        </div>
      </li>
    );
  }

}

export default StoreItem;
