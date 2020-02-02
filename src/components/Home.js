import React, {useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter, Route} from 'react-router-dom';
// Actions
import {testing} from '../actions/actions';

const Home = props => {

    console.log(props.user)

    return (
        <div style={{backgroundColor: '#333', minHeight: '100vh', textAlign: 'center'}}>
            <h1>This is a test</h1>
        </div>
    )
}

const mapStateToProps = state => 
{
  return {
    testing: state.testing,
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps, {testing})(Home))