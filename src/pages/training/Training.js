import React, {useState, useEffect} from 'react';
import { isMobile } from 'react-device-detect';
import ReactPlayer from 'react-player/vimeo';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

import Header from '../components/Header';
import LessonNav from './LessonNav';

import Prosperity from "../../images/prosperity.png";

const initialState = {
    title: "Introduction",
    vimeoId: "755358440",
    link: "https://ogt.clavstore.com/ogpa",
    linkDesc: "Learn More HERE"
}

const Training = () => {
    const navigate = useNavigate();
    
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        let userid = 0;
        if (localStorage.getItem("user")) {
            userid = JSON.parse(localStorage.getItem("user"));
        }
        if(userid === 0) navigate("/login");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            style={{ backgroundImage: `url(${Prosperity})`, height: document.body.scrollHeight }}
        >
            <Header title="Online Grocery Training" />
            <div className="container mt-3 mb-5">
               <div className="row">
                    <div className="col-m-2 bg-white" style={{borderRadius: 4, margin: isMobile ? "0 0 15px 15px" : 0}}>
                        <LessonNav setValues={setValues} />
                    </div>

                    <div className="col-md-8 bg-white" style={{width: isMobile ? "100%" : 850, borderRadius: 4, marginLeft: isMobile ? 0 : 15}}>
                        <div align="center" style={{padding: "0 20px"}}>
                            <div style={{ padding: "20px", fontSize: 20 }}>
                                <b>{values.title}</b>
                                <div align="center" style={{ padding: 10 }}>
                                    <div style={{ width: isMobile ? "100%" : 650, height: 366, backgroundColor: "#666" }}>
                                        <ReactPlayer
                                            url={`https://vimeo.com/${values.vimeoId}`}
                                            width={isMobile ? "100%" : "650px"}
                                            height="366px"
                                            controls={true}
                                        />
                                    </div>
                                </div><br />
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ width: 500, height: 60, fontSize: 24 }}
                                    onClick={() => window.open(values.link)}
                                >
                                    {values.linkDesc}
                                </Button>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Training;