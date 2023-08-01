// import React from 'react'
import { Link } from 'react-router-dom';

const Enigma = () => {
    return (
        <>
            <h1>Enigma Machine</h1>
            <p>Coming Soon..</p>

            <div>
                <Link to={'/bombe-machine'}>Bombe Machine</Link>
            </div>
            <div>
                <Link to={'/'}>Other Ciphers</Link>
            </div>
        </>
    )
}

export default Enigma