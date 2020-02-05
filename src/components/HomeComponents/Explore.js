import React, {useState, useEffect} from "react";
// Redux Connect
import {connect} from 'react-redux';
// Router
import {withRouter} from 'react-router-dom';
// Actions
import {fetchTickets} from '../../actions/actions';
// Ant Design
import {Layout, List, Form, Input, Select} from 'antd';
// Components
import TicketCard from './TicketCard';
import { fileToObject } from "antd/lib/upload/utils";

const {Content} = Layout;

const Explore = props => {

    const { size } = props;
    const { Option } = Select;

    const fetch = () => {
        props.fetchTickets();
    }

    const [language, setLanguage] = useState('Javascript');
    const [langNum ,setLangNum] = useState(1);
    const [status, setStatus] = useState('OPEN');
    const [tickets, setTickets] = useState(props.tickets)

    const handleLanguageChange = lang => {setLanguage(lang); console.log(lang); setLangNum(parseInt(lang)); filter(parseInt(lang)); console.log('lang', language); console.log('num', langNum)}
    const handleStatusChange = status => {setStatus(status)}

    let refinedTickets = []

    const filter = num => {
        props.tickets.map(ticket => {
            if(ticket.request_category == langNum) {            
                console.log(ticket);
                refinedTickets.push(ticket);
                setTickets(refinedTickets);
            }
        });
    }

    useEffect(() => {
        fetch();
        filter();
    }, [])

    return (
        <Content style={{ margin: '0 10px' }}>
            {/* Add A Inputs for filtering results */}
            <Form>
            <Form.Item label="Select Language">
              <span>
              {/* <Select
                  value={status}
                  size={size}
                  style={{ width: '25%' }}
                  onChange={handleStatusChange}
                >
                  <Option value="0">OPEN</Option>
                  <Option value="1">CLOSED</Option>
                </Select> */}
                <Select
                  value={language}
                  size={size}
                  style={{ width: '25%' }}
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
              </span>
            </Form.Item>
            </Form>
            <List grid={{gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 5}}
                dataSource={tickets}
                renderItem={ticket => (
                    <List.Item>
                        <TicketCard ticket={ticket}/>
                    </List.Item>
            )}>
            </List>
        </Content>
    )
}

const mapStateToProps = state => 
{
  return {
    tickets: state.tickets
  };
};

export default withRouter(connect(mapStateToProps, {fetchTickets})(Explore))