import {MenuOutlined} from '@ant-design/icons';
import {Dropdown, Menu, Space} from 'antd';
import React from 'react';
import {Link} from "react-router-dom";
const menu = (
    <Menu className='md:hidden' theme={'dark'} style={{background: 'black', padding: 4, marginTop: 32}}
          items={[
              {
                  key: '1',
                  label: (
                      <Link to='/'>
                          <div className='w-screen text-xl bg-black text-center'>
                              Home
                          </div>
                      </Link>
                  ),
                  icon: null,
                  disabled: false,
              },
              {
                  key: '2',
                  label: (
                      <Link to='/profile'>
                          <div className='w-screen text-xl bg-black text-center'>
                              Profile
                          </div>
                      </Link>
                  ),
                  icon: null,
                  disabled: false,
              },
              {
                  key: '3',
                  label: (
                      <Link to='/settings'>
                          <div className='w-screen text-xl bg-black text-center'>
                              Settings
                          </div>
                      </Link>
                  ),
                  icon: null,
                  disabled: false,
              },
              {
                  key: '4',
                  label: (
                      <Link to='/'>
                          <div className='w-screen hover:text-white text-xl bg-black text-center'>
                              Contact Us
                          </div>
                      </Link>
                  ),
                  icon: null,
                  disabled: false,
              },
              {
                  key: '5',
                  label: (
                      <Link to='/about'>
                          <div className='w-screen text-xl bg-black text-center'>
                              About
                          </div>
                      </Link>
                  ),
                  icon: null,
                  disabled: false,
              },
          ]}
    />
);

const NavDropdown = () => (
    <Dropdown placement={"bottom"} className='text-white hover:text-red-600 md:hidden' overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <MenuOutlined className='lg:text-3xl text-2xl'/>
            </Space>
        </a>
    </Dropdown>
);

export default NavDropdown;