import React, { useState, useEffect } from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Router Link
import {Link} from 'react-router-dom';
// Actions
import {userSignIn} from '../actions/actions';
// Any Design
import { Form, Icon, Input, Button, Checkbox, Spin } from 'antd';

const Login = props => {

  const [registerHelper, setRegisterHelper] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (err) {
        console.log('Received values of form: ', values);
      } else {
        let user = {
          username: values.username,
          password: values.password
        };
        setSpinning(true);
        signIn(user, registerHelper)
          .then(() => {props.push('/home')})
      }
    });
  };

  // Handling of registering of helper account
  const handleToggle = e => {
    setRegisterHelper(!registerHelper);
  };

  // Hacky promise function to delay sending user to home route
  const signIn = (user, bool) => {
    return new Promise((resolve, reject) => {
      props.userSignIn(user, bool)
        .then(() => {
          setTimeout(function(){
            resolve(true);
            setSpinning(false);
          }, 1000)})
        .catch((err) => {
          setSpinning(false);
        })
      })
    }

    useEffect(() => {console.log(registerHelper)}, [registerHelper])

    const { getFieldDecorator } = props.form;

    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              size="large"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              size="large"
            />,
          )}
        </Form.Item>
        <Spin spinning={spinning} indicator={antIcon} style={{paddingLeft: '50%'}}></Spin>
        {props.loginError ? <p style={{color: 'red'}}>{props.loginError}</p> : <p></p>}
        <Form.Item style={{color: '#FFF'}}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: registerHelper,
          })(<Checkbox onChange={handleToggle} style={{color: '#FFF'}}>Login as Helper?</Checkbox>)}
          <Link to={'/'}>
            Forgot Password?
          </Link>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large">
            Login
          </Button>
          Or <Link to={'/signup'}>Register a new account?</Link>
        </Form.Item>
      </Form>
    )
};

const mapStateToProps = state => 
({
    user: state.user,
    loginError: state.loginError
});

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect(mapStateToProps, {userSignIn})(WrappedNormalLoginForm)