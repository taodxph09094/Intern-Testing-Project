import React from "react";
import { Navigate } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Header from "../components/Header";

const MainRoutes: React.FC = () => {
  const storedUser = localStorage.getItem("user_token");
  if (storedUser && storedUser) {
    return (
      <>
        <Header />
        <MainLayouts />
      </>
    );
  } else {
    return <Navigate to="/login" />;
      
  }
};

export default MainRoutes;
