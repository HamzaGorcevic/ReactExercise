import React from "react";
import styles from './calculator.module.css'
import { useState , useEffect} from "react";


export default function Calculator() {

    let [inputValue, setInputValue] = useState('')
    let [historyValue, setHistoryValye] = useState([])
    const operators = ['*','-',"/",'+']
    let date = new Date()
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    function clear() {
        setInputValue(inputValue.slice(0,-1))
        
    }
    function calculate() {
        if (!operators.includes(inputValue.slice(-1)) && inputValue != '') {
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
    function allClear() {
        setInputValue(inputValue = '')
    }
    function dodaj() {
        if (inputValue != '') {
            setHistoryValye(arr => [...arr, `{${inputValue}} user calculated this at   ${time.toString()}`])
            
        }
            
    }
    
    
    
    
    return (
        
        <div className="conatiner d-flex align-items-center justify-content-center bg-dark" style={{ height: "100vh" }}>
            
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
                    <button className="btn btn-outline-danger" onClick={allClear}>AC</button>
                    <button className="btn btn-outline-primary" style={{ gridColumnStart: '2', gridColumnEnd: '4' }} onClick={() => { calculate();dodaj() }}>=</button>
            </div>
            </div>
            <button className="dropdown-toggle ml-5 btn btn-primary" type="button" data-toggle='dropdown' id="Drop">Show history</button>
            <div className="dropdown-menu" aria-labelledby="Drop">
                <a href="#" className="dropdown-item text-warning">History of user's calculations</a>
                <div className="dropdown-divider"></div>
                {historyValue.map((e) => <a href='#' className="dropdown-item" key={historyValue.indexOf(e) + Math.floor(Math.random() * 10000000)}>{e}</a>)}
                
            </div>
        </div>
        
    )
}
