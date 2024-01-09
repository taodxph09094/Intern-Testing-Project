import React from "react";
import { Route, Routes } from "react-router-dom";
import MainRoutes from "./MainRoute";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundPage from "../pages/NotFoundPage";


type Props = {};

const RenderRouter:React.FC = (props: Props) => {
    const isLoading = useSelector((state: any) => state.loading);
  return (
    <>
    {isLoading.loading && <Loading />}
    <Routes>
       <Route path="/" element={<MainRoutes />} />
      <Route path="/login" element={<AuthLayout />} />
      <Route path="*" element={<NotFoundPage />} /> */


    </Routes>
    </>
  );
};


export default RenderRouter