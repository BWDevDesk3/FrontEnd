import React, {useState} from 'react';
import { Modal, Form, Input, message } from 'antd';
// AxisWithAUth
import {axiosWithAuth} from '../utils/axiosWithAuth';
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {addTicket, fetchUserTickets} from '../actions/actions';

const ResponseModal = props => {

    const { getFieldDecorator } = props.form;

    const ticket = props.ticket;
    const userEmail = props.email;

    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');



    const handleSubjectChange = e => {
      setSubject(e.target.value)
    };

    const handleTextChange = e => {
      setText(e.target.value)
    };

    const handleSubmit = () => {
      let emailToSend ={
        to: userEmail != null ? userEmail : '',
        from: 'Helper@DevDesk.com',
        subject: subject,
        text: text
      }
      const promise = axiosWithAuth().post(
        "https://devdeskdb.herokuapp.com/api/requests/" + ticket.id + '/email',
        emailToSend
      );

      promise
        .then((res) => {props.setVisible(false); message.success('Success'); setText(''); setSubject('')})
        .catch((err) => {console.log(err); message.error('Error assigning ticket!')})
    };

    return (
        <Modal
          title="Send response to student"
          centered
          visible={props.visible}
          onOk={handleSubmit}
          onCancel={() => props.setVisible(false)}
        >
          <Form layout="vertical" onSubmit={handleSubmit}>
            <Form.Item label="Subject:">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input the subject of the message!' }],
              })(
                <Input
                  type="email"
                  onChange={handleSubjectChange}
                />
              )}
            </Form.Item>
            <Form.Item label="Body">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Please input the description of the solution!' }],
              })(<Input type="textarea" onChange={handleTextChange}/>)}
            </Form.Item>
          </Form>
        </Modal>
    )
}

const mapStateToProps = state => 
({
    user: state.user,
    loginError: state.loginError
});

const ResponseForm = Form.create({ name: 'normal_login' })(ResponseModal);

export default connect(mapStateToProps, {addTicket, fetchUserTickets})(ResponseForm)