function encryptCaesarBasic(text, shift) {

    return text.trim().split('').map((char) => {

        const charCode = char.charCodeAt(0);
        let shiftedCharCode;
    
        // for uppercase letters
        if (charCode >= 65 && charCode <= 90) {

            shift >= 0 
            ? shiftedCharCode = ((charCode - 65 + shift) % 26) + 65
            : shiftedCharCode = ((charCode - 90 + shift) % 26) + 90;
        } 
        // for lowercase letters
        else if (charCode >= 97 && charCode <= 122) {

            shift >= 0
            ? shiftedCharCode = ((charCode - 97 + shift) % 26) + 97
            : shiftedCharCode = ((charCode - 122 + shift) % 26) + 122;
        }
        // for numbers
        else if (charCode >= 48 && charCode <= 57) {

            shift >= 0
            ? shiftedCharCode = ((charCode - 48 + shift) % 10) + 48
            : shiftedCharCode = ((charCode - 57 + shift) % 10) + 57;
        }
        else {
            return char;
        }
        return String.fromCharCode(shiftedCharCode);
    }).join('');
    
}

export default encryptCaesarBasic;