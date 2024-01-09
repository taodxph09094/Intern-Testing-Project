import React from "react";
import { Route, Routes } from "react-router-dom";
import MainRoutes from "./MainRoute";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundPage from "../pages/NotFoundPage";
import { Menu } from "antd";
import Banner from "../pages/Banner";
import Logo from "../pages/Logo";
import Product from "../pages/Product";
import About from "../pages/About";
import Info from "../pages/Info";

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
      <Route path="/menu" element={<Menu />} />
      <Route path="/banner" element={<Banner />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<Info />} />

    </Routes>
    </>
  );
};


export default RenderRouter