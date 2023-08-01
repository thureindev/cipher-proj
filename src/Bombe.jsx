// import React from 'react'
import { Link } from 'react-router-dom';

const Bombe = () => {
    return (
        <>
            <h1>BOMBE Machine</h1>
            <p>Coming Soon..</p>

            <div>
                <Link to={'/enigma-machine'}>Enigma Machine</Link>
            </div>
            <div>
                <Link to={'/'}>Other Ciphers</Link>
            </div>
        </>
    )
}

export default Bombe