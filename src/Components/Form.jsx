import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Button, DatePicker, Form, Input, InputNumber, Select} from 'antd'
import 'antd/dist/antd.css';
import FormItemLabel from "antd/es/form/FormItemLabel";

const Forms = () => {
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
        <div className="xl:w-[600px] w-full mx-auto ">
            <Form
                size={"large"}
                className='border border-white w-full rounded-2xl' style={{padding:50}}
                name="register"
                  onFinish={formik.handleSubmit}>
            <h1 className='text-5xl mb-12 text-center text-white'>Register</h1>
                {
                    fieldName.map((value, index)=>{
                        let x = value.name
                        return(
                            <Form.Item
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
                    wrapperCol={{
                        offset: 20,
                        span: 0,
                    }}>
                    <Button style={{borderRadius: 8, background: 'red', border: "none"}} type={"primary"}  htmlType="submit">Sign Up</Button>
                </Form.Item>
        </Form>
        </div>
    );

};

export default Forms;
