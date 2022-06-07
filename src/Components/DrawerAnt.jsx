import { Button, Col, Drawer, Row, Space } from 'antd';
import {HomeOutlined, LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import Avatar from 'antd/lib/avatar/avatar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DrawerAnt = () => {
  const [visible, setVisible] = useState(false);
  const sideItems = [
    {name: 'Home', icon: <HomeOutlined className='text-[28px]'/>, link: '/'},
    {name: 'Profile', icon: <UserOutlined className='text-[28px]'/>, link: '/profile'},
    {name: 'Settings', icon: <SettingOutlined className='text-[28px]'/>, link: '/settings'},
    {name: 'Log Out', icon: <LogoutOutlined className='text-[28px]'/>, link: '/register'},
]
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
        <Button onClick={showDrawer}>ss</Button>
      <Drawer
        placement={'left'}
        width={220}
        onClose={onClose}
        visible={visible}
      >
<Col className='text-white  justify-end font-semibold text-2xl space-y-4'>
                {
                    sideItems.map((value, index)=>{
                        return (
                            <Row key={index} justify={"end"}>
                                <div className='flex items-center hover:cursor-pointer space-x-4 hover:bg-white
                                hover:bg-opacity-20 rounded-3xl py-2 px-1 md:px-5 transition duration-300 hover:duration-300'>
                                    <Link className=' text-white flex space-x-3 justify-end items-center' to={value.link}>
                                    <span>
                                    {value.icon}
                                    </span>
                                    <span >
                                    {value.name}
                                </span>
                                    </Link>
                                </div>
                            </Row>
                        )
                    })
                }
            </Col>
      </Drawer>
    </>
  );
};

export default DrawerAnt;