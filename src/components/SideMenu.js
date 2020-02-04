import React, {useState} from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SiderMenu = props => {

    const [collapsed, setCollapsed] = useState(true);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="desktop" onClick={(e) => console.log("Home")}/>
              <Link to='/home'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={(e) => console.log("Explore")}>
              <Icon type="compass" />
              <Link to='/explore'>Explore</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={(e) => console.log("My Tickets")}>
              <Icon type="snippets" />
              <Link to='/tickets'>My Tickets</Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={(e) => console.log("User")}>
                  <Icon type="user" />
                  <Link to='/user'>User</Link>
            </Menu.Item>
            <Menu.Item key="5" onClick={(e) => props.signOut(e)}>
                  <Icon type="logout" />
                  <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }

export default SiderMenu