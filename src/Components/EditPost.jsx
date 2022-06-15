import React, {useEffect, useState} from 'react';
import {Avatar, Card, Col, Image, Input} from "antd";
import {allPosts, deletePost, updatePost} from "../features/posts/postsSlice";
import {CommentOutlined, DeleteOutlined, LikeOutlined, ShareAltOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
function EditPost(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {postId} = useParams()
    const posts = useSelector(allPosts)
    const [post, setPost] = useState({})
    const [editAuthor, setEditAuthor] = useState('')
    const [editContent, setEditContent] = useState('')
    const [editImage, setEditImage] = useState('')
    const canSave = Boolean(editAuthor) && Boolean(editContent)
    useEffect(() => {
        window.scrollTo(0, 0)
        setPost(posts.filter((p) => p.id == postId))
    }, [postId]);

    useEffect(()=>{
        setEditAuthor(post[0]?.user)
        setEditContent(post[0]?.content)
        setEditImage(post[0]?.img)
    }, [post])
    const onDeletePost = () =>{
        dispatch(deletePost({id: post[0]?.id}))
            navigate('/')
    }
    const onSavePost = () =>{
        canSave&&
        dispatch(updatePost({id: postId, user: editAuthor, content: editContent, img: editImage || 'https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg'} ))
    }
    if (post === null){
        navigate('/')
    }
    else
    return (
        <Col
            xs={24}
            sm={24}
            md={18}
            lg={11}>
            <h1 className='text-white text-5xl text-center mt-1'>
                Edit Post
            </h1>
            <Card
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
            >
                <div className='w-full mb-4'>
                    <div className='flex space-x-4'>
                        <div className='-mt-3'>
                            <Avatar style={{width: 50, height: 50}} src={editImage} />
                        </div>
                        <div className='text-xl flex justify-between w-full mb-8'>
                            <div>
                                <label>Author:</label>
                                <Input value={editAuthor} onChange={e=> setEditAuthor(e.target.value)}/>
                            </div>
                            <div className={'flex items-center'}>
                                <button onClick={onDeletePost}>
                                    <DeleteOutlined  className='text-2xl hover:bg-red-700 rounded-full p-2 hover:cursor-pointer'/>
                                </button>
                            <button onClick={onSavePost} className='rounded-xl bg-blue-700 px-9 py-2 hover:bg-blue-600'>
                                Save
                            </button>
                            </div>
                        </div>
                    </div>
                    <label>Content:</label>
                    <Input.TextArea
                        value={editContent} onChange={e=>setEditContent(e.target.value)}/>
                </div>
                <div className='flex justify-center'>
                    <Image
                        style={{objectFit: 'cover ', width: 300, height: 340}}
                        src={editImage}
                    />
                </div>
                <label>Image URL:</label>
                    <Input value={editImage} onChange={e=>setEditImage(e.target.value)}/>
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
        </Col>
    );
}

export default EditPost;