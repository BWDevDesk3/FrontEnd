import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter} from 'react-router-dom';
// Actions
import {fetchTickets} from '../../actions/actions';
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
    }, [])

    return (
        <Content >
            <List grid={{gutter: 10, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 5}}
            size="large"
            pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 12,
                style: {textAlign: 'center'}
              }}
                dataSource={props.tickets}
                renderItem={ticket => (
                    <List.Item style={{margin: '10px'}}>
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

export default withRouter(connect(mapStateToProps, {fetchTickets})(Base))