import React from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Typography, Container, MenuItem } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomSelect from './Costomselect';
import { toast } from 'react-toastify';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import authService from '../../service/authsevice';
import {  useNavigate, NavLink, } from 'react-router-dom';



const validationSchema = Yup.object().shape({
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
  roleId: Yup.number().required('Role is required'),

  password: Yup.string()
    .min(4, "Password is too short - should be 4 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("No Password provided."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match')
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  roleId: '',
  password: '',
  confirmPassword: '',
};

const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const SectionTitle = styled('h2')`
  margin-bottom: 2.5rem;
  font-weight: 400;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -13px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const FieldWrapper = styled('div')`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const RegisterButton = styled(Button)`
  align-self: flex-start;
  margin-top: 2rem;
  color:white;
  background-color: black;
`;

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {

    console.log(data);
    delete data.id;
    delete data.confirmPassword;
    authService.create(data)
      .then((res) => {
        toast.success("Account Created")
        navigate('/login')
      })
      .catch((error) => {
        toast.error();
      })
  };

  return (
    <Container component="main">


      <Breadcrumbs aria-label="breadcrumb">
      <NavLink style={{ color: 'black' ,}} to="/home" >home</NavLink>

        <Typography color="textPrimary">Create an account</Typography>
      </Breadcrumbs>
      <FormContainer style={{ margin: '2rem' }}>
      <Typography component="h1" variant="h4" align="center" marginY='4rem'>
          <u>Create newpojhg Account</u>
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <SectionTitle>Personal Information</SectionTitle>
              <FieldWrapper>
                <Field
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  // value={values.firstName}
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  // value={values.lastName}

                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />

              </FieldWrapper>

              <SectionTitle>Login Information</SectionTitle>

              <FieldWrapper>
                <Field
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  // value={values.email}

                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <Field
                  component={CustomSelect}
                  variant="outlined"
                  fullWidth
                  id="roleId"
                  name="roleId"
                  label="Role"
                  error={errors.role && touched.role}
                  helperText={errors.role && touched.role && errors.role}
                >
                  <MenuItem value="1">Buyer</MenuItem>
                  <MenuItem value="2">Seller</MenuItem>
                </Field>
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  // value={values.password}

                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  // value={values.confirmPassword}

                  error={touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </FieldWrapper>

              <RegisterButton type="submit" variant="contained" >
                Register
              </RegisterButton>
              <SectionTitle></SectionTitle>
              <NavLink to="/login" style={{color:"black"}}>Already an user? Login here</NavLink>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Register;