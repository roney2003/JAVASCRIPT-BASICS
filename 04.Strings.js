// const name = "Roney";
// const repoCount = 50;

// console.log(`Hello my name is ${name} my repo is ${repoCount}` );

const gameName = new String(`bhai`);  // ye string ko declare karne ka doosra tareeka hai new keywordka (jo ek naya object banata hai , ) aur hum string ke constructor main value dalte hain

console.log(gameName[0]);
console.log(gameName.__proto__); // ye dega protype of strings dega ,  browser main dikhega

console.log(gameName.length);  // length string ki property hoti hai
console.log(gameName.toUpperCase());  // to uppercase strings ka method hota hai
console.log(gameName.charAt(2));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(0,3)  // slice most important hai
console.log(anotherString);






const newString1 = "  Roney  "
console.log(newString1);
console.log(newString1.trim());  // ye bhi important hai 


const url= "https://roneylove%20/bhai.com";

console.log(url.replace('%20','-'));
console.log(url.includes('teri'));

console.log(newString1.split(' '));  // ye split kar deta hai


