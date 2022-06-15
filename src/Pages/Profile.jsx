import React from 'react';
import {Col} from "antd";
import Posts from "../features/posts/Posts";

function Profile(props) {
    return (
        <Col className={'h-full mt-4'}
             xs={24}
             sm={24}
             md={18}
             lg={11}
        >
            <div className='w-full'>
                <img className='h-[300px] rounded-xl w-full object-cover'
                     alt='cover' src={'https://www.researchgate.net/publication/334463945/figure/fig3/AS:966442740621320@1607429313817/Figura-3-Vincent-Van-Gogh-Trigal-com-corvos-Oleo-sobre-tela-1890.png'}/>
                {/*    Section 1   */}
                <div className='bg-black h-[380px] rounded-xl relative -top-4'>
                    <div className='relative h-44 bg-black -top-24 w-44 left-12 rounded-xl shadow shadow-gray-700'>
                        <img className='rounded-xl object-cover w-full h-full' alt='' src='https://i.pinimg.com/736x/0c/ac/43/0cac43143db225aca7785f6c6619aea7.jpg'/>
                    </div>
                    <div className='relative left-[54px] -top-16 w-10/12'>
                        <h2 className='text-white w-full  text-2xl '>
                            Abbas Salah
                        </h2>
                        <p className='md:text-xl w-full text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi culpa delectus
                        </p>
                        <p className='md:text-xl text-gray-100 w-full '>
                            Baghdad, IQ <span>&#8226;</span> 20 Years Old <span>&#8226;</span> 23 Followers
                        </p>
                    </div>
                </div>
                {/*    Section 2   */}
                <div className='bg-black h-full rounded-xl'>
                    <p className='text-white text-4xl text-center pt-4'>Posts</p>
                    <Posts profile={true}/>
                </div>
            </div>
        </Col>
    );
}

export default Profile;