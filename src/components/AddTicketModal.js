import React, {useState} from 'react';
import { Modal, Form, Input, Select } from 'antd';
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {addTicket, fetchUserTickets, refreshTickets} from '../actions/actions';

const AddTicketModal = props => {

    const { getFieldDecorator } = props.form;
    const { size } = props;
    const { Option } = Select;

    const [value, setValue] = useState('1');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [steps, setSteps] = useState('');

    let ticket = {
        request_category: value,
        request_date: Date.now(),
        request_title: title,
        request_details: description,
        request_stepstaken: steps,
        creatorId: localStorage.getItem('id'),
        resolved: 0
    }

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
          console.log(ticket);
          props.addTicket(ticket);
          setValue('');
          setDescription('');
          setSteps('');
          setTitle('');
          props.setVisible(false);
          props.refreshTickets();
    };

    return (
        <Modal
          title="Add A Ticket"
          centered
          visible={props.visible}
          onOk={handleSubmit}
          onCancel={() => props.setVisible(false)}
        >
          <Form layout="vertical" onSubmit={handleSubmit}>
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title and category of ticket!' }],
              })(<span>
                <Input
                  type="text"
                  size={size}
                  value={title}
                  onChange={handleTitleChange}
                  style={{ width: '65%', marginRight: '3%' }}
                />
                <Select
                  value={value}
                  size={size}
                  style={{ width: '32%' }}
                  onChange={handleLanguageChange}
                >
                  <Option value="1">JavaScript</Option>
                  <Option value="2">CSS</Option>
                  <Option value="3">Node.js</Option>
                  <Option value="4">React.js</Option>
                  <Option value="5">Redux</Option>
                  <Option value="6">JSON</Option>
                  <Option value="7">Python</Option>
                  <Option value="8">Git</Option>
                  <Option value="9">Postman</Option>
                  <Option value="10">Yarn</Option>
                  <Option value="11">Library</Option>
                  <Option value="12">Deployment</Option>
                </Select>
              </span>)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Please input the description of the problem!' }],
              })(<Input type="textarea" onChange={handleDescriptionChange}/>)}
            </Form.Item>
            <Form.Item label="Steps Taken">
              {getFieldDecorator('steps taken', {
                rules: [{ required: true, message: 'Please input the steps taken!' }],
              })(<Input type="textarea" onChange={handleStepsChange}/>)}
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

const AddTicketForm = Form.create({ name: 'normal_login' })(AddTicketModal);

export default connect(mapStateToProps, {addTicket, fetchUserTickets, refreshTickets})(AddTicketForm)