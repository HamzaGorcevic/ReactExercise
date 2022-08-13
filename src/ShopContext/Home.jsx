import React, { useEffect, useState } from "react"
import { useContext } from "react"
import Filter from "./Filter"
import { Cart } from "../Context"
import About from "./About"

export default function Home() {
    const { products } = useContext(Cart)
    
    return <div className="">

        <Filter />
        <div className="container-fluid d-flex flex-wrap justify-content-between" style={{ marginLeft:400,height: 'auto',width:'70%' }}>
        {
        products.map((el) => {
            return  <About key={el.id} prods={el } />})
        }</div>
    </div>
    
}