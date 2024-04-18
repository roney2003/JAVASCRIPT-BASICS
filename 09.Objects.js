// Object literal method

// symbol kaise use karein

const mySum = Symbol("mykey")

const user = {
    name: "bhai",
    "full name":"surya",  //esa bhi ho sakt ahi
    [ mySum]:"key1",       // symbol ese declare karte hain [] mein
    age: 20,
    location: 'delhi',
    email: 'surya@gmail.com',
    isLoggedIn: 'NO'
};

// do tareeke hotein hain elements access karne ke

console.log(user.email);
console.log(user["email"]); 
console.log(user[mySum]);

user.email = 'suryansh22@gmail.com'
// Object.freeze(user);              // ye agr kar diya toh aage wo cheez koi badal nahi sakta hai

user.email = "bhao@gmail.com";

console.log(user);

user.greeting = function(){     // object mein function bhi declare kar sakte hain wo bhi aise jisme hum user.greeting() likh ke call kar sakte hain jisme hum user ko reference kar rahe hain   
    console.log("hii there");
   
}

user.greeting2 = function(){
    console.log(`hii level up ${this.name}`);  // this keyword se hum object ke andar ke elements ko access kar sakte hain
}
console.log(user.greeting());  // hii there print hoga , but undefined return karega kyuki iska koi return nahi hai , aur haan agar greeting() ko aise likhenge greeting only function ka reference milega like function[anonymous]
console.log(user.greeting2());