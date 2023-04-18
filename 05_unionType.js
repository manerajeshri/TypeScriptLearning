var stringNumber; // in this variable we can pass string or number
var sn;
sn = 'codemind';
console.log(sn);
sn = 100;
console.log(sn);
function formatCommandLine1(input) {
    // function formatCommandLine(input: string | string[]) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join('*');
    }
    return line;
}
console.log(formatCommandLine1('hello ')); // hello
console.log(formatCommandLine1(['hello ', 'world '])); // hello world given strings in array
// console.log(formatCommandLine(123457)); // Uncaught TypeError: input.map is not a function at formatCommandLine
console.log(formatCommandLine1('123457')); // its a string
console.log(formatCommandLine1(['123', '   457  ']));
