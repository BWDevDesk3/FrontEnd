import React from 'react';
import { Card, Icon, Avatar, Tag } from 'antd';

const TicketCard = props => {

    const {Meta} = Card;

    let ticket = props.ticket;

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
                <Tag color="green">OPEN</Tag>,
                <Tag color="purple">REACT</Tag>,
            ]}>
            <Meta avatar={<Avatar icon="user" />}
                title={ticket.request_title}
                description={ticket.request_details}/>
        </Card>
    )
}
export default TicketCard;