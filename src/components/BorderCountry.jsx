import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'

function BorderCountry( {border} ) {
    
    const [borderName , setBorderName] = useState([])

    // console.log(border)

    useEffect(() => {

        fetch(`https://restcountries.com/v3.1/alpha?codes=${border}`)
            .then((resp) => resp.json())
            .then((data) => setBorderName(data[0].name.common))

    }, [])

    return (
        <button> <Link to={`/${borderName}`}> {borderName} </Link> </button>
    )
}

export default BorderCountry