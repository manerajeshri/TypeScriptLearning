function doubleMe(x) {
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x && typeof x === 'string') {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        // console.log(x); //logging array all atonce
        return x.map(function (name) { return console.log(name + name); } // loggingelement one by one
        );
    }
}
// doubleMe(2);
// doubleMe("Jack");
doubleMe(["a", "b", "c"]);
// doubleMe([1,2,3,4,5,6,7]);
// doubleMe(['a']);
// doubleMe(['a',1]);
