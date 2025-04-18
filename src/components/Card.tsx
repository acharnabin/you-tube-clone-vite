import { Link } from "react-router";

interface ICardProps {
  name: string | number;
  description: string;
  rating: number;
  image: string;
  id: number;
}

const Card = ({ id, name, description, rating, image }:ICardProps) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 shadow-md rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={String(name)}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-yellow-500 text-sm font-semibold px-2 py-1 rounded-full shadow">
          ⭐ {rating}
        </div>
        
      </div>

      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3 flex-grow">
          {description}
        </p>

        <Link
          to={`/products/${id}`}
          className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
