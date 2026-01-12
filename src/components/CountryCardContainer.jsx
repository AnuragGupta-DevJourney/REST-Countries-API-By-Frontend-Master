import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import { countryData} from './constant data/data.js'

function CountryCardContainer({ query }) {

    query = query.toLowerCase()
    console.log(query)
    
    const [countries, setCountries] = useState([]);

    // for handling the request error
    // const [handlingErr , setHandlingErr] = useState(true)
    // console.log(query)
    // console.log(data)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {
            // let response = await fetch("https://restcountries.com/v3.1/all");
            // let data = await response.json()
            // console.log(data)
            setCountries(countryData)

            /**
             THIS REST COUNTRY DATA COMMING FROM LOCAL DATA NOT FROM SEREVR BECZ THEY DOWN THAT API
             */
        }

        catch {
            <h1>plz refersh the page</h1>
        }

    }

    if(countries.length===0){
        return <h1>Loading...</h1>
    }

    return (
        <div className="countries-cards-container">

            {
                countries.filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query) ).map((country, index) => {
                    return <CountryCard key={index} country={country} />
                })
            } 

        </div>
    )
}

export default CountryCardContainer