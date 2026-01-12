import React, { useEffect, useState } from 'react';
import "../../county.css";
import { data, useParams } from 'react-router-dom';
import BorderCountry from '../BorderCountry';

function SingleCountry() {
    // const countryNameFromSearchQuery = new URLSearchParams(window.location.search).get("name"); //this is also done by aprams in react dom

    const params = useParams()
    const countryNameFromSearchQuery = params.country

    const [countryDet, setCountryDet] = useState([]);
    const [loading, setLoading] = useState(true); // New loading state
    // const [notFoundCountry, setNotFoundCountry] = useState(false)

    useEffect(() => {
        fetchData();
    }, [params]);

    const fetchData = async () => {
        try {
            let response = await fetch(`https://restcountries.com/v3.1/name/${countryNameFromSearchQuery}?fullText=true`);
            let data = await response.json();
            setCountryDet(data);
        } catch (error) {
            console.log("error", error);
            setNotFoundCountry(true)
        } finally {
            setLoading(false); // Set loading to false after fetch completes
        }
    };

    // if (notFoundCountry) return <h1> Country Not found </h1>

    if (loading) return <h1 style={{ alignContent: "center", height: "100vh" }}><center>Loading...</center></h1>; // Show a loading message

    if (!countryDet.length) return <h1 style={{ alignContent: "center", height: "100vh" }}><center>No data found of country</center></h1>; // Handle case where no data or country is found

    const { name, flags, population, region, subregion, capital, currencies, languages, borders } = countryDet[0];
    // console.log(borders)

    return (
        <main>
            <div className="back-btn">
                <button onClick={() => history.back()}>
                    <i className="bi bi-arrow-left" />
                    Back
                </button>
            </div>
            <div className="country-page-container">
                <div className="image-box">
                    <img height={"400px"} src={flags.svg} alt={`${name.common} flag`} /> {/* Use flags.svg for the image source */}
                </div>
                <div className="country-det-box">
                    <div className="title">
                        <h2>{name.common}</h2>
                    </div>
                    <div className="country-det" style={{ display: "flex" }} >
                        <div className="first-col">
                            <p className="native-name">
                                Native Name: <span>{name.nativeName[Object.keys(name.nativeName)[0]].common}</span>
                            </p>
                            <p className="population">
                                Population: <span>{(population).toLocaleString("en-IN")}</span>
                            </p>
                            <p className="region">
                                Region: <span>{region}</span>
                            </p>
                            <p className="sub-region">
                                Sub Region: <span>{subregion}</span>
                            </p>
                            <p className="capital">
                                Capital: <span>{capital}</span>
                            </p>
                        </div>
                        <div className="second-col">
                            <p className="top-level-domain">
                                Top Level Domain: <span>{countryDet[0].tld.join(', ')}</span>
                            </p>
                            <p className="currencies">
                                Currencies: <span>{currencies ? Object.values(currencies).map(c => c.name).join(', ') : 'N/A'}</span>
                            </p>
                            <p className="languages">
                                Languages: <span>{languages ? Object.values(languages).join(', ') : 'N/A'}</span>
                            </p>
                        </div>
                    </div>
                    <div className="countries-border-box">
                        <span>Border Countries: </span>
                        {/* Add border countries dynamically */}
                        {
                            borders === undefined ? "N/A"  : borders.map(border => (
                                <BorderCountry border={border} key={border} />

                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SingleCountry;
