import React from 'react'
// import {
//     UploadOutlined,
//     UserOutlined,
   
//   } from '@ant-design/icons';
import { Menu } from 'antd';
import Banner from '../pages/Banner';
import Logo from '../pages/Logo';
import Product from '../pages/Product';
import About from '../pages/About';
import Info from '../pages/Info';

export const MainLayoutRouter = [
    
        {
          key: '1',
        //   icon: <UserOutlined />,
          label: 'Menu',
          path: '/menu',
          element: <Menu />
        },
        {
          key: '2',
        //   icon: <></>,
          label: 'Banner',
          path:'/banner',
          element: <Banner />

        },
        {
          key: '3',
        //   icon: <UploadOutlined />,
          label: 'Logo',
          path:'logo',
          Element: <Logo />

        },
        {
            key: '4',
            // icon: <></>,
            label: 'Product',
            path:'/product',
            Element: <Product />

          },        {
            key: '5',
            // icon: <></>,
            label: 'About',
            path:'/about',
            Element: <About />

          },        {
            key: '6',
            // icon: <></>,
            label: 'Info',
            path:'/info',
            element: <Info />

          },

]