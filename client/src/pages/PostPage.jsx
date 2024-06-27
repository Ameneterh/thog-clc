import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import CommentSection from "../components/CommentSection";
import PostCard, { PostCardMobile } from "../components/PostCard";

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
      <div className="flex gap-2 items-center justify-between border-t border-slate-700 pt-2 text-sm">
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

      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-2 p-3 max-h-[600px] w-full object-cover object-top"
      />

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
