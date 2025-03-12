// VARIABLES


// ts inferances the type when the value is assinged.
let myage = 10;
let myname = "Nandu"

// without initialization the type of the variable will be any.
let myID;


// ARRAYS


// an array with type any is same as an array in js.
let numbers:number[] = [1,2,3];


// TUPLES

// each type maps to the elements so the number of elements matter.

let tuple:[number,string] = [21,"Nandu"];



// ENUMS

enum size {small=1,large,extraLarge};

// the remaining values are contigously given by ts.


// Functions




console.log(size.extraLarge)
console.log(numbers)
console.log(myage);
console.log(myname)