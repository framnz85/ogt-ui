import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import Header from '../components/Header';

import Prosperity from "../../images/prosperity.png";

const Register = () => {
    const queryParams = new URLSearchParams(window.location.search);

    const [name, setName] = useState(localStorage.getItem("name"));
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [dayreg2, setDayreg2] = useState(0);
    const [mcid, setMcid] = useState(0);

    useEffect(() => {
        const d = new Date();
        setDayreg2(d.getDay());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            <div align="center">
                <div align="center" style={{backgroundColor: "#fff", width: isMobile ? "100%" : 860, marginTop: 20, padding: 30, fontSize: 18, borderRadius: 6}}>
                    <h3>Please Confirm Your Details</h3>

                    <form method="post" className="af-form-wrapper" acceptCharset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl"  >
                        <div style={{display: "none"}}>
                            <input type="hidden" name="meta_web_form_id" value="760964958" />
                            <input type="hidden" name="meta_split_id" value="" />
                            <input type="hidden" name="listname" value="awlist5387739" />
                            <input type="hidden" name="redirect" value={`https://ogt.clavstore.com/thankyou${mcid ? "?mcid=" + mcid : ""}`} id="redirect_a8fa8fa634d135fd97c39bdd4c970226" />
                            <input type="hidden" name="meta_redirect_onlist" value={`https://ogt.clavstore.com/thankyou${mcid ? "?mcid=" + mcid : ""}`} />
                            <input type="hidden" name="meta_adtracking" value="OGPA_Reserve_-_Pure" />
                            <input type="hidden" name="meta_message" value="1" />
                            <input type="hidden" name="meta_required" value="name,email" />
                        </div>
                        <div id="af-form-760964958" className="af-form">
                            <div id="af-body-760964958" className="af-body af-standards">
                                <div className="af-element">
                                    <label className="previewLabel" htmlFor="awf_field-114786912">Full Name: </label>
                                    <div className="af-textWrap">
                                        <input id="awf_field-114786912" type="text" name="name" className="text" value={name} tabIndex="500" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="af-clear"></div>
                                </div>
                                <div className="af-element">
                                    <label className="previewLabel" htmlFor="awf_field-114786913">Active Email: </label>
                                    <div className="af-textWrap">
                                        <input className="text" id="awf_field-114786913" type="text" name="email" value={email} tabIndex="501" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="af-clear"></div>
                                </div>
                                <div className="af-element">
                                    <label className="previewLabel" htmlFor="awf_field-114786914"></label>
                                    <div className="af-textWrap">
                                        <input type="text" id="awf_field-114786914" className="text" name="custom dayreg2" value={dayreg2} tabIndex="502" style={{border: "#fff", color: "#fff", fontSize: "1px", height: 0, padding: 0, margin: 0}} readOnly />
                                    </div>
                                    <div className="af-clear"></div>
                                </div>
                                <div className="af-element">
                                    <label className="previewLabel" htmlFor="awf_field-114795079"></label>
                                    <div className="af-textWrap">
                                        <input type="text" id="awf_field-114795079" className="text" name="custom mcid" value="" tabIndex="503" style={{border: "#fff", color: "#fff", fontSize: "1px", height: 0, padding: 0, margin: 0}} readOnly />
                                    </div>
                                    <div className="af-clear"></div>
                                </div>
                                <div className="af-element tag" style={{display: "none"}}>
                                    <input id="awf_tag-114794141" type="hidden" name="tag_114794141" value="free_training" />
                                </div>
                                <div className="af-element buttonContainer">
                                    <input name="submit" className="submit" type="submit" value="Confirm" tabIndex="503" />
                                    <div className="af-clear"></div>
                                </div>
                                <div className="af-element privacyPolicy" style={{textAlign: "center"}}>
                                    <p>We respect your <a title="Privacy Policy" href="https://www.aweber.com/permission.htm" target="_blank" rel="noreferrer">email privacy</a></p>
                                    <div className="af-clear"></div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "none"}}><img src="https://forms.aweber.com/form/displays.htm?id=7GwMnGwsnKwc" alt="" /></div>
                    </form>
                    <br/>
                </div>
            </div>
        </div>
    );
}
 
export default Register;