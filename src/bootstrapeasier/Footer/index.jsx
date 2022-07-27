import React from "react";

export default function Footer() {
    
    return <div className="container-fluid" style={{height:150,background:'rgb(136,136,136)',color:'rgb(104,104,104)'}}>
        <div className="footer container-fluid  py-3" style={{background:'rgb(136,136,136)',color:'rgb(104,104,104)'}}>
            <p>@ comapny 2022</p>
            <hr style={{background:'rgb(136,136,136)',height:'3px'}} />
            <div className="footerUnder d-flex justify-content-between">
                <div className="withIcon d-flex align-items-center">
                    <i class="bi bi-person-bounding-box h3 mx-2"></i>
                    
                    <h4>Hamza Gorcevic</h4>
                </div>
                <div className="Ikonice d-flex justify-content-between" style={{fontSize:25,width:100}}>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>

                </div>
            </div>
        </div>

    </div>
}