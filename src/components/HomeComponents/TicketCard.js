import React, { useState, useEffect } from 'react';
import { Card, Icon, Modal, Tag, Button } from 'antd';
import { categorySwitch } from './CategorySwitch';
import { statusSwitch } from './StatusSwitch';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const TicketCard = props => {

    const [visible, setVisible] = useState();

    const {Meta} = Card;

    let ticket = props.ticket;

    // Switch to handle category names, colors, and images
    let ticketUI = categorySwitch(ticket);
    // Switch to handle ticket resolved status
    let ticketStatus = statusSwitch(ticket);

    const [creator, setCreator] = useState();

    const showModal = e => {
        setVisible(true);
    }

    const hideModal = e => {
        setVisible(false);
    }

    const fetchUser = (id) => {
        const promise = axiosWithAuth().get('https://devdeskdb.herokuapp.com/api/students/' + id);

        promise
            .then((res) => {
                console.log(res.data.username);
                setCreator(res.data.username);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() =>{fetchUser(ticket.creatorId)}, [])

    return (
        <div>
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt={ticketUI.name}
                    src={ticketUI.image}
                />
            }
            actions={[
                <Tag color={ticketStatus.color}>{ticketStatus.status}</Tag>,
                <Tag color={ticketUI.color}>{ticketUI.name}</Tag>,
                <Icon type="search" onClick={e => showModal(e)}/>
            ]}>
            <Meta
                title={ticket.request_title}
                description={creator + ' @ ' + ticket.request_date}/>
                <p style={{paddingTop: '30px'}}>{ticket.request_details}</p>
        </Card>
        <Modal
        title={ticket.request_title}
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={[
            <Button key="back" type="primary" onClick={hideModal}>
              Close
            </Button>
          ]}
      >
        <p>Description: {ticket.request_details}</p>
        <p>Steps Taken: {ticket.request_stepstaken}</p>
        <p>{'HelperID: ' + ticket.helperId ? ticket.helperId : 'N/A'}</p>
      </Modal>
      </div>
    )
}
export default TicketCard;