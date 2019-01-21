import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";
import papiItems from '../papi-items';
import { cl } from '../helpers';

class ToDoList extends Component {

  state = {
    items: {}
  }

  componentDidMount() {
    this.loadItems(this.getItems());
  }
  
  componentDidUpdate() {
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }

  getItems = () => (
    JSON.parse(localStorage.getItem("items")) || papiItems
  )

  loadItems = (items) => {
    this.setState({ items: items });
  }

  updateCheckbox = (key) => {
    const items = { ...this.state.items };
    items[key].checked = !items[key].checked;
    this.setState({ items: items });
  }

  resetList = () => {
    localStorage.removeItem("items");
    this.loadItems(this.getItems());
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.items).map((key) => (
          <ToDoItem key={key} index={key} details={this.state.items[key]} updateCheckbox={this.updateCheckbox} />
        ))}
        <button onClick={this.resetList}>resetiraj</button>
      </div>
    );
  }
}

export default ToDoList;
