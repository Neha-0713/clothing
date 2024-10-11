import React from "react";
import * as Yup from "yup";
import { useFormState } from "react-hook-form";
import {useFormStatus} from "react-dom"

//import {handleSignUp} from "../../src/utils/"
import "./style.css";

const signUpForm = () => {
  const signUpSchema = Yup.object().shape({
    name: Yup.string().min(4, "Too short name").required("required"),
    email: Yup.string().email("Invalid email").required("required"),
    password: Yup.string()
      .min(6, "too short")
      .matches(/[A-Z]/, "Password must have at least one uppercase letter")
      .matches(/[a-z]/, "must contain  at least one lowercase letter")
      .matches(/[@#$%&*]/, "must contain  at least one special character")
      .required("required field"),
  });
  const{pending}=useFormStatus();
  const[errorMessage, dispatch]= useFormState(handleSignUp,signUpSchema);

  return (
    <div className="max-w-[25%] h-[100vh] mx-auto py-[12vh]">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <a
                className="text-[var(--main)] decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                href="../examples/html/signin.html"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-[var(--btn)] text-white shadow-sm hover:bg-[var(--btn-hover)] focus:outline-none"
            >
              <svg
                className="w-4 h-auto"
                width={46}
                height={47}
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
                {/* SVG Path for Google Icon */}
              </svg>
              Sign up with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500">
              Or
            </div>

            {/* Form */}
            <form action={dispatch}>
              <div className="grid gap-y-4">
                {/*Name Input*/ }
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-[var(--main)] focus:ring-[var(--main)] bg-[var(--background)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                   
                      aria-describedby="name-error"
                    />
                  </div>
                </div>
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-[var(--main)] focus:ring-[var(--main)] bg-[var(--background)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                   
                      aria-describedby="email-error"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-[var(--main)] focus:ring-[var(--main)] bg-[var(--background)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                
                      aria-describedby="password-error"
                    />
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-[var(--main)] focus:ring-[var(--main)] bg-[var(--background)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                      required
                      aria-describedby="confirm-password-error"
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      required
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-[var(--main)] focus:ring-[var(--main)] dark:bg-neutral-800 dark:border-neutral-700 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-[var(--main)]"
                    >
                      I accept the{" "}
                      <a
                        className="text-[var(--main)] decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit" aria-disabled={pending}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[var(--btn)] text-white hover:bg-[var(--btn-hover)] focus:outline-none focus:bg-[var(--btn-hover)]"
                >
                  Sign up
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUpForm;
