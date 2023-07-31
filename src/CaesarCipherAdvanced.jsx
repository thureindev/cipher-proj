import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import encryptCipher from './helpers/caesar_cipher_advanced';

const CaesarCipherAdvanced = () => {

    const [plainText, setPlainText] = useState('');
    const [cipherText, setCipherText] = useState('');
    const [shift, setShift] = useState('');

    useEffect(() => {
        const cipher = encryptCipher(plainText, shift);
        setCipherText(cipher);
    }, [plainText, shift]);

    return (
        <>

            <h1>Caesar Cipher (Advanced)</h1>

            <label htmlFor="shift-input">Shift</label>
            <input
                id="shift-input"
                type="text"
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
                {
                    shift === ''
                        ? 'Enter a shift value. Usage: 1 3 15 17 9 \n(No decimals values allowed)'
                        : cipherText
                }
            </p>

            <button
                onClick={() => {
                    navigator.clipboard.writeText(cipherText);
                }}
            >
                Copy Cipher
            </button>

            <br /><br />
            <Link to={'/'}>Simple</Link>

        </>
    )
}

export default CaesarCipherAdvanced