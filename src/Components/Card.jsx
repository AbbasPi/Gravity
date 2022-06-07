import { LikeOutlined, CommentOutlined, ShareAltOutlined   } from '@ant-design/icons';
import {Avatar, Card, Image, Skeleton, Switch} from 'antd';
import React, {useEffect, useState} from 'react';
const { Meta } = Card;

const Cards = () => {
    const data = [
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
        {title: 'Card title', description: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
    ]



    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {
                data.map((value, index)=>{
                    return(
            <Card
                style={{
                    width:' 90%',
                    marginTop: 16,
                    marginInline: "auto",
                    background: "black",
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '20px',
                    position: 'relative'
                }}
                loading={loading}
            >

                <Meta
                    style={{display: 'flex', marginBottom: 20}}
                    avatar={<Avatar style={{marginRight: 12}} src={value.img} />}
                      title={value.title}
                      description={value.description}
                      prefixCls={'text-white '}
                />
                <div className='flex justify-center'>
                    <Image
                        style={{objectFit: 'cover ', width: 300, height: 340}}
                        src={value.img}
                    />
                </div>
                <div className='flex w-[70%] mx-auto mt-4 justify-between'>
                    <div>
                        <LikeOutlined className='text-2xl hover:bg-blue-700 rounded-full p-2 hover:cursor-pointer'/>
                    </div>

                    <div>
                        <CommentOutlined className='text-2xl hover:bg-red-700 rounded-full p-2 hover:cursor-pointer'/>
                    </div>
                    <div>
                        <ShareAltOutlined className='text-2xl hover:bg-green-700 rounded-full p-2 hover:cursor-pointer' />
                    </div>
                </div>
            </Card>

                        )
                })
            }
        </>
    );
};

export default Cards;
