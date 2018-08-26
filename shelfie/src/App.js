import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
    this.getInventory = this.getInventory.bind(this);
  }

  // get inventory from database
  getInventory() {
    axios
      .get("/api/inventory")
      .then(response => this.setState({ inventory: response.data }));
  }

  render() {
    console.log(this.state.inventory);

    return (
      <div className="App">
        <header>
          <Header />
        </header>

        <div>
          <Form addProduct={this.getInventory} />
        </div>

        <div>
          <Dashboard
            products={this.state.inventory}
            getInventory={this.getInventory}
          />
        </div>
      </div>
    );
  }
}

export default App;
