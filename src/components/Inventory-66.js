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
  }

  // nakon refreš-a provjeri da li smo autenticirani i ako jesmo otvori nam inventory
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user })
      }
    })
  }
  
  authHandler = async (authData) => {
    // 1. Lookup the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    // 2. Claim it if there is no owner
    if (!store.owner) {
      // save it as our own. ukoliko nema ownera, prvi postaje owner i stvori novi key sa njegovim id-om
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // 3. Set the state of the inventory component to reflect the current user
    // postaviti čemo lokalni state jer nije potrebno prebacivati podatke u App komponentu
    // nekako gledam na to da ovo može biti stvarno zasebna komponenta jer ne upravlja u potpunosti aplikacijom,
    // već samo provjerava identitet usera koji će upravljati itemima u store-u
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    // nova firebase autentifikacija ovisna o provideru koejg smo poslali (Twitter, Facebook, Github)
    // const authProvider = new firebase.authGithubAuthProvider();, ... pa za sve providere
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  }

  render() {
    const logout = <button className="btn" onClick={this.logout}>Logout</button>;

    // 1. provjera ako postoji user
    if(!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    // 2. provjera ako je user i owner
    if(this.state.uid !== this.state.owner) {
      return (
        <div className="inventory">
          <Header headerName="Inventory" />
          <hr />
          <p>Sorry, ti nisi owner!</p>
          {logout}
        </div>
      );
    }

    // 3. sve je u redu, serviraj inventory
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
