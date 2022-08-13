import React, { useContext, useState } from "react";
import { Cart } from "../Context";

export default function Filter() {
    const [check,setCheck] = useState(true)
    const { one, products, setProducts, filtered, setFiltered } = useContext(Cart)

    function Men(ctg) {
        check ? setProducts(products.filter((e) => e.category === ctg)) : setProducts(filtered) 
        setCheck(!check)
    }

    return <div className="bg-dark text-light h3 p-2" style={{height:'99vh',position:'absolute',width:300}}>
        <h2 className="text-warning">Chose category</h2>
        <div style={{height:3,background:'orange',marginBottom:20}}></div>
        <label htmlFor="men"onClick={(e) => {Men(e.target.innerText)}}>men's clothing</label>
            <input style={{width:20,height:20,margin:10}} type="checkbox" name=""  id="men" />
            <label  htmlFor="jeweley" onClick={(e)=>{Men(e.target.innerText)}}>jewelery</label>
            <input style={{width:20,height:20,margin:10}} type="checkbox" value={'jewlery'} name="" id="jeweley" />
            <label htmlFor="women" onClick={(e)=>{Men(e.target.innerText)}}>women's clothing</label>
            <input style={{width:20,height:20,margin:10}} type="checkbox" name="" id="women" />
            <label htmlFor="computer" onClick={(e)=>{Men(e.target.innerText)}}>electronics</label>
            <input style={{width:20,height:20,margin:10}} type="checkbox" name="" id="computer" />
        
        

    </div>
}