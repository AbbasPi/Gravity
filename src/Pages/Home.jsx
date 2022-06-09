import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Col, Row} from "antd";
import LeftSide from "../Components/LeftSide";
import Posts from "../Components/Posts";
import Profile from "./Profile";
import Settings from "./Settings";
import RightSide from "../Components/RightSide";

function Home(props) {
    return (
        <Row style={{height: '100vh%'}}>
            <LeftSide/>
            <Routes>
                <Route path='' element={<Posts/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='settings' element={<Settings/>}/>
            </Routes>
            <Col lg={1}/>
            <RightSide/>
        </Row>
    );
}

export default Home;