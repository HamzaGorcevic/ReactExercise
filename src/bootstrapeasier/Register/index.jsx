import React, { useState } from "react";
  import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Register() {

    return <div className="aboutMain contianer d-flex align-items-center justify-content-center flex-column">
        <div className="withIcon d-flex align-items-center justify-content-center flex-column mb-5" style={{color:'white',fontSize:25,width:200}}>
            <div className="signUp d-flex"><h1 style={{fontSize:45}} className={'signUpContent'}>Sign up</h1></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="plane bi bi-airplane-fill" viewBox="0 0 16 16">
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
            </svg>
            
        </div>
        <div className="reigsterInputs mt-5 d-flex">
            <div className="loginAndName d-flex flex-column">
                <input className="inputReg" type="text" placeholder="Your name *" />
                <input className="inputReg" type="text" placeholder="Your surname *" />
                <input type="date" className="inputRegDate inputReg"/>
            </div>
            <div className="emailInputs d-flex flex-column">
                <input className="inputReg" type="text" placeholder="Your email *" />
                <input className="inputReg" type="password" placeholder="Your password *" />
                <input className="inputReg" type="password" placeholder="Repeat password *" />


            </div>

        </div>
            <div class="form-group form-check d-flex align-items-center" style={{float:'right'}}>
                <input type="checkbox" style={{width:15,height:15}} className=" form-check-input" id="exampleCheck1"/>
            <label className="text-white h6 form-check-label" for="exampleCheck1">I agree all statements in</label>
            <li className="terms h6 font-weight-bold my-0">Terms of service</li>
            </div>

            <button className="registerBtn btn btn-outline-primary border-primary text-light" style={{border:'2px solid'}}>Register</button>
    </div>
}