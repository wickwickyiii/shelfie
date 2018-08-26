import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>{this.props.card}</p>
        <button onClick={id => this.props.deleteProduct(id)}>Delete</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default Product;
