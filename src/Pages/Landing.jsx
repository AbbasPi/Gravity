import React, {useEffect, useState} from 'react';
import { Col, Row } from 'antd';
import {Link} from "react-router-dom";

function Landing(props) {
    const [move, setMove] = useState('translate-x-[545px]')
    const [move2, setMove2] = useState('-translate-x-[530px]')
    useEffect(()=>{
        setTimeout(()=>{
        setMove('-translate-x-0')
        setMove2('translate-x-0')
        }, 1000)
        setTimeout(()=>{
            setMove('translate-y-[450px]')
            setMove2('translate-y-[450px]')
        }, 2000)
        setTimeout(()=>{
            setMove('translate-y-[45px] translate-x-[300px]')
            setMove2('translate-y-[45px] -translate-x-[300px]')
        }, 3000)
    }, [])
    return (
        <div className='min-h-screen text-red-500 '>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <Col
                    xs={{
                        span: 5,
                        offset: 1,
                    }}
                    lg={{
                        span: 5,
                        offset: 0,
                    }}
                >
                    <img src={require('../Utils/Removal-141.png')} alt="" className={`w-[500px] -mt-[40px] hidden md:block transition ease-in-out duration-1000 ${move}`}/>
                </Col>
                <Col style={{textAlign: 'center', display: "flex", justifyContent: 'center'}}
                    xs={{
                        span: 11,
                        offset: 1,
                    }}
                    lg={{
                        span: 8,
                        offset: 2,
                    }}
                >
                    <div className='md:mt-40 mt-12 w-[500px] mx-auto text-center'>
                        <h1 className='text-5xl w-[300px] md:w-full font-bold text-gray-100 '>
                            Gravity
                        </h1>
                        <p className='text-3xl w-[300px] md:w-full text-gray-200'>
                            Connected Friends And Family
                        </p>
                        <p className='text-[22px] w-[300px] md:w-full text-gray-300'>
                            The term social media networking refers <br/> to the use
                            of internet-based social media <br/> sites to stay connected
                            with friends family, <br/> colleagues, customers, or clients
                        </p>
                    </div>
                </Col>
                <Col
                    xs={{
                        span: 5,
                        offset: 1,
                    }}
                    lg={{
                        span: 5,
                        offset: 2,
                    }}
                >
                    <img src={require('../Utils/Removal-141.png')} alt="" className={`w-[500px]  hidden md:block -mt-[40px] transition ease-in-out duration-1000 ${move2}`}/>
                </Col>
            </Row>
        </div>
    );
}

export default Landing;