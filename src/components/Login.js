import React, { useState } from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Router Link
import {Link} from 'react-router-dom';
// Actions
import {userSignIn} from '../actions/actions';
// Any Design
import { Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
import { isCompositeComponent } from 'react-dom/test-utils';

const Login = props => {

    const [loginError, setLoginError] = useState(props.loginError);
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
          signIn(user)
            .then(() => {props.push('/home')})
        }
        });
      };

      // Hacky promise function to delay sending user to home route
      const signIn = info => {
        return new Promise((resolve, reject) => {
          props.userSignIn(info)
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
            initialValue: true,
          })(<Checkbox style={{color: '#FFF'}}>Remember me</Checkbox>)}
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