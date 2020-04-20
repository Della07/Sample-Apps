import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderPage />
        <div></div>
        <FooterPage />
      </div>
    );
  }
}

export default HomePage;
