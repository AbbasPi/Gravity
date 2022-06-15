import { LikeOutlined, CommentOutlined, ShareAltOutlined   } from '@ant-design/icons';
import {Avatar, Card, Image, Skeleton, Switch} from 'antd';
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {allPosts} from "../features/posts/postsSlice";
const { Meta } = Card;

const Cards = () => {
    const data = useSelector(allPosts)
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
                key={value.id}
                style={{
                    width:' 90%',
                    marginBlock: 16,
                    marginInline: "auto",
                    background: "black",
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '20px',
                    position: 'relative'
                }}
                loading={loading}
            >
                <div className='w-full mb-4'>
                    <div className='flex space-x-4'>
                        <div className='-mt-2'>
                        <Avatar size={'large'} src={value.img} />
                        </div>
                        <p className='text-xl'>
                        {value.user}
                        </p>
                    </div>
                    <div className='text-xl'>{value.content}</div>
                </div>
                {/*<Meta*/}
                {/*    style={{display: 'flex', marginBottom: 20}}*/}
                {/*    avatar={<Avatar style={{marginRight: 12}} src={value.img} />}*/}
                {/*      title={value.title}*/}
                {/*      description={value.description}*/}
                {/*      prefixCls={'text-white'}*/}
                {/*/>*/}
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
