import { Link } from "react-router";

// only for preview
const deleteLater = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
];

export const Homepage = () => {
  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto py-8 px-4 justify-center">
      {deleteLater.map((card) => (
        <div
          key={card.id}
          className="flex max-w-4xl gap-6 mx-auto flex-wrap sm:flex-nowrap"
        >
          <div className="w-full sm:w-44 sm:aspect-square">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 sm:h-full object-cover rounded-lg shadow-md border border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center flex-1">
            <h2 className="text-black font-bold text-xl">{card.title}</h2>
            <p className="text-gray-900 line-clamp-3">{card.content}</p>
            <Link
              to="/"
              className="self-start bg-[#a2ae9e] rounded-md font-light px-3 py-2 text-black/70 hover:bg-[#bdc5ba]"
            >
              read more details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
