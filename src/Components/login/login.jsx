import React from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import authService from '../../service/authsevice';
import {  NavLink, } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),

  password: Yup.string()
    .min(4, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("No Password provided."),
  
});

const initialValues = {
  
  email: '',
  roleId: '',
 
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

const Login = () => {
  const handleSubmit = (data) => {

    console.log(data);
    delete data.firstName;
    delete data.lastName;
    delete data.roleId;
    delete data.id;
    delete data.confirmPassword;
    authService.login(data)
      .then((res) => {
        // navigate("/login");
        console.log("Registered!!");
        toast.success("Successfully login");
      })
      .catch((error) => {
        toast.error();
      })
  };

  return (
    <Container component="main">

      <Breadcrumbs aria-label="breadcrumb">
      <NavLink style={{ color: 'black' }} to="/home" >home</NavLink>

        <Typography color="textPrimary">Login </Typography>
      </Breadcrumbs>

      <FormContainer style={{ margin: '2rem' }}>
        <Typography component="h1" variant="h4" align="center" marginY='4rem'>
          <u>Sign in to your Account</u>
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              
              <SectionTitle>Login info</SectionTitle>

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
                
              </FieldWrapper>

              <RegisterButton type="submit" variant="contained" >
                login
              </RegisterButton>
              <SectionTitle></SectionTitle>
              <NavLink to="/register" style={{color:"black"}}>New user? create Account here</NavLink>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Login;