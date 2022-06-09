import {Checkbox, Col, Collapse, Form, Input, Row} from 'antd';
import React from 'react';
import DrawerAnt from "../Components/DrawerAnt";
const { Panel } = Collapse;

const Settings = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Col
            style={{borderRadius: '12px' }}
            xs={24}
            sm={24}
            md={18}
            lg={11}>
        <Collapse style={{backgorund:'black', marginTop:'30px', borderRadius: '18px' , overflow: 'hidden'}} defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="Account information" key="1">
                <Form.Item
                    className='relative sm:-left-8'
                    labelCol={{ span: 7 }}
                    label={<label style={{ color: "white" }}>Name</label>}
                    required>
                    <Input
                        name={'name'}
                        placeholder={'Your Name'}
                        value='Abbas Salah'
                        style={{borderRadius: '10px', border: '2px solid white' }}
                    >
                    </Input>
                </Form.Item>
                <Form.Item
                    className='relative sm:-left-8'
                    labelCol={{ span: 7 }}
                    label={<label style={{ color: "white" }}>Email</label>}
                    required>
                    <Input
                        name={'email'}
                        placeholder={'Your Email'}
                        value='abbas.log01@gmail.com'
                        style={{borderRadius: '10px', border: '2px solid white' }}
                    >
                    </Input>
                </Form.Item>
            </Panel>
            <Panel className='bg-black text-white' style={{color:'white'}} header="Change your password" key="2">
                <Form.Item
                    className='relative sm:-left-8'
                    labelCol={{ span: 7 }}
                    label={<label style={{ color: "white" }}>Old Password</label>}
                    required>
                    <Input.Password
                        name={'password'}
                        placeholder={'Old Password'}
                        style={{borderRadius: '10px', border: '2px solid white' }}
                    >
                    </Input.Password>
                </Form.Item>
                <Form.Item
                    className='relative sm:-left-8'
                    labelCol={{ span: 7 }}
                    label={<label style={{ color: "white" }}>New Password</label>}
                    required>
                    <Input.Password
                        name={'new password'}
                        placeholder={'Enter Your New Password'}
                        style={{borderRadius: '10px', border: '2px solid white' }}
                    >
                    </Input.Password>
                </Form.Item>
                <Form.Item
                    className='relative sm:-left-8'
                    labelCol={{ span: 7 }}
                    label={<label style={{ color: "white" }}>Confirm Password</label>}
                    required>
                    <Input.Password
                        name={'confirm new password'}
                        placeholder={'Re-enter Your New Password'}
                        style={{borderRadius: '10px', border: '2px solid white' }}
                    >
                    </Input.Password>
                </Form.Item>
            </Panel>
            <Panel header="Notifications" key="3">
                    <Collapse>
            <Panel header="Preferences" key="3">
                <div>
                <Checkbox/> Email Notifications
                </div>
                <Checkbox/> Push Notifications
            </Panel>
                </Collapse>
            </Panel>
            <Panel header="Security and account access" key="4">
                    <Collapse>
            <Panel header="Security" key="3">
                    Two-factor authentication
            </Panel>
            <Panel header="Apps and sessions" key="3">
                Apps and sessions
            </Panel>
                </Collapse>
            </Panel>
            <Panel key={5} header={'Additional resources'}>
               <div>Release notes</div>
               <div>Legal</div>
               <div>Accessibility</div>
               <div>Ads Help Center</div>
            </Panel>
        </Collapse>
        </Col>
    );
};

export default Settings;