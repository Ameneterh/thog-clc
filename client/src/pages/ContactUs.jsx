import React from "react";
import contactHero from "/contact-hero.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Button, TextInput, Textarea } from "flowbite-react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

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
            <span className="font-normal capitalize">
              opp holy child secondary school, ado-ikere road, ajilosun,
              ado-ekiti, ekiti state, nigeria.
            </span>
          </p>
          <p className="font-extrabold flex gap-2">
            Contact Details:
            <span className="font-normal">
              <Link
                to="tel:2348030637978"
                className="hover:text-blue-600 hover:underline underline-offset-2"
              >
                +2348030637978
              </Link>
              <br />
              <Link
                to="mailto:clcthehouseofglory1"
                className="hover:text-blue-600 hover:underline underline-offset-2"
              >
                clcthehouseofglory1@email.com
              </Link>
            </span>
          </p>
          <p className="flex gap-2 items-center">
            Find Us Here:
            <span className="flex gap-3 items-center">
              <Link
                to="https://www.youtube.com/@clcadoekiti_thehouseofglory"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="text-xl hover:scale-125 transition-all" />
              </Link>
              <Link to="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookSquare className="text-lg hover:scale-125 transition-all" />
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitterSquare className="text-lg hover:scale-125 transition-all" />
              </Link>
              <Link to="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagramSquare className="text-lg hover:scale-125 transition-all" />
              </Link>
            </span>
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <p className="text-2xl font-extrabold uppercase mb-4">contact form</p>
          <form
            onSubmit={(ev) => ev.target.reset()}
            target="_blank"
            className="flex flex-col gap-4"
            action="https://formsubmit.co/clcthehouseofglory1@gmail.com"
            method="POST"
          >
            <TextInput
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Your Full Name"
            />
            <TextInput
              type="email"
              id="email"
              name="email"
              placeholder="youremail@company.com"
            />
            <Textarea
              placeholder="Write your message"
              className="min-h-24"
              name="message"
              required
            />

            <Button outline type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
