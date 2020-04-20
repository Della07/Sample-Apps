import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";

class CSV extends Component {
  state = { files: [] };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    axios.get("http://localhost:5000/").then(res => {
      this.setState({ files: res.data.data });
      console.log(res);
    });
  };

  render() {
    return <Table state={this.state} />;
  }
}

export default CSV;
