import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './register.css';


const ivalues = {
  firstName: "", lastName: "", email: "", pass: "",confirmPass:"",
}

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
  pass: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("No Password provided."),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('pass'), null], 'Password does not match')
});


const Register = () => (
  <div>
    <h1>Create New Account</h1>
    <hr />
    <Formik
      initialValues={ivalues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (

        <form onSubmit={handleSubmit} class="form-group">
          <label>First Name *</label><br />
          <input class="form-control"
            type="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          <span class="err">{errors.firstName && touched.firstName && errors.firstName}</span>
          <br />

          <label>Last Name *</label><br />
          <input
            type="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          <span class="err">{errors.lastName && touched.lastName && errors.lastName}</span>
          <br />

          <label>E-mail *</label><br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <span class="err">{errors.email && touched.email && errors.email}</span>
          <br />

          <label>Password *</label><br />
          <input
            type="pass"
            name="pass"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.pass}
          />
          <span class="err">{errors.pass && touched.pass && errors.pass}</span>
          <br />

          <label>Confirmed Password</label><br />
          <input
            type="confirmPass"
            name="confirmPass"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span class="err">{errors.confirmPass && touched.confirmPass && errors.confirmPass}</span>

          <hr />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default Register;
