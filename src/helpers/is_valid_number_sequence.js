function isValidNumberSequence(numberSequence) {
    const sequence = numberSequence.trim().split(' ').map((num) => Number(num));
    
    const isValid = sequence.every((num) => Number.isInteger(num));

    return isValid ? sequence : false;
}

export default isValidNumberSequence;