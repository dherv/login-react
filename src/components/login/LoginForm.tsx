import React from "react";
import { Form, FormikProps, Formik } from "formik";
import * as Yup from "yup";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const LoginForm = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        email: "",
        firstName: "red",
        lastName: ""
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required")
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<Values>) => (
        <Form>
          <LoginInput name="firstName" type="text" label="First Name" />
          <LoginInput name="lastName" type="text" label="Last Name" />
          <LoginInput name="email" type="email" label="Email" />
          <LoginButton />
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
