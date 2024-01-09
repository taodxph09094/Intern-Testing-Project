// import { }from "antd";?
import Banner from "../pages/Banner";
import Logo from "../pages/Logo";
import Product from "../pages/Product";
import About from "../pages/About";
import Info from "../pages/Info";
import { Route, Routes } from "react-router-dom";
import MenuAdmin from "../pages/MenuAdmin";



export const RouterInside : React.FC = () => {
   console.log('iqkwjnqlnql')
    return(
      <>
      <Routes>
      
            
        <Route path="/menu" element={<MenuAdmin />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      </>
    )
  
  }