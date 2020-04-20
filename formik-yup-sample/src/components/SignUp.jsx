import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ModalOutput from "./ModalOutput";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  contact: Yup.string()
    .max(11, "max 11 digit")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

class SignUp extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       contact: "",
  //       password: "",
  //       openModal: false
  //     };
  //   }

  state = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    openModal: false,
    users: []
  };

  openModal = () => {
    this.setState({ openModal: true });
  };

  closeModal = () => {
    this.setState({
      openModal: false
    });
  };

  render() {
    const { openModal } = this.state;
    return (
      <div className="container">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            password: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial value
            this.setState({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              contact: values.contact,
              password: values.password
            });
            this.openModal();
            console.log(values);
          }}
        >
          {/* {({ errors, touched }) => ( */}
          <div className="card m-md-5 p-md-3 mt-4 py-3">
            <h1 className="text-center">Signup</h1>
            <Form className="p-5">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <Field name="firstName" className="form-control" id="fname" />
                {/* {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null} */}
                <div className="text-danger">
                  <ErrorMessage name="firstName" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <Field name="lastName" className="form-control" id="lname" />
                {/* {errors.lastName && touched.lastName ? (
                      <div>{errors.lastName}</div>
                    ) : null} */}
                <div className="text-danger">
                  <ErrorMessage name="lastName" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                />
                {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                <div className="text-danger">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact No.</label>
                <Field
                  name="contact"
                  type="number"
                  className="form-control"
                  id="contact"
                />
                <div className="text-danger">
                  <ErrorMessage name="contact" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pw">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  id="pw"
                />
                <div className="text-danger">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          </div>
          {/* )} */}
        </Formik>
        <ModalOutput
          closeModal={this.closeModal}
          openModal={openModal}
          state={this.state}
        />
      </div>
    );
  }
}

export default SignUp;
