import React, { Component } from 'react';
import { cl } from '../helpers';

class ToDoItem extends Component {

  handleCheckbox = () => {
    this.props.updateCheckbox(this.props.index);
  }

  render() {
    const { name, checked } = this.props.details;
    return (
      <div className="check-item">
        <input id={name} type="checkbox" checked={checked} value={checked} onChange={this.handleCheckbox} />
        <label className="name" htmlFor={name}>{name}</label>
      </div>
    );
  }
}

export default ToDoItem;
