import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      diet: {
        isMeat: false,
        isVegeterian: false,
        isVegan: false
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox" ?
      this.setState(prevState => {
        return {
          diet: {
            ...prevState.diet,
            [name]: checked
          }
        }
      })
    :
      this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            type="number"
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />
          {/* Create radio buttons for gender here */}
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          male
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          female
          <br />
          {/* Create select box for location here */}
          <select
            defaultValue={this.state.location}
            onChange={this.handleChange}
            name="location"
          >
            <option value="novigrad">novigrad</option>
            <option value="zagreb">zagreb</option>
            <option value="rijeka">rijeka</option>
          </select>
          <br />
          {/* Create check boxes for dietary restrictions here */}
          <input
            value={this.state.diet}
            name="isMeat"
            type="checkbox"
            checked={this.state.isMeat}
            onChange={this.handleChange}
          />
          meat
          <br />
          <input
            value={this.state.diet}
            name="isVegeterian"
            type="checkbox"
            checked={this.state.isVegeterian}
            onChange={this.handleChange}
          />
          vegeterian
          <br />
          <input
            value={this.state.diet}
            name="isVegan"
            type="checkbox"
            checked={this.state.isVegan}
            onChange={this.handleChange}
          />
          vegan
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName}, {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <div>
          Your dietary restrictions:
          <p>{this.state.diet.isMeat ? "Meater" : ""}</p>
          <p>{this.state.diet.isVegeterian ? "Vegeterian" : ""}</p>
          <p>{this.state.diet.isVegan ? "Vegan" : ""}</p>
        </div>
      </main>
    );
  }
}

export default Forms;
