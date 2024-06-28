import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { GiTeacher, GiPrayer, GiClockwork } from "react-icons/gi";
import { MdOutlineDateRange, MdOutlineDescription } from "react-icons/md";
import { FaPlaceOfWorship } from "react-icons/fa";
import herocover from "/homehero.png";
import ImpactMission from "../components/ImpactMission";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="h-[500px] sm:min-h-screen justify-center flex flex-col py-8 px-4 sm:px-20 gap-10 text-slate-300"
        style={{
          backgroundImage: `url(${herocover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="uppercase sm:text-2xl">welcome to our church</p>
        <h1 className="uppercase text-2xl sm:text-6xl font-extrabold">
          become a part of
          <span className="uppercase text-2xl sm:text-5xl font-extrabold text-yellow-300">
            <Typewriter
              options={{
                strings: "our vibrant community!",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <Link
          to="/about"
          className="text-md sm:text-xl text-blue-600 hover:underline underline-offset-8"
        >
          Learn More ...
        </Link>
      </div>
      <div className="flex flex-col w-full bg-gray-50 dark:bg-slate-800 p-4 sm:p-20">
        <h1 className="text-2xl sm:text-5xl text-center uppercase font-semibold mb-10">
          a church that's relevant
        </h1>

        <div className="flex flex-wrap gap-8 justify-center">
          {/* about us */}
          <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full  gap-4">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <h1 className="uppercase text-2xl font-bold">about us</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tempore accusantium recusandae est aspernatur eaque
                eligendi, cupiditate, voluptate fugiat deleniti repellat
                eveniet. Delectus quo quis quidem nostrum illum sit id.
              </p>
              <Button
                className="uppercase"
                outline
                gradientDuoTone="purpleToPink"
              >
                know more
              </Button>
            </div>
          </div>

          {/* get involved */}
          <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full  gap-4">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <h1 className="uppercase text-2xl font-bold">get involved</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tempore accusantium recusandae est aspernatur eaque
                eligendi, cupiditate, voluptate fugiat deleniti repellat
                eveniet. Delectus quo quis quidem nostrum illum sit id.
              </p>
              <Button
                className="uppercase"
                outline
                gradientDuoTone="purpleToPink"
              >
                find out how
              </Button>
            </div>
          </div>

          {/* giving back */}
          <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full  gap-4">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <h1 className="uppercase text-2xl font-bold">giving back</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tempore accusantium recusandae est aspernatur eaque
                eligendi, cupiditate, voluptate fugiat deleniti repellat
                eveniet. Delectus quo quis quidem nostrum illum sit id.
              </p>
              <Button
                className="uppercase"
                outline
                gradientDuoTone="purpleToPink"
              >
                find details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd frame sharing christ love */}
      <div className="flex flex-col w-full dark:bg-gray-600 bg-slate-200 p-4 sm:p-20">
        <h1 className="text-2xl sm:text-5xl text-center uppercase font-semibold mb-10">
          sharing christ's love and compassion
        </h1>
        <p className="text-center sm:text-xl">
          Join us and partner with us as we impact our communities through our
          monthly
        </p>
        <h1 className="sm:text-3xl text-center font-extrabold">
          IMPACT MISSION IN YOUR NEIGHBOURHOOD
        </h1>

        <Button
          outline
          gradientDuoTone="purpleToBlue"
          className="my-6 w-48 mx-auto"
        >
          <Link to="/impact-missions" className="w-full">
            READ MORE ...
          </Link>
        </Button>

        <div className="flex flex-wrap gap-8 justify-center mt-6 relative">
          <ImpactMission text="Miraculous Healing" />
          <ImpactMission text="Free Medical Outreach" />
          <ImpactMission text="Welfare Packages" />
        </div>
      </div>

      {/* 4th join our services */}
      <div className="flex flex-col w-full bg-gray-50 dark:bg-slate-800 p-4 sm:p-20">
        <h1 className="text-2xl sm:text-5xl text-center uppercase font-semibold mb-10">
          join our services
        </h1>
        <p className="text-center sm:text-xl">
          Be a part of our life transforming services
        </p>

        <div className="flex flex-wrap gap-8 justify-center mt-6 relative">
          {/* Sunday Service */}
          <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full gap-4">
              <FaPlaceOfWorship className="w-10 h-10" />
              <h1 className="uppercase text-2xl font-bold">
                Sunday Power Service
              </h1>
              <p className="flex items-center gap-2">
                <MdOutlineDateRange className="h-4 w-4" />
                Every Sunday
              </p>
              <p className="flex items-center gap-2">
                <GiClockwork className="h-4 w-4" />
                9.00 am - 11.00 am
              </p>
              <p className="flex items-start gap-2 w-full">
                <MdOutlineDescription className="h-4 w-4" />
                <span className="flex flex-1">
                  A time to worship the Lord, feed on His Word and enjoy
                  communion and fellowship with other believers.
                </span>
              </p>
            </div>
          </div>
          {/* army of the Lord */}
          <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full gap-4">
              <GiTeacher className="w-10 h-10" />
              <h1 className="uppercase text-2xl font-bold">army of the Lord</h1>
              <p className="flex items-center gap-2">
                <MdOutlineDateRange className="h-4 w-4" />
                Every Monday
              </p>
              <p className="flex items-center gap-2">
                <GiClockwork className="h-4 w-4" />
                5.30 pm - 7.00 pm
              </p>
              <p className="flex items-start gap-2 w-full">
                <MdOutlineDescription className="h-4 w-4" />
                <span className="flex flex-1">
                  A time of intense study of the Word of God anchored by our
                  father in the Lord, Bishop Francis Wale Oke
                </span>
              </p>
            </div>
          </div>

          {/* hour of prayer */}
          <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full gap-4">
              <GiPrayer className="w-10 h-10" />
              <h1 className="uppercase text-2xl font-bold">hour of prayer</h1>
              <p className="flex items-center gap-2">
                <MdOutlineDateRange className="h-4 w-4" />
                Every Wednesday
              </p>
              <p className="flex items-center gap-2">
                <GiClockwork className="h-4 w-4" />
                5.00 pm - 6.00 pm
              </p>
              <p className="flex items-start gap-2 w-full">
                <MdOutlineDescription className="h-4 w-4" />
                <span className="flex flex-1">
                  One hour of intense communion with the Father in prayer.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
