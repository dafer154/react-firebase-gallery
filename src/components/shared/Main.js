import React from 'react'
import { NavLink } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'

const Main = () => {
    return (
        <Jumbotron>
            <h1>Hello Everyone!</h1>
            <p>
                This project is for test in company Patagonian
            </p>
            <NavLink
                className="btn btn-primary btn-lg"
                to="/about"
                role="button"
            >
                About
        </NavLink>
        </Jumbotron>
    )
}

export default Main