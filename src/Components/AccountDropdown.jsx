import {UserOutlined} from '@ant-design/icons';
import {Dropdown, Menu, Space} from 'antd';
import React from 'react';
import {Link} from "react-router-dom";
const menu = (
    <Menu theme={'dark'}
        items={[
            {
                key: '1',
                label: (
                    <Link to='/login'>
                       <div className='w-16 text-center'>
                        Log In
                       </div>
                    </Link>
                ),
                icon: null,
                disabled: false,
            },
            {
                key: '2',
                label: (
                    <Link to='/signup'>
                        <div className='w-16 text-center'>
                            Sign Up
                        </div>
                    </Link>
                ),
                icon: null,
                disabled: false,
            },
        ]}
    />
);

const AccountDropdown = () => (
    <Dropdown placement={"bottom"} className='text-white hover:text-red-600' overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <UserOutlined className='lg:text-3xl text-2xl'/>
            </Space>
        </a>
    </Dropdown>
);

export default AccountDropdown;