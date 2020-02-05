import React, {useState} from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import AddTicketModal from './AddTicketModal';

const { Sider } = Layout;

const SiderMenu = props => {

  const [collapsed, setCollapsed] = useState(true);
  const [visible, setVisible] = useState(false);

  let index = 1;
  const setIndex = (index, e) => {
    index = index;
  }

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[`${index}`]} mode="inline">
            <Menu.Item key="1" onClick={(e) => setIndex(1, e)}>
              <Icon type="desktop" onClick={(e) => setIndex(1, e)}/>
              <Link to='/home'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => index = 2}>
              <Icon type="compass" onClick={() => index = 2}/>
              <Link to='/explore'>Explore</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => index = 3}>
              <Icon type="snippets" onClick={() => index = 3}/>
              <Link to='/tickets'>My Tickets</Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => index = 4}>
                  <Icon type="user" onClick={() => index = 4}/>
                  <Link to='/user'>User</Link>
            </Menu.Item>
            <Menu.Item key="5" onClick={() => setVisible(true)}>
                  <Icon type="plus" />
                  <span>Add Ticket</span>
            </Menu.Item>
            {/* Ticket Adding modal */}
            <AddTicketModal visible={visible} setVisible={setVisible}/>
            <Menu.Item key="6" onClick={(e) => props.signOut(e)}>
                  <Icon type="logout" />
                  <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }

export default SiderMenu