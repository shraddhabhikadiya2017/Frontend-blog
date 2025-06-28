import { useState } from "react";
import { createPost } from "../server/posts.js";

export const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !cover || !content || !author) {
      setMessage("Please fill in all fields.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 2000);
      return;
    }

    const newPost = {
      title,
      cover: cover,
      content,
      author, 
    };


    try {
      await createPost(newPost);
      setTitle("");
      setCover("");
      setContent("");
      setAuthor("");
      setMessage("Post created successfully!");
      setMessageType("success");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error(err);
      setMessage("Failed to create post. Please try again.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const alertClasses =
    messageType === "success"
      ? "text-green-700 bg-green-100 border-green-300"
      : "text-red-700 bg-red-100 border-red-300";

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Post</h2>

      {message && (
        <div className={`mb-4 px-4 py-2 rounded border ${alertClasses}`}>
          {message}
        </div>
      )}

      
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-md p-8 space-y-6 shadow-md"
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a2ae9e] text-gray-900"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a2ae9e] text-gray-900"
            placeholder="Paste image URL"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Content:
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#a2ae9e] text-gray-900"
            placeholder="Write your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Author:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a2ae9e] text-gray-900"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#a2ae9e] text-black font-semibold py-2 px-4 rounded hover:bg-[#bdc5ba] transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};
