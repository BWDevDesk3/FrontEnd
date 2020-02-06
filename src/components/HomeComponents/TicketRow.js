import React, { useState, useEffect } from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {fetchUserTickets, deleteTicket} from '../../actions/actions';
import { Card, Icon, Modal, Tag, Button, Avatar, message, List } from 'antd';
import { categorySwitch } from './CategorySwitch';
import { statusSwitch } from './StatusSwitch';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const TicketCard = props => {

    const [visible, setVisible] = useState();
    const helper = (localStorage.getItem('helper') === 'true');
    const [text, setText] = useState('Delete');

    const {Meta} = Card;

    let ticket = props.ticket;
    let ticketCreator = ticket.creatorId || ticket.creatorid
    let id = localStorage.getItem('id');
    let date = new Date(ticket.request_date).toLocaleDateString();

    const owner = id == ticketCreator;

    // Switch to handle category names, colors, and images
    let ticketUI = categorySwitch(ticket);
    // Switch to handle ticket resolved status
    let ticketStatus = statusSwitch(ticket);
    
    let buttonText = helper ? 'Assign' : 'Delete';
    const [creator, setCreator] = useState();
    const [image, setImage] = useState(null);

    const showModal = e => {
        console.log(helper)
        setVisible(true);
    }

    const hideModal = e => {
        console.log(helper)
        setVisible(false);
    }

    const assignTicket = ticketid => {
        const id = localStorage.getItem("id");
        const assignedticket = {
          ...ticket,
          helperId: id
        };
        const promise = axiosWithAuth().put(
          "https://devdeskdb.herokuapp.com/api/requests/" + ticketid,
          assignedticket
        );
        promise
          .then(res => {hideModal(); ticket.helperId = id; message.success('Success')})
          .catch(err => {
            console.log(err);
            message.error('Error assigning ticket!')
          });
      };

    const fetchUser = id => {
        const promise = axiosWithAuth().get('https://devdeskdb.herokuapp.com/api/students/' + id);

        promise
            .then((res) => {
                setCreator(res.data.username);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const fetchUserImage = id => {
        const promise = axiosWithAuth().get('https://devdeskdb.herokuapp.com/api/students/'+ id + '/image', { responseType: "arraybuffer"})

        promise
        .then((res) => {
            let resImage = new Buffer.from(res.data, 'binary').toString('base64');
            setImage(resImage);
        })
        .catch((err) => setImage(null))
    }

    useEffect(() =>{fetchUser(ticketCreator); fetchUserImage(ticketCreator);}, [])

    return (
        <div>

            <List.Item style={{backgroundColor: 'white', margin: '10px'}}
            actions={[<Tag color={ticketStatus.color}>{ticketStatus.status}</Tag>,
            <Tag color={ticketUI.color}>{ticketUI.name}</Tag>,
            <Icon type="search" onClick={e => showModal(e)}/>]}
            extra={
              <img
                  height={100}
                  alt={ticketUI.name}
                  src={ticketUI.image}
                />
              }
            >
            <List.Item.Meta
                avatar={
                  <Avatar style={{marginLeft: '20px'}} shape='square' src={'data:image/png;base64, ' + image} />
                }
                title={ticket.request_title}
                description={ticket.request_details}/>
            </List.Item>
        <Modal
        title={ticket.request_title}
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={[
            <>
            <Button key="back" onClick={hideModal}>Close</Button>
            <Button type="primary" onClick={e => helper ? assignTicket(ticket.id) : props.deleteTicket(ticket.id)}>{helper ? 'Assign' : 'Delete'}</Button>\
            </>
          ]}
      >
        <p>Description: {ticket.request_details}</p>
        <p>Steps Taken: {ticket.request_stepstaken}</p>
        <p>Helper: {ticket.helperId ? ticket.helperId : 'Needed!'}</p>
      </Modal>
      </div>
    )
}

const mapStateToProps = state => 
{
  return {
    tickets: state.tickets,
    isHelper: state.isHelper
  };
};

export default connect(mapStateToProps, {fetchUserTickets, deleteTicket})(TicketCard)