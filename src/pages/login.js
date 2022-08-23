import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const App = () => {

  const [msg, setMsg] = useState()
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const result = await axios.post('http://localhost:4041/signin', values)

      const d = result?.data;
      localStorage.setItem("token", d?.token)
      console.log('Success:', d);
      navigate('/instruction')

    } catch (err) {
      setMsg("Incorrect email id and password");
      // setMsg(false)
    }


  };
  console.log("msg", msg)
  // console.log("dd", success)


  return (
    <>
      <div style={{ height: '3.5rem', background: '#f0f7cd', display: 'flex', justifyContent: "center", alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}> <h1>Wrocus Digital ION </h1></div>
      <div style={{ background: '#faf8f7', height: '91vh', gap: '2rem', position: 'relative', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}>
        <div style={{
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
          marginTop: '4rem', background: 'white', border: '1px solid #ddd', borderRadius: ".8rem", padding: '2rem', width: '36%', marginLeft: '27rem',
          display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', flexDirection: 'column'
        }}>
          {msg ? <Alert message={msg} type="error" showIcon closable style={{ marginBottom: '1rem' }} /> : null}
          <h1>Wrocus NQT Login</h1>
          <p style={{ textDecoration: 'underline', fontWeight: '500' }}>IMPORTANT NOTE</p>
          <p style={{ marginTop: '-1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Please use your valid registration email id and password</p>
          <Form

            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}

            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 20,
              }}
            >
              <Button type="submit" htmlType="submit" style={{ background: '#198754', color: 'white' }}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default App;