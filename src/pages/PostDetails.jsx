import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

export const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const foundPost = posts.find((p) => p.id === id);
    setPost(foundPost || null);
  }, [id]);

  if (!post) {
    return (
      <div className="text-center mt-10 text-red-500">
        Post not found
        <div className="mt-4">
          <Link to="/" className="text-gray-600 underline hover:text-black">
            ← Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl text-black font-bold mb-4">{post.title}</h1>
      <p className="text-gray-800 mb-6">{post.content}</p>

      <div className="flex gap-4">
        <button className="bg-[#a2ae9e] text-black px-6 py-2 rounded w-32 hover:bg-[#bdc5ba] transition">
          Edit
        </button>
        <button className="bg-[#a2ae9e] text-black px-6 py-2 rounded w-32 hover:bg-[#bdc5ba] transition">
          Delete
        </button>
        <Link
          to="/"
          className="ml-auto text-gray-600 underline hover:text-black self-center"
        >
          ← Back to homepage
        </Link>
      </div>
    </div>
  );
};
