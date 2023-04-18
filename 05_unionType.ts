var stringNumber : string | number; // in this variable we can pass string or number
var sn: string | number;

sn = 'codemind';
console.log(sn);

sn = 100; 
console.log(sn);

type test = string | string[] ; //  string[] ==> string array or array of strings

function formatCommandLine(input: test) {
// function formatCommandLine(input: string | string[]) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
     
    else {
        line = input.map(x => x.trim()).join('*');
    }
    return line;
}


console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // hello world given strings in array
// console.log(formatCommandLine(123457)); // Uncaught TypeError: input.map is not a function at formatCommandLine
console.log(formatCommandLine('123457'));// its a string
console.log(formatCommandLine(['123', '   457  ']));
   