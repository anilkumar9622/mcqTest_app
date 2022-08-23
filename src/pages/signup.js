import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Alert, Button, Form, Input, Modal, Select, Upload } from 'antd';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;



const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 8,
      offset: 4,
    },
  },
};

const App = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    setIsModalVisible(false);
    console.log('Failed:', errorInfo);
  };

  const onFinish = async (values) => {
    try {
      const result = await axios.post('https://online-quiz-be.herokuapp.com//signup', values)
      // navigate("/signin")
      setIsModalVisible(true);
      // }
    } catch (err) {
      console.log("err", err.message,)

    }

    console.log('Received values of form: ', values);

  };
  const [data, setData] = useState()
  const getData = async (event) => {
    await axios.get(`https://online-quiz-be.herokuapp.com/find`)
      .then(res => {
        setData(res);
      }).catch(err => console.log(err))
    // console.log("sss",data?.length._id);
  }


  const r = data?.data
  var lastEle = r?.data
  const d = lastEle?.[lastEle?.length - 1]
  var _id = d?._id
  // console.log(ref.current.id);
  // console.log("da", _id)
  const [errMsg, setErrMsg] = useState()
  const onSubmit = async (value) => {
    try {
      const d = await axios.patch(`https://online-quiz-be.herokuapp.com/otp_verification?_id=${_id}`, value);
      navigate("/login")
      console.log('otp: ', d);
    } catch (err) {
      setErrMsg("OTP is incorrect")
      console.log("err", err.message)
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {

    getData();
    getData();
    setIsModalVisible(true);
  };
  useEffect(() => {
    getData();

  }, [isModalVisible])

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const handleCancel1 = () => {

  //   setIsModalVisible(false);

  // };



  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


  const notify = () => toast.success("You has been successfully registered");

  return (
    <>

      <div style={{ height: '3.5rem', background: '#f0f7cd', display: 'flex', justifyContent: "center", alignItems: 'center' }}><div>
        {/* <img src={img} style={{width:'2rem'}}/> */}
        <h2>Registration Form</h2> </div>
      </div>
      <div style={{ dispaly: 'flex', background: '' }}>
        <div style={{ marginTop: '2rem', marginLeft: '20rem', background: '' }}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{

              prefix: '+91',
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label="Condidate name"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item> */}


            <Form.Item
              name="addressprov"
              label="Address"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>



            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
                // addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  required: true,
                  message: 'Please input your age',
                },
              ]}
            >
              <Input
                // addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>



            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: 'Please select gender!',
                },
              ]}
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="category"
              label="category"
              rules={[
                {
                  required: true,
                  message: 'Please select category!',
                },
              ]}
            >
              <Select placeholder="select your category">
                <Option value="General">General</Option>
                <Option value="OBC">OBC</Option>
                <Option value="SC">SC</Option>
                <Option value="ST">ST</Option>
              </Select>
            </Form.Item>


            <Modal title="OTP Verification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "2rem" }}>
                {errMsg ? <Alert message={errMsg} type="error" showIcon closable style={{ marginBottom: '1rem' }} /> : null}
                <Alert
                  // message="Success Text"
                  description="We've sent a verification code to your mobile number "
                  type="success"
                />
                {/* <p>Enter OTP:</p> */}
                <Form
                  // {...formItemLayout}
                  form={form2}
                  name="submit"
                  onFinish={onSubmit}
                >
                  <Form.Item
                    name="otp"
                    // label="Enter OTP:"

                    rules={[
                      {
                        required: true,
                        message: 'Please input your OTP',
                      },
                    ]}
                  // style={{marginLeft:'-6rem'}}
                  >
                    <Input
                      // addonBefore={prefixSelector}
                      placeholder="Enter OTP"
                      style={{
                        width: '100%', marginRight: '6rem'
                      }}
                      onClick={getData}
                    />
                  </Form.Item>
                  <Form.Item
                    // {...tailFormItemLayout} 
                    style={{ marginLeft: '5.4rem' }}
                  >
                    <Button type="primary" htmlType="submit" 
                    // onClick={() => { toast.success("You has been successfully registered"); }}
                      >
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Modal>
            <ToastContainer position="top-center" />
            {/* <Form.Item label="Upload" valuePropName="fileList">
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item> */}
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
            <p style={{ textAlign: '', margin: '-1rem 11rem', marginRight: '16rem', }}>You have already an account <Link to='/login'>login</Link></p>
          </Form>
        </div>

      </div>
    </>
  );
};

export default App;