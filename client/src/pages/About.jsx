import React from "react";
import heroImage from "/AboutUsHero.png";
import joyFulfillment from "/joy&fulfilment.png";
import sharedValues from "/shared-values.png";
import charityEvents from "/charity-events.png";
import allWelcome from "/all-welcome.png";
import AboutComponents from "../components/AboutComponents";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

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
              <p className="text-xl font-extrabold">OUR MISSION</p>

              <ol className="flex flex-col gap-3">
                <li>
                  To lead people to Christ massively world-wide and establish
                  them in the Grace of God
                </li>
                <li>
                  To plant vibrant Churches strategically worldwide that will
                  plant other vibrant churches
                </li>
                <li>
                  To make the world a better place through practical
                  applications of the Gospel of Christ.
                </li>
                <li>To make Heaven our home at last</li>
              </ol>
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

        <div className="w-full max-w-4xl mx-auto p-3 flex flex-col mb-10 md:mb-20">
          <h2 className="uppercase text-2xl md:text-4xl font-extrabold text-center w-full mb-3 md:mb-16">
            ABOUT US
          </h2>
          <div className="w-full flex flex-wrap justify-between gap-6">
            <p>
              <b>Christ Life Church</b> came out of{" "}
              <Link
                to="https://sotsm.org"
                target="_blank"
                className="font-bold"
              >
                The Sword of the Spirit Ministries
              </Link>
              , an interdeonominational outreach ministry, the seed of which was
              planted in December 1975, which became an organised Ministry in
              1980, and published the first edition of its magazine,{" "}
              <em>The Sword of the Spirit</em>, in May of the same year. The
              Founder of the Ministry is <em>Francis Wale Oke,</em> as
              specifically led by God. The Ministry was formally commissioned on
              the 3rd of September, 1983, the same year that it's nation-wide
              soul winning crusades that have held in every major city of
              Nigeria, and other African nations, were launched.
            </p>
            <p>
              THe Ministry held her first annual Holy Ghost Convention in
              September 1983 at the main Campus of the University of Ilorin,
              drawing participants from virtually every state of the Federal
              Republic of Nigeria.
            </p>
            <p>
              In 1984, the Lord gave a word to His servant Francis Wale Oke, the
              Founder and President of The Sword of the Spirit Ministries, about
              planting a church in Ibadan, from 2 Chronicles 23:36
              <blockquote className="px-4 md:px-20 mt-2 italic">
                "... Thus saith Cyrus king of Persia, All the kingdom of the
                earth hath the Lord God of Heaven given me, and he hath charged
                me to build him an house in Jerusalem, which is Judah. who is
                there among you of all his people? The Lord his God be with him
                and let him go up."
              </blockquote>
            </p>
            <p>
              Early February 1989, the Holy Spirit indicated that the time for
              the word to be fulfilled had come. On Sunday, the 12th day of
              February 1989, Christ Life Church was born out of an existing
              fellowship set up to provide prayer backup for the outreaches of
              The Sword of the Spirit Ministries, at No. 46 Old Ife Road,
              Loyola, Ibadan, Nigeria.
            </p>
            <p>
              Within its first year, the church grew to over one thousand
              (1,000) membership and the need to have its own property became
              apparent.
            </p>
            <p>
              The growth of the church also necessitated the ordination of the
              first set of Pastors on December 31st 1989, conducted by Francis
              Wale Oke.
            </p>
            <p>
              By 1990, a landed property was purchased for the church,
              christened <em>“The Garden of Victory.”</em> The church moved into
              the Garden immediately after the annual Holy Ghost Convention of
              1991.
            </p>
            <p>
              By 1993, a city-wide church planting started through what was
              tagged <em>“Operation Christ Life”</em>, meant to spread the life
              of Christ, and network the entire metropolis of Ibadan with
              vibrant Christ Life Churches.
            </p>
            <p>
              As the church celebrated its 13th anniversary in February, 2002,
              the first set of Bishops, two in number, were consecrated.
            </p>
            <p>
              <b>House of Wonders</b> is the New Generation arm of Christ Life
              Church inaugurated by Bishop Francis Wale Oke in December 2016.
              There are currently only two branches: House of Wonders Bodija in
              Ibadan and House of Wonders Lekki in Lagos.
            </p>
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
