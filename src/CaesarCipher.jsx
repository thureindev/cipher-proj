import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import encryptCaesarBasic from './helpers/caesar_cipher';
import encryptCaesarAdvanced from './helpers/caesar_cipher_advanced';

const CaesarCipher = () => {

    const [plainText, setPlainText] = useState('');
    const [cipherText, setCipherText] = useState('');
    
    const [isAdvancedMode, setIsAdvancedMode] = useState(false);
    const [shiftNumber, setShiftNumber] = useState(0);
    const [shiftSequence, setShiftSequence] = useState('');

    useEffect(() => {
        let cipher;
        isAdvancedMode
            ? cipher = encryptCaesarAdvanced(plainText, shiftSequence)
            : cipher = encryptCaesarBasic(plainText, Number(shiftNumber));

        setCipherText(cipher);

    }, [plainText, shiftNumber, shiftSequence]);

    return (
        <>

            <h1>Caesar Cipher {isAdvancedMode ? '(Advanced)' : ''}</h1>

            <button
                onClick={() => {
                    setIsAdvancedMode(!isAdvancedMode);
                    setPlainText('');
                }}
            >
                {isAdvancedMode ? 'Switch to Basic Mode' : 'Switch to Advanced Mode'}
            </button>

            <br /><br />

            {
                isAdvancedMode
                    ? (
                        <>
                            <label htmlFor="shift-sequence-input">Shift Sequence:&nbsp;</label>
                            <input
                                id="shift-sequence-input"
                                type="text"
                                value={shiftSequence}
                                onChange={(e) => setShiftSequence(e.target.value)}
                            />
                        </>
                    )
                    : (
                        <>
                            <label htmlFor="shift-number-input">Shift Number:&nbsp;</label>
                            <input
                                id="shift-number-input"
                                type="number"
                                step="1"
                                value={shiftNumber}
                                onChange={(e) => setShiftNumber(e.target.value)}
                            />
                        </>
                    )
            }


            <br /><br />
            <textarea
                id="text-input"
                value={plainText}
                placeholder='Enter text to encrypt'
                onChange={(e) => setPlainText(e.target.value)}
            />

            {
                isAdvancedMode
                    ? (
                        <>
                            <p id="cipher-text">
                                {
                                    shiftSequence === ''
                                        ? 'Enter a shift value. Usage: 1 3 15 17 9 \n(No decimals values allowed)'
                                        : cipherText
                                            ? cipherText
                                            : 'Cipher Text will appear here'
                                }
                            </p>
                        </>
                    )
                    : (
                        <>
                            <p id="cipher-text">
                                {cipherText ? cipherText : 'Cipher Text will appear here'}
                            </p>
                        </>
                    )
            }

            <button
                onClick={() => {
                    navigator.clipboard.writeText(cipherText);
                }}
            >
                Copy Cipher
            </button>

            <br /><br />
            <Link to={'/'}>Other Ciphers</Link>

        </>
    )
}

export default CaesarCipher