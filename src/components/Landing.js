import React from 'react';
// Ant Design
import {Row, Col} from 'antd';
// Importing image
import laptop from '../assets/laptop.jpg';
import SignUp from './Signup';
import Login from './Login';

const Landing = props => {

    const login = props.login;

    return (
        <>
            <Row style={{backgroundColor: '#837AE3'}}>
                <Col span={14} style={{backgroundColor: '#837AE3', minHeight: '100vh',
                backgroundImage: `url(${laptop})`, backgroundSize: 'cover', opacity: '0.5'}}>
                    <div style={{paddingTop: '30%', paddingLeft: '40%'}}>
                        <h1 style={{color: '#F1F1FB'}}>Find help.</h1>
                        <h1 style={{color: '#F1F1FB'}}>Socially.</h1>
                        <h1 style={{color: '#F1F1FB'}}>For free.</h1>
                    </div>
                    {/* Need to implement NavBar here */}
                    {/* Need to break the inline styling out into CSS files */}
                </Col>
                <Col span={10} style={{backgroundColor: '#0E1114', minHeight: '100vh', padding: '2%', paddingTop: '10%'}}>
                    <h4 style={{color: '#F1F1FB'}}>Join your fellow <br/> developers from around the world today!</h4>
                    <p style={{color: '#F1F1FB'}}>Master the languages of the web: HTML, CSS, and JavaScript! This app will connect you to those who <br/> will help you succeed! So what are you waiting for?</p>
                    {/* Signup - Login Form Here */}
                    {login ? <Login push={props.push}/> : <SignUp push={props.push}/>}
                    {/* Need to break the inline styling out into CSS files */}
                </Col>
            </Row>
        </>
    )
}

export default Landing