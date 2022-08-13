import React, { useContext, useEffect, useState } from "react";
import { Cart } from "../Context";
import About from "./About";
export default function HomePage() {


    const { one } = useContext(Cart)
    const [price, setPrice ] = useState(0)
    let prices = 0 
    
    console.log(one.length);    
        useEffect(() => {
                setPrice(0)
            
        
        },[one.length === 0])
        
    useEffect(() => {
        for (let i = 0; i < one.length; i++){
            prices +=Number(one[i].price) 
            setPrice(prices)            
        }
    }, [one])

    
    return <div className="d-flex flex-wrap " style={{ width: '75%', marginLeft: 400 }}>
        <h1>{`Total price ${price}` }</h1>
        {one.map((el) => { return <About key={el.id} prods={el} />})}
    </div>
}