function doubleMe(x) {
    if (x && typeof x === 'number') {
        console.log(x && typeof x === 'number');
        console.log(x * 2);
    }
    else if (x && typeof x === 'string') {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        console.log(x); //logging array all atonce
        return x.map(function (name) { return console.log(name); } // loggingelement one by one
        );
    }
}
doubleMe(2);
doubleMe("Jack");
doubleMe(["a", "b", "c"]);
doubleMe([1, 2, 3, 4, 5, 6, 7]);
doubleMe(['a']);
doubleMe(['a', 1]);

// x && typeof x
let x = 1;
console.log(x && typeof x); // and value && datatype == op

if (typeof x === "string") {
    console.log(`typeof x === "string" : true`);
} else {
    console.log(`typeof x === "string" :false`);
}

if ( x === "a") {
    console.log(` x === "${x}" :true`);
} else {
    console.log(`x === "${x}" : false`);
}





