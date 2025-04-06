"use client";

import React from "react";
import FKTextField from "../../../../common/form/FKTextField";
import { Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import FKButton from "../../../../common/form/FKButton";
import HFlex from "../../../../common/ui/HFlex";
import { useRouter } from "next/navigation";
import { useSignupMutation } from "../../../../redux/auth/authActions";
import { SignUpFormTypes } from "../../../../utils/types/authTypes";

const SignUpSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  age: yup.string().required("Age is required"),
  username: yup.string().required("Username is required"),
  address1: yup.string().required("Address1 is required"),
  address2: yup.string(),
  city: yup.string().required("City is required"),
  zip: yup.string().required("Zip code is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters are required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .test(
      "password-check",
      "Password did not match",
      (password, context) => password === context.parent.password
    ),
});

const initialValues = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  username: "",
  address1: "",
  address2: "",
  city: "",
  zip: "",
  state: "",
  country: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  //hooks
  const router = useRouter();
  const [signup, { isLoading }] = useSignupMutation();
  const methods = useFormik({
    initialValues,
    onSubmit: async (values: SignUpFormTypes) => {
      const data = JSON.parse(JSON.stringify(values));
      delete data.confirmPassword;
      console.log(data);
      const res = await signup(data);
    },
    validationSchema: SignUpSchema,
  });

  //render
  return (
    <div className="flex flex-col gap-y-4 bg-white px-4 mx-4 py-8 shadow-md rounded-md w-lg min-w-xs">
      <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
      <FormikProvider value={methods}>
        <Form>
          <div className="flex flex-col gap-y-6 w-4/5 place-self-center">
            <HFlex className="gap-x-4">
              <FKTextField
                label="First Name*"
                id="first-name"
                name="firstName"
              />
              <FKTextField label="Last Name*" id="last-name" name="lastName" />
            </HFlex>
            <HFlex className="gap-x-4">
              <FKTextField
                label="Username*"
                id="username"
                name="username"
                containerProps={{
                  className: "w-[100%]",
                }}
              />
              <FKTextField label="Age*" id="age" name="age" />
            </HFlex>
            <FKTextField label="Email*" id="email" name="email" />
            <HFlex className="gap-x-4">
              <FKTextField label="Address1*" id="address1" name="address1" />
              <FKTextField label="Address2" id="address2" name="address2" />
            </HFlex>
            <HFlex className="gap-x-4">
              <FKTextField label="City*" id="city" name="city" />
              <FKTextField label="Zip*" id="zip" name="zip" />
            </HFlex>
            <HFlex className="gap-x-4">
              <FKTextField label="State*" id="state" name="state" />
              <FKTextField label="Country*" id="country" name="country" />
            </HFlex>
            <FKTextField
              label="Password*"
              id="password"
              name="password"
              type="password"
            />
            <FKTextField
              label="Confirm Password*"
              id="confirm-password"
              name="confirmPassword"
              type="password"
            />
            <FKButton>Sign up</FKButton>
          </div>
        </Form>
      </FormikProvider>
      <p className="text-center text-gray-600">
        Already have an account?{" "}
        <a
          onClick={() => router.replace("/auth/login")}
          className="hover:text-blue-500 underline cursor-pointer"
        >
          <strong>Login</strong>
        </a>
      </p>
    </div>
  );
}
