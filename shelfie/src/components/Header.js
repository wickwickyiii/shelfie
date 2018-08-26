import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <img
            url="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-18-512.png"
            alt=""
          />
          <h1>SHELFIE</h1>
        </nav>
      </div>
    );
  }
}
