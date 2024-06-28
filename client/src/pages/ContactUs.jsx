import React from "react";
import contactHero from "/contact-hero.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { Button, TextInput } from "flowbite-react";
import Typewriter from "typewriter-effect";

export default function ContactUs() {
  return (
    <div className="min-h-screen w-screen mb-10">
      <div
        className="w-screen h-[350px] bg-center bg-no-repeat bg-cover flex flex-col justify-center px-4 md:px-[80px] text-white dark:text-gray-300"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <p className="font-bold text-xl">CONTACT US</p>
        <div className="font-extrabold text-xl md:text-4xl uppercase mt-5">
          <Typewriter
            options={{
              strings: "Get in touch with our CHURCH",
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto mt-4 md:mt-12 p-3 flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-6 flex-1">
          <p className="font-extrabold flex gap-2">
            Address:
            <span className="font-normal">
              opp holy child secondary school, ado-ikere road, ajilosun,
              ado-ekiti, ekiti state, nigeria.
            </span>
          </p>
          <p className="font-extrabold flex gap-2">
            Contact Details:
            <span className="font-normal">
              +2348030637978
              <br />
              churchemailaddress@email.com
            </span>
          </p>
          <p className="flex gap-2 items-center">
            Find Us Here:
            <span className="flex gap-3 items-center">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutubeSquare className="text-lg hover:scale-125 transition-all" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookSquare className="text-lg hover:scale-125 transition-all" />
              </a>
            </span>
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <p className="text-2xl font-extrabold uppercase mb-4">contact form</p>
          <form className="flex flex-col gap-4">
            <TextInput type="text" id="fullname" placeholder="Your Full Name" />
            <TextInput
              type="email"
              id="email"
              placeholder="youremail@company.com"
            />
            <ReactQuill
              theme="snow"
              placeholder="Write your message"
              className="min-h-24"
              required
              // onChange={(value) => {
              //   setFormData({ ...formData, content: value });
              // }}
            />

            <Button outline type="button">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
