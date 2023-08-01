import isValidNumberSequence from './is_valid_number_sequence';

function encryptCaesarAdvanced(text, shiftSequence) {

    const sequence = isValidNumberSequence(shiftSequence);
    if (!sequence) {
        return 'Invalid shift sequence. Usage: 1 3 15 17 9';
    }
    
    const seq_len = sequence.length;
    let index = 0;

    console.log(sequence)

    return text.trim().split('').map((char) => {

        if (index >= seq_len) index = 0;
        let shift = sequence[index];
        index ++;

        const charCode = char.charCodeAt(0);
        let shiftedCharCode;

        // for uppercase letters
        if (charCode >= 65 && charCode <= 90) {

            // for positive shift and negative shift
            shift >= 0 
            ? shiftedCharCode = ((charCode - 65 + shift) % 26) + 65
            : shiftedCharCode = ((charCode - 90 + shift) % 26) + 90;
        } 
        // for lowercase letters
        else if (charCode >= 97 && charCode <= 122) {

            // for positive shift and negative shift
            shift >= 0
            ? shiftedCharCode = ((charCode - 97 + shift) % 26) + 97
            : shiftedCharCode = ((charCode - 122 + shift) % 26) + 122;
        }
        // for numbers
        else if (charCode >= 48 && charCode <= 57) {

            // for positive shift and negative shift
            shift >= 0
            ? shiftedCharCode = ((charCode - 48 + shift) % 10) + 48
            : shiftedCharCode = ((charCode - 57 + shift) % 10) + 57;
        }
        else {
            index --;
            return char;
        }
        console.log(" shifted by " + shift + " characters." + " charCode: " + charCode + " shiftedCharCode: " + shiftedCharCode);

        return String.fromCharCode(shiftedCharCode);
    }).join('');
    
}

export default encryptCaesarAdvanced;