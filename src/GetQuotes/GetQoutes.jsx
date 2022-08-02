import api from "../api/api";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardQuote from "./QuoteCard";

export default function GetQuotes() {
    const [quote, setQuote] = useState([]);
    
    
    const fetchQuote = async (el) => {
      
    try {
      const result = await api.get('/quotes');
        const data = result.data;
        setQuote(data.results);
        console.log(data.results);

    } catch (error) {
      console.log(error);
    }
    };
    useEffect(() => {
        fetchQuote()
    }, [])
    
    console.log(quote, 'second');
    
    return <CardQuote quotess={quote} />
    
}