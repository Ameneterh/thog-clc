import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import CreatePost from "./CreatePost";

export default function CreateContent() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen mt-5 mb-10">
      {/* <h1 className="text-center text-3xl my-7 font-semibold">
        Create Content
      </h1> */}
      <div className="overflow-x-auto">
        <Tabs aria-label="Full width tabs" variant="fullWidth">
          <Tabs.Item active title="Add Post" icon={HiUserCircle}>
            <CreatePost />
          </Tabs.Item>
          <Tabs.Item active title="Add Video" icon={HiUserCircle}>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}
