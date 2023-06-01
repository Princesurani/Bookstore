import React from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import authService from '../../service/authsevice';
import { useNavigate } from 'react-router-dom';



const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),
    price: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),

    category: Yup.string()
        .min(2, "Too short.")
        .required("No category provided."),
    imagefile: Yup.string()
        .required("Required"),
    description: Yup.string()
        .min(10, "Too Short!")
        .required("Required"),
});

const initialValues = {
    name: '',
    price: '',
    category: '',
    imagefile: '',
    description:'',
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



const Addbutton = styled(Button)`
  align-self: flex-start;
  margin-top: 2rem;
  color:white;
  background-color: black;
`;

const Regdiv = styled("div")`
    margin-bottom: 2cm;

    `;

const Addbook = () => {
    const navigate = useNavigate();

    const handleSubmit = (data) => {

        console.log(data);
        
        authService.create(data)
            .then((res) => {
                toast.success("Book Added")
                navigate('/book')
            })
            .catch((error) => {
                toast.error();
            })
    };

    return (
        <Regdiv>
            <Container component="main">

                <FormContainer style={{ margin: '2rem' }}>
                    <Typography component="h1" variant="h4" align="center" marginY='4rem'>
                        <u>Add new book</u>
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <SectionTitle>Book Info</SectionTitle>
                                <FieldWrapper>
                                    <Field
                                        as={TextField}
                                        variant="outlined"
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="Name"
                                        // value={values.name}
                                        error={touched.name && !!errors.name}
                                        helperText={touched.name && errors.name}
                                    />
                                    <Field
                                        as={TextField}
                                        variant="outlined"
                                        fullWidth
                                        id="price"
                                        name="price"
                                        label="Price"
                                        // value={values.price}

                                        error={touched.price && !!errors.price}
                                        helperText={touched.price && errors.price}
                                    />

                                </FieldWrapper>

                                <FieldWrapper>
                                    <Field
                                        as={TextField}
                                        variant="outlined"
                                        fullWidth
                                        id="category"
                                        name="category"
                                        type="category"
                                        label="Category"
                                        // value={values.category}

                                        error={touched.category && !!errors.category}
                                        helperText={touched.category && errors.category}
                                    />
                                    <Field
                                        as={TextField}
                                        variant="outlined"
                                        fullWidth
                                        id="imagefile"
                                        name="imagefile"
                                        type="file"


                                        error={touched.imagefile && !!errors.imagefile}
                                        helperText={touched.imagefile && errors.imagefile}
                                    />
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field
                                        as={TextField}
                                        variant="outlined"
                                        fullWidth
                                        id="description"
                                        name="description"
                                        label="Description"

                                        error={touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                    />
                                </FieldWrapper>
                                <Addbutton type="submit" variant="contained" >
                                    AddBook
                                </Addbutton>
                            </Form>
                        )}
                    </Formik>
                </FormContainer>
            </Container>
        </Regdiv>
    );
};

export default Addbook;