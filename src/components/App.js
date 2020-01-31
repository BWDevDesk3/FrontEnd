import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Route} from 'react-router-dom';
import {PrivateRoute} from '../utils/PrivateRoute';
// Actions
import {testing} from '../actions/actions';
// Components

const App = props => 
{

  useEffect(() => 
  {
    props.testing();
    console.log('useEffect Fired!');
  }, [])

  return (
    <div className="App">
      <h1>Testing!</h1>
      <button onClick={ e => props.testing()}>Redux Testing</button>
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