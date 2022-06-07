import React from 'react';
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <nav className='static top-0 bg-black'>
            <div className='flex justify-between items-center' >
                <Link to={'/'} className='flex items-center -space-x-6'>
                <img src={require('../Utils/Removal-141.png')} alt='logo' className='w-36 hover:cursor-pointer inline'/>
                <span className='text-gray-100 hidden md:block text-4xl items-center'>
                    GRAVITY
                </span>
                </Link>
                {/*<div className='hidden md:flex flex space-x-2 ml-24'>*/}
                {/*    <div className={'w-8 h-8 bg-red-600 rounded-full opacity-60'}/>*/}
                {/*    <div className={'w-8 h-8 bg-red-600 rounded-full opacity-80'}/>*/}
                {/*    <div className={'w-8 h-8 bg-red-600 rounded-full opacity-90'}/>*/}
                {/*    <div className={'w-8 h-8 bg-red-600 rounded-full opacity-100'}/>*/}
                {/*</div>*/}
                <ul className='flex space-x-4 text-gray-100 text-xl justify-end mr-8 pt-3   '>
                    <Link to={'/signup'} className='hover:cursor-pointer text-gray-100 hover:text-gray-300'>Connect</Link>
                    <Link to={'/posts'} className='hover:cursor-pointer text-gray-100 hover:text-gray-300'>Explore</Link>
                    <Link to={'/about'} className='hover:cursor-pointer text-gray-100 hover:text-gray-300'>About</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;