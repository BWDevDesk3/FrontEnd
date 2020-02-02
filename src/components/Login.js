import React from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Router Link
import {Link} from 'react-router-dom';
// Actions
import {userSignIn} from '../actions/actions';
// Any Design
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const Login = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
          let user = {
            username: values.username,
            password: values.password
          };
          props.userSignIn(user);
          setInterval(() => {
            console.log('Fired')
            props.push('/home');
          }, 800)
        });
      };

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
        <Form.Item style={{color: '#FFF'}}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox style={{color: '#FFF'}}>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot Password?
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large">
            Login
          </Button>
          Or <Link to={'/signup'}>Register a new account?</Link>
        </Form.Item>
      </Form>
    )
};

const mapStateToProps = state => 
{
  return {
    
  };
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect(mapStateToProps, {userSignIn})(WrappedNormalLoginForm)