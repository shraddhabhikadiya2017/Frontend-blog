import { useParams, Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getPostById, deletePost, updatePost } from "../server/posts.js";

export const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
  if (message) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [message]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
        setTitle(data.title || "");
        setCover(data.cover || "");
        setContent(data.content || "");
        setAuthor(data.author || "");
      } catch (error) {
        setMessage("Failed to load post.");
        setMessageType("error");
      }
    };

    fetchPost();
  }, [id]);

  const handleUpdate = async (e) => {
  e.preventDefault();
  const updatedPost = { title, cover, content, author };

  try {
    await updatePost(id, updatedPost);
    setPost({ ...post, ...updatedPost });
    setMessage("Post updated successfully!");
    setMessageType("success");

    // Delay exiting edit mode to let user see message
    setTimeout(() => {
      setMessage("");
      setEditing(false);
    }, 2000);
  } catch (err) {
    console.error(err);
    if (err.message === 'Network Error') {
      setMessage("Backend server is unreachable. Please start the backend.");
    } else {
      setMessage("Failed to update post. Please try again.");
    }
    setMessageType("error");

    // Clear message after a delay
    setTimeout(() => setMessage(""), 2000);
  }
};

  const handleDelete = async () => {
    try {
      await deletePost(id);
      setMessage("Post deleted successfully!");
      setMessageType("success");

      // Wait 2 seconds before navigating
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error(err);
      setMessage("Failed to delete post.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const alertClasses =
    messageType === "success"
      ? "text-green-700 bg-green-100 border-green-300"
      : "text-red-700 bg-red-100 border-red-300";

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

  if (editing) {
    return (
      <div className="max-w-3xl mx-auto mt-10 p-4">
        {message && (
          <div className={`mb-4 px-4 py-2 rounded border ${alertClasses}`}>
            {message}
          </div>
      )}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Post</h2>

        <form
          onSubmit={handleUpdate}
          className="bg-white border rounded-md p-8 space-y-6 shadow-md"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a2ae9e] text-gray-900"
            placeholder="Enter post title"
              
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Image URL:
            </label>
            <input
              type="text"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a2ae9e] text-gray-900"
            placeholder="Paste image URL"
              
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Content:
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#a2ae9e] text-gray-900"
            placeholder="Write your content here..."
              
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Author:
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a2ae9e] text-gray-900"
            placeholder="Author name"
             
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-[#a2ae9e] text-black px-6 py-2 rounded hover:bg-[#bdc5ba] transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {message && (
        <div className={`mb-4 px-4 py-2 rounded border ${alertClasses}`}>
          {message}
        </div>
      )}
      
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl text-black font-bold mb-4">{post.title}</h1>
      <p className="text-gray-800 mb-6">{post.content}</p>
      <p className="text-sm text-gray-500 mb-6">Author: {post.author}</p>

      <div className="flex gap-4">
        <button 
          onClick={() => setEditing(true)}
          className="bg-[#a2ae9e] text-black px-6 py-2 rounded w-32 hover:bg-[#bdc5ba] transition">
          Edit
        </button>

        <button 
          onClick={handleDelete}
          className="bg-[#a2ae9e] text-black px-6 py-2 rounded w-32 hover:bg-[#bdc5ba] transition">
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
