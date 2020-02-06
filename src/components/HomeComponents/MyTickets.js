import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter} from 'react-router-dom';
// Actions
import {fetchUserTickets} from '../../actions/actions';
// Ant Design
import {Layout, List, PageHeader} from 'antd';
// Components
import TicketCard from './TicketCard';

const {Content} = Layout;

const MyTickets = props => {

    const fetch = () => {
        props.fetchUserTickets(localStorage.getItem('id'));
    }

    useEffect(() => {
        fetch();
    }, [])

    return (
        <Content style={{ margin: '0 10px' }}>
            <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            title="My Tickets"
            subTitle="View all of your tickets here!"
          />
            <List grid={{gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 5}}
                dataSource={props.tickets}
                renderItem={(ticket, index) => (
                    <List.Item>
                        <TicketCard ticket={ticket} key={index}/>
                    </List.Item>
            )}>
            </List>
        </Content>
    )
};

const mapStateToProps = state => 
{
  return {
    tickets: state.tickets
  };
};

export default withRouter(connect(mapStateToProps, {fetchUserTickets})(MyTickets))