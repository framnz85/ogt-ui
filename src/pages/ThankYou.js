import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Button } from 'antd';

import Header from './components/Header';

import Prosperity from "../images/prosperity.png";

const ThankYou = () => {
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
            <Header title="Online Grocery Training" />
            <div align="center" style={{padding: "2px 10px 10px 10px"}}>
                <div align="center" style={{backgroundColor: "#fff", width: isMobile ? "100%" : 860, marginTop: 40, padding: 30, fontSize: 18}}>
                    <h2>Thank You For Enrolling</h2><br />
                    <b>YOUR PASSWORD</b><br />
                    {mcid === 0 ?
                        <div>
                            We have just sent you a link to your email containing the pre-defined password for your Free Training. Kindly check it in your email's inbox or you may also see it in the spam/junk folder or in the promotional tab.
                        </div> :
                        <div>
                            Click mo yung button sa baba. Ime-message ko yung password mo.<br /><br />
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ width: 500, height: 60, fontSize: 24 }}
                                onClick={() => window.open("https://m.me/startonlinegrocery?ref=ogt--" + process.env.REACT_APP_ESTORE_URL)}
                            >
                                Click Here, Message ko sayo yung password!
                            </Button>
                        </div>
                    }
                    <br /><br />
                </div>
            </div>
        </div>
    );
}
 
export default ThankYou;