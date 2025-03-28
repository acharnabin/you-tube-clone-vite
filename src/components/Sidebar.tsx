interface ISidebarProps {
  name: string | number;
  description: string;
  rating: number;
  image: string;
}

const Sidebar = ({ name, description, rating, image }: ISidebarProps) => {
  return (
    <div className="border-8 p-2 m-2 border-amber-900">
      <img src={image} height={100} width={100} />

      {name}
      <hr />
      {description}
 
      <b>{rating}</b>
    </div>
  );
};

export default Sidebar;
