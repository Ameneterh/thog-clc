import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import CommentSection from "../components/CommentSection";
import PostCard, { PostCardMobile } from "../components/PostCard";
import { BiSolidCategory } from "react-icons/bi";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState({});
  const [postAuthor, setPostAuthor] = useState({});
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts/?slug=${postSlug}`);
        let data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();

    const fetchPostAuthor = async (userId) => {
      const res = await fetch(`/api/user/${userId}`);
      const author = await res.json();
      if (res.ok) {
        setPostAuthor(author);
      }
    };

    fetchPostAuthor(post.userId);
  }, [postSlug, post.userId]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <div className="flex gap-2 items-center justify-between border-t border-slate-700 pt-2 text-sm flex-wrap">
        <div className="flex gap-2 items-center">
          <p>Posted by</p>
          <p className="font-semibold">@{postAuthor.username}</p>
          <Link
            to={`mailto:${postAuthor.email}`}
            className="text-teal-700 hover:underline underline-offset-4"
          >
            {postAuthor.email}
          </Link>
        </div>
        <div className="">{new Date(post.createdAt).toLocaleDateString()}</div>
      </div>

      <div
        className="flex items-end h-[200px] sm:h-[600px] w-full sm:my-5"
        style={{
          backgroundImage: `url(${post && post.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex gap-1 items-center px-3 sm:px-5 py-1 m-1 sm:m-4">
          <Button
            // outline
            // gradientDuoTone="purpleToPink"
            className="flex items-center gap-2 text-sm sm:text-lg text-black font-extrabold rounded-md uppercase"
          >
            <BiSolidCategory className="text-lg" />
            {post.category}
          </Button>
        </div>
      </div>

      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-3xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post && post.content }}
        className="p-3 max-w-3xl mx-auto w-full post-content text-justify"
      ></div>

      <CommentSection postId={post._id} />
    </main>
  );
}
