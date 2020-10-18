const MORSE_TABLE = {
    '': ' ',
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

let resultMorse = '';
let result = '';
let n;

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);
    for (let i = 0; i < arr.length; i++) {
        n = arr[i].match(/.{1,2}/g);
        for (let j = 0; j < n.length; j++) {
            if (n[j] == 10) {
                resultMorse += '.'
            } else if (n[j] == 11) {
                resultMorse += '-'
            } 
        }
        result += `${MORSE_TABLE[resultMorse]}`;
        resultMorse = '';
    }
   return result;
   result = '';
}

module.exports = {
    decode
}