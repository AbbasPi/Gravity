import React from 'react';
import {Col, Row} from "antd";
import {HomeOutlined, LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

function LeftSide(props) {
    const sideItems = [
        {name: 'Home', icon: <HomeOutlined className='text-[28px]'/>, link: '/'},
        {name: 'Profile', icon: <UserOutlined className='text-[28px]'/>, link: '/profile'},
        {name: 'Settings', icon: <SettingOutlined className='text-[28px]'/>, link: '/settings'},
        {name: 'Log Out', icon: <LogoutOutlined className='text-[28px]'/>, link: '/'},
    ]
    return (
        <Col
            xs={0}
            sm={0}
            md={6}
            lg={4}
            style={{height:'100vh', marginTop:'30px', position: 'sticky', top: '100px'}}>
            <Col className='text-white lg:mr-12 font-semibold text-2xl space-y-4'>
                {
                    sideItems.map((value, index)=>{
                        return (
                            <Row key={index} style={{justifyContent: 'end'}} >
                                <div className='hidden md:flex items-center hover:cursor-pointer space-x-4 hover:bg-white
                                hover:bg-opacity-20 rounded-3xl py-2 px-1 md:px-5 transition duration-300 hover:duration-300'>
                                    <Link className=' text-white flex space-x-3 items-center ' to={value.link}>
                                    {value.icon}
                                    <span className='hidden lg:flex lg:w-24'>
                                    {value.name}
                                </span>
                                    </Link>
                                </div>
                            </Row>
                        )
                    })
                }
            </Col>
        </Col>

    );
}

export default LeftSide;