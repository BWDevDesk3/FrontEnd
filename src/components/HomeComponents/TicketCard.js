import React, { useState, useEffect } from "react";
import { Card, Icon, Modal, Tag, Button, Avatar } from "antd";
import { categorySwitch } from "./CategorySwitch";
import { statusSwitch } from "./StatusSwitch";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const TicketCard = props => {
  const [visible, setVisible] = useState();

  const { Meta } = Card;

  let ticket = props.ticket;
  let ticketCreator = ticket.creatorId || ticket.creatorid;
  let id = localStorage.getItem("id");

  const owner = id == ticketCreator;

  // Switch to handle category names, colors, and images
  let ticketUI = categorySwitch(ticket);
  // Switch to handle ticket resolved status
  let ticketStatus = statusSwitch(ticket);

  const [creator, setCreator] = useState();
  const [image, setImage] = useState(null);

  const showModal = e => {
    setVisible(true);
  };

  const hideModal = e => {
    setVisible(false);
  };

  const assignTicket = id => {
    const assignedticket = {
      creatorId: ticket.creatorId,
      helperId: 1,
      request_category: ticket.request_category,
      request_date: ticket.request_date,
      request_details: ticket.request_details,
      request_stepstaken: ticket.request_stepstaken,
      request_title: ticket.request_title,
      resolved: ticket.resolved
    };
    const promise = axiosWithAuth().put(
      "https://devdeskdb.herokuapp.com/api/requests/" + id,
      assignedticket
    );
    promise
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  const fetchUser = id => {
    const promise = axiosWithAuth().get(
      "https://devdeskdb.herokuapp.com/api/students/" + id
    );

    promise
      .then(res => {
        setCreator(res.data.username);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchUserImage = id => {
    const promise = axiosWithAuth().get(
      "https://devdeskdb.herokuapp.com/api/students/" + id + "/image",
      { responseType: "arraybuffer" }
    );

    promise
      .then(res => {
        let resImage = new Buffer.from(res.data, "binary").toString("base64");
        setImage(resImage);
      })
      .catch(err => console.log("Error", err));
  };

  useEffect(() => {
    fetchUser(ticketCreator);
    fetchUserImage(ticketCreator);
  }, []);

  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt={ticketUI.name} src={ticketUI.image} />}
        actions={[
          <Tag color={ticketStatus.color}>{ticketStatus.status}</Tag>,
          <Tag color={ticketUI.color}>{ticketUI.name}</Tag>,
          <Icon type="search" onClick={e => showModal(e)} />
        ]}
      >
        <Meta
          avatar={<Avatar src={"data:image/png;base64, " + image} />}
          title={ticket.request_title}
          description={creator + " @ " + ticket.request_date}
        />
        <p
          style={{
            paddingTop: "30px",
            width: "250",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {ticket.request_details}
        </p>
      </Card>
      <Modal
        title={ticket.request_title}
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={[
          owner ? (
            <>
              <Button key="back" onClick={hideModal}>
                Close
              </Button>
              <Button>Delete</Button>
            </>
          ) : (
            <>
              <Button key="back" type="primary" onClick={hideModal}>
                Close
              </Button>
            </>
          )
        ]}
      >
        <p>Description: {ticket.request_details}</p>
        <p>Steps Taken: {ticket.request_stepstaken}</p>
        <p onClick={e => assignTicket(ticket.id)}>
          Helper: {ticket.helperId ? ticket.helperId : "Needed!"}
        </p>
      </Modal>
    </div>
  );
};
export default TicketCard;
