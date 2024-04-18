// this samjhtein hain

/*

const user = {

    username: 'bhai',
    price: 999,

    welcomeMessage: function(){        // ye method hota hain
        console.log(`${this.username} , welcome to website`);    this current context bata ta hai
        console.log(this);
    }


}   */

// user.welcomeMessage()
// user.username = 'roney'
// user.welcomeMessage()

// console.log(this);

/*
function chai(){
    let username = "roney"
    console.log(this);      // ye this sirf object mein context dega , not in functions
}

chai()

*/


// ARROW FUNCTION

const chai = () =>{
    let username = 'roney'
    console.log(this);   // yahan empty object aaega 
}

chai(this.username)

const addTwo = (num1,num2) =>{
    return num1 + num2;         // implicit return main {} nahi lagana hota  , wo single line hota hai , ye () lagana hota hai
}

console.log(addTwo(3,4));