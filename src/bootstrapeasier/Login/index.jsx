import React from "react";

export default function Login() {
    return <div className="loginMain d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex align-items-center flex-column" style={{ marginBottom: 100 }}>
        
                <h1 className="text-white login" style={{ fontSize: 60, marginBottom: 50 }}>Login</h1>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" className="plane bi bi-alipay" viewBox="0 0 16 16">
            <path d="M2.541 0H13.5a2.551 2.551 0 0 1 2.54 2.563v8.297c-.006 0-.531-.046-2.978-.813-.412-.14-.916-.327-1.479-.536-.303-.113-.624-.232-.957-.353a12.98 12.98 0 0 0 1.325-3.373H8.822V4.649h3.831v-.634h-3.83V2.121H7.26c-.274 0-.274.273-.274.273v1.621H3.11v.634h3.875v1.136h-3.2v.634H9.99c-.227.789-.532 1.53-.894 2.202-2.013-.67-4.161-1.212-5.51-.878-.864.214-1.42.597-1.746.998-1.499 1.84-.424 4.633 2.741 4.633 1.872 0 3.675-1.053 5.072-2.787 2.08 1.008 6.37 2.738 6.387 2.745v.105A2.551 2.551 0 0 1 13.5 16H2.541A2.552 2.552 0 0 1 0 13.437V2.563A2.552 2.552 0 0 1 2.541 0Z"/>
            <path d="M2.309 9.27c-1.22 1.073-.49 3.034 1.978 3.034 1.434 0 2.868-.925 3.994-2.406-1.602-.789-2.959-1.353-4.425-1.207-.397.04-1.14.217-1.547.58Z"/>
            </svg>
        </div>
        <form action="" className="d-flex mb-5">
            <div className="emailInp">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                
                <input type="email" className="inputReg " placeholder="Your email" />
            </div>
            
            <div className="passwordInp">
                <input type="password" className="inputReg " placeholder="Your password" />
                <i style={{fontSize:35}} className="text-white bi bi-lock-fill"></i>
                </div>
        </form>
        <button className="my-4 btn btn-outline-primary border-primary text-white" style={{border:'3px solid',width:400,height:60,fontSize:30}}>Login</button>

    </div>
}