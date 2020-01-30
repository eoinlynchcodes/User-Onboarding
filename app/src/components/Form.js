import React, { useState } from "react";
import './Form.css';
import { Formik, Form, Field } from 'formik';


const initialValuesForForm = Yup.object().shape({
    name: Yup.string().required('Enter your name.'),
    email: Yup.string.email('This is not a valid email address').required('Email Address is required.'),
    password: Yup.string().required('Please enter a password')
})

function Form(props) {



    return(

        <div>
            <Formik
            onSubmit={submitHandler}
            initialValues={initialValues}
            >


            </Formik>
        </div>
    );
}

export default Form;
