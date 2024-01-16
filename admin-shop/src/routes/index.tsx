import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainRoutes from "./MainRoute";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../modules/Product";
import MenuPage from "../modules/Menu";
import BannerPage from "../modules/Banner";
import SettingPage from "../modules/Setting";

type Props = {};

const RenderRouter: React.FC = (props: Props) => {
  const isLoading = useSelector((state: any) => state.loading);
  return (
    <>
      {isLoading.loading && <Loading />}
      <Routes>
        <Route path="/" element={<MainRoutes />}>
          <Route index element={<Navigate replace to="/menu" />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
        <Route path="/login" element={<AuthLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default RenderRouter;
