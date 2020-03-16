import * as Yup from "yup";

export const validation = new Map([
  [
    "LoginSchema",
    Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required")
    })
  ],
  [
    "RegisterSchema",
    Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required")
    })
  ]
]);
