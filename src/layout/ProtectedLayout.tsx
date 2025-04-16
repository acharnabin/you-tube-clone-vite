import React from "react";
import { Navigate } from "react-router";

interface IProtectedLayoutProps {
    children:React.ReactNode
}

const ProtectedLayout = ({children}:IProtectedLayoutProps) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedLayout;
