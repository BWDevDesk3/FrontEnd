import React, { useState, useEffect } from 'react';
// Redux Connect
import {connect} from 'react-redux';
// Actions
import {fetchUserTickets, deleteTicket, refreshTickets} from '../../actions/actions';
import { Icon, Modal, Tag, Button, Avatar, message, List } from 'antd';
import { categorySwitch } from './CategorySwitch';
import { statusSwitch } from './StatusSwitch';
import ResponseModal from '../ResponseModal';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const TicketCard = props => {

    const [visible, setVisible] = useState();
    const [resVisible, setResVisible] = useState();
    const helper = (localStorage.getItem('helper') === 'true');

    let ticket = props.ticket;
    let ticketCreator = ticket.creatorId || ticket.creatorid


    // Switch to handle category names, colors, and images
    let ticketUI = categorySwitch(ticket);
    // Switch to handle ticket resolved status
    let ticketStatus = statusSwitch(ticket);
    
    const [creator, setCreator] = useState();
    const [image, setImage] = useState(null);
    const [userEmail, setEmail] = useState();

    const showModal = e => {
        console.log(helper)
        setVisible(true);
    }

    const hideModal = e => {
        console.log(helper)
        console.log(ticket.id);
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
          .then(res => {hideModal(); props.refreshTickets(); message.success('Success')})
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
                setEmail(res.data.email)
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

    const showResModal = e => {
      setResVisible(true);
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
        title={'Ticket by: ' + creator}
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={[
            <>
            <Button key="back" onClick={hideModal}>Close</Button>
            {helper ? <Button key="delete" onClick={e => {props.deleteTicket(ticket); hideModal()}}>Delete</Button> : <></>}
            {helper ? <Button key="assign" type="primary" onClick={e => assignTicket(ticket.id)}>Assign</Button> : <></>}
            {helper ? <Button key="show" type="primary" onClick={e => showResModal(e)}>Send Response!</Button> : <></>}
            </>
          ]}
      >
        <p>Description: {ticket.request_details}</p>
        <p>Steps Taken: {ticket.request_stepstaken}</p>
        <p>Helper: {ticket.helperId ? ticket.helperId : 'Needed!'}</p>
      </Modal>
      <ResponseModal visible={resVisible} setVisible={setResVisible} ticket={ticket} email={userEmail}/>
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

export default connect(mapStateToProps, {fetchUserTickets, deleteTicket, refreshTickets})(TicketCard)