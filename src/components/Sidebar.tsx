import { Icon } from "@iconify/react";

interface ISidebarProps {
  title: string;
  items: { label: string; link: string; icon: string }[];
}

const sidebarData: ISidebarProps = {
  title: "Main Menu",
  items: [
    { label: "Home", link: "/", icon: "mdi:home" },
    { label: "About", link: "/about", icon: "mdi:information" },
    { label: "Services", link: "/services", icon: "mdi:briefcase" },
    { label: "Contact", link: "/contact", icon: "mdi:email" },
  ],
};

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4 border border-gray-200 dark:border-gray-700">
      <ul>
        {sidebarData.items.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              href={item.link}
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Icon icon={item.icon} className="text-xl" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
export { sidebarData };
