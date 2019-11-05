import React, { Component } from 'react';
import Header from './Header';

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createItem = (e) => {
    e.preventDefault();
    const item = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addItem(item);
  }

  render() {
    return (
      <div>
        <h2 className="title sub">Add item</h2>
        <form className="item-edit" onSubmit={this.createItem}>
          <input
            type="text"
            ref={this.nameRef}
            name="name"
            placeholder="name"
          />
          <input
            type="text"
            ref={this.priceRef}
            name="price"
            placeholder="price"
          />
          <select name="status" ref={this.statusRef} placeholder="status">
            <option value="available">Fresh</option>
            <option value="unavailable">Sold out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="desc" />
          <input
            type="text"
            ref={this.imageRef}
            name="image"
            placeholder="image"
          />
          <button type="submit">+ Add item</button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;
