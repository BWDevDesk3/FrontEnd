import React from 'react';
import { Card, Icon, Avatar, Tag } from 'antd';
import { categorySwitch } from './CategorySwitch';

const TicketCard = props => {

    const {Meta} = Card;

    let ticket = props.ticket;

    let status = ticket.resolved ? 'green' : 'red';
    let statusText = ticket.resolved ? 'CLOSED' : 'OPEN';

// Implement a switch to handle all of the colors, pictures, and text based on the ticket

    let color = categorySwitch('Javascript');

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <Tag color={status}>{statusText}</Tag>,
                <Tag color="purple">{color.color}</Tag>,
            ]}>
            <Meta avatar={<Avatar icon="user" />}
                title={ticket.request_title}
                description={ticket.request_details}/>
        </Card>
    )
}
export default TicketCard;