import React, { Component } from 'react';
import firebase from "firebase";
import Header from "./Header";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";
import Login from "./Login";
import base from "../base";

class Inventory extends Component {
  
  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  authHandler = async (authData) => {
    const store = await base.fetch(this.props.storeId, { context: this });
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }

    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  render() {
    const logout = <button onClick={this.logout}>Logout</button>;

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div className="inventory">
          <Header headerName="Inventory" />
          <hr />
          You are not the owner {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <Header headerName="Inventory" />
        <hr />
        {logout}
        <AddItemForm addItem={this.props.addItem} />
        <h2 className="title sub">Edit items</h2>
        {Object.keys(this.props.items).map(key => (
          <EditItemForm
            key={key}
            index={key}
            item={this.props.items[key]}
            updateItem={this.props.updateItem}
            deleteItem={this.props.deleteItem}
          />
        ))}
      </div>
    );
  }
}

export default Inventory;
