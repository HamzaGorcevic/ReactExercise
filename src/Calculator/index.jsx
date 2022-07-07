import React from "react";
import styles from './calculator.module.css'
import { useState , useEffect} from "react";


export default function Calculator() {

    let [inputValue, setInputValue] = useState('')
    const operators = ['*','-',"/",'+']


    function clear() {
        setInputValue(inputValue.slice(0,-1))
        
    }
    function calculate() {
        if (!operators.includes(inputValue.slice(-1))) {
            setInputValue((eval(inputValue)).toString())
            
        } else {
            setInputValue(inputValue.slice(0,-1))
        }
    
    }
    function addTo(e) {
        if (!operators.includes(inputValue.slice(-1))) {
            setInputValue(inputValue += e.target.innerText)
        } else {
            
        }
    }
    
    return (
        <selector className="conatiner d-flex align-items-center justify-content-center bg-dark" style={{ height:"100vh"}}>
        <div className={styles.calculator}>
            <div className="container h-25 py-3">
                <div className="w-100 h-100 h1 text-right text-secondary p-2 bg-light">{inputValue}</div>
            </div>
            <div className={styles.keys} >
                
                <button className="btn btn-primary" onClick={addTo}>+</button>
                <button className="btn btn-outline-primary" onClick={addTo}>-</button>
                <button className="btn btn-primary" onClick={addTo}>/</button>
                <button className="btn btn-primary" onClick={addTo}>*</button>
                
                    <button className="btn btn-outline-primary " onClick={clear}>C</button>
                
                <button className="btn btn-primary" onClick={(e)=>{setInputValue(inputValue += e.target.innerText)}}>1</button>
                <button className="btn btn-primary" onClick={(e)=>{setInputValue(inputValue += e.target.innerText)}}>2</button>
                <button className="btn btn-primary" onClick={(e)=>{setInputValue(inputValue += e.target.innerText)}}>3</button>

                <button className="btn btn-primary" onClick={(e)=>{setInputValue(inputValue += e.target.innerText)}}>4</button>
                <button className="btn btn-primary" onClick={(e)=>{setInputValue(inputValue += e.target.innerText)}}>5</button>
                <button className="btn btn-outline-primary" onClick={(e)=>{setInputValue(inputValue += e.target.innerText)}}>6</button>
                
                <button className="btn btn-primary" onClick={(e)=>{setInputValue(inputValue += e.target.innerText)}}>7</button>
                <button className="btn btn-primary" onClick={(e)=>{setInputValue(inputValue += e.target.innerText)}}>8</button>
                    <button className="btn btn-outline-primary" onClick={(e) => { setInputValue(inputValue += e.target.innerText) }}>9</button>
                    
                    <button className="btn btn-primary" onClick={(e) => { setInputValue(inputValue += e.target.innerText) }}>0</button>
                    <button className="btn btn-outline-danger" onClick={calculate}>AC</button>
                    <button className="btn btn-outline-primary" style={{gridColumnStart:'2',gridColumnEnd:'4'}} onClick={calculate}>=</button>
            </div>
            </div>
        </selector>
        
    )
}