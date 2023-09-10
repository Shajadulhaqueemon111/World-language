
import { useState } from 'react';
import './country.css'
const Country = ({country, handelVisitedCountry,handelVisitedFlag}) => {
    console.log(country)
    const {name,flags,population,area,cca3}=country;

    const [visited, setVisited] =useState(false);
    const handelVisited=()=>{
  setVisited(!visited)
    }
    return (
        <div className={`'style${visited ? 'visited' :'non visited'}`}>
            <h3>name: {name?.common}</h3>
            <img src={flags.png} alt="" />  
            <p>Population: {population}</p>
            <p>Area: {area}</p>
              <p>Code: {cca3}</p>
              <button onClick={()=>handelVisitedCountry(country)}>Mark visited</button>
              <button onClick={()=>handelVisitedFlag(country.flags.png)}>Add visited Flag</button>
              <button onClick={handelVisited}>{visited ? 'visited' :'not a visited'}</button>
              {/* {visited? 'I have visited this country' :"not a visited"} */}
        </div>
    );
};

export default Country;