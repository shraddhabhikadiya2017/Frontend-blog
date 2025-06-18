import { useState } from "react";

export const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !image || !content) {
      alert("Please fill all fields.");
      return;
    }

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      id: Date.now().toString(),
      title,
      image,
      content,
    };

    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    setTitle("");
    setImage("");
    setContent("");

    alert("Post created successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Post</h2>

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
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
