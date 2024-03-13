// Data Types

// Primitive Datatypes

//Number ->
console.log(typeof 5); // Integer or Float values
//string->
console.log(typeof "5"); // Character encoded in "" or ''
//Boolean
console.log(typeof true); // //true or false

//Non primitive Datatypes
let arr = [1,2,3,4,5]; //array
console.log(typeof arr, arr);

let obj = {1: "1"}; // objects
console.log(typeof obj, obj);
f
let a = 10;
let b = a;
console.log(a); //10
console.log(b); //10
b=15;
console.log(a); //10
console.log(b); //15

//Non primitive Datatypes (arr, obj)
let sam_arr = [1,2,3];
let sam_arr2 = sam_arr;
console.log(sam_arr); //[1, 2, 3]
console.log(sam_arr2); //[1, 2 ,3]
sam_arr2[1] = 4;
console.log(sam_arr); //[1, 4, 3]
console.log(sam_arr2); //[1, 4, 3]

//Deep copy
let ano_arr = [5, 6, 7];
let ano_arr2 = Object.assign([], ano_arr);
console.log(ano_arr); //[5, 6, 7]
console.log(ano_arr2); //[5, 6, 7]
ano_arr2[1] = 8;
console.log(ano_arr); //[5, 6, 7]
console.log(ano_arr2); //[5, 8, 7]

console.log(window);
//


