import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Link} from 'react-router-dom';
// Actions
import {fetchTickets} from '../actions/actions';

const Home = props => {

    const fetch = () => {
        props.fetchTickets();
    }

    useEffect(() => {
        fetch();
    }, [])

    return (
        <div style={{backgroundColor: '#333', minHeight: '100vh', textAlign: 'center'}}>
            <h1>This is a test</h1>
            {props.tickets.map((ticket, index) => {
                return <h1 key={index}>{ticket.id}</h1>
            })}
            <Link to={'/'} onClick={e => localStorage.setItem('token', '')}>Logout</Link>
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

export default withRouter(connect(mapStateToProps, {fetchTickets})(Home))