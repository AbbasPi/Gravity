import React from 'react';
import {Row} from "antd";
import LeftSide from "../Components/LeftSide";
import Main from "../Components/Main";
import RightSide from "../Components/RightSide";
import Settings from "../Pages/Settings";
import DrawerAnt from '../Components/DrawerAnt';

function Posts(props) {
    return (
        <Row style={{height: '100vh%'}}>
            <LeftSide/>
            {/* <DrawerAnt/> */}
            <Main/>
            {/* <Settings/> */}
            <RightSide/>
        </Row>
    );
}

export default Posts;