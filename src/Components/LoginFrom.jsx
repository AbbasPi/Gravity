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
        <div className="w-full sm:w-[600px] mx-auto my-12 bg-black rounded-2xl">
            <Form
                size={"large"}
                className='rounded-2xl' style={{padding:50}}
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
                        style={{borderRadius: '10px', border: `2px solid ${formik.touched.email && formik.errors.email ? 'red' : 'white'}`}}
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
                        style={{borderRadius: '10px', background: 'black', border: `2px solid ${formik.touched.email && formik.errors.email ? 'red' : 'white'}` }}
                    >
                    </Input.Password>
                    {formik.touched.password && formik.errors.password && (
                        <span className='text-red-400'>{formik.errors.password}</span>
                    )}
                </Form.Item
                >
                <Form.Item>
                    <Button style={{borderRadius: 8, background: 'red', border: "none"}} className='ml-0 sm:ml-[116px]' type={"primary"}  htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
    );

};

export default LoginForm;
