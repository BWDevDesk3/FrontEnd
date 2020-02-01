import React from 'react';
// Any Design
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const SignUp = props => {

    const handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

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
          <a className="login-form-forgot" href="">
            Request Help
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large">
            Sign Up
          </Button>
          Or <a href="">Already have an account?</a>
        </Form.Item>
      </Form>
    )
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(SignUp);

export default WrappedNormalSignupForm