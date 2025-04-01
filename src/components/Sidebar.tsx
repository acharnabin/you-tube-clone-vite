interface ISidebarProps {
  title: string;
  items: { label: string; link: string }[];
}
const sidebarData: ISidebarProps = {
  title: "Main Menu",
  items: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" }
  ]
};

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg  p-4 border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{sidebarData.title}</h2>
      <ul>
        {sidebarData.items.map((item, index) => (
          <li key={index} className="mb-2">
            <a 
              href={item.link} 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};



export default Sidebar;
export { sidebarData };
