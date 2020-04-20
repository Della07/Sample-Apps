import React, { Component } from "react";
import { CSVLink } from "react-csv";

class Table extends Component {
  headers = [
    { label: "Actor", key: "actor" },
    { label: "Event", key: "event" },
    { label: "Description", key: "description" },
    { label: "Date", key: "date" }
  ];
  render() {
    const { state } = this.props;
    return (
      <div className="container p-2">
        <div className="p-3">
          <CSVLink
            className="btn btn-success"
            filename="Log Records.csv"
            data={state.files}
            headers={this.headers}
          >
            Download all Data
          </CSVLink>
        </div>

        <table className="table m-3">
          <thead>
            <tr>
              <th>Actor</th>
              <th>Event</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {state.files.map(file => (
              <tr key={file._id}>
                <td>{file.actor}</td>
                <td>{file.event}</td>
                <td>{file.description}</td>
                <td>{file.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
