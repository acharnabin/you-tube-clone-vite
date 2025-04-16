import { Link } from "react-router";

interface ICardProps {
  name: string | number;
  description: string;
  rating: number;
  image: string;
  id:number
}

const Card = ({ id,name, description, rating, image }: ICardProps) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
      <img
        src={image}
        alt={String(name)}
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm line-clamp-3 flex-grow">
          {description}
        </p>
        <div className="mt-4">
          <span className="text-yellow-500 text-lg font-bold">⭐ {rating}</span>
        </div>
       
        <Link to={`/products/${id}`}>
          Go to details page
        </Link>
      </div>
    </div>
  );
};




export default Card;
