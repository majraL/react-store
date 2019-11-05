import React, { Component } from 'react';
import ToDoItem from "./ToDoItem-array";
import papiItemsArray from '../papi-items-array';
import { cl } from '../helpers';

class ToDoListArray extends Component {
  state = {
    itemsArray: papiItemsArray
  };

  updateCheckbox = (key) => {
    const items = [ ...this.state.itemsArray ];
    items[key - 1].checked = !items[key - 1].checked;
    this.setState({ itemsArray: items });
  }

  render() {
    return (
      <div>
        {this.state.itemsArray.map(item => (
          <ToDoItem
            key={item.id}
            index={item.id}
            details={item}
            updateCheckbox={this.updateCheckbox}
          />
        ))}
      </div>
    );
  }
}

export default ToDoListArray;
