import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter} from 'react-router-dom';
// Actions
import {fetchUserTickets} from '../../actions/actions';
// Ant Design
import {Layout, List} from 'antd';
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
            <h4>My Tickets</h4>
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