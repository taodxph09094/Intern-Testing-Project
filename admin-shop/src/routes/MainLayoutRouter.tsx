import React from 'react'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Menu } from 'antd';
import Banner from '../pages/Banner';
import Logo from '../pages/Logo';
import Product from '../pages/Product';
import About from '../pages/About';
import Info from '../pages/Info';

export const MainLayoutRouter = [
    
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'nav 1',
          path: '/menu',
          Element: <Menu />
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'nav 2',
          path:'/banner',
          Element: <Banner />

        },
        {
          key: '3',
          icon: <UploadOutlined />,
          label: 'nav 3',
          path:'logo',
          Element: <Logo />

        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
            path:'/product',
            Element: <Product />

          },        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
            path:'/about',
            Element: <About />

          },        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
            path:'/info',
            Element: <Info />

          },

]