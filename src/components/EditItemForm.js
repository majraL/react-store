import React, { Component } from 'react';

class EditItemForm extends Component {

  handleChange = e => {
    e.preventDefault();
    const updatedItem = {
      ...this.props.item,
      [e.currentTarget.name]: e.currentTarget.value
    }
    this.props.updateItem(this.props.index, updatedItem);
  };

  render() {
    return (
      <div className="item-edit">
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={this.props.item.name}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="price"
          placeholder="price"
          defaultValue={this.props.item.price}
          onChange={this.handleChange}
        />

        <select
          name="status"
          placeholder="status"
          defaultValue={this.props.item.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out!</option>
        </select>

        <textarea
          name="desc"
          placeholder="desc"
          defaultValue={this.props.item.desc}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="image"
          defaultValue={this.props.item.image}
          onChange={this.handleChange}
        />

        <button
          type="submit"
          onClick={() => {this.props.deleteItem(this.props.index)}}
        >
          Delete item
        </button>
      </div>
    );
  }
}

export default EditItemForm;
