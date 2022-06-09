import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Button, DatePicker, Form, Input, InputNumber, Select} from 'antd'
import 'antd/dist/antd.css';
import FormItemLabel from "antd/es/form/FormItemLabel";
import {Link} from "react-router-dom";

const SignupForm = () => {
    const fieldName = [
        {name: 'firstName', ph: 'Enter your first name', label:'First Name', type:'text'},
        {name: 'lastName', ph: 'Enter your last name', label:'Last Name', type:'text'},
        {name: 'email', ph: 'Enter your e-mail', label:'E-mail', type:'text'},
        {name: 'country', ph: 'Enter your Country', label:'Country', type:'text'},
    ]
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            country: '',
            acceptTerms: false,
        },
        onSubmit: ((values)=>{
            console.log(values);
    }),

        validationSchema: Yup.object({
            country: Yup.string()
                .label('Country')
                .required(),
            firstName: Yup.string()
                .label('First Name')
                .required(),
            lastName: Yup.string()
                .label('Last Name')
                .required(),
            email: Yup.string()
                .label('Email')
                .email()
                .required(),
            password: Yup.string()
                .label('Password')
                .required()
                .min(6, 'Password must be at least 6 characters')
                .max(40, 'Password must not exceed 40 characters'),
            confirmPassword: Yup.string()
                .label('Confirm Password')
                .required()
                .oneOf([Yup.ref('password'), null], 'Passwords don\'t match'),
    })
        })
    return (
        <div className="w-full sm:w-[600px] mx-auto my-12 bg-black rounded-2xl">
            <Form

                size={"large"}
                className='w-full rounded-2xl' style={{padding:50}}
                name="register"
                  onFinish={formik.handleSubmit}>
            <h1 className='text-5xl mb-12 text-red-700 text-center'>Sign Up</h1>
                {
                    fieldName.map((value, index)=>{
                        let x = value.name
                        return(
                            <Form.Item
                                className='relative sm:-left-8'
                                fieldKey={index}
                                labelCol={{ span: 7 }}
                                label={<label style={{ color: "white" }}>{value.label}</label>}
                                required>
                                <Input
                                    name={x}
                                    placeholder={value.ph}
                                    onChange={formik.handleChange}
                                    value={formik.values.x}
                                    onBlur={formik.handleBlur}
                                    style={{borderRadius: '10px', border: '2px solid white'}}
                                >
                                </Input>
                                { x === 'firstName' &&
                                    formik.touched.firstName && formik.errors.firstName && (
                                    <span className='text-red-400'>{formik.errors.firstName}</span>
                                )}
                                { x === 'lastName' &&
                                    formik.touched.lastName && formik.errors.lastName && (
                                        <span className='text-red-400'>{formik.errors.lastName}</span>
                                    )}
                                { x === 'country' &&
                                    formik.touched.country && formik.errors.country && (
                                        <span className='text-red-400'>{formik.errors.country}</span>
                                    )}
                                { x === 'email' &&
                                    formik.touched.email && formik.errors.email && (
                                        <span className='text-red-400'>{formik.errors.email}</span>
                                    )}
                            </Form.Item>
                        )
                    })
                }
                <Form.Item
                    className='relative sm:-left-8'

                    labelCol={{ span: 7 }}
                    label={<label style={{ color: "white" }}>Password</label>}
                    required>
                    <Input.Password
                        name={'password'}
                        placeholder={'Create Password'}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        style={{borderRadius: '10px', border: '2px solid white', background: 'black' }}
                    >
                    </Input.Password>
                    {formik.touched.password && formik.errors.password && (
                        <span className='text-red-400'>{formik.errors.password}</span>
                    )}
                </Form.Item>

                <Form.Item
                                                    className='relative sm:-left-8'

                    labelCol={{ span: 7 }}
                    label={<label style={{ color: "white" }}>Confirm Password</label>}
                    required>
                    <Input.Password
                        name={'confirmPassword'}
                        placeholder={'Re-enter your Password'}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        onBlur={formik.handleBlur}
                        style={{borderRadius: '10px', border: '2px solid white', background: 'black' }}
                    >
                    </Input.Password>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <span className='text-red-400'>{formik.errors.confirmPassword}</span>
                    )}
                </Form.Item>
                <Form.Item
               >
                    <Button style={{borderRadius: 8, background: 'red', border: "none"}} className='ml-0 sm:ml-[116px]' type={"primary"}  htmlType="submit">Sign Up</Button>
                </Form.Item>
                <p className='text-white text-center'>You Already Have An Account? <Link to='/login'>Login</Link></p>
        </Form>
        </div>
    );

};

export default SignupForm;
