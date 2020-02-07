import React, {useState} from 'react';
import { Modal, Form, Input, message } from 'antd';
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {addTicket, fetchUserTickets, fetchTickets} from '../actions/actions';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import ImageUploader from './HomeComponents/ImageUpload';

const ResponseModal = props => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value)
      };

      const handleNameChange = e => {
        setName(e.target.value)
      };

      const updateUser = () => {
        const id = localStorage.getItem("id");
        const user = {
          email: email,
          username: name
        };
        const promise = axiosWithAuth().put(
          "https://devdeskdb.herokuapp.com/api/students/" + id,
          user
        );
        promise
          .then(res => {props.setVisible(false); message.success('Success'); props.fetchTickets();})
          .catch(err => {
            console.log(err);
            message.error('Error updating account');
          });
      };

      const handleSubmit = () => {
        updateUser();
    };

    return (
        <Modal
          title="Update account information"
          centered
          visible={props.visible}
          onOk={handleSubmit}
          onCancel={() => props.setVisible(false)}
        >
            <ImageUploader/>
          <Form layout="vertical" onSubmit={handleSubmit}>
            <Form.Item label="Email Address:">
              <Input type="email" onChange={handleEmailChange}/>
            </Form.Item>
            <Form.Item label="Username: ">
              <Input type="textarea" onChange={handleNameChange}/>
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

export default connect(mapStateToProps, {addTicket, fetchUserTickets, fetchTickets})(ResponseForm)