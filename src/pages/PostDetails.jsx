import { useParams, Link } from "react-router";

const deleteLater = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Full content of the post with ID 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr...",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Another post title",
    content:
      "Full content of the post with ID 2. This is an example of a detailed post view...",
  },
];

export const PostDetails = () => {
  const { id } = useParams();
  const post = deleteLater.find((p) => p.id === id);

  if (!post) {
    return <div className="text-center mt-10 text-red-500">Post not found</div>;
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
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400">
          Delete
        </button>
        <Link
          to="/"
          className="ml-auto text-gray-600 underline hover:text-black"
        >
          ← Back to homepage
        </Link>
      </div>
    </div>
  );
};



