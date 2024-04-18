const marvel = ['iron-man','spider-man','hulk'];
const dc = ['superman','flash','batman'];

// marvel.push(dc);  // array main kuch bhi push kar sakte hain , khud array ko bhi
// console.log(marvel);

// const allHeros = marvel.concat(dc);  // cocat do arrays ko jod deta hai

// console.log(allHeros);

// const newHeros = [...dc,...marvel];      // ... is spread operator
// console.log(newHeros);


// ab kabhi kabar aisa hota hai ki esa array hota hai

const another = [1,2,3,[3,4,6],[1,2,[7,8]]];
const real_another = another.flat(Infinity);  // ye array ko flat kardeta hai matlab readable kardega ;

console.log(real_another);

// ab jab kabhi web scrapping kartein hain tab hum check karte hain jo data hain , array hain ki nahi toh 

console.log(Array.isArray('suryansh'));

console.log(Array.from('roney')); // ye from andar ki value ko array main convert kar dega

console.log(Array.from({name: 'bhai'})); // yahan ye blank array return karega , as humne specify nahi kiya hai

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score,score2,score3)); // ye of multiple variables ko array main convert kar deta hai
