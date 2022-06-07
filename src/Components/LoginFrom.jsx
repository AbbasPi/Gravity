import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Button, DatePicker, Form, Input, InputNumber, Select} from 'antd'
import 'antd/dist/antd.css';
import FormItemLabel from "antd/es/form/FormItemLabel";

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: ((values)=>{
            console.log(values);
        }),

        validationSchema: Yup.object({
            email: Yup.string()
                .label('Email')
                .email()
                .required(),
            password: Yup.string()
                .label('Password')
                .required()
                .min(6, 'Password must be at least 6 characters')
                .max(40, 'Password must not exceed 40 characters'),
        })
    })
    return (
        <div className="xl:w-[600px] md:w-[400px] w-full mx-auto mt-16 ">
            <Form
                size={"large"}
                className='border border-white rounded-2xl' style={{padding:50}}
                name="login"
                onFinish={formik.handleSubmit}>
            <h1 className='text-5xl mb-12 text-center text-red-700'>Log In</h1>
                <Form.Item
                    label={<label style={{ color: "white" }}>E-mail</label>}
                    required
                    colon={false}
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    >
                    <Input
                        name={'email'}
                        placeholder={'Enter Your E-mail'}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        style={{borderRadius: '10px', border: '2px solid white'}}
                    >
                    </Input>
                    {formik.touched.email && formik.errors.email && (
                        <span className='text-red-400'>{formik.errors.email}</span>
                    )}
                </Form.Item>
                <Form.Item
                    label={<label style={{ color: "white" }}>Password</label>}
                    required
                    colon={false}
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}>
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
                </Form.Item
                >
                <Form.Item
                    wrapperCol={{
                    offset: 16,
                    span: 0,
                }}>
                <Button style={{borderRadius: 8, background: 'red', border: 'none'}} type={"primary"}  htmlType="submit">Log In</Button>
                </Form.Item>
            </Form>
        </div>
    );

};

export default LoginForm;
