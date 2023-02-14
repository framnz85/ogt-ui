import React, { useEffect, useState } from 'react';
import { Input, Space, Button, Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import axios from 'axios';

import Header from '../components/Header';

import Prosperity from "../../images/prosperity.png";

const Register = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mcid, setMcid] = useState(0);

    useEffect(() => {
        const mcidExist = queryParams.get("mcid");
        if (mcidExist) {
            setMcid(mcidExist);
            localStorage.setItem("mcid", mcidExist);
        } else {
            if (localStorage.getItem("mcid")) {
                setMcid(localStorage.getItem("mcid"));
            } else {
                setMcid(0);
                localStorage.removeItem("mcid");
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSubmit = async () => {
        if (name && email) {
            try {
                const user = await axios.post(process.env.REACT_APP_API + "/ogt", { name, email });
                if (user) {
                    navigate(`/checkregister${mcid ? "?mcid=" + mcid : ""}`);
                    localStorage.setItem("name", name);
                    localStorage.setItem("email", email);
                }
            } catch (error) {
                toast.error("An error occured");
            }
        } else {
            toast.error("There is no name or email in the form")
        }
    }

    return (
        <div
            style={{ backgroundImage: `url(${Prosperity})`, height: document.body.scrollHeight }}
        >
            <Header title="Online Grocery Training" />
            <div align="center">
                <div align="center" style={{backgroundColor: "#fff", width: isMobile ? "100%" : 860, marginTop: 20, padding: 30, fontSize: 18, borderRadius: 6}}>
                    <h2>Register For FREE</h2><br />

                    <Form onFinish={() => handleSubmit()}>
                        <Space direction="vertical" style={{width: 300}}>
                            <Input
                                size="large"
                                placeholder="Full Name"
                                prefix={<MailOutlined />}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                size="large"
                                placeholder="Email"
                                prefix={<MailOutlined />}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br/>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ width: 300, height: 40, fontSize: 18 }}
                            >
                                Register
                            </Button>
                            <Button
                                type="default"
                                style={{ width: 300, height: 40, fontSize: 18 }}
                                onClick={() => navigate(`/login${mcid ? "?mcid=" + mcid : ""}`)}
                            >
                                Login
                            </Button>
                        </Space>
                    </Form>
                    <br/>
                </div>
                    <br/>
                    <br/>
            </div>
        </div>
    );
}
 
export default Register;