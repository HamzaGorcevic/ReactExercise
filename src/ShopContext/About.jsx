import React, { useContext } from "react"
import { Cart } from "../Context"


export default function About({prods}) {
    const { one, setOne } = useContext(Cart)
    

    return <div  className="m-2 bg-danger p-2 rounded" style={{ overflow: 'hidden' }}>
    <div style={{width:250,height:400}}>
    <img className="rounded w-100 h-75" src={prods.image} alt="" />
            <p style={{ height: 30, color: 'white' }}>{prods.title.substring(0,50)}</p>
        <div className="d-flex justify-content-around">
            {/* {check ? <button className="btn btn-warning" onClick={() => { setCheck(!check); setOne([...products, one]) }} >Add item</button> : <button onClick={() => { setCheck(!check); }}>Remove item</button>} */}
            {one.includes(prods)?<button style={{width:100}} className="btn btn-warning text-white" onClick={()=>{setOne(one.filter((e)=>(e !== prods)))}}>Remove</button>:<button style={{width:100}} className="btn btn-warning text-white" onClick={()=>{setOne([...one,prods])}}>Add</button>}
                <h3>{prods.price }$</h3>
        </div>
    </div>
</div>
    
    
}