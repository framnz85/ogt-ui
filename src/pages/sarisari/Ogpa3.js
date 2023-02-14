import React, { useState, useEffect } from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { isMobile } from 'react-device-detect';
import { toast } from 'react-toastify';
import axios from 'axios';

import TimerHeader from '../components/TimerHeader';
import TimerContent from '../components/TimerContent';
import Ogpa3Content from '../components/Ogpa3Content';

import Sarisari from "../../images/sarisari.jpg";

const WithTindahan = () => {
    const queryParams = new URLSearchParams(window.location.search);

    const [bodyStyle, setBodyStyle] = useState({ backgroundImage: `url(${Sarisari})` });
    const [showButton, setShowButton] = useState(false);
    const [amount, setAmount] = useState(0);
    const [mcid, setMcid] = useState(0);
    const [timer, setTimer] = useState({
        days: 0, hours: 0, minutes: 0, seconds:0
    });

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
        setBodyStyle({ ...bodyStyle, height: document.body.scrollHeight });
        startCountdown();
        getOgpaDetails();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const startCountdown = () => {
        let count = 420;
        var x = setInterval(function() {
            count--;
            if (count < 0) {
                setShowButton(true);
                clearInterval(x);
            }
        }, 1000);
    }

    const getOgpaDetails = async () => {
        const ogpa = await axios.get(process.env.REACT_APP_API + "/ogpa");
        if (ogpa.data.err) {
            toast.error(ogpa.data.err);
        } else {
            setAmount(ogpa.data.amount);
        }
    }

    const handleButtonClick = async () => {
        try {
            if(mcid) {
                await axios.get(process.env.REACT_APP_API + "/manychat/" + mcid + "/content20221004105543_802719");
            }
            window.location.href = `/ogpaform${mcid ? "?mcid=" + mcid : ""}`;
        } catch (error) {
            window.location.href = `/ogpaform${mcid ? "?mcid=" + mcid : ""}`;
        }
    }
    
    return (
        <div style={bodyStyle}>
            <TimerHeader title="Watch the video below before this time ends..." timer={timer} setTimer={setTimer} />
            <div align="center" style={{padding: isMobile ? "10px" : "20px"}}>
                <div style={{ backgroundColor: "#fff", width: isMobile ? "100%" : 1200, padding: isMobile ? "20px" : "40px", borderRadius: 8 }}>     
                    <h4>Carefully Watch The Video First Below</h4>
                    <div align="center" style={{ padding: 20 }}>
                        <div style={{ width: isMobile ? "100%" : 860, height: isMobile ? "100%" : 485, backgroundColor: "#666" }}>
                            <iframe
                                title="Online Grocery Workshop"
                                src="https://player.vimeo.com/video/748312936?h=fed9201c2a&autoplay=1"
                                width={isMobile ? "100%" : "860px"}
                                height={isMobile ? "100%" : "485"}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                            />
                        </div>
                    </div>
                    {showButton && <div align="center" style={{padding: 20}}>
                        <div style={{ width: isMobile ? "100%" : 860, backgroundColor: "#fff" }}>
                            <div style={{fontSize: 24}}>Total Amount: <b>₱{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b></div><br/>
                            <button
                                type="button"
                                className="btn-primary btn-lg"
                                style={{ fontSize: isMobile ? 20 : 30, padding: isMobile ? "15px 40px" : "15px 80px", marginBottom: 20 }}
                                onClick={() => handleButtonClick()}
                            >
                                Click Here To ENROLL <RightCircleOutlined />
                            </button>
                        </div>
                    </div>}
                    <div align="left">
                        <Ogpa3Content handleButtonClick={handleButtonClick} amount={amount} />
                    </div>
                    {showButton && <div align="center">
                        <div style={{ width: isMobile ? "100%" : 860, backgroundColor: "#fff" }}>
                            <TimerContent title="Registration will End in..." timer={timer} />
                            <div style={{ fontSize: 24 }}>Total Amount: <b>₱{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b></div><br />
                            <button
                                type="button"
                                className="btn-primary btn-lg"
                                style={{ fontSize: isMobile ? 20 : 30, padding: isMobile ? "15px 40px" : "15px 80px", marginBottom: 20 }}
                                onClick={() => handleButtonClick()}
                            >
                                Click Here To ENROLL <RightCircleOutlined />
                            </button>
                        </div>
                        <br /><br />
                    </div>}
                </div>
            </div>
        </div>
    );
}
 
export default WithTindahan;