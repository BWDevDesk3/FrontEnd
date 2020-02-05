import React, { useEffect } from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Route} from 'react-router-dom';
import {PrivateRoute} from '../utils/PrivateRoute';
// Actions
import {homeLoaded, fetchUser} from '../actions/actions';
// Components
import Landing from './Landing';
import Home from './Home';
// Home Components
import Base from './HomeComponents/Base';
import Explore from './HomeComponents/Explore';
import User from './HomeComponents/User';
import MyTickets from "./HomeComponents/MyTickets";

const App = props => 
{

  const historyPush = location => {
    props.history.push(location);
  }

  // Need to gather user information here to address page refreshing and losing the currrent state
  useEffect(() => {
    localStorage.setItem('helper', true);
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    let helper = localStorage.getItem('helper');
    if(id && token && helper != null) {
      props.fetchUser(id, helper)
    }
  }, [])

  return (
    <div style={{backgroundColor: '#030405'}}>
      <Route exact path="/" render={props => <Landing {...props} push={historyPush} login={true}/>}></Route>
      <Route exact path="/signup" render={props => <Landing {...props} login={false} push={historyPush}/>}></Route>
      <PrivateRoute exact path="/home" component={Home} data={{...props}} page={<Base/>}/>
      <PrivateRoute exact path="/explore" component={Home} data={{...props}} page={<Explore/>}/>
      <PrivateRoute exact path="/tickets" component={Home} data={{...props}} page={<MyTickets/>}/>
      <PrivateRoute exact path="/user" component={Home} data={{...props}} page={<User/>}/>
    </div>
  );
};

const mapStateToProps = state => 
{
  return {
    token: state.token,
    loggedIn: state.logedIn
  };
};

export default withRouter(connect(mapStateToProps, {homeLoaded, fetchUser})(App))