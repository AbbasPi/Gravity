import {Col, Collapse, Row} from 'antd';
import React from 'react';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Settings = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Row>
        <Col span={6}/>
        <Col span={12}>
        <Collapse style={{backgorund:'black', marginTop:'30px', }} defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
                <Collapse style={{backgorund:'black'}} defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
            </Panel></Collapse>
            </Panel>
            <Panel className='bg-black text-white' style={{color:'white'}} header="This is panel header 2" key="2">
                <p >{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
                <p className='bg-black text-white' style={{color:'white'}} >{text}</p>
            </Panel>
        </Collapse>
        </Col>
            <Col span={6}/>
        </Row>
    );
};

export default Settings;