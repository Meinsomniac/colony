"use client";

import React from "react";
import FKTextField from "../../../../common/form/FKTextField";
import { Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import FKButton from "../../../../common/form/FKButton";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "../../../../redux/auth/authActions";

const LoginSchema = yup.object().shape({
  username: yup.string().required("Username/email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters are required"),
});

export default function Login() {
  const router = useRouter();
  const [login] = useLoginMutation();
  const methods = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await login(values);
      console.log({ res });
    },
    validationSchema: LoginSchema,
  });
  return (
    <div className="flex flex-col gap-y-4 bg-white px-4 mx-4 py-8 shadow-md rounded-md w-lg min-w-xs">
      <h2 className="text-3xl font-semibold text-center">Login</h2>
      <FormikProvider value={methods}>
        <Form>
          <div className="flex flex-col gap-y-6 w-4/5 place-self-center">
            <FKTextField label="Username*" id="username" name="username" />
            <FKTextField
              label="Password*"
              id="password"
              name="password"
              type="password"
            />
            <FKButton>Login</FKButton>
          </div>
        </Form>
      </FormikProvider>
      <p className="text-center text-gray-600">
        Didn't have an account?{" "}
        <a
          onClick={() => router.replace("/auth/signup")}
          className="hover:text-blue-500 underline cursor-pointer"
        >
          <strong>SignUp</strong>
        </a>
      </p>
    </div>
  );
}
