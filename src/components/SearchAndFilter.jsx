import React from 'react'


function SearchAndFilter({setQuery}) {


    return (

        <div className='head' >
            <div className="input-field">
                <i className="bi bi-search" />
                <input onChange={(e) => setQuery(e.target.value)} type="text" required="" placeholder="Search for a Country"  />
            </div>
            <div className="regions-box" onChange={(e) => setQuery(e.target.value)} >
                <select id="regions">
                    sdfsdfsdfsdf
                    <option hidden>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default SearchAndFilter