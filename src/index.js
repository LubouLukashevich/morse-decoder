const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let text = expr.split('**********');
    let result = [];
    for (let i = 0; i < text.length; i++) {
        result[i] = '';
        let word = text[i];
        for (let j = 0; j < word.length; j+=10) {
            let word2 = text[i];
            let letter = word2.slice(j, j + 10);
            let new_word = '';
            for (let k = 0; k < 10; k+=2) {
                if (letter[k] === '1') { (letter[k + 1] === '0') ? new_word += '.' : new_word += '-';}
            };
            if (new_word in MORSE_TABLE) {result[i] += MORSE_TABLE[new_word]}
            }
        }
    return result.join(' ');
    }
    

module.exports = {
    decode
}

console.log(module.exports.decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'));