// import React from 'react'

// type Props = {}

// const MainLayouts = (props: Props) => {
//   return (
//     <div>MainLayouts</div>
//   )
// }

// export default MainLayouts

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { MainLayoutRouter } from '../routes/MainLayoutRouter';
import { Form, Link, Outlet } from 'react-router-dom';
import { RouterInside } from '../routes';


const { Header, Sider, Content } = Layout;

const MainLayouts : React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
         >
          {MainLayoutRouter.map((item) =>(
          <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.Element}</Link>
          </Menu.Item>)
          )}

         </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayouts;