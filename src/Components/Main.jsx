import React from 'react';
import {Avatar, Button, Col, Input} from "antd";
import {useLocation} from "react-router-dom";
import Cards from "./Card";

function Main({profile}) {
    const location = useLocation()
    let x = 10
    let y = 18
    let z = 23
    if (profile) {
        x = 24
        y = 24
        z = 24
    }
    return (
        <Col
            xs={z}
            sm={z}
            md={y}
            lg={x}
            style={{border: '2px solid #344048', height: 'auto', color:"white", background: 'black'}}>
            <>
            <div className='sticky top-0 w-full z-50'>
                <div onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}
                     className='text-2xl font-bold capitalize hover:cursor-pointer bg-black bg-opacity-80 p-2 '>
                    {location.pathname.slice(1)}
                </div>
            </div>
                {
                 profile !== true &&
                <div  style={{ position:'relative'}}>
                    <Input className='h-32' style={{background:'black'}} size="large" placeholder="What's Up?" prefix={
                        <Avatar style={{width: 50, height: 50, marginRight:8}} src="https://i.pinimg.com/736x/0c/ac/43/0cac43143db225aca7785f6c6619aea7.jpg" />} />
                <Button style={{position: "absolute", right:12, bottom: 12, zIndex: '100', borderRadius: 12, width: 100, border: "red", color:'red'}}>Post</Button>
                </div>
                }
                <div>

                </div>
            </>
            <Cards/>
        </Col>
    );
}

export default Main;