
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Cart = createContext()

export default function ContextProvider({ children }) {

    const [products,setProducts] = useState([])
    const [one, setOne] = useState([])
    const [filtered,setFiltered] = useState([])

    function Axi() {
        const url = axios.get('https://fakestoreapi.com/products').then((response)=>{setProducts(response.data);setFiltered(response.data)})
    }
    

    useEffect(() => {
        Axi()
    }, [])
    
    return (
        <Cart.Provider value={{one,setOne,products,setProducts,filtered,setFiltered}}>
            {children}
        </Cart.Provider>
    )

}