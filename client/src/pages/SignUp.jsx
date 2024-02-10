import { TextInput, FileInput, Button, Alert } from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
import { app } from "../firebase.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth.jsx";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);

  console.log(file);
  console.log(formData);

  // for image upload
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please, select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed!");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed!!");
      setImageUploadProgress(null);
      // console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullname ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      return setErrorMessage("Please fill out all mandatory fields");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(data.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen my-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-8 md:items-center">
        {/* left side */}
        <div className="flex flex-col items-center flex-1 gap-8">
          <img
            src="/thogheader.png"
            alt="thog header"
            className="w-28 self-center"
          />
          <Link
            to="/"
            className="font-semibold dark:text-white whitespace-nowrap text-lg sm:text-4xl  "
          >
            <span className="px-2 py-1 bg-gradient-to-r from-blue-950 via-cyan-800 to-blue-900 rounded-lg text-white dark:text-yellow-300 border-b border-red-700">
              The House of Glory
            </span>
          </Link>
          <p className="text-sm mt-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam.
          </p>
        </div>

        {/* right side */}
        <div className="flex-1 border p-4 rounded-xl shadow-xl">
          <h1 className="mb-8 text-center text-2xl font-bold">Sign Up</h1>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <p className="text-[12px] text-red-600 mb-[-10px]">
              All fields are mandatory
            </p>
            <div className="flex gap-4 items-center justify-between rounded-lg">
              <FileInput
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button
                type="button"
                gradientDuoTone="purpleToBlue"
                size="sm"
                outline
                onClick={handleUploadImage}
                disabled={imageUploadProgress}
              >
                {imageUploadProgress ? (
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={imageUploadProgress}
                      text={`${imageUploadProgress || 0}%`}
                    />
                  </div>
                ) : (
                  "Upload"
                )}
              </Button>
            </div>

            {formData.image && (
              <img
                src={formData.image}
                alt="upload"
                className="w-full, h-72 object-cover rounded-xl"
              />
            )}

            <div className="">
              {/* <Label value="Your full name" /> */}
              <TextInput
                type="text"
                placeholder="Your full name"
                id="fullname"
                onChange={handleChange}
              />
            </div>
            <div className="">
              {/* <Label value="Your username" /> */}
              <TextInput
                type="text"
                placeholder="Your username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="">
              {/* <Label value="Your email" /> */}
              <TextInput
                type="email"
                placeholder="Your email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              {/* <Label value="Your password" /> */}
              <TextInput
                type="password"
                placeholder="Your password"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              SIGN UP
            </Button>

            <OAuth />
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
          {errorMessage && (
            <Alert color="failure" className="mt-5">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
