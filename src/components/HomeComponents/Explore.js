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

const Explore = props => {

    const fetch = () => {
        props.fetchUserTickets(7);
    }

    useEffect(() => {
        fetch();
    }, [])

    return (
        <Content style={{ margin: '0 10px' }}>
            <h1>Explore!</h1>
            <List grid={{gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 5}}
                dataSource={props.tickets}
                renderItem={ticket => (
                    <List.Item>
                        <TicketCard ticket={ticket}/>
                    </List.Item>
            )}>
        </List>
        </Content>
    )
}

const mapStateToProps = state => 
{
  return {
    tickets: state.tickets
  };
};

export default withRouter(connect(mapStateToProps, {fetchUserTickets})(Explore))