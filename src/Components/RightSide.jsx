import React from 'react';
import {Avatar, Col, Row} from "antd";

function RightSide() {
    const sideItems = [
        {name: 'John Doe', avatar: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {name: 'John Doe', avatar: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {name: 'John Doe', avatar: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {name: 'John Doe', avatar: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {name: 'John Doe', avatar: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {name: 'John Doe', avatar: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
    ]
    return (
        <Col className={`bg-black h-[71vh] rounded-xl mt-4`}
             xs={0}
             sm={0}
             md={0}
             lg={7}
        >
            <h1 className='text-white text-xl text-center mt-6 underline underline-offset-2'>
                Recommended For You
            </h1>
            {
                sideItems.map((value, index)=>{
                    return (
                        <Row key={index} style={{justifyContent: 'center', display: 'flex'}} >
                            <div className='hidden md:flex items-center hover:cursor-pointer space-x-4 hover:bg-white
                                hover:bg-opacity-20 rounded-3xl py-2 px-1 md:px-5 transition duration-300 hover:duration-300'>
                                <div className=' text-white flex space-x-5 items-center '>
                                    <Avatar style={{width: '40px', height: '40px'}} src={value.avatar}/>
                                    <span className='text-xl'>
                                    {value.name}
                                </span>
                                    <span className='hover:cursor-pointer text-white hover:text-blue-600 '>Follow +</span>
                                </div>
                            </div>
                        </Row>
                    )})}
        </Col>
    );
}

export default RightSide;