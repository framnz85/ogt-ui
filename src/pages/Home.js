import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';

import Header from './components/Header';

import OnlineGrocery from "../images/onlinegrocery1.png";
import Prosperity from "../images/prosperity.png";

const Session1 = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    
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

    return (
        <div
            style={{ backgroundImage: `url(${Prosperity})`, height: document.body.scrollHeight }}
        >
            <Header title="Online Grocery Prosperity &amp; Abundance" />
            <div align="center" style={{padding: "40px 20px 20px 20px"}}>
                <img src={OnlineGrocery} alt="Online Grocery Training" style={ isMobile ? { width: "100%", borderRadius: 8 } : {borderRadius: 8} } />
            </div>
            <div align="center" style={{padding: "0 20px"}}>
                <div style={{ backgroundColor: "#fff", width: isMobile ? "100%" : 850, padding: "20px", fontSize: 24, borderRadius: 8 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%", height: isMobile ? 40 : 60, fontSize: isMobile ? 15 : 24, marginTop: 15 }}
                        onClick={() => navigate(`/login${mcid ? "?mcid=" + mcid : ""}`)}
                    >
                        <b>Register or Login for alt Free Training HERE</b>
                    </Button>
                </div>
            </div>
        </div>
    );
}
 
export default Session1;