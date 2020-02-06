import React, {useState} from 'react';
import { Modal, Form, Input, Select } from 'antd';
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {addTicket, fetchUserTickets} from '../actions/actions';

const ResponseModal = props => {

    const { getFieldDecorator } = props.form;
    const { size } = props;
    const { Option } = Select;

    const ticket = props.ticket;

    const [value, setValue] = useState('1');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [steps, setSteps] = useState('');

    // let ticket = {
    //     request_category: value,
    //     request_date: Date.now(),
    //     request_title: title,
    //     request_details: description,
    //     request_stepstaken: steps,
    //     creatorId: localStorage.getItem('id')
    // }

    const handleTitleChange = e => {
        setTitle(e.target.value)
      };

      const handleDescriptionChange = e => {
        setDescription(e.target.value)
      };

      const handleStepsChange = e => {
        setSteps(e.target.value)
      };
    
    const handleLanguageChange = language => {
        setValue(language);
      };

      const handleSubmit = () => {
        //   console.log(ticket);
        //   props.addTicket(ticket);
          props.setVisible(false);
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
            <Form.Item label="Subject">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title and category of ticket!' }],
              })(
                <Input
                  type="text"
                  size={size}
                  value={title}
                  onChange={handleTitleChange}
                />
              )}
            </Form.Item>
            <Form.Item label="Body">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Please input the description of the solution!' }],
              })(<Input type="textarea" onChange={handleDescriptionChange}/>)}
            </Form.Item>
          </Form>
          {/*
request_category: 1
request_date: "01/01/2020"
request_title: "Request 1"
request_details: "Forget Houston, I have Problems!"
request_stepstaken: "As few as possible while still achieving the same goal."
creatorId: 1
helperId: ""
resolved: 0
__proto__: Object */}
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