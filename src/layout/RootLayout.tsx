import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProtectedLayout from "./ProtectedLayout";

const RootLayout = () => {
  return (
    <ProtectedLayout>
        <div className="flex flex-col  min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />

      <div className="flex  gap-2 flex-row">
        <Sidebar />

        <Outlet />
      </div>
    </div>
    </ProtectedLayout>
  
  );
};

export default RootLayout;
