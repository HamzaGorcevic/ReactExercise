import React from "react";
import { useState } from "react";

export default function Contact() {
    const [activated, setActivated] = useState('')
    function getActive() {
        setTimeout(() => {
            setActivated('activated')
            setTimeout(() => {
                setActivated('')
                
            }, 1000);
        
        }, 0)

    }

    return <div className="contactMain container-fluid bg-primary py-5" id="contact" style={{height:'80vh'}}>
        <div className="container contact d-flex flex-column bg-dark align-items-center py-3">
            <div className="iconDiv bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width:100,height:100}}>
            <i className={`bi bi-telephone-fill ikon ${activated}`} style={{color:"white",fontSize:"40px"}}></i>
        </div>
            <h3 className=""><span className="text-warning">C</span>ontact me</h3>
            <div className="contactMeForm d-flex justify-content-around w-100">
                <form action="" className="inputFields d-flex flex-column">
                    <input className="input" type="text" placeholder="Your name *" />
                    <input className="input" type="email" placeholder="Your email *" />
                    <input className="input" type="number" placeholder="Your number *" />
                    <button onClick={getActive} className="btn btn-warning text-white my-4">Send</button>
                </form>
                <form action="">
                <textarea rows={8} name="txtMsg" className="form-control inputMsg" placeholder="Your Message *"></textarea>
                </form>

            </div>
        </div>

    </div>
}