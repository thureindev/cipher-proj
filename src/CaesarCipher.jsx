import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import caesarCipher from './helpers/caesar_cipher';

const CaesarCipher = () => {

    const [plainText, setPlainText] = useState('');
    const [cipherText, setCipher] = useState('');
    const [shift, setShift] = useState(1);

    useEffect(() => {
        const cipher = caesarCipher(plainText, Number(shift));
        setCipher(cipher);
    }, [plainText, shift]);

    return (
        <>

            <h1>This is Caesar Cipher</h1>

            <label htmlFor="shift-input">Shift</label>
            <input
                id="shift-input"
                type="number"
                step="1"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
            />

            <textarea
                id="text-input"
                value={plainText}
                placeholder='Enter text to encrypt'
                onChange={(e) => setPlainText(e.target.value)}
            />

            <p id="cipher-text">
                {cipherText}
            </p>

            <button
                onClick={() => {
                    navigator.clipboard.writeText(cipherText);
                }}
            >
                Copy Cipher
            </button>

            <br /><br />
            <Link to={'/caesar-cipher-advanced'}>Advanced</Link>

        </>
    )
}

export default CaesarCipher