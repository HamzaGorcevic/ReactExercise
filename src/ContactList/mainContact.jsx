import React, { useState } from "react";
import ContactList from ".";

export default function Contact(props) {
    const[act,setAct] = useState(false)
    const{name,surname,email,img,age,gender,country,city} = props

    return <div className='bg-warning shadow d-flex m-3 justify-content-between px-5 py-3 rounded' style={{overflow:'hidden',height:150 }}>
        <div className="d-flex align-items-end">
            <img className="rounded-circle" src={`${img}`} alt="" />
            <div className="h-100">
                <h4>{gender}</h4>
                <h4 className="mt-5">age: {age}</h4>
            </div>
        </div>
        
        <div className="d-flex justify-content-center flex-column w-25">
            
            <h4>name: <span className="text-danger"> {name} </span></h4>
            <div className="mb-2" style={{height:2,background:'grey'}} ></div>
            <h4>surname: <span className="text-danger"> {surname} </span></h4>
            <div className="mb-2" style={{height:2,background:'grey'}} ></div>
        </div>
        <div className="d-flex flex-column w-25">
            <h4>email    : <span className="text-danger"> {email} </span></h4>
        <button className="btn btn-primary" onClick={() => {setAct(!act)}}>Show location</button>
            {act ? <h5>Location : <span className="text-danger">  {country}/{city}</span></h5> : ''}
        </div>
                
                    

            </div>
      
    

 
}