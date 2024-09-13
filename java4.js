// let table = 2;

// let sum = 10;

// for (let i = 1; i <= sum; i++ ) {
//     console.log(table * i);
      
// }

console.log("witout array table")

let multiplie = 2;

let v = 10;

for (let i = 1; i <= v; i++) {
    console.log(multiplie * i);

}

// ......................................................

console.log("with array");


let multi = [5];

let m = 10;

for (let i = 1; i <= m; i++) {
    console.log(multi * [i] );
    
}

// ...........................................................

console.log("multiple table in one array");

let multipliers = [2,3,4];

let range = 10;

for (let j = 0; j < multipliers.length ; j++ ) {
    let multiplier = multipliers[j];
    console.log("Multiplication table for :"  + multiplier);


for (let i = 1; i <= range; i++) {
    console.log(multiplier * i);
}
console.log('');
}

