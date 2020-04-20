import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required")
});

class Login extends Component {
  render() {
    const { login, state } = this.props;
    return (
      <div>
        <Button variant="link" className="">
          <Link to="/">Back</Link>
        </Button>
        <div className="container mt-5 py-1 shadow">
          <div className="py-5 px-md-5">
            <h1 className="text-center">Login</h1>

            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validationSchema={LoginSchema}
              onSubmit={values => {
                // same shape as initial values
                login(values.email, values.password);
                console.log(values);
              }}
            >
              <Form className="py-5 px-4">
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
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
