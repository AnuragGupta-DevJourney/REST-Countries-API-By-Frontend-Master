import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({ country }) {

    const { flags, name, population, region, capital } = country

    // console.log(flags.svg)

    return (
        <div className="counry-card" style={{ flexBasis: "300px" , border:"1px solid" , overflow:"hidden" , borderRadius:"8px" }} >
            {/* <Link to={`/country?name=${name.common}`} > */}
            <Link to={`${name.common}`} >
                <img style={{ width: "100%" , height:"200px" }} src={flags.svg} alt="" />

            </Link>
            <div className="country-det" style={{padding:"0.5rem"}} >
                <h4 className="Country-name"> {name.common} </h4>
                <p className="population"> population:<span> {population.toLocaleString("en-IN")} </span></p>
                <p className="region"> Region:<span> {region} </span></p>
                <p className="capital"> Capital:<span> {capital} </span></p>
            </div>
        </div>
    )
}

export default CountryCard