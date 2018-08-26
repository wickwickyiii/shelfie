import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteProduct(id) {
    axios.delete(`/api/inventory/${id}`);
  }

  render() {
    let inventoryState = [];
    inventoryState.push(this.props.products);

    console.log(inventoryState);

    let displayProduct = inventoryState[0].map((e, i, arr) => {
      return (
        <div>
          <span key={i}>
            {e.image}
            {e.name}
            {e.price}
          </span>
        </div>
      );
    });

    return (
      <div>
        <Product card={displayProduct} deleteProduct={this.deleteProduct} />
      </div>
    );
  }
}

export default Dashboard;
