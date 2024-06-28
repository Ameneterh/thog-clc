import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Divider from "../components/Divider";
import { useParams } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { FaRegComments } from "react-icons/fa";
import { useSelector } from "react-redux";
import CommentSection from "../components/CommentSection";

export default function ViewVideo() {
  const [video, setVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [videoAuthor, setVideoAuthor] = useState({});
  const [videoComments, setVideoComments] = useState([]);
  const { videoId } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/video/${videoId}`);
        let data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setVideo(data);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchVideo();

    const fetchVideoAuthor = async (userId) => {
      const res = await fetch(`/api/user/${video.userId}`);
      const author = await res.json();
      if (res.ok) {
        setVideoAuthor(author);
      }
    };

    fetchVideoAuthor(video.userId);
  }, [videoId, video.userId]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getpostcomments/${videoId}`);

        if (res.ok) {
          const data = await res.json();
          setVideoComments(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, [videoId]);

  const handleLike = async (videoId) => {
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(`/api/video/likevideo/${videoId}`, {
        method: "PUT",
      });
      if (res.ok) {
        const data = await res.json();
        setVideos(
          videos.map((video) =>
            video._id === videoId
              ? {
                  ...video,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : video
          )
        );
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="p-3 flex flex-col max-w-3xl mx-auto min-h-screen">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size="xl" />
        </div>
      )}

      <div className="w-full flex flex-col gap-3 justify-center items-center mb-5">
        <div className="flex h-[250px] sm:h-[400px] w-full bg-black flex-wrap gap-5 mt-5 justify-center rounded-xl">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            id="myIframe"
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-xl font-extrabold">{video.videotitle}</h1>
          <div className="flex items-center justify-between">
            <span className="flex gap-2 text-sm text-gray-600">
              <span>
                {video && new Date(video.createdAt).toLocaleDateString()}
              </span>
              <p>|</p>
              <span>
                {video && new Date(video.createdAt).toLocaleTimeString("en-US")}
              </span>
            </span>

            <div className="flex gap-5 items-center">
              <span className="flex gap-1 items-center text-gray-400">
                <FaRegComments />
                <p className="text-gray-400">
                  {videoComments.length > 0 &&
                    videoComments.length +
                      " " +
                      (videoComments.length === 1 ? "comment" : "comments")}
                </p>
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => handleLike(video._id)}
                  className={`text-gray-400 hover:text-blue-500 ${
                    currentUser.likes &&
                    videos.likes.includes(currentUser._id) &&
                    "!text-blue-500"
                  }`}
                >
                  <SlLike />
                </button>
                <p className="text-gray-400">
                  {video.numberOfLikes > 0 &&
                    video.numberOfLikes +
                      " " +
                      (video.numberOfLikes === 1 ? "like" : "likes")}
                </p>
              </div>
            </div>
          </div>
          {/* <Divider /> */}
          <div className="flex flex-col gap-5">
            <div className="flex-1">
              <CommentSection postId={video._id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
