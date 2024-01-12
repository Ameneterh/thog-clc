import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-8 md:items-center">
        {/* left side */}
        <div className="flex-1">
          <Link
            to="/"
            className="font-semibold dark:text-white whitespace-nowrap text-lg sm:text-4xl  "
          >
            <span className="px-2 py-1 bg-gradient-to-r from-blue-950 via-cyan-800 to-blue-900 rounded-lg text-white dark:text-yellow-300 border-b border-red-700">
              The House of Glory
            </span>
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam.
          </p>
        </div>

        {/* right side */}
        <div className="flex-1 border p-4 rounded-xl shadow-xl">
          <h1 className="mb-8 text-center text-2xl font-bold">Sign Up</h1>
          <form className="flex flex-col gap-6">
            <div className="">
              {/* <Label value="Your full name" /> */}
              <TextInput
                type="text"
                placeholder="Your full name"
                id="fullname"
              />
            </div>
            <div className="">
              {/* <Label value="Your username" /> */}
              <TextInput
                type="text"
                placeholder="Your username"
                id="username"
              />
            </div>
            <div className="">
              {/* <Label value="Your email" /> */}
              <TextInput type="email" placeholder="Your email" id="email" />
            </div>
            <div className="">
              {/* <Label value="Your password" /> */}
              <TextInput
                type="password"
                placeholder="Your password"
                id="password"
              />
            </div>

            <Button gradientDuoTone="purpleToPink">SIGN UP</Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link
              to="/sign-in"
              className="text-blue-500 hover:underline underline-offset-4"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
