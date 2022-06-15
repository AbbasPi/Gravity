import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import {SettingOutlined, MessageOutlined} from "@ant-design/icons";
import AccountDropdown from "./AccountDropdown";
import {Dropdown} from "antd";
import NavDropdown from "./NavDropdown";

function Nav(props) {
    function NavLink({to, className, activeClassName, inactiveClassName, ...rest}) {
    let location = useLocation()
    let isActive = location.pathname === to
    let allClassNames = className + (isActive ? `${activeClassName}` : `${inactiveClassName}`)
    return <Link className={allClassNames} to={to} {...rest} />
    }
    return (
        <nav className='sticky z-50 bg-opacity-90 top-0 bg-black'>
            <div className='flex justify-between items-center' >
                <Link to='/' className='flex items-center -space-x-6'>
                <img src={require('../assets/logo.png')} alt='logo' className='w-32 hover:cursor-pointer inline'/>
                <span className='text-gray-100 hidden md:block text-4xl items-center'>
                    GRAVITY
                </span>
                </Link>
                <ul className='hidden md:flex space-x-8 text-gray-100 text-xl items-center justify-end pt-3'>
                    <NavLink activeClassName='text-red-600 hover:text-red-700' to='/' inactiveClassName='hover:text-red-600' className='text-gray-100 '>Home</NavLink>
                    <NavLink activeClassName='text-red-600 hover:text-red-700' to='/about' inactiveClassName='hover:text-red-600' className='text-gray-100 '>About</NavLink>
                    <NavLink activeClassName='text-red-600 hover:text-red-700' to='/contactus' inactiveClassName='hover:text-red-600' className='text-gray-100 '>Contact Us</NavLink>
                </ul>
                <ul className='flex space-x-4 text-gray-100 text-xl items-center justify-end mr-8 pt-3'>
                    <AccountDropdown/>
                    <div className='hover:text-red-600 transition duration-300 hover:cursor-pointer'>
                    <MessageOutlined className='text-2xl lg:text-3xl text-red-400'/>
                    </div>
                    <NavDropdown/>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;