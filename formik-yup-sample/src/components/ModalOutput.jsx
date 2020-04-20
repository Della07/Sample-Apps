import React, { Component } from "react";
import { Button, Modal, ListGroup, Container } from "react-bootstrap";
import localState from "../Model";

class ModalOutput extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     openModal: false
  //   };
  // }

  componentWillReceiveProps(nextProps) {
    const { openModal } = this.props;
    if (nextProps.openModal !== openModal) {
      // checking the incoming state value to current state value
      this.setState({ ...localState }); // will set what ever value on the local state * comment out this if you want to see the difference
    }
  }

  render() {
    const { closeModal, openModal, state } = this.props;
    console.log("this.props", this.props);
    return (
      <Modal show={openModal}>
        <Modal.Body>
          <Container className="p-3">
            <h3 className="text-center">Success!!</h3>
            <ListGroup variant="flush" className="p-3">
              <ListGroup.Item>
                <span className="font-weight-bold">Firstname:</span>{" "}
                {state.firstName}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="font-weight-bold">Lastname:</span>{" "}
                {state.lastName}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="font-weight-bold">Contact:</span>{" "}
                {state.contact}{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="font-weight-bold">Email:</span> {state.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="font-weight-bold">Password:</span>{" "}
                {state.password}
              </ListGroup.Item>
            </ListGroup>
          </Container>
          <Modal.Footer>
            <Button variant="danger" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalOutput;
