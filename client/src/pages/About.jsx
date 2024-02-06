import React from "react";
import heroImage from "/AboutUsHero.png";
import joyFulfillment from "/joy&fulfilment.png";
import sharedValues from "/shared-values.png";
import charityEvents from "/charity-events.png";
import allWelcome from "/all-welcome.png";
import AboutComponents from "../components/AboutComponents";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <div className="w-full min-h-screen">
      <div
        className="w-full h-[400px] bg-cover bg-no-repeat flex items-center px-4 md:px-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <p className="uppercase text-2xl font-bold dark:text-gray-900">
          ABOUT US
          <span className="block text-5xl font-extrabold">
            <Typewriter
              options={{
                strings: "Serving the world around us",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
      </div>

      <div className="w-full">
        <div className="w-full max-w-7xl mx-auto p-3 md:p-10 flex flex-col mb-10 md:mb-20">
          <h2 className="uppercase text-2xl md:text-4xl font-extrabold text-center w-full mb-3 md:mb-16">
            welcome to our church
          </h2>
          <div className="w-full flex flex-wrap justify-between gap-6">
            <div className="w-full md:w-[30%] border rounded-lg p-3 shadow-md flex flex-col gap-4">
              <p className="text-xl">OUR MISSION</p>
              <h3 className="font-extrabold text-2xl">
                STRIVING FOR A BETTER TOMORROW
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <div className="w-full md:w-[30%] border rounded-lg p-3 shadow-md flex flex-col gap-4">
              <p className="text-xl">OUR VISION</p>
              <h3 className="font-extrabold text-2xl">
                STRIVING FOR A BETTER TOMORROW
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <div className="w-full md:w-[30%] border rounded-lg p-3 shadow-md flex flex-col gap-4">
              <p className="text-xl">WHAT WE DO</p>
              <h3 className="font-extrabold text-2xl">
                BRINGING PEACE AND JOY TO THE WORLD
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-200 dark:bg-slate-800">
          <div className="w-full max-w-5xl mx-auto p-3 md:p-10 flex flex-col mb-10 md:mb-20">
            <h2 className="uppercase text-2xl md:text-4xl font-extrabold text-center w-full mb-3 md:mb-16">
              THE BENEFITS OF <span className="block">JOINING OUR CHURCH</span>
            </h2>
            <div className="flex flex-col gap-10 md:gap-12">
              <div className="flex w-full flex-col md:flex-row gap-8 mt-4 items-center">
                <div className="flex-1 flex flex-col gap-8">
                  <h3 className="uppercase text-xl font-extrabold">
                    find fulfillment and joy
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
                <div
                  className="w-full md:w-[400px] h-72 bg-no-repeat bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url(${joyFulfillment})` }}
                ></div>
              </div>

              <div className="flex w-full flex-col-reverse md:flex-row gap-8 mt-4 items-center">
                <div
                  className="w-full md:w-[400px] h-72 bg-no-repeat bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url(${sharedValues})` }}
                ></div>
                <div className="flex-1 flex flex-col gap-8">
                  <h3 className="uppercase text-xl font-extrabold">
                    shared values
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col md:flex-row gap-8 mt-4 items-center">
                <div className="flex-1 flex flex-col gap-8">
                  <h3 className="uppercase text-xl font-extrabold">
                    charity events
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
                <div
                  className="w-full md:w-[400px] h-72 bg-no-repeat bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url(${charityEvents})` }}
                ></div>
              </div>

              <div className="flex w-full flex-col-reverse md:flex-row gap-8 mt-4 items-center">
                <div
                  className="w-full md:w-[400px] h-72 bg-no-repeat bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url(${allWelcome})` }}
                ></div>
                <div className="flex-1 flex flex-col gap-8">
                  <h3 className="uppercase text-xl font-extrabold">
                    all are welcome
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="uppercase text-2xl md:text-4xl font-extrabold text-center w-full mb-3 md:mb-16">
            meet our inspirational team
          </h2>
          <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-between mb-20 gap-6 p-3">
            <AboutComponents
              avatar="/avatar.png"
              memberName="Dr Sunday A. Omoya"
              memberPosition="Resident Pastor"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Mrs Comfort Omoya"
              memberPosition="Deaconness"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Mr Jolayemi Emmanuel"
              memberPosition="Deacon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
