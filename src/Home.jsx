// import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>

            <h1>Cipher Collection by thureindev</h1>

            <p>Hello, I made this page to make demonstrate cipher techniques interesting, fun and interactive. </p>

            <p>Click on the links below to learn more about each cipher.</p>
            <div>
                <Link to={'/caesar-cipher'}>Caesar Cipher</Link>
            </div>
            <div>
                <Link to={'/enigma-machine'}>Enigma Machine</Link>
            </div>
            <div>
                <Link to={'/bombe-machine'}>Bombe Machine</Link>
            </div>
        </main>
    )
}

export default Home