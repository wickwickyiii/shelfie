import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: null,
      img: "",
      newProduct: []
    };
    this.handleImgUrl = this.handleImgUrl.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleName = this.handleName.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);
  }

  handleImgUrl(e) {
    this.setState({ img: e.target.value });
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  // post new product to database
  createProduct(name, price, img) {
    axios
      .post("/api/inventory", { name, price, img })
      .then(res => this.setState({ newProduct: res.data }));
  }

  // clear input boxes
  newProduct() {
    let { name, price, img } = this.state;

    this.createProduct(name, price, img);
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={e => this.handleImgUrl(e)} placeholder="IMG-URL" />
          <input onChange={e => this.handleName(e)} placeholder="NAME" />
          <input onChange={e => this.handlePrice(e)} placeholder="PRICE" />
          <button onClick={e => this.clearInputs(e)}>Cancel</button>
          <button
            //   onClick={() => this.createProduct()}
            onClick={() => this.props.addProduct()}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
