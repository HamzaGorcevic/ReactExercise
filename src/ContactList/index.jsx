import React, { useEffect, useState } from "react";
import random from "../randomuser";
import Contact from "./mainContact";

export default function ContactList(props) {
    const [result, setResult] = useState([])
    const [location,setLocation] = useState('')

    const fetchQuote = async (el) => {
      
        try {
          const result = await random.get('?results=100');
            const data = result.data;
            setResult(data.results);
    
        } catch (error) {
          console.log(error);
        }
        };
        useEffect(() => {
            fetchQuote()
        }, [])
    function filterL(el) {
        if (el.location.country === location && el !== undefined) {
                return el
        }
    }
    let arr = result.filter(filterL)
    
    return <div>
        <select onChange={(e)=>{setLocation(e.target.value)}} name="" id="" className="btn btn-danger my-3">
            <option value="" selected disabled>Chose your country</option>
            <option value="">Show all</option>
            <option value="Serbia">Serbia</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="Ireland">Ireland</option>
            <option value="Mexico">Mexico</option>
        </select>
        {location !=='' ? 
            arr.map((el, index) => {
                return <Contact key={index}
                    name={el.name.first}
                    surname={el.name.last}
                    img={el.picture.large}
                    email={el.email}
                    age={el.dob.age}
                    gender={el.gender}
                    country={el.location.country}
                    city={el.location.city}
                />
            }) : result.map((el, index) => {
                
                return <Contact key={index}
                
            name={el.name.first}
            surname={el.name.last}
            img={el.picture.large}
            email={el.email}
            age={el.dob.age}
            gender={el.gender}
                    country={el.location.country}
                    city={el.location.city}
        />})
        }
        
    </div>
}