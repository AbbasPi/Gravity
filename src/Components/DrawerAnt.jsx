import { Button, Col, Drawer, Row, Space } from 'antd';
import {HomeOutlined, LogoutOutlined, MenuOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
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
        <Button style={{background: 'none', height: 70, color: 'white', border: 'none'}} onClick={showDrawer} className=''>
            <div className='text-5xl '><MenuOutlined/></div>
        </Button>
      <Drawer
        placement={'left'}
        width={220}
        onClose={onClose}
        visible={visible}
        extra={
          <div className='flex items-center mt-4'>
            <Avatar style={{width: 50, height: 50, marginRight:8, position: 'relative', left: '-40px'}} src="https://i.pinimg.com/736x/0c/ac/43/0cac43143db225aca7785f6c6619aea7.jpg" />
            <p className='text-white text-xl relative -left-8 top-2 w-[110px]'>Abbas Salah</p>
          </div>
        }
      >
<Col className='text-white  justify-end font-semibold text-2xl space-y-4'>
                {
                    sideItems.map((value, index)=>{
                        return (
                            <Row key={index} justify={"start"}>
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