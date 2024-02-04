import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { MdAddCall } from "react-icons/md";

export default function FooterCom() {
  return (
    <Footer
      container
      className="border border-t-8 border-slate-300 dark:border-slate-600"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 flex flex-col gap-4">
            <Link
              to="/"
              className="whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blue-950 via-cyan-800 to-blue-900 rounded-lg text-white dark:text-yellow-300 border-b border-red-700">
                The House of Glory
              </span>
            </Link>
            <div className="hidden md:flex md:flex-col h-full gap-2 px-2 py-4 w-96">
              <p className="text-sm text-slate-800 dark:text-slate-200">
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-bold">Christ Life Church Ado-Ekiti</span>
              </p>
              <div className="text-sm text-slate-800 dark:text-slate-200">
                <p>
                  Opposite Holy Child Secondary School, <br />
                  Ajilosun, Ado-Ikere Road, Ado-Ekiti
                </p>
              </div>
              <div className="text-sm text-slate-800 dark:text-slate-200">
                <p>Email: contact.thehouseofglory@sotsm.org</p>
                <p>Phone: +234803 063 7978</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about#motivation">
                  The Motivation
                </Footer.Link>
                <Footer.Link href="/about#mission">Mission</Footer.Link>
                <Footer.Link href="/about#vision">Vision</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow The House of Glory" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">WhatsApp</Footer.Link>
                <Footer.Link href="#">YouTube</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Amene Ter'Hemen"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/ameneng"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/ameneterh"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://www.twitter.com/ameneterh"
              icon={BsTwitter}
            />
            <Footer.Icon href="https://github.com/Ameneterh" icon={BsGithub} />
            <Footer.Icon href="https://wa.me/2348154230654" icon={BsWhatsapp} />
            <Footer.Icon href="tel:+2348154230654" icon={MdAddCall} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
