import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;



const FormCompomemt = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email.match('[a-z0-9]+@[a-z0-9]+.[a-z]{2,}')){
           alert("please write valid email")
        }
    }
    return (
        <Form name='demo' className='form-container'>
            <h3>Contact Us</h3>
            <h1>Book an AppointMent</h1>
            <h2>Make An Appointment</h2>
            <div className="name-container">
                <Form.Item className='name'
                    label="Name"
                    name="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input placeholder='Full name' className='input' value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Enter Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please type valid email!',
                        },
                    ]}>
                    <Input placeholder='Email' value={email} className='input' onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>
            </div>
            <div className='slot'>
                <Form.Item
                    name="slot"
                >
                    <Select
                        placeholder="please select"
                        onChange={() => { }}
                        allowClear
                        className='slot-option'
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>

                </Form.Item>
                <Form.Item>
                    <Select
                        placeholder="4:00 Avaialble"
                        onChange={() => { }}
                        allowClear
                    >
                        <Option value="4am">4:00 Avaialble</Option>
                        <Option value="5am">5:00 Avaialble</Option>
                        <Option value="6am">6:00 Avaialble</Option>
                    </Select>
                </Form.Item>
            </div>
            <Form.Item
                name="message"
               className='msg-box'
            >
                <TextArea rows={4}  />
            </Form.Item>
            <Form.Item  >
                <Button type="primary" onClick={handleSubmit}>Book Appointment</Button>
            </Form.Item>
        </Form>
    )
}

export default FormCompomemt