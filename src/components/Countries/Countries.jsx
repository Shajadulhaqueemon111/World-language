import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './Countries.css'
const Countries = () => {
    const [countries,setCountries] =useState([]);

    const [visitedCountries, setVisitedCountry] =useState([]);
    const [visitedFlag,setVisitedFlag] =useState([])

    const handelVisitedCountry=country=>{
             console.log('add this visited country');
            const newVisitedCountry =[...visitedCountries,country]
            setVisitedCountry(newVisitedCountry)
    }

    const handelVisitedFlag=flag=>{
        console.log('handelVisitedFlag')
        const newVisitedFlag =[...visitedFlag,flag];
        setVisitedFlag(newVisitedFlag)
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h2>countries:{countries.length}</h2>
            <div>
                <h4>Visited country: {visitedCountries.length}</h4>
                <ul>
                     {
                        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                     }
                </ul>
            </div>
            <div className="flag-container">
     {
        visitedFlag.map(flag=><img key={flag.cca3} src={flag}></img>)
     }
            </div>
          <div className="country-container">
          {
                countries.map(country =><Country key={country.cca3} 
                    handelVisitedCountry={handelVisitedCountry}
                    handelVisitedFlag={handelVisitedFlag}
                    country={country}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;