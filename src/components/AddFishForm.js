import React, { Component } from 'react';

class AddFishForm extends Component {
  render() {
    return (
      <form>
        <input type="text" name="name" placeholder="name"/>
        <input type="text" name="price" placeholder="price"/>
        <select name="status" placeholder="status">
          <option value="0">Fresh</option>
          <option value="1">Sold out!</option>
        </select>
        <textarea type="text" name="desc" placeholder="desc"></textarea>
        <input type="text" name="image" placeholder="image"/>
        <button type="submit">+ Add item</button>
      </form>
    );
  }
}

export default AddFishForm;
