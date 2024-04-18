/*

const score = 400;

const balance = new Number(100)
console.log(balance);
// console.log(score);

console.log(balance.toString());
console.log(balance.toFixed(2)); // decimal main convert kar dega

const otherNumber = 1124.789;

console.log(otherNumber.toPrecision(3));  // first three value pe focus karega , e-commerce application main use hoga 

const hundred = 10000000;
console.log(hundred.toLocaleString('en-IN')); // aapke value main coma lagadega


  
/************************************Maths********************* */

console.log(Math);
console.log(Math.PI); // ye Pi math ke andar ka property hain

console.log(Math.ceil(3+5.6)); // upar ki value dega
console.log(Math.random()); // default math ki value 0 aur 1 ke bheech hoti hai , isko  avoid karne ke liye *10 +1 kardo 

console.log((Math.random()*10)+1);  // yahn value badh gyi hain

// ab kabhi kabhi max and min value se deal bhi karte hain

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 