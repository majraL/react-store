import React, { Component } from 'react';
import { getFunName, cl } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = (e) => {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to store/whatever-from-inpu, 
    // drugi parametar zapisujem u state od location-a
    this.props.history.push(`/store/${storeName}`, `${storeName}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input 
          type="text" 
          placeholder="Store name" 
          defaultValue={getFunName()} 
          required 
          ref={this.myInput}/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
