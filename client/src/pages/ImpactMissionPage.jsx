import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import CommentSection from "../components/CommentSection";
import PostCard, { PostCardMobile } from "../components/PostCard";
import { BiSolidCategory } from "react-icons/bi";

export default function ImpactMissionPage() {
  // const [loading, setLoading] = useState(true);

  // if (loading)
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <Spinner size="xl" />
  //     </div>
  //   );

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        Impact Missions Announcements
      </h1>
      <div className="flex gap-2 items-center justify-between border-t border-slate-700 pt-2 text-sm flex-wrap"></div>
    </main>
  );
}
