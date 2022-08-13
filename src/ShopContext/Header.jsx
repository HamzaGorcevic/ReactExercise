import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import HomePage from "./HomePage";
export default function Header() {
    const { one } = useContext(Cart)

    
    return <div className="container-fluid bg-dark text-light d-flex justify-content-around h3 p-3 align-items-end" style={{height:'20vh'}}>
        <Link style={{textDecoration:'none',color:'orange'}} to={'/'}>Home</Link>

        <Link style={{ textDecoration: 'none', color: 'orange' }} to={'/about'}>{`Shop List   {${one.length}}`}</Link>

    </div>
}