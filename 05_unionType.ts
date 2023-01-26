var stringNumber : string | number;
var sn: string | number;

sn = 'codemind';
console.log(sn);

sn = 100; 
console.log(sn);

type test =
string | string[] ;

function formatCommandLine(input: test) {
// function formatCommandLine(input: string | string[]) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
     
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}


console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword given strings in array
console.log(formatCommandLine('123457'));
console.log(formatCommandLine(['123', '   457  ']));
   