import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  contact: Yup.string()
    .max(11, "max 11 digit")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

class SignUp extends Component {
  render() {
    const { save } = this.props;
    return (
      <div className="">
        <Button variant="link">
          <Link to="/">Back</Link>
        </Button>
        <div className="py-5 px-md-5">
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
              // same shape as initial values

              save(
                values.firstName,
                values.lastName,
                values.contact,
                values.email,
                values.password
              );

              console.log(values);
            }}
          >
            {/* {({ errors, touched }) => ( */}
            <div className="container shadow p-5">
              <h1 className="text-center">Signup</h1>
              <Form className="py-5 px-md-5">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <Field name="firstName" className="form-control" id="fname" />
                  <div className="text-danger">
                    <ErrorMessage name="firstName" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <Field name="lastName" className="form-control" id="lname" />
                  <div className="text-danger">
                    <ErrorMessage name="lastName" />
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
                  <label htmlFor="email">Email</label>
                  <Field name="email" className="form-control" id="email" />
                  <div className="text-danger">
                    <ErrorMessage name="email" />
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

                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </Form>
            </div>
            {/* )} */}
          </Formik>
        </div>
      </div>
    );
  }
}

export default SignUp;
