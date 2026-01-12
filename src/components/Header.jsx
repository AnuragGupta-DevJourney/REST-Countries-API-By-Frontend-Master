import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <h1 className="heading">
                <Link to="/">Where in the World?</Link>
            </h1>
            <div className="theme" onClick={
                () => {
                    document.querySelector("body").classList.toggle("darken");
                    document.querySelector(".theme i").classList.toggle("bi-brightness-high-fill")
                    document.querySelector(".theme i").classList.toggle("bi-moon-stars")

                }
            } >
                <i className="bi bi-moon-stars" />
            </div>
        </div>
    )
}

export default Header