import React from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Router Link
import {Link} from 'react-router-dom';
// Actions
import {userSignUp, userSignIn} from '../actions/actions';
// Any Design
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const SignUp = props => {

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          };
          let user = {
            username: values.username,
            password: values.password
          };
          props.userSignUp(user);
          signIn(user)
            .then(() => {props.push('/home')});
      });
    };

      // Hacky promise function to delay sending user to home route
      const signIn = info => {
        return new Promise((resolve, reject) => {
          let login = props.userSignIn(info);
            setTimeout(function(){
              resolve(true);
            }, 1000)
        })
      }

      const { getFieldDecorator } = props.form;

    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              size="large"
            />,
          )}
        </Form.Item>
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
          <Link to={'/'}>
            Request Help
          </Link>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large">
            Sign Up
          </Button>
          Or <Link to={'/'}>Already have an account?</Link>
        </Form.Item>
      </Form>
    )
};

const mapStateToProps = state => 
{
  return {
    user: state.user
  };
};

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(SignUp);

export default connect(mapStateToProps, {userSignUp, userSignIn})(WrappedNormalSignupForm)