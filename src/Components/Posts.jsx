import React, {useState} from 'react';
import {Button, Col, Input} from "antd";
import Cards from "./Card";
import {useDispatch} from "react-redux";
import {createPost} from "../features/posts/postsSlice";

function Posts({profile}) {
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const dispatch = useDispatch()
    let x = 11
    let y = 18
    let z = 24
    if (profile) {
        x = 24
        y = 24
        z = 24
    }

    const onPostAdded = ()=>{
        if (author && content){
            dispatch(createPost(author, content, image))
            setAuthor('')
            setContent('')
        }
    }
    return (
        <Col
            xs={z}
            sm={z}
            md={y}
            lg={x}
            style={{border: '2px solid #344048', height: 'auto', color:"white", background: 'black', marginBlock: '14px', borderRadius: '18px', overflow: 'hidden'}}>
            <>
                {
                 profile !== true &&
                <div  style={{ position:'relative'}}>
                    <label className='ml-3'> Author:  </label>
                    <Input  value={author} onChange={e=> setAuthor(e.target.value)}
                                     style={{background:'black', minHeight: '50px', color: 'white'}} placeholder="What's Up?"/>
                    <label className='ml-3'> Content:  </label>
                    <Input.TextArea  value={content} onChange={e=> setContent(e.target.value)}
                                     style={{background:'black', minHeight: '100px', color: 'white'}} placeholder="What's Up?"/>
                    <label className='ml-3'> Image Link:  </label>
                    <Input  value={image} onChange={e=> setImage(e.target.value)}
                                     style={{background:'black', minHeight: '60px', color: 'white'}} placeholder="What's Up?"/>
                <Button onClick={()=>onPostAdded()}
                    style={{position: "absolute", right:12, bottom: 12, zIndex: '100', borderRadius: 12, width: 100, border: "red", color:'red'}}>Post</Button>
                </div>
                }
                <div>

                </div>
            </>
            <Cards/>
        </Col>
    );
}

export default Posts;