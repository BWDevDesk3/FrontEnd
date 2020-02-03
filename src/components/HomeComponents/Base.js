import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter} from 'react-router-dom';
// Actions
import {fetchTickets, userSignOut} from '../../actions/actions';
// Ant Design
import {Layout, List} from 'antd';
// Components
import TicketCard from './TicketCard';

const {Content} = Layout;

const Base = props => {

    const fetch = () => {
        props.fetchTickets();
    }

    useEffect(() => {
        fetch();
        console.log(props)
    }, [])

    return (
        
        <Content style={{ margin: '0 10px' }}>
            <List grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5,
    }}
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

export default withRouter(connect(mapStateToProps, {fetchTickets, userSignOut})(Base))