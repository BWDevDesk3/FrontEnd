import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Link} from 'react-router-dom';
// Actions
import {fetchTickets, userSignOut} from '../actions/actions';
// Ant Design
import { Layout} from 'antd';
// Components
import SideMenu from './SideMenu';

const { Header, Content, Footer } = Layout;

const Home = props => {

    let page = props.page;

    const fetch = () => {
        props.fetchTickets();
    }

    const handleSignOut = () => {
        props.userSignOut();
        props.history.push('/');
    }

    useEffect(() => {
        fetch();
    }, [])

    return (
        <div style={{backgroundColor: '#333', minHeight: '100vh', textAlign: 'center'}}>
            <Layout style={{ minHeight: '100vh' }}>
                <SideMenu signOut={handleSignOut}/>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}> 
                        <h4>{'Welcome ' + page}</h4>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Dev Desk</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

const mapStateToProps = state => 
{
  return {
    user: state.user,
    tickets: state.tickets
  };
};

export default withRouter(connect(mapStateToProps, {fetchTickets, userSignOut})(Home))