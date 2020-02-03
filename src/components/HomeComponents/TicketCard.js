import React from 'react';
import { Card, Icon, Avatar, Tag } from 'antd';
import { categorySwitch } from './CategorySwitch';
import { statusSwitch } from './StatusSwitch';

const TicketCard = props => {

    const {Meta} = Card;

    let ticket = props.ticket;

    // Switch to handle category names, colors, and images
    let ticketUI = categorySwitch(ticket);
    // Switch to handle ticket resolved status
    let ticketStatus = statusSwitch(ticket);

    return (
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
                <Tag color="purple">{ticketUI.name}</Tag>,
            ]}>
            <Meta
                title={ticket.request_title}
                description={ticket.creatorId + ' @ ' + ticket.request_date}/>
                <p style={{paddingTop: '30px'}}>{ticket.request_details}</p>
        </Card>
    )
}
export default TicketCard;