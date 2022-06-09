import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "antd";

function Footer(props) {
    let whoarewe =[
        'About us',
        'Contact us',
        'Ads',
    ]
    let cus_service = [
        'Follow up',
        'Our Policy',
        'Privacy policy',
    ]
    return (
        <Row className='bg-black h-[40vh] w-full'>
            <Col span={12}>
            <Link to='/'>
                <p className='uppercase text-[40px] sm:text-[60px] transform transition duration-500 md:text-[100px] pt-20 text-gray-400 hover:text-gray-200 transform transition duration-300 text-center'>Gravity</p>
            </Link>
            </Col>
            <Col span={2}/>
            <Col span={3}>
                <div className='mt-28'>
                    <h2 className="text-left mb-2 text-sm font-semibold text-white uppercase">
                        who are we
                    </h2>
                    <ul className="flex flex-col items-start justify-start text-gray-300">
                        {whoarewe.map((item, index)=>{
                            return <li key={index}>
                                <Link to="/" className="uppercase text-gray-400 hover:text-gray-200 text-sm">
                                    {item}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </Col>
            <Col span={3}>
                <div className='mt-28'>
                    <h2 className="text-left mb-2 text-sm font-semibold text-white uppercase">
                        services
                    </h2>
                    <ul className="flex flex-col items-start justify-start text-gray-300">
                        {cus_service.map((item, index)=>{
                            return <li key={index}>
                                <Link to="/" className="uppercase text-gray-400 hover:text-gray-200 text-sm">
                                    {item}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </Col>
            <Col span={2}/>
        </Row>
    );
}

export default Footer;