interface ICardProps {
  name: string | number;
  description: string;
  rating: number;
  image: string;
}

const Card = ({ name, description, rating, image }: ICardProps) => {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
      <img src={image} alt={String(name)} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{description}</p>
        <div className="mt-3 flex items-center">
          <span className="text-yellow-500 text-lg font-bold">⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
