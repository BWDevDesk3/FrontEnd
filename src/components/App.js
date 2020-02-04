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
const App = props => 
{

  const historyPush = location => {
    props.history.push(location);
  }

  // Need to gather user information here to address page refreshing and losing the currrent state
  useEffect(() => {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    if(id.length > 0 || token.length > 1)
    {
      // This should only fire when a user is definitely signed into the application
      console.log(token, 'token found')
      console.log(id);
      props.fetchUser(id, false)
    }else{
      console.log('No sign of a user here')}
  }, [])

  return (
    <div style={{backgroundColor: '#030405'}}>
      <Route exact path="/" render={props => <Landing {...props} push={historyPush} login={true}/>}></Route>
      <Route exact path="/signup" render={props => <Landing {...props} login={false} push={historyPush}/>}></Route>
      <PrivateRoute exact path="/home" component={Home} data={{...props}} page={<Base/>}/>
      <PrivateRoute exact path="/explore" component={Home} data={{...props}} page={<Explore/>}/>
      <PrivateRoute exact path="/tickets" component={Home} data={{...props}} page='Tickets'/>
      <PrivateRoute exact path="/user" component={Home} data={{...props}} page='User'/>
    </div>
  );
};

const mapStateToProps = state => 
{
  return {
    token: state.token
  };
};

export default withRouter(connect(mapStateToProps, {homeLoaded, fetchUser})(App))