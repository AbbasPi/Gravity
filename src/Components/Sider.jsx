import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import Forms from './SignupForm'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

const Siders = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor: 'white'}}>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Account',
                        },
                        {
                            key: '2',
                            icon: <SettingOutlined/>,
                            label: 'Settings',
                        },
                        {
                            key: '3',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                        },
                    ]}
                />
            </Sider>

        </Layout>
    );
};

export default Siders;