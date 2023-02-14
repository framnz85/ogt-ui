import React, { useState, useEffect } from 'react';
import { Input, Space, Button, Form } from 'antd';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';

import Header from './components/Header';

import Prosperity from "../images/prosperity.png";

const Session1 = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    useEffect(() => {
        if(localStorage.getItem("user") === "1") navigate("/training");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSubmit = async () => {
        try {
            const user = await axios.get(process.env.REACT_APP_API + "/ogt/" + email);
            if (user.data.ok) {
                if (password === "grocery") {
                    localStorage.setItem("user", "1");
                    toast.success("You are logged in!");
                    navigate(`/training${mcid ? "?mcid=" + mcid : ""}`);
                } else {
                    toast.error("Incorrect email or password");
                }
            } else {
                toast.error("Email is not yet registered");
                navigate(`/freeregister${mcid ? "?mcid=" + mcid : ""}`);
            }
        } catch (error) {
            toast.error("A login error occured");
            navigate(`/freeregister${mcid ? "?mcid=" + mcid : ""}`);
        }
    }

    return (
        <div
            style={{ backgroundImage: `url(${Prosperity})`, height: document.body.scrollHeight }}
        >
            <Header title="FREE Online Grocery Training" />
            <div align="center" style={{padding: "2px 10px 10px 10px"}}>
                <div align="center" style={{backgroundColor: "#fff", width: isMobile ? "100%" : 860, marginTop: 20, padding: 30, fontSize: 18, borderRadius: 6}}>
                    <h2>Login To OGT</h2><br />

                    <Form onFinish={() => handleSubmit()}>
                        <Space direction="vertical" style={{width: 300}}>
                            <Input
                                size="large"
                                placeholder="Email"
                                prefix={<MailOutlined />}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input.Password
                                size="large"
                                placeholder="Password"
                                prefix={<KeyOutlined />}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br/>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ width: 300, height: 40, fontSize: 18 }}
                            >
                                Login
                            </Button>
                            <Button
                                type="default"
                                style={{ width: 300, height: 40, fontSize: 18 }}
                                onClick={() => navigate(`/freeregister${mcid ? "?mcid=" + mcid : ""}`)}
                            >
                                Register
                            </Button>
                        </Space>
                    </Form>
                </div>
            </div>
        </div>
    );
}
 
export default Session1;