import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Route} from 'react-router-dom';
import {PrivateRoute} from '../utils/PrivateRoute';
// Actions
import {testing} from '../actions/actions';
// Components
import Landing from './Landing';
const App = props => 
{

  useEffect(() => 
  {
    props.testing();
    console.log('useEffect Fired!');
  }, [])

  return (
    <div style={{backgroundColor: '#030405'}}>
      <Route exact path="/" render={props => <Landing {...props}/>}></Route>
      <Route exact path="/login" render={props => <Landing {...props} login={true}/>}></Route>
      <Route exact path="/signup" render={props => <Landing {...props} login={false}/>}></Route>
    </div>
  );
};

const mapStateToProps = state => 
{
  return {
    testing: state.testing
  };
};

export default withRouter(connect(mapStateToProps, {testing})(App))