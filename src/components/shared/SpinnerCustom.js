import React from "react";
import Spinner from 'react-bootstrap/Spinner'

const SpinnerCustom = () => {

    return (
        <div>
            <Spinner animation="border" size="m" />
            <span>Loading...</span>
        </div>
    )
}

export default SpinnerCustom