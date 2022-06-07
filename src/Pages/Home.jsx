import React from 'react';
import { Layout } from 'antd';
import Siders from '../Components/Sider'
const { Header, Footer, Sider, Content } = Layout;

function Home(props) {
    return (
        <div>
                <Layout>
                    <Sider><Siders/></Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
    );
}

export default Home;