// ab shopping cart main parameters pass karne hain , jaise ki product name, price, quantity, etc.

function calculateCartPrice(...num1){  // ...num1 iska matlab hai ki jitne bhi arguments pass karenge wo sab num1 me store ho jayenge , isko rest operator kehte hain
       return num1;
}

console.log(calculateCartPrice(100,200,500)); // 100

const users = {
    name: "Suryansh",
    age: 24,
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`);
}   

// handleObject(users);  // username is Suryansh and age is 24

// aise bhi likh sakte hain
handleObject({name: "Suryansh", age: 24});

// ab array mein use karenge

const usersArray = [200, 300, 400, 500];

function returnSecondElement(usersArray) {  // yahan pe humne destructuring kiya hai array ka
    return usersArray[1];
}

console.log(returnSecondElement(usersArray));  // 300