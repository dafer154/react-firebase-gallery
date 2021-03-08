import React from "react";
import Spinner from 'react-bootstrap/Spinner'

const SpinnerCustom = () => {

    return (
        <div>
            <Spinner animation="border" />
            <span>Loading...</span>
        </div>
    )
}

export default SpinnerCustom