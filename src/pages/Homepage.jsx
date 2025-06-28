import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

export const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/posts");
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Invalid response format:", data);
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 text-center text-gray-500">
        No posts available. Please create a new post.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 flex flex-col gap-8 items-start">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex w-full border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div className="w-44 h-44 flex-shrink-0">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 flex flex-col justify-between w-full">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                {post.title}
              </h2>
              <p className="text-gray-700 text-sm overflow-hidden text-ellipsis line-clamp-3 h-[4.5em]">
                {post.content}
              </p>
            </div>

            <Link
              to={`/posts/${post.id}`}
              className="mt-4 inline-block bg-[#a2ae9e] text-black/80 font-light px-4 py-2 rounded hover:bg-[#bdc5ba] w-fit"
            >
              Read more details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
