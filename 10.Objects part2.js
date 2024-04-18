// Objects using constructor

const obj1 = new Object()  // new keyword se hum object banate hain , ye ek constructor function hai, ye empty object banayega , ye singelton object banayega

console.log(typeof obj1);

obj1.email = 'sury@ex.xom'
obj1.name = 'surya'      // dot notation se bhi elements add kar sakte hain
obj1.age = 20

// console.log(obj1);

// ab objects ke andar objects bhi ho sakte hain

const regularUser = {
      email: "surya@gmail.com",
      fullName: {      // nested object hai ye , objects ke andar objects
        userFullName: {           // nested object hai ye
            firstName: "Suryansh",
            lastName: "Rajput"

        }

      }
}

console.log(regularUser.fullName.userFullName.firstName);  // nested object ke elements access karne ke liye dot notation use karenge 

console.log(regularUser.fullName?. userFullName.firstName)  // isme ? use karke hum check kar sakte hain ki koi bhi element undefined toh nahi hai matlab ki agar fullName undefined hai toh error nahi aayega agar userFullName undefined hai toh bhi error nahi aayega


// ab hum object ke andar array bhi use kar sakte hain

const obj2 = {1:"a",2:"b"} // object hai ye , ab isme array bhi use kar sakte hain
const obj3 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}  
// const obj4 = Object.assign({},obj2,obj3)  // isse obj1 ke andar obj2 ke elements add ho jaayenge , isme {} lagte hain kyuki isme hum new object bana rahe hain

const obj4 = {...obj2,...obj3}  // isse bhi obj2 ke andar obj3 ke elements add ho jaayenge

// console.log(obj4); 

// ab hum array ke andar object bhi use kar sakte hain


const users1 = [
    {
        id:1,
        name:"surya"
    },
    {
        id:2,
        name:"suryansh"
    },
    {
        id:3,
        name:"rajput"
    }
]

users1[0].name // isse surya print hoga , jo ki array ke andar object ke elements access karne ke liye use kiya hai
console.log();

console.log(obj1);

console.log(Object.keys(obj1));  // isse object ke keys mil jaayenge in the form of array

console.log(Object.values(obj1));  // isse object ke values mil jaayenge in the form of array

console.log(Object.entries(obj1));  // isse object ke keys and values mil jaayenge in the form of array of arrays

console.log(obj1.hasOwnProperty("lund"));  // isse true aayega kyuki name property hai obj1 ke andar , ye check karta hai ki koi bhi property object ke andar hai ya nahi