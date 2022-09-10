import React from "react";
import { Formik, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import rocketImg from "../img/rocket.png";
const Formikform = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log("field is", field);
    console.log("meta is", meta);
    return (
      <div className="mb-2 form-input">
        <label className="form-label" htmlFor={field.name}>
          {label}
        </label>
        <input
          className={`form-control shadow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...props}
          autoComplete="off"
        />
        <ErrorMessage component="div" name={field.name} className="error" />
      </div>
    );
  };
  return (
    <div className="container form-wrap">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form>
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="last Name" name="lastName" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <button className="form-btn" type="submit">
                Register
              </button>
              <button className="form-btn" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <div className="col-md-7 my-auto">
        <img className="img-fluid w-100" src={rocketImg} alt="rocket img" />
      </div>
    </div>
  );
};

export default Formikform;
