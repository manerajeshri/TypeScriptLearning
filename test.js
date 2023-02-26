// arrange array in ascending order on basis of ratings

let arrayObj = [
    {
        name: 'a',
        rating: 10
    },{
        name: 'b',
        rating: 10
    },{
        name: 'c',
        rating: 0
    },{
        name: 'd',
        rating:50
}];

// ascending on rating
console.log(`ascending on rating`);
let ascendingArray = arrayObj.sort( (a,b)=>{

    return a.rating >b.rating ? 1 :-1 ;
} )

ascendingArray.forEach(element => {
    console.log(element);
});


console.log(`ascending on name`);
let finalArray = ascendingArray.sort( (a,b)=>{
    return a.name > b.name ? 1:-1;
} )

finalArray.forEach(element => {
    console.log(element);
});

console.log(`ascending on first rating then name`);

let arrayName = arrayObj.sort( (a,b)=>{

    return a.rating >b.rating ? 1 :-1 ;
} )

arrayName.forEach(element => {
    return element.name > element.name ? 1:-1;

    
});






// let newArray = arrayObj.sort((a,b)=>{
//     return a.rating>b.rating ? 1:-1
// });

// newArray.forEach(element => {
//     console.log(element);
// });
