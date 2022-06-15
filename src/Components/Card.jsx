import { LikeOutlined, CommentOutlined, ShareAltOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {Avatar, Card, Image} from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {allPosts} from "../features/posts/postsSlice";
import {deletePost} from '../features/posts/postsSlice'
import {Link} from "react-router-dom";
const Cards = () => {
    const data = useSelector(allPosts)
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
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
                        <div className='-mt-3'>
                        <Avatar style={{width: 50, height: 50}} src={value.img} />
                        </div>
                        <div className='text-xl flex justify-between w-full mb-8'>
                        <div>
                            {value.user}
                        </div>
                            <div className='space-x-2'>
                        <button onClick={()=>dispatch(deletePost({id: value.id}))}>
                            <DeleteOutlined  className='text-2xl hover:bg-red-700 rounded-full p-2'/>
                        </button>
                            <Link to={`/edit-post/${value.id}`}  className='text-2xl text-white hover:bg-blue-700 rounded-full px-2 pb-2'>
                            <EditOutlined />
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-xl'>{value.content}</div>
                </div>
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
                        <CommentOutlined className='text-2xl hover:bg-orange-500 rounded-full p-2 hover:cursor-pointer'/>
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
