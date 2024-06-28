import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import CreatePost from "./CreatePost";
import CreateVideo from "./CreateVideo";

export default function CreateContent() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen mt-5 mb-10">
      {/* <h1 className="text-center text-3xl my-7 font-semibold">
        Create Content
      </h1> */}
      <div className="overflow-x-auto">
        <Tabs aria-label="Full width tabs" variant="fullWidth">
          <Tabs.Item active title="Add Post" icon={MdOutlinePostAdd}>
            <CreatePost />
          </Tabs.Item>
          <Tabs.Item active title="Add Video" icon={RiVideoAddLine}>
            <CreateVideo />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}
